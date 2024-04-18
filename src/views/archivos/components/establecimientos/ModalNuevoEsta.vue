<template>
  <div class="app-container">
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 40%; margin-top: -12px">
          Nuevo establecimiento
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>

    <el-card>
      <el-form status-icon>
        <div class="row">
          <div class="col-75">
            <div class="row">
              <div class="col-50" style="margin-left: 12%">
                <label>Código de punto de venta</label>
              </div>
              <div class="col-15" style="margin-left: -8%">
                <input
                  disabled
                  v-model="formulario.numero"
                  type="text"
                  maxlength="6"
                />
                
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 12%">
                <label>Domicilio</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -3%">
                <input type="text" v-model="formulario.domi" maxlength="25" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 10%">
                <label>Localidad</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input
                  type="text"
                  v-model="formulario.localidad"
                  maxlength="10"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 10%">
                <label>Provincia</label>
              </div>
              <div class="col-25" style="width: 20%; margin-left: -1%">
                <input
                  type="text"
                  v-model="formulario.provincia"
                  maxlength="13"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-15"></div>
              <div class="col-35" style="margin-left: 6%">
                <label>N° Establecimiento</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -2%">
                <input
                  type="text"
                  v-model="formulario.nroestac"
                  maxlength="15"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-45" style="margin-left: 17%">
                <label>N° Sede de timbrado</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -8%">
                <input
                  v-model="formulario.sede_timb"
                  type="text"
                  maxlength="2"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-45" style="margin-left: 16%">
                <label>Fecha inicio de actividades</label>
              </div>
              <div class="col-25" style="width: 30%; margin-left: -7%">
                <el-input
                  id="input"
                  type="date"
                  v-model="formulario.iniactivid"
                >
                </el-input>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </el-card>
    <el-card
      ><div style="margin-left: 60%">
        <el-button
          class="button"
          size="medium"
          @click.native.prevent="EnviarNuevoForm()"
          >Aceptar</el-button
        >
        <el-button
          @click="log()"
          class="button"
          size="medium"
          >Cancelar</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      fecha :"",
      maximo: 0,
      DatosEstab: {},
      formulario: {
        numero: "",
        domi: "",
        localidad: "",
        provincia: "",
        nroestac: "",
        sede_timb: "",
        iniactivid: "",
      },
    };
  },

  methods: {
    log() {
      let fecha = this.formulario.iniactivid;
      let anio = fecha.substring(2 , 4);
      let mes = fecha.substring(5 , 7);
      let dia = fecha.substring(8 , 10);
      fecha = mes + '/' + dia + '/' + anio; 
      this.formulario.iniactivid = new Date (fecha)
    },
    ArmarFormatoNumEsta() {
      for (let codigo of this.DatosEstab) {
        let NumeroEstabNumber = parseInt(codigo.numero);
        if (NumeroEstabNumber > this.maximo) {
          this.maximo = NumeroEstabNumber;
        }
        this.maximo ++    
      }
      let NumeroEstaFinal = "0".repeat(5 - this.maximo.toString().length);
      NumeroEstaFinal = NumeroEstaFinal +  this.maximo.toString();
      this.formulario.numero  = NumeroEstaFinal
    },
    EnviarNuevoForm() {
      this.log();
      Axios.post("http://localhost:3000/establec/", this.formulario).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 201) {
            this.$alert("Usted creo un nuevo registro.", {
              confirmButtonText: "OK",
              callback: (action) => {
                location.reload()
              },
            });
            this.$modal.hide("ModalNuevoEsta");
          }
        }
      );
    },
  },
  created() {
    Axios.get("http://localhost:3000/establec/").then((result) => {
      this.DatosEstab = result.data;
      
      console.log("datos establecimientos", this.DatosEstab);
      this.ArmarFormatoNumEsta()
    });   
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
.col-30 {
  float: left;
  width: 29%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-35 {
  float: left;
  width: 34%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-40 {
  float: left;
  width: 39%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-45 {
  float: left;
  width: 44%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-50 {
  float: left;
  width: 49%;
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
