<template>
  <div class="app-container">
    <!-- Cabecera  -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 40%; margin-top: -12px">Equivalencia</h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('Modaltablaequivale')"
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
          <div>
            <label for="">Fecha inicial:</label>
            <el-input
              disabled
              type="string"
              placeholder="..."
              v-model="Datos.fechain"
            ></el-input>
          </div>
        </div>
        <div class="row">
          <div>
            <label for=""> fecha final:</label>
            <el-input
              disabled
              type="string"
              placeholder="..."
              v-model="Datos.fechafin"
            ></el-input>
          </div>
        </div>
        <div class="row">
          <div>
            <label for="">Signo monetario:</label>
            <el-input
              disabled
              type="string"
              placeholder="..."
              v-model="Datos.signomon"
            ></el-input>
          </div>
        </div>
        <div class="row">
          <div>
            <label for=""> equivalencia a pesos:</label>
            <el-input
              type="string"
              maxlength="15"
              placeholder="..."
              v-model="Datos.equiapeso"
            ></el-input>
          </div>
        </div>
      </el-card>
    </div>
    <div class="row">
      <div class="col-16">
        <el-button type="danger" @click="$modal.hide('Modaltablaequivale')"
          >Cerrar</el-button
        >
      </div>
      <div class="col-25">
        <el-button type="primary" @click="Abrirmodal()">Aceptar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  props: ["Datos"],
  data() {
    return {
      Datos: "",
      Formulario_crud: {
        equiapeso: "",
        fechafin: "",
        fechain: "",
        signomon: "",
      },
    };
  },
  methods: {
    Abrirmodal() {
      console.log("DATOS", this.Datos);
      let Input = document.getElementsByTagName("input");
      console.log("for: ", this.Formulario_crud);
      console.log("INPUTS: ", Input);
      this.Formulario_crud.fechain = Input[0].value;
      this.Formulario_crud.fechafin = Input[1].value;
      this.Formulario_crud.signomon = Input[2].value;
      this.Formulario_crud.equiapeso = Input[3].value;
      console.log("for actalizado: ", this.Formulario_crud);
      Axios.put("http://localhost:3000/equivale/", this.Formulario_crud).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 200) {
            this.$alert("Usted actualizo con exito.", {
              confirmButtonText: "OK",
              callback: (action) => {
                location.reload();
                this.$modal.hide("Modaltablaequivale");
              },
            });
          }
        }
      );
    },
    // Las equivalencias contienen tantos decimales que javascript los reduce a un fomrato
    // poco intuitivo pero mas corto.
    // Esta funcion revierte eso, si funcionara obvio.
    Cambiarformato() {
      console.log("Run");
      let Newformato = this.Datos.equiapeso;
      console.log(Newformato);
      let Arraynew = Newformato.toFixed(13);
      Console.log("final: ", Arraynew);
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