<template>
  <div class="app-container">
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 30%; margin-top: -20px">Selección de Comprobantes</h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('tcventas')"
          style="position: absolute; top: 3%; right: 35px"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <el-card>
      <div style="margin-top: -15px">
        <div class="col-25">
          <el-input v-model="input1"> </el-input>
        </div>
        <div class="col-5"></div>
        <div class="col-70">
          <el-input v-model="input2"></el-input>
        </div>
      </div>
      <div style="margin-top: 6%">
        <el-card>
          <el-table
            class="app"
            @current-change="handleCurrentChange2"
            highlight-current-row
            border="1"
            align="center"
            :data="this.datos"
            style="width: 100%"
            max-width="100%"
          >
            <el-table-column
              align="center"
              prop="codigo"
              label="Codigo"
              width="65%"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="detalle"
              label="Detalle"
              width="400%"
            ></el-table-column>
            <el-table-column
              align="center"
              prop="letras"
              label="Letras"
              width="70%"
            ></el-table-column>
            <el-table-column align="center" width="auto">
              <template slot="header" slot-scope="scope">
                <el-input
                  style="height: 5px"
                  v-model="search"
                  @input="inputSearchChange"
                  size="mini"
                  placeholder="Buscar por nombre"
                />
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            class="pagination"
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
        </el-card>
        <div>
          <div class="col-15">
            <el-button style="margin: 10%; margin-left: 485%; border-color: #00cc00"
              >Seleccionar</el-button
            >
          </div>
          <div class="col-15">
            <el-button
              onMouseover="this.style.color='red'"
              style="margin: 10%; margin-left: 510%"
              type="primary"
              plain
              >Primary</el-button
            >

            <!-- <el-button
              type="primary"
              style="margin: 10%; margin-left: 510%"
              onMouseover="this.style.color='red'"
              >Cancelar</el-button
            > -->
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    const datos = [];
    const selected_row = {};

    return {
      input1: "",
      input2: "",
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
      input1 = this.DatosParaAcciones.codigo;
      input2 = this.DatosParaAcciones.detalle;
    },

    handleCurrentChange2(val) {
      this.currentRow = val;
      this.DatosParaAcciones = this.currentRow;
      this.input1 = this.DatosParaAcciones.codigo;
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
.pagination {
  margin-bottom: -15px;
  margin-top: 1%;
}
.app {
  font-size: 12px;
  padding: 0px;
}

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
