<template>
  <div class="app-container">
    <div class="col-90">
      <el-card>
        <el-table :data="this.datos">
          <el-table-column
            align="center"
            prop="numero"
            label="Codigo"
            width="300"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="domi"
            label="Domicilio"
            width="400"
          ></el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="col-90">
      <el-card>
        <div class="row">
          <div class="col-25">
            <label>Codigo de punto de venta</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Numero" />
          </div>
          <div class="col-10"></div>
          <div class="col-15">
            <label>Domicilio</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Domi" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Localidad</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Localidad" />
          </div>
          <div class="col-10"></div>
          <div class="col-15">
            <label>Provincia</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Provincia"/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>N° Establecimiento</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Nroestac" />
          </div>
          <div class="col-5"></div>
          <div class="col-20">
            <label>N° Sede de timbrado</label>
          </div>
          <div class="col-25">
            <input type="text" v-model="formulario.Sede_timb" />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label>Fecha inicio de actividades</label>
          </div>
          <div class="col-25">
            <input type="date" v-model="formulario.Iniactivid" />
          </div>
        </div>
      </el-card>
      <div class="row" style="display:flex;justify-content:center">
          <el-button @click="enviar_datos()">Aceptar</el-button>
          <el-button>Cancelar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datos: "",
      formulario: {
        Numero: "",
        Domi: "",
        Localidad: "",
        Provincia: "",
        Nroestac: "",
        Sede_timb: "",
        Iniactivid: "",
      },
    };
  },
  methods: {
    enviar_datos() {
      axios
        .post("http://localhost:3000/establec/", this.formulario)
        .then((result) => {
        console.log(this.formulario);
          if (result.status === 201) {
            this.$alert("Usted agregó el comprobante con éxito.", "Compras", {
              confirmButtonText: "OK",
              callback: (action) => {
                this.$router.push({ path: "/compras/vercomprobantes" });
              },
            });
          }
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  created() {
    axios.get("http://localhost:3000/establec").then((result) => {
      this.datos = result.data;
      console.log("datos de facturas: ", this.datos);
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
.col-90 {
  float: left;
  width: 99%;
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
