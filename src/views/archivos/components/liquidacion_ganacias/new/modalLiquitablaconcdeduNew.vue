<template>
  <div class="app-container">
    <!-- Cabecera -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 50%; margin-top: -12px">Deduccion</h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalTablaconcdedu')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <el-card class="Scroll">
      <!-- Imputs  -->
      <div class="row">
        <div class="col-8">
          <input type="number" id="Input" placeholder="..." v-model="this.Formulario_crud.anio" style="width: 70%">
          </div>
        <div class="col-20">
          <label for="fname">Año fiscal:</label>
        </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.ganimp">
      </div>
      <div class="col-15">
        <label for="Fname">Art.79 Inc.a,b,d,e,f y 3er categoria: </label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.ganimpa">
      </div>
      <div class="col-15">
        <label for="Fname">Art.79 Inc.c,c*,1a y 2a categoria:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gdeduc">
      </div>
      <div class="col-15">
        <label for="fname">Art.79 (4ta categoria) inc.c*:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gdeduc1">
      </div>
      <div class="col-15">
        <label for="Fname">Art.79 (4ta categoria) inc.d,e,f:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gdeduc2">
      </div>
      <div class="col-15">
        <label for="Fname">Art.79 (4ta categoria) inc.a,b:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gdeduc3">
      </div>
      <div class="col-15">
        <label for="Fname">Art.79 (4ta categoria) inc.c:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gdeduc4">
      </div>
      <div class="col-15">
        <label for="Fname">Art.49 (3ta categoria):</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gseguro">
      </div>
      <div class="col-15">
        <label for="Fname">Gastos de sepelio:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gsepelio">
      </div>
      <div class="col-15">
        <label for="Fname">Primas de seguro:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.gplanes">
      </div>
      <div class="col-15">
        <label for="Fname">Planes de seguro de retiro:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-8">
        <input type="string" id="Input" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.pagoacta" style="width: 55%">
      </div>
      <div class="col-15">
        <label for="Fname">Aplicar jubilaciónes con pago a cuentas:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-8">
        <input  id="Input" step="0.01" placeholder="..." v-model="this.Formulario_crud.peraplic" style="width: 55%">
      </div>
      <div class="col-15">
        <label for="Fname">Aplicar a todo el año(A) o a un período(P):</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input id="Input" type="number" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.sganimp"> 
      </div>
      <div class="col-15">
        <label for="Fname">Límite de cómputo del pago a cuenta:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.sgdeduc">
      </div>
      <div class="col-15">
        <label for="Fname">Porcentaje límite para autónomos:</label>
      </div>
      </div>
      <div class="row">
      <div class="col-20">
        <input type="number" step="0.01" placeholder="..." v-model.number="this.Formulario_crud.sgdeduc1">
      </div>
      <div class="col-15">
        <label for="Fname">Porc.que no exceda el pago a cta:</label>
      </div>
      </div>
    </el-card>
    <!-- Botones  -->
    <div class="row">
      <div class="col-16">
        <el-button type="danger" @click="$modal.hide('ModalTablaconcdedu')">Cerrar</el-button>
      </div>
      <div class="col-25">
        <el-button type="primary" @click="Actualizacrud()">Aceptar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { toJSONSchema } from "mockjs";
export default {
  props: [""],
  data() {
    return {
      Formulario_crud:[{
        anio:2000,
        ganimp:"",
        ganimpa:"",
        gdeduc:"",
        gdeduc1:"",
        gdeduc2:"",
        gdeduc3:"",
        gdeduc4:"",
        gseguro:"",
        gsepelio:"",
        gplanes:"",
        pagoacta:"",
        peraplic:"",
        sganimp:"",
        sgdeduc:"",
        sgdeduc1:"",
      }]
    };
  },
  methods: {
    ActualizarCru() {
      let input =document.getElementsByTagName("Input")
      // console.log("inputs: ", input);
        this.Formulario_crud.anio= input[0].value
        this.Formulario_crud.ganimp= input[1].value
        this.Formulario_crud.ganimpa=input[2].value
        this.Formulario_crud.gdeduc=input[3].value
        this.Formulario_crud.gdeduc1=input[4].value
        this.Formulario_crud.gdeduc2=input[5].value
        this.Formulario_crud.gdeduc3=input[6].value
        this.Formulario_crud.gdeduc4=input[7].value
        this.Formulario_crud.gseguro=input[8].value
        this.Formulario_crud.gsepelio=input[9].value
        this.Formulario_crud.gplanes=input[10].value
        this.Formulario_crud.pagoacta=input[11].value
        this.Formulario_crud.peraplic=input[12].value
        this.Formulario_crud.sganimp=input[13].value
        this.Formulario_crud.sgdeduc=input[14].value
        this.Formulario_crud.sgdeduc1=input[15].value    
      Axios.post("http://localhost:3000/concdedu/", this.Formulario_crud).then((result) => {
        console.log("result" + JSON.stringify(result));
        if (result.status === 201) {
          this.$alert("Usted creo un registro con exito.", {
            confirmButtonText: "OK",
          });
          this.$modal.hide("ModalTablacoefactNew");
        }
      });
    },
  },
};
</script>
<style scoped>
.Scroll {
  height: 600px;
  overflow-y: auto;
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
  background-color: #ffffff;
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
  float: right;
  width: 14%;
  margin-right: 12%;
  margin-top: 6px;
}
.col-10 {
  float: left;
  width: 9%;
  margin-top: 6px;
  margin-right: 1%;
  margin-left: 15%;
}
.col-15 {
  float: left;
  margin-left: 20%;
  width: 45%;
  margin-top: 6px;
}
.col-16 {
  float: right;
  margin-left: 20%;
  margin-right: 10%;
  width: 25%;
  margin-top: 6px;
}
.col-20 {
  float: right;
  margin-right: 1%;
  width: 25%;
  margin-top: 6px;
}
.col-25 {
  float: left;
  width: 14%;
  margin-right: 1%;
  margin-left: 20%;
  margin-top: 6px;
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
  margin-top: 2%;
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