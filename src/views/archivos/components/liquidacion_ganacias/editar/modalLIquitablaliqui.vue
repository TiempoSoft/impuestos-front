<template>
  <div class="app-container">
    <!-- Cabecera  -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 40%; margin-top: -12px">
          Liquidacion del impuesto a las ganacias
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalTablaliqui')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <el-card>
      <div class="row">
        <div class="col-10">
          <label for="fname">Año fiscal:</label>
          <el-input
            type="string"
            placeholder="..."
            disabled
            v-model="Datos.anio"
          ></el-input>
        </div>
        <div class="col-30">
          <label for="Fname">Ganacias desde: </label>
          <el-input
            type="string"
            placeholder="..."
            v-model="Datos.de"
          ></el-input>
        </div>
        <div class="col-30">
          <label for="Fname">Hasta:</label>
          <el-input
            type="string"
            placeholder="..."
            v-model="Datos.hasta"
          ></el-input>
        </div>
      </div>
      <div class="col-">
        <label for="fname">Pagaran $</label>
        <el-input
          type="string"
          placeholder="..."
          v-model="Datos.importe"
        ></el-input>
      </div>
      <div class="col-">
        <label for="Fname">mas %</label>
        <el-input
          type="string"
          placeholder="..."
          v-model="Datos.tasa"
        ></el-input>
      </div>
      <div class="col-">
        <label for="Fname">Sobre el excedente de</label>
        <el-input
          type="string"
          placeholder="..."
          v-model="Datos.excedente"
        ></el-input>
      </div>
    </el-card>

    <div class="row">
      <div class="col-25">
        <el-button type="danger" @click="$modal.hide('ModalTablaliqui')"
          >Cerrar</el-button
        >
      </div>
      <div class="col-25">
        <el-button type="primary" @click="ActualizarAdb()">Aceptar</el-button>
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
      //"Modelo_crud " Es una array para que el back lo manipule de manera mas eficiente. 
      //Mantener formato en siguientes cruds que no tengan columnas de identificacion por items
      Datos: "",
      Modelo_crud: [
        {
          anio: this.Datos.anio,
          de: this.Datos.de,
          excedente: this.Datos.excedente,
          hasta: this.Datos.hasta,
          importe: this.Datos.importe,
          periodo: this.Datos.periodo,
          tasa: this.Datos.tasa,
        },
      ],
      Newcrud: {
        anio: 0,
        de: 0,
        excedente: 0,
        hasta: 0,
        importe: 0,
        periodo: 0,
        tasa: 0,
      },
    };
  },
  methods: {
    //Llena un objeto con los nuevos datos
    ActualizarAdb() {
      console.log("3: ", this.Modelo_crud);
      let input = document.getElementsByTagName("input");
      // console.log("Inputs: ", input);
      (this.Newcrud.anio = input[0].value),
        (this.Newcrud.de = input[1].value),
        (this.Newcrud.excedente = input[5].value),
        (this.Newcrud.hasta = input[2].value),
        (this.Newcrud.importe = input[3].value),
        (this.Newcrud.tasa = input[4].value);
      this.Modelo_crud.push(this.Newcrud); //-- Despues lo pushea a la array que se envia.
      // console.log("FOR ACTUALI: ", this.Modelo_crud);
      this.Ruts();
    },
    Ruts() {
      //Envia por ruta la array con
      // "this.Newcrud" (set los datos nuevos).
      // "Modelo_crud" (WHERE para editar el dato correcto)
      console.log("Inicio");
      Axios.put("http://localhost:3000/tablagan/", this.Modelo_crud).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 200) {
            this.$alert("Usted actualizo con exito.", {
              confirmButtonText: "OK",
            });
            console.log("Nooooo , lo que le puse....");
            this.$modal.hide("ModalTablaliqui");
            location.reload();
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
  padding: 12px px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #ffffff;
  padding: px;
}

/* Floating column for labels: % width */
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
  width: 15%;
  margin-top: 6px;
  margin-right: 2%;
}
.col-15 {
  float: right;
  margin-right: 1%;
  width: 32%;
  margin-top: 6px;
}
.col-20 {
  float: right;
  margin-right: 8%;
  width: 15%;
  margin-top: 6px;
}
.col-16 {
  float: right;
  margin-right: 0%;
  margin-left: 0%;
  width: 0%;
  margin-top: 5%;
}
.col-30 {
  float: left;
  width: 17;
  margin-right: 2%;
  margin-top: 6px;
}
.col-25 {
  float: right;
  width: 30%;
  margin-right: 0%;
  margin-left: 15%;
  margin-top: 1%;
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
  .col-,
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
  .col-,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>