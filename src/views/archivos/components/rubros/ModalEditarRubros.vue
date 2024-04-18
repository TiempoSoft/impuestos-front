<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-10">
          <label>Codigo</label>
        </div>
        <div class="col-15">
          <input v-model.number="datos.codigo" type="text" />
        </div>
        <div class="col-10"></div>
        <div class="col-15">
          <label>Descripción</label>
        </div>
        <div class="col-50">
          <input v-model="datos.descrip" maxlength="24" type="text" />
        </div>
      </div>
      <div class="row" style="height: 20px"></div>
      <div class="row">
        <div class="col-10"></div>
        <div class="col-15">
          <el-button @click="AbrirModalNuevaCuenta" style="width: 7vw"
            >Ventas</el-button
          >
        </div>
        <div class="col-10"></div>
        <div class="col-25">
          <input type="text" @click="Cuentas()" v-model.number="datos.cuenta"/>
        </div>
        <div class="col-5"></div>
        <div class="col-25">
          <input type="text" v-model="descripVenta"/>
        </div>
      </div>
      <div class="row">
        <div class="col-10"></div>
        <div class="col-15">
          <el-button style="width: 7vw" @click="AbrirModalCompraCuenta">Compras</el-button>
        </div>
        <div class="col-10"></div>
        <div class="col-25">
          <input type="text" @click="Cuentas()" v-model.number="datos.cuenta2"/>
        </div>
        <div class="col-5"></div>
        <div class="col-25">
          <input type="text" v-model="descripCompra"/>
        </div>
      </div>
    </el-card>
    <el-card>
      <div style="display: flex; justify-content: center" class="row">
        <el-button @click="ActualizarAdb()">Aceptar</el-button>
        <div></div>
        <el-button @click="Codigo()">Cancelar</el-button>
      </div>
    </el-card>
    <modal
      name="CuentaNueva"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      draggable=".app-container"
    >
      <CuentaVentaEditar :datos="this.datos"/>
    </modal>
     <modal
      name="CuentaNuevaCompra"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      draggable=".app-container"
    >
      <CuentaCompraEditar :datos="this.datos"/>
    </modal>
  </div>
</template>
<script>

import Axios from "axios";
import CuentaVentaEditar from "./components/SelecCuentaVentaNuevoEditar";
import CuentaCompraEditar from "./components/SelecCuentaCompraNuevoEditar";
export default {
  components: { CuentaVentaEditar , CuentaCompraEditar},
  props : ["datos"],
  data() {
    return {
      datos :{},
      datosDeRubros :{},
      descripVenta :"",
      descripCompra:""
    };
  },
  methods: {
    StoreDatosCuentas(){
      this.$store.state.c.CodigoCuentaRubroVenta = this.datos.cuenta
    },  
    Codigo(){
      console.log(this.$store.state.c.CodigoCuentaRubroVenta);
    },
    AbrirModalNuevaCuenta() {
      this.$store.state.d.CodigoCuentaRubroVenta = this.datos.cuenta
      this.$store.state.d.CodigoCuentaRubroCompra = this.datos.cuenta2
      this.$modal.show("CuentaNueva");
    },
     AbrirModalCompraCuenta() {
      this.$modal.show("CuentaNuevaCompra");
    },
    ActualizarAdb() {
       Axios.put("http://localhost:3000/rubros/" ,this.datos)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 200) {
              this.$alert("Usted edito un registro con exito.", {
                confirmButtonText: "OK",
              });
              
              this.$modal.hide('ModalEditarRubro')
              location.reload()
            }
          }) 
    },
  },
  beforeUpdate() {
    this.StoreDatosCuentas;
  },
  created(){
      Axios.get("http://localhost:3000/rubros").then((result) => {
      this.datosDeRubros = result.data;
      console.log("datos", this.datosDeRubros);
    });
  },
  computed:{
    Cuentas (){
        console.log(this.$store.state.d.DescripCuentaRubroVenta);
        this.descripVenta = this.$store.state.d.DescripCuentaRubroVenta
        this.descripCompra = this.$store.state.d.DescripCuentaRubroCompra
    }
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
