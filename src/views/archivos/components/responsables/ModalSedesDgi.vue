<template style="background-color : red">
  <div class="app-container" >
    <div class="row">
      <el-card>
        <el-select v-model="value" style="width: 80%; margin: 0 10% 0 10%">
          <div class="Scroll">
            <el-option
              v-for="item in optionsLugares"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </div>
        </el-select>
      </el-card>
      <div class="Scroll">
        <el-table
          ref="TablaSedes"
          :data="this.CapitalFederal"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column label="Codigo" align="left" prop="codigo">
          </el-table-column>
          <el-table-column label="Agencia" align="left" prop="agencia">
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="margin-top: 10px; float: right">
      <el-button @click="handleClick">Aceptar</el-button>
      <el-button>Cancelar</el-button>
    </div>
  </div>
</template>
<script>
import Axios from "axios";

const datos_clientes = [];
export default {
  props :["SedesDgi"],
  data() {
    return {
      CapitalFederal: [{
          abarca : "12",
          agencia: "13",
          provincia:"14",
          codigo :"15"
      }],
      optionsLugares: [
        {
          value: "Buenos Aires",
          label: "Buenos Aires",
        },
        {
          value: "Capital Federal",
          label: "Capital Federal",
        },
        {
          value: "Catamarca",
          label: "Catamarca",
        },
        {
          value: "Chaco",
          label: "Chaco",
        },
        {
          value: "Chubut",
          label: "Chubut",
        },
        {
          value: "Corrientes",
          label: "Corrientes",
        },
        {
          value: "Córdoba",
          label: "Córdoba",
        },
        {
          value: "Entre Ríos",
          label: "Entre Ríos",
        },
        {
          value: "Formosa",
          label: "Formosa",
        },
        {
          value: "Gran Buenos Aires",
          label: "Gran Buenos Aires",
        },
         {
          value: "Jujuy",
          label: "Jujuy",
        },
         {
          value: "La Pampa",
          label: "La Pampa",
        },
         {
          value: "La Rioja",
          label: "La Rioja",
        },
         {
          value: "Mendoza",
          label: "Mendoza",
        },
         {
          value: "Misiones",
          label: "Misiones",
        },
         {
          value: "Neuquén",
          label: "Neuquén",
        },
         {
          value: "Río Negro",
          label: "Río Negro",
        },
         {
          value: "Salta",
          label: "Salta",
        },
         {
          value: "San Juan",
          label: "San Juan",
        },
         {
          value: "San Luis",
          label: "San Luis",
        },
         {
          value: "Santa Cruz",
          label: "Santa Cruz",
        },
      ],
      SedesDgi :"" ,
      value: "",
      optionsSedes: {},
      Codigo: "",
      currentRow: null,
      todosLosDatos: "",
    };
  },
  methods: {
    SepararCapitalFederal() {
      console.log("value", this.value);
      this.$data.CapitalFederal = [{}];
      for (let i = 0; i < this.optionsSedes.length; i++) {
        if (this.optionsSedes[i].provincia === this.value) {
          let datos = this.optionsSedes[i];      
          this.$data.CapitalFederal.push({
            abarca: datos.abarca,
            agencia: datos.agencia,
            codigo: datos.codigo,
            provincia: datos.provincia,
          });
          this.Codigo = datos.codigo
          /* this.CapitalFederal.push([this.optionsSedes[i]]) */
        } else {
          console.log("No coincide");
        }
      }
    },
    handleClick() {
      console.log(this.Codigo);
      this.$store.state.a.CodigoTipoSedes = this.currentRow;
      this.$modal.hide("SedesDgi");
    },
    handleCurrentChange(val) {
      this.todosLosDatos = val;
      this.currentRow = val.codigo;
      console.log(this.currentRow);
    },
  },
  created() {
    Axios.get("http://localhost:3000/sedesdgi").then((result) => {
      this.optionsSedes = result.data;
      console.log(this.optionsSedes);
    });
  },
  watch: {
    value: function () {
      this.SepararCapitalFederal();
    },
  },
};
</script>
<style scoped>
.css3-shadow {
  position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
/*==================================================
 * Drop shadow effect with box-shadow
 * ===============================================*/
.css3-shadow:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
  bottom: 0px;
  left: 10%;
  right: 10%;
  width: 80%;
  height: 50%;
  -moz-border-radius: 100%;
  border-radius: 100%;
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
.Scroll {
  overflow-y: scroll;
  height: 200px;
}
.col-30 {
  float: left;
  width: 29%;
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
  width: 69%;
  margin-right: 1%;
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