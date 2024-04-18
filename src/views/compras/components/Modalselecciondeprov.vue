<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-70">
          <el-input v-model="input1"> </el-input>
        </div>
        <div class="col-5"></div>
        <div class="col-25">
          <el-input v-model="input2"></el-input>
        </div>
      </div>
      <div class="row" style="margin-top: 3%">
        <el-card>
          <el-table
            @current-change="handleCurrentChange2"
            highlight-current-row
            :data="this.datos_prov"
            style="width: 100%"
            align="center"
          >
            <el-table-column prop="razon" label="Proveedor" width="400">
            </el-table-column>
            <el-table-column prop="iva" label="Cuit" width="150">
            </el-table-column>
          </el-table>
        </el-card>
        <div class="row">
          <div class="col-5">
          </div>
          <div class="col-15">
            <el-button>Buscar</el-button>
          </div>
          <div class="col-15">
            <el-button>Nuevo</el-button>
          </div>
          <div class="col-25"></div>
          <div class="col-20">
            <el-button @click.native.prevent="CerrarModal()">Seleccionar</el-button>
          </div>
          <div class="col-15">
            <el-button>Cancelar</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DynamicTable",
  components: {},

  data() {
    return {
      datosCompletos: [],
      input1: "",
      input2: "",
      datos_prov: {},
      currentRow: null,
      DatosParaAcciones: {},
      FacturaPrimerasLetras: "",
      FacturaOtrasLetras: "",
    };
  },
  methods: {
    PushAInput() {
      let input1 = document.getElementById("Input1").value,
          input2 = document.getElementById("Input2").value;
          input1 = this.datos_prov.razon;
          input2 = this.datos_prov.iva;
    },
    handleCurrentChange2(val) {
      this.currentRow = val;
      console.log(val)
      this.DatosParaAcciones = this.currentRow;
      this.FacturaPrimerasLetras = this.DatosParaAcciones.razon
      this.FacturaOtrasLetras = this.DatosParaAcciones.iva
      this.input1 = this.DatosParaAcciones.razon;
      this.input2 = this.DatosParaAcciones.iva;     
      /* console.log(this.$parent.$parent.$refs.formulario.$el[0].value) */
      console.log(this.$parent.$parent.$refs.formulario.$el[7]);
      this.$parent.$parent.$refs.formulario.$el[10].value = this.FacturaPrimerasLetras;
      this.$parent.$parent.$refs.formulario.$el[11].value = this.FacturaOtrasLetras;
    },
    CerrarModal() {
      this.$modal.hide("Modalselecciondeprov");
    },
  },
  created() {
    axios.get("http://localhost:3000/prov").then((result) => {
      this.datos_prov = result.data;
      this.datosCompletos = result.data;
    });
  },
  /*   computed: {
    Paginas() {
      if (this.page != 1) {
        let page = this.page;
        let perPage = this.perPage;
        let from = page * perPage - perPage;
        let to = page * perPage;
        this.articulos = this.datos_Afiptipocomp.slice(from, to);
        return this.articulos;
      } else {
        if (this.page === 1) {
          let page = this.page;
          let perPage = this.perPage;
          let from = page * perPage - perPage;
          let to = page * perPage;
          this.articulos = this.datos_Afiptipocomp.slice(from, to);
          return this.articulos;
        }
      }
    },
    displayedArticles() {
      return paginate(this.datos_Afiptipocomp);
    },
  }, */
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
