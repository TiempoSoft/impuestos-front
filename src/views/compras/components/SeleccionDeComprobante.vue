<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-25">
          <el-input v-model="input1"> </el-input>
        </div>
        <div class="col-5"></div>
        <div class="col-70">
          <el-input v-model="input2"></el-input>
        </div>
      </div>
      <div class="row" style="margin-top: 3%">
        <el-card>
          <el-table
          @current-change="handleCurrentChangeSelectComp"
            border="5"
            align="center"
            :data="this.datos"
            style="width: 100%"
            max-height="1000px"
          >
            <el-table-column
              align="center"
              prop="codigo"
              label="Codigo"
              width="100"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="detalle"
              label="Detalle"
              width="350"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="letras"
              label="Letras"
              width="120"
            ></el-table-column>
            <el-table-column align="center" width="155">
              <template slot="header">
                <el-input
                  v-model="search"
                  @input="inputSearchChange"
                  size="mini"
                  placeholder="Buscar por nombre"
                />
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <div class="row">
          <div class="col-75">
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
          <div class="col-15">
            <el-button @click="SeleccionDeComprobanteAindex()">Seleccionar</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props : ["datosComprasIndex"],
  data() {
    const datos = [];
    const selected_row = {};

    return {
      input1 : "",
      input2 :"",
      currrentRow : null ,
      datosCompletos: [],
      articulos: [],
      page: 1,
      perPage: 4,
      datosLength: 5,
      search: "",
      selected_row,
      datos,
      tableData: [],
    };
  },
  methods: {
    SeleccionDeComprobanteAindex(){
      let PrimerasLetras = this.currrentRow.letras.substring(0 ,2);
      let SegundasLetras = this.currrentRow.letras.substring(2);
      this.datosComprasIndex.TC = PrimerasLetras;
      this.datosComprasIndex.CLASE = SegundasLetras;
      this.$modal.hide('SelecComp')
    },
    handleCurrentChangeSelectComp(val){
      this.currrentRow = val;
      this.input1 = val.codigo;
      this.input2 = val.detalle;
      console.log(val);
    },
    TotalOfPages() {
      let paginas = this.datos.length / this.perPage;
      var TotalPaginas = Math.round(paginas) + 1;
      return TotalPaginas;
    },
    inputSearchChange() {
      this.filtrarDatos();
      this.datosLength = this.datos.length;
      console.log("th", this.search);
      this.paginate();
    },
    filtrarDatos() {
      if (this.search.length > 0) {
        let datosFiltrados = this.datosCompletos.filter(
          (data) =>
            !this.search ||
            data.detalle.toLowerCase().includes(this.search.toLowerCase()) ||
            data.codigo.toString().toLowerCase().includes(this.search.toLowerCase())
        );
        this.datos = datosFiltrados;
      } else {
        this.datos = this.datosCompletos;
      }
    },
    paginate() {
      if (this.datosLength >= this.perPage) {
        let page = this.page;
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        this.datos = this.datos.slice(from, to);
      } else {
        this.page = 1;
      }
    },
    handleCurrentChange(val) {
      this.page = `${val}`;
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      this.datos = this.datosCompletos.slice(from, to);
    },
    PushAInput() {
      let input1 = document.getElementById("Input1").value,
        input2 = document.getElementById("Input2").value;
      input1 = this.DatosParaAcciones.clave;
      input2 = this.DatosParaAcciones.detalle;
    },

    handleCurrentChange2(val) {
      this.currentRow = val;
      this.DatosParaAcciones = this.currentRow;
      this.input1 = this.DatosParaAcciones.clave;
      this.input2 = this.DatosParaAcciones.detalle;
    },
  },
  created() {
    axios.get("http://localhost:3000/Afiptipocomp").then((result) => {
      this.datos = result.data;
      this.datosCompletos = result.data;
      this.datosLength = this.datos.length;
      this.paginate();
      console.log("datos de facturas: ", this.datos);
    });
  },
  computed: {
    Paginas() {
      if (this.page != 1) {
        let page = this.page;
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        this.articulos = this.datos.slice(from, to);
        return this.articulos;
      } else {
        if (this.page === 1) {
          let page = this.page;
          let perPage = this.perPage;
          let from = page * perPage - perPage;
          let to = page * perPage;
          this.articulos = this.datos.slice(from, to);
          return this.articulos;
        }
      }
    },
    displayedArticles() {
      return paginate(this.datos);
    },
  },
};
</script>
<style scoped>
/* Style inputs, select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 6px 6px 6px 0;
  display: inline-block;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-2 {
  float: left;
  width: 1%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-5 {
  float: left;
  width: 4%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-8 {
  float: left;
  width: 6%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-10 {
  float: left;
  width: 9%;
  margin-top: 6px;
  margin-right: 1%;
}
.col-15 {
  float: left;
  margin-right: 1%;
  width: 14%;
  margin-top: 6px;
}
.col-20 {
  float: left;
  margin-right: 1%;
  width: 19%;
  margin-top: 6px;
}
.col-25 {
  float: left;
  width: 24%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-40 {
  float: left;
  width: 39%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-50 {
  float: left;
  width: 49%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-70 {
  float: left;
  width: 70%;
  margin-top: 6px;
}
/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
@media screen and (min-width: 601px) and (max-width: 1330px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
