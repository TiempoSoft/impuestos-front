<template>
  <div class="app-container">
    <el-card>
      <div>
        <upload-excel-component
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
        />
        <h4 style="margin-bottom: 15px">Comprobantes</h4>

        <el-table
          class="tabla"
          @current-change="handleCurrentChangeTable"
          :data="this.$store.state.f.ResultadoExcel"
          border
          highlight-current-row
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="fecha" label="Fecha" width="100" />
          <el-table-column prop="    " label="Tipo y Nro Comp." width="100" />
          <el-table-column prop="total" label="Imp.Total" width="100" />
          <el-table-column prop="neto" label="Imp.Neto" width="100" />
          <el-table-column prop="iva" label="Imp.Iva" width="100" />
          <el-table-column prop="porcentajeIva" label="% Iva" width="100" />
          <el-table-column prop="diferencia" label="Diferencia" width="100" />
          <el-table-column prop="nograv" label="Imp.No Grav." width="100" />
          <el-table-column prop="exentos" label="Imp.Exentos" width="100" />
          <el-table-column
            prop="impuestosNacionales"
            label="Impuestos Nac."
            width="100"
          />
          <el-table-column
            prop="impuestosMunicipales"
            label="Impuestos Munic."
            width="100"
          />
          <el-table-column
            prop="impuestosInternacionales"
            label="Impuestos Inter."
            width="100"
          />
          <el-table-column
            prop="otrosImpuestos"
            label="Otros Impuestos"
            width="100"
          />
          <el-table-column
            prop="ivaPercepcion"
            label="Iva Percepción"
            width="100"
          />
          <el-table-column
            prop="iibbPercepcion"
            label="IIBB Percepción"
            width="100"
          />
          <el-table-column
            prop="comercioExterior"
            label="Comercio Exterior"
            width="100"
          />
          <el-table-column prop="sircreb" label="Sircreb" width="100" />
          <el-table-column
            prop="noCategorizados"
            label="No Categorizados"
            width="100"
          />
          <el-table-column prop="cae" label="Cae" width="100" />
          <el-table-column prop="valido" label="Valido" width="100" />
          <el-table-column prop="error" label="Error" width="500" />
        </el-table>
        <el-pagination
          align="right"
          background
          layout="prev, pager, next"
          :page-size="perPage"
          :total="datosLength"
          :current-page.sync="page"
          @current-change="handleCurrentChange"
          @prev-click="page--"
          @next-click="page++"
        ></el-pagination>
      </div>
      <br />

      <div style="display: none" id="tablaClientePrincipal">
        <h4 style="margin-bottom: 15px">Clientes</h4>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tipo doc</th>
                <th scope="col">Numero</th>
                <th scope="col">Razon social</th>
                <th scope="col">Dirección</th>
                <th scope="col">Localidad</th>
                <th scope="col">Provincia</th>
                <th scope="col" class="th">Cod. postal</th>
                <th scope="col">Condición</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="th" scope="row">{{ this.currentRow.tipoDoc }}</th>
                <td>{{ this.currentRow.nc }}</td>
                <td>{{ this.currentRow.razonSocial }}</td>
                <td>{{ this.currentRow.direccion }}</td>
                <td>{{ this.currentRow.localidad }}</td>
                <td>{{ this.currentRow.provincia }}</td>
                <td>{{ this.currentRow.condicion }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br /><br />
        <div align="center" class="drop" style="width: 80%; margin-left: 8%">
          IMPORTANTE: Primero debe corregir los errores encontrados en el
          comprobante, luego procesarlos y finalmente elegir las actividades de
          Afip e IIBB
        </div>
        <br />
        <br />
        <br />
        <br />
        <div align="center" class="drop" style="width: 80%; margin-left: 1%">
          Seleccione la cta deudores:
          <el-input
            class="drop"
            v-model="this.$store.state.f.codigo"
            style="width: 10%"
          ></el-input>
          <el-input
            class="drop"
            v-model="this.$store.state.f.descrip"
            style="width: 25%; margin-left: 1%"
          ></el-input>
          <el-button
            size="mini"
            icon="el-icon-setting"
            style="margin-left: 1%"
            @click="abrirModalCuentaDeudores()"
          ></el-button>
          <el-button
            @click="enviar_datos()"
            size="mini"
            type="primary"
            icon="el-icon-caret-right"
            style="margin-left: 1%"
            >Procesar</el-button
          >
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-date"
            @click="abrirModalExcelDetalle()"
            >Detalle</el-button
          >

          <el-button size="mini" type="primary" icon="el-icon-date"
            >Afip/IBB</el-button
          >
        </div>
      </div>
    </el-card>
    <modal
      name="ExcelDetalle"
      :scrollable="true"
      :reset="true"
      width="60%"
      height="auto"
      draggable=".app-container"
      @before-close="verExcel()"
    >
      <ExcelDetalle :Comprobante="this.currentRow" />
    </modal>
    <modal
      name="CuentaDeudores"
      :scrollable="true"
      :reset="true"
      width="60%"
      height="auto"
      draggable=".app-container"
    >
      <CuentaDeudores :CuentaDeudores="this.options" />
    </modal>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
import ExcelDetalle from "./components/ExcelDetalle";
import FormatoDeImpresionLibroIva from "../compras/components/FormatoDeImpresionLibroIva";
import CuentaDeudores from "./components/CuentaDeudores";
import axios from "axios";

export default {
  name: "UploadExcel",
  components: {
    UploadExcelComponent,
    ExcelDetalle,
    FormatoDeImpresionLibroIva,
    CuentaDeudores,
  },
  data() {
    return {
      codigo: "",
      descrip: "",

      comprobantes: this.$store.state.f.ResultadoExcel,
      cuentaDeudor: this.$store.state.f.codigo,

      tablaCliente: [
        {
          tipoDoc: "",
          numeroDoc: "",
          direccion: "",
          localidad: "",
          provincia: "",
          codigoPostal: "",
          condicion: "",
        },
      ],
      currentRow: {},
      DatosExcelRespuestasApi: {},
      tableData: [],
      tableHeader: [],
      page: 1,
      datosLength: 5,
      perPage: 4,
    };
  },
  methods: {
    enviar_datos() {
      console.log("Datos enviados", {
        comprobantes: this.$store.state.f.ResultadoExcel,
        cuentaDeudor: this.$store.state.f.codigo,
      });
      axios
        .post("http://localhost:3000/ivatemp/procesar-comprobantes/", {
          comprobantes: this.$store.state.f.ResultadoExcel,
          cuentaDeudor: this.$store.state.f.codigo,
        })
        .then((result) => {
          console.log("resultado", result.data.message);
          if (result.status === 200) {
            this.$alert(result.data.message, "Error", {
              confirmButtonText: "OK",
              callback: (action) => {
                // this.$modal.hide("PagosFactura");
              },
            });
          }
        })
        .catch((result) => {
          console.log("que error es", result);
        });
    },

    abrirModalCuentaDeudores() {
      this.$modal.show("CuentaDeudores");
      console.log("store2", this.DatosExcelRespuestasApi);
    },
    verTabla() {
      console.log(this.currentRow);
    },
    handleCurrentChangeTable(val) {
      this.currentRow = val;
      let div = document.getElementById("tablaClientePrincipal");
      div.style.display = "block";
      tablaClientePrincipal;
      console.log(this.currentRow);
    },
    TotalOfPages() {
      let paginas = this.datos.length / this.perPage;
      var TotalPaginas = (Math.round(paginas) + 1) * 10;
      return TotalPaginas;
    },
    handleCurrentChange(val) {
      this.page = `${val}`;
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      this.datos = this.DatosExcelRespuestasApi.slice(from, to);
    },
    paginate() {
      if (this.datosLength >= this.perPage) {
        let page = this.page;
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        this.DatosExcelRespuestasApi = this.DatosExcelRespuestasApi.slice(
          from,
          to
        );
      } else {
        this.page = 1;
      }
    },
    abrirModalExcelDetalle() {
      this.$modal.show("ExcelDetalle");
      console.log("store2", this.DatosExcelRespuestasApi);
    },
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;

      if (isLt1M) {
        return true;
      }

      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      this.tableData = results;
      this.tableHeader = header;
      // this.excelData.data = datos;
      console.log("verdatosheader", header);
      console.log("verdatosresults", results);
    },
  },
  computed: {
    verExcel() {
      this.codigo = this.$store.state.f.codigo;
      this.descrip = this.$store.state.f.descrip;
    },
  },
  // created: {

  // },
};
</script>
<style scoped>
.tabla {
  font-size: 12px;
}
.tablaCiente {
  overflow-x: auto;
  width: 1300px;
  height: 7vw;
  margin: auto;
}
.label {
  text-decoration: line-through;
  margin: 0px 10px 0 0px;
  padding: 0px 20px 0 35px;
  font-size: 0.9vw;
  text-decoration: #ccc;
}
.labelValor {
  width: 100%;
  color: #726c6b;
  display: block;
  padding: 20px 20px 0 35px;
  font-size: 0.9vw;
}
.tabla {
  font-size: 12px;
}
.row {
  width: 100%;

  height: 20px;
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