<template>
  <div class="app-container">
    <el-card style="height: 30px">
      <div style="margin-top: -2%" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3
          style="
            margin-top: -2%;
            font-size: 1vw;
            text-align: center;
            font-weight: bold;
          "
        >
          Nuevo cliente
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="this.$modal.hide('ModalEditarCliente')"
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
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 12%">
                <label>Código</label>
              </div>
              <div class="col-25" style="width: 15%; margin-left: -3%">
                <input
                  type="text"
                  maxlength="4"
                  disabled
                  v-model.number="formulario.cnumero"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 12%">
                <label>Nombre</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -3%">
                <input type="text" v-model="formulario.cnombre" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Dirección</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input type="text" v-model="formulario.cdirec" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Localidad</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input type="text" v-model="formulario.clocal" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Provincia</label>
              </div>
              <div class="col-25" style="width: 20%; margin-left: -1%">
                <input type="text" maxlength="13" v-model="formulario.cprovin" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-20" style="margin-left: 6%">
                <label>Posición IVA</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -2%">
                <input type="text" v-model="formulario.tipoiva" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 17%">
                <label>C.P</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -8%">
                <input
                  type="text"
                  maxlength="4"
                  v-model.number="formulario.ccp"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 16%">
                <label>CUIT</label>
              </div>
              <div class="col-25" style="width: 30%; margin-left: -7%">
                <input
                  @input="formatCuit"
                  maxlength="14"
                  type="text"
                  v-model="formulario.cuit"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-30" style="margin-left: -2%">
                <label>N° Ingresos Brutos</label>
              </div>
              <div class="col-25" style="width: 35%; margin-left: -4%">
                <input type="text" maxlength="17" v-model="formulario.ingbrut" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>Cód.docum.DGI</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -4%">
                <input type="text" maxlength="2" v-model="formulario.docdgi" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>Tipo Doc</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -4%">
                <input type="text" maxlength="1" v-model.number="formulario.tipodoc" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-30" style="margin-left: -2%">
                <label>Cuenta deudores</label>
              </div>
              <div class="col-25" style=" margin-left: -4%">
                <input type="text" v-model.number="formulario.imputacion"/>
              </div>
              <div class="col-25" style=" margin-left: -4%">
                <input type="text" maxlength="1" v-model="descrip"/>
              </div>
               <div class="col-5" >
              <el-button style="height : 15px" @click="AbrirModal()"
                ><i class="fas fa-wrench" style="line-height : 0"></i>
              </el-button>
            </div>
            </div>
          </div>
        </div>
      </el-form>
    </el-card>
    <el-card
      ><div style="margin-left: 60%">
        <el-button class="button" size="medium" @click.native.prevent="datos()"
          >Aceptar</el-button
        >
        <el-button
          class="button"
          size="medium"
          @click="$modal.hide('ModalEditarProveedor')"
          >Cancelar</el-button
        >
      </div>
    </el-card>
    <modal
      name="CuentaDeudores"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
      @opened="CodigoParaCrearNuevoCliente"
      @before-close="CloseModal()"
    >
      <CuentaDeudores :formulario="this.formulario"/>
    </modal>
  </div>
</template>

<script>
import Axios from "axios";
import CuentaDeudores from "./components/CuentaDeudores";
export default {
  components: {
    CuentaDeudores,
  },
  data() {
    return {
      descrip :"",
      codigo: [],
      DatosAModificarClientes: {},
      formulario: {
        cnumero: "",
        cnombre: "",
        cdirec: "",
        clocal: "",
        cprovin: "",
        ccp: "",
        condpa: 0,
        cuit: "",
        ingbrut: "",
        inscripib: "",
        tipoiva: "",
        tipodoc: "",
        docdgi: "",
        imputacion: "",
      },
    };
  },

  methods: {
    AbrirModal() {
      this.$modal.show("CuentaDeudores");
    },
    CodigoParaCrearNuevoCliente() {
      var maximo = 0;
      for (let i = 0; i < this.DatosAModificarClientes.length; i++) {
        let x = this.DatosAModificarClientes[i].cnumero;
        this.codigo.push(x);
        for (let i = 0; i < this.DatosAModificarClientes.length; i++) {
          if (maximo < this.codigo[i]) {
            maximo = this.codigo[i];
          }
        }
      }
      this.formulario.cnumero = maximo + 1;
      return this.formulario.cnumero 
    },
    datos() {
      this.ActualizarAdb();
    },

    ActualizarAdb() {
      Axios.post("http://localhost:3000/ctaclien/", this.formulario).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 201) {
            this.$alert("Usted actualizo el proveedor con exito.", {
              confirmButtonText: "OK",
              callback: (action) => {
                location.reload()
              },
            });
          }
        }
      );
    },
  },
  computed: {
    CloseModal(){
      console.log("Cierrre");
    
    }
  },
  created() {
    Axios.get("http://localhost:3000/ctaclien/").then((result) => {
      this.DatosAModificarClientes = result.data;
      console.log("datos_clientes", this.DatosAModificarClientes);
      this.CodigoParaCrearNuevoCliente();
    });
  },
  beforeUpdate() {
    
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
