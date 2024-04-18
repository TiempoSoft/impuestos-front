<template>
  <div class="app-container">
    <!-- Cabecera  -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModaltablaredudeduNew')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <div class="row">
        <el-card>
          <div class="row">
          <div class="col-12">
            <label for="">Año Fiscal:</label> 
            </div><div class="col-11">
           <el-input type="string" placeholder="..." v-model="Formulario_crud[0].Año_Fiscal"></el-input>
          </div>
        </div>
        <div class="row">
        <div class="col-20">
          <label for=""> Ganancia desde:</label>
          </div><div class="col-30">
          <el-input type="string" placeholder="..." v-model="Formulario_crud[0].Ganancia_desde"></el-input> 
        </div>
          <div class="col-40">
            <label for="">Hasta:</label></div>
            <div class="col-50">
            <el-input type="string" placeholder="..." v-model="Formulario_crud[0].Hasta"></el-input>
          </div>
        </div>
        <div class="row">
          <div class="col-10">
            <label for=""> Reduccion sobre el importe total de deducciones personales:</label>
          </div><div class="col-8">
            <el-input type="string" placeholder="..." v-model="Formulario_crud[0].Reduccion"></el-input>
          </div>
        </div>
        </el-card>
      </div>
    <div class="row">
      <div class="col-25">
        <el-button type="primary" @click="Abrirmodal()">Aceptar</el-button>
      </div>
      <div class="col-15"></div>
      <div class="col-15">
        <el-button type="danger" @click="$modal.hide('ModaltablaredudeduNew')">Cerrar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  props:[""],
  data() {
    return { 
      Formulario_crud:[{
      Año_Fiscal:20,
      Ganancia_desde:0.00,
      Hasta:0.00,
      Reduccion:0.00,
      }]
    };
  },
  methods: {
    Actuaizarcrud() {
      let Input = document.getElementsByTagName("Input");
      console.log("Inputs: ", Input);
      this.formalario_crud.Año_Fiscal = Input[1].value;
      this.formalario_crud.Ganancia_desde = Input[2].value;
      this.formalario_crud.Hasta = Input[3].value;
      this.formulario_crud.Reduccion = Input[4].value;
      console.log("Formulario 1: ", this.formalario_crud);
      Axios.post("http://localhost:3000/redudedu/", this.formalario_crud).then(
        (result) => {
          console.log("Result: ", JSON.stringify(result));
          if (result.status === 201) {
            this.$alert("Usted actualizo con exito.", {
              confirmButtonText: "Ok",
            });
            $modal.hide('Modaltablaredudedu')
          }
        }
      );
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
  width: 33%;
  margin-right: 0%;
  margin-top: 6px;
}
.col-10 {
  float: left;
  width: 62%;
  margin-top: 10px;
  margin-right: 0%;
}
.col-11 {
  float: left;
  margin-right: 29%;
  width: 19%;
  margin-top: 2px;
}
.col-12 {
  float: left;
  width: 19%;
  margin-right: 0%;
  margin-top: 6px;
}
.col-15 {
  float: right;
  margin-right: 1%;
  width: 30%;
  margin-top: 6px;
}
.col-16 {
  float: right;
  margin-right: 1%;
  width: 30%;
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
  margin-left: 17%;
  margin-top: 6px;
}
.col-30 {
  float: left;
  width: 25%;
  margin-right: 0%;
  margin-top: 11px;
}
.col-40 {
   float: left;
  margin-right: 6%;
  width: 10%;
  margin-left: 7%;
  margin-top: 14px;
}
.col-50 {
  float: left;
  width: 25%;
  margin-right: 1%;
  margin-top: 11px;
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