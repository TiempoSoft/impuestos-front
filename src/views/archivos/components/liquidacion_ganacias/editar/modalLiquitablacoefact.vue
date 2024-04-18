<template>
 <!-- 2da tabla.... -->
  <div class="app-container">
    <!-- Cabecera  -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalTablacoefact')"
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
          <div class="col-">
            <label for="fname">Fecha</label>
          </div>
          <div class="col-">
            <el-input  disabled  maxlength="10"  placeholder="" v-model="this.Año"></el-input>
          </div>
          <div class="col-">
            <label for="Fname">Coeficiente</label>
          </div>
          <div class="col-25">
            <el-input type="string" placeholder="..." v-model="Datos.calc"></el-input>
          </div>
        </div>
      </el-card>
    </div>
    <div class="row">
      <div class="col-16">
        <el-button type="danger" @click="$modal.hide('ModalTablacoefact')">Cerrar</el-button>
      </div>
      <div class="col-26">
        <el-button type="primary" @click="ActualizarAdb()" >Aceptar</el-button>
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
      Formulario_crud:{
        calc:"",
        dia:"",
      },
      Año:"",
    };
  },
  methods: {
    AxiosGet(){
      Axios.get("http://localhost:3000/coefact/").then((result) => {
      this.datos_coefact = result.data;
      console.log("datos_coefact", this.datos_coefact);
    });

    },
    AxiosUpdate(){
      Axios.put("http://localhost:3000/coefact/" ,this.Formulario_crud).then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 200) {
              this.$alert("Usted actualizo con exito.", {
                confirmButtonText: "OK",
              });
              this.$modal.hide('ModalTablacoefact');
              location.reload();
            }
          })

    },
    ActualizarAdb() {
      //Arma formualrio, ejecuta Axis.
      let input= document.getElementsByTagName('input')
      this.Formulario_crud.calc= input[1].value,
      this.Formulario_crud.dia="{^"+input[0].value+"}";
      this.AxiosUpdate();
    },
    ArmarFecha(){
       //Arma la fecha que va en input.
      //  console.log("Datos Prop; ",this.Datos)
      let cadena =this.Datos.dia;
      //  console.log(cadena);
       let year = cadena.substr(0,10);
      //  console.log(year);
         this.Año = year;
       console.log( "año ", year)
       
    },
},
created(){
this.ArmarFecha();
this.AxiosGet();
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
  width: 15%;
  margin-top: 3px;
}
.col-16 {
  float: right;
  margin-left: 11.5%;
  margin-right: 10%;
  width: 25%;
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
  width: 45%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-26{
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
  margin-left: 15%;
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