<template>
  <div>
    <input
      ref="excel-upload-input"
      class="excel-upload-input"
      type="file"
      accept=".xlsx, .xls"
      @change="handleClick"
    />
    <div
      class="drop"
      @drop="handleDrop"
      @dragover="handleDragover"
      @dragenter="handleDragover"
    >
      Seleccione el archivo a importar xlsx
      <el-button
        :loading="loading"
        style="margin-left: 16px"
        size="mini"
        type="primary"
        icon="el-icon-search"
        @click="handleUpload"
      >
        Buscar
      </el-button>
      <br />
      <br />
    </div>
    <div
      align="center"
      class="drop"
      style="color: #f10e0e; width: 80%; margin-left: 8%"
    >
      ATENCIÓN: En algunos comprobantes pueden existir errores de redondeo en
      los importes que vienen en el archivo original de la página de
      AFIP.Corrijalos en el archivo y luego intente volver a importarlos.
    </div>
  </div>
</template>

<script>
import axios from "axios";
import XLSX from "xlsx";
// import upload-excel from "@/views/excel/upload-excel";

export default {
  
  props: {
    verExcel: Function,
    beforeUpload: Function, // eslint-disable-line
    onSuccess: Function, // eslint-disable-line
  },
  data() {
    return {
      loading: false,
      excelData: {
        header: null,
        results: null,
      },
    };
  },
  methods: {
    generateData({ header, results }) {
      this.excelData.header = header;
      this.excelData.results = results;
      this.onSuccess && this.onSuccess(this.excelData);
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();
      if (this.loading) return;
      const files = e.dataTransfer.files;
      if (files.length !== 1) {
        this.$message.error("¡Solo admite la carga de un archivo!");
        return;
      }
      const rawFile = files[0]; // only use files[0]

      if (!this.isExcel(rawFile)) {
        this.$message.error(
          "Solo admite la carga de archivos de sufijo .xlsx, .xls, .csv"
        );
        return false;
      }
      this.upload(rawFile);
      e.stopPropagation();
      e.preventDefault();
    },
    handleDragover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
    },
    handleUpload() {
      this.$refs["excel-upload-input"].click();
    },
    handleClick(e) {
      const files = e.target.files;
      const rawFile = files[0]; // only use files[0]
      if (!rawFile) return;
      // console.log("Raw file: ", rawFile);
      this.upload(rawFile);
      // console.log("DatosExcel", this.excelData);
    },
    upload(rawFile) {
      this.$refs["excel-upload-input"].value = null; // fix can't select the same excel

      this.readerData(rawFile).then((res) => {
        axios
          .post(
            "http://localhost:3000/ivatemp/importar-comprobante",
            this.excelData
          )
          .then((result) => {
            this.$store.state.f.ResultadoExcel = result.data;

            console.log("Respuesta de la api ", result.data);
          });
      });
      //   if (!this.beforeUpload) {
      //     console.log('Before check');
      //     this.readerData(rawFile);
      //     return;
      //   }
      //   const before = this.beforeUpload(rawFile);
      //   if (before) {
      //       console.log('Before');
      //     this.readerData(rawFile);
      //   }
    },
    readerData(rawFile) {
      this.loading = true;
      // console.log("Loading");
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const header = this.getHeaderRow(worksheet);
          const results = this.sheetToArray(worksheet);
          //const results = XLSX.utils.sheet_to_json(worksheet, {header: 1});
          // console.log("Generating");
          this.generateData({ header, results });
          this.loading = false;
          resolve();
        };
        reader.readAsArrayBuffer(rawFile);
      });
    },
    getHeaderRow(sheet) {
      const headers = [];
      const range = XLSX.utils.decode_range(sheet["!ref"]);
      let C;
      const R = 1; //Starting row
      /* start in the first row */
      for (C = range.s.c; C <= range.e.c; ++C) {
        /* walk every column in the range */
        const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })];
        /* find the cell in the first row */
        let hdr = "UNKNOWN " + C; // <-- replace with your desired default
        if (cell && cell.t) hdr = XLSX.utils.format_cell(cell);
        headers.push(hdr);
      }
      return headers;
    },
    sheetToArray(sheet) {
      var result = [];
      var row;
      var rowNum;
      var colNum;
      var lastRow = this.getLastRowNumber(sheet);
      var lastColumn = this.getLastColumnNumber(sheet);
      const isNotUndefined = (value) => value !== undefined;

      for (rowNum = 2; rowNum <= lastRow; rowNum++) {
        row = [];
        for (colNum = 0; colNum <= lastColumn; colNum++) {
          var nextCell =
            sheet[XLSX.utils.encode_cell({ r: rowNum, c: colNum })];
          if (typeof nextCell === "undefined") {
            row.push(void 0);
          } else row.push(nextCell.w);
        }

        if (row.some(isNotUndefined)) {
          result.push(row);
        }
      }
      return result;
    },
    //Retorna el total de filas de una worksheet de SheetJS
    getLastRowNumber(sheet) {
      //reference: https://github.com/SheetJS/sheetjs/issues/272
      var range = XLSX.utils.decode_range(sheet["!ref"]);
      var lastRow = range.e.r - range.s.r + 1;

      return lastRow;
    },
    //Retorna el total de columnas de una worksheet de SheetJS
    getLastColumnNumber(sheet) {
      //reference: https://github.com/SheetJS/sheetjs/issues/272
      var range = XLSX.utils.decode_range(sheet["!ref"]);
      var lastColumn = range.e.c - range.s.c + 1;

      return lastColumn;
    },
    isExcel(file) {
      return /\.(xlsx|xls|csv)$/.test(file.name);
    },
  },
};
</script>

<style scoped>
.excel-upload-input {
  display: none;
  z-index: -9999;
}
.drop {
  /* border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto; */
  font-size: 15px;
  /* border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative; */
}
</style>
