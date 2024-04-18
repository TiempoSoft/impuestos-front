<template>
  <div class="app-container"  style="background: rgba(0,0,0,0.1)">
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
          Nuevo Proveedor
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalNuevoProveedor')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>

    <el-card>
      <div class="row">
        <div class="col-75">
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 12%">
              <label>Código</label>
            </div>
            <div class="col-25" style="width: 15%; margin-left: -3%">
              <input
                maxlength="4"
                disabled
                type="text"
                v-model="formulario.codig"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 12%">
              <label>Nombre</label>
            </div>
            <div class="col-25" style="width: 45%; margin-left: -3%">
              <input maxlength="30" type="text" v-model="formulario.razon" />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 10%">
              <label>Dirección</label>
            </div>
            <div class="col-25" style="width: 45%; margin-left: -1%">
              <input
                maxlength="26"
                type="text"
                v-model="formulario.direccion"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 10%">
              <label>Localidad</label>
            </div>
            <div class="col-25" style="width: 45%; margin-left: -1%">
              <input
                maxlength="26"
                type="text"
                v-model="formulario.localidad"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 10%">
              <label>Provincia</label>
            </div>
            <div class="col-25" style="width: 20%; margin-left: -1%">
              <input
                maxlength="10"
                type="text"
                v-model="formulario.provincia"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-20" style="margin-left: 6%">
              <label>Posición IVA</label>
            </div>
            <div class="col-25" style="width: 25%; margin-left: -2%">
              <input type="text" />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 17%">
              <label>C.P</label>
            </div>
            <div class="col-15" style=" margin-left: -8%">
              <input
                maxlength="4"
                type="text"
                v-model.number="formulario.postal"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 11%">
              <label>Teléfono</label>
            </div>
            <div class="col-25" style="width: 30%; margin-left: -2%">
              <input
                maxlength="21"
                type="text"
                v-model.number="formulario.telefono"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 16%">
              <label>CUIT</label>
            </div>
            <div class="col-25" style="width: 30%; margin-left: -7%">
              <input maxlength="14" type="text" v-model="formulario.iva" />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-30" style="margin-left: -2%">
              <label>N° Ingresos Brutos</label>
            </div>
            <div class="col-25" style="width: 35%; margin-left: -4%">
              <input
                maxlength="15"
                type="text"
                v-model="formulario.nroingbrut"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-25" style="margin-left: 3%">
              <label>Cód.docum.DGI</label>
            </div>
            <div class="col-15" style="margin-left: -4%">
              <input maxlength="2" type="text" v-model="formulario.docdgi" />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-25" style="margin-left: 3%">
              <label>N° Ag.Ret.Ing.Br</label>
            </div>
            <div class="col-15" style=" margin-left: -4%">
              <input
                maxlength="9"
                type="text"
                v-model.number="formulario.agenret"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-25" style="margin-left: 3%">
              <label>N° Ag.Per.Ing.Br</label>
            </div>
            <div class="col-25" style="width: 25%; margin-left: -4%">
              <input
                maxlength="9"
                type="text"
                v-model.number="formulario.agenper"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-20" style="margin-left: 7%">
              <label>Activo/Gasto</label>
            </div>
            <div class="col-25" style="width: 25%; margin-left: -3%">
              <input
                maxlength="10"
                type="text"
                v-model.number="formulario.cta_gasto1"
              />
            </div>
            <div class="col-25" style="width: 25%; margin-left: -5%">
              <input
                maxlength="10"
                type="text"
                v-model.number="descripCta_activo"
              />
            </div>
            <div class="col-5">
               <el-button style="height : 15px" @click="AbrirModalActivoGasto()"
                ><i class="fas fa-wrench" style="line-height : 0"></i>
              </el-button>
            </div>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <div class="col-15" style="margin-left: 14%">
              <label>Pasivo</label>
            </div>
            <div class="col-25" style="width: 25%; margin-left: -5%">
              <input
                maxlength="10"
                type="text"
                v-model.number="formulario.cta_pasivo"
              />
            </div>
            <div class="col-25" style="width: 25%; margin-left: -5%">
              <input
                maxlength="10"
                type="text"
                v-model.number="descripCta_pasivo"
              />
            </div>
            <div class="col-5" >
              <el-button style="height : 15px" @click="AbrirModalPasivoGasto()"
                ><i class="fas fa-wrench" style="line-height : 0"></i>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card
      ><div style="margin-left: 60%">
        <el-button
          class="button"
          size="medium"
          type="success"
          @click="ActualizarAdb()"
          >Aceptar</el-button
        >
        <el-button
          type="danger"
          class="button"
          size="medium"
          @click="$modal.hide('ModalNuevoProveedor')"
          >Cancelar</el-button
        >
      </div>
    </el-card>
    <modal
      name="modalGastoActivo"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      @before-close="CodigoActivo()"
    >
      <ModalGastoActivo />
    </modal>
    <modal
      name="modalGastoPasivo"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      @before-close="CodigoPasivo()"
    >
      <ModalGastoPasivo />
    </modal>
  </div>
</template>
<script>
import Axios from "axios";
import ModalGastoActivo from "./components/modalGastoActivo";
import ModalGastoPasivo from "./components/modalGastoPasivo";

export default {
  components: { ModalGastoActivo, ModalGastoPasivo },
  props: ["datos"],
  data() {
    return {
      datos: {},
      formulario: {
        agenper: "",
        agenret: "",
        codig: "",
        cta_gasto1: "",
        cta_pasivo: "",
        iva: "",
        docdgi: "",
        localidad: "",
        nroingbrut: "",
        postal: "",
        provincia: "",
        razon: "",
        telefono: "",
        tipoiva: "",
      },
      descripCta_activo: "",
      descripCta_pasivo: "",
      codigoMaximo: 0,
    };
  },
  methods: {
    AbrirModalActivoGasto() {
      this.$modal.show("modalGastoActivo");
    },
    AbrirModalPasivoGasto() {
      this.$modal.show("modalGastoPasivo");
    },
    CrearMaximoCodigo() {
      console.log("todos los datos", this.datos);
      for (let codigo of this.datos) {
        let CodigoMax = codigo.codig;
        console.log("codigo max", CodigoMax);
        if (CodigoMax > this.codigoMaximo) {
          this.codigoMaximo = CodigoMax;

          console.log("codigo max", CodigoMax);
        } else {
          if (CodigoMax < this.codigoMaximo) {
            console.log("Es menor");
          }
        }
      }
      this.formulario.codig = this.codigoMaximo;
      this.formulario.codig++;
    },
    ActualizarAdb() {
      Axios.post("http://localhost:3000/prov/", this.formulario).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 201) {
            this.$alert("Usted creo el proveedor con exito.", {
              confirmButtonText: "OK",
              callback: (action) => {
                location.reload();
                this.$store.commit("ResetStateProveedores");
              },
            });
          }
        }
      );
    },
  },
  computed: {
    CodigoActivo() {
      this.formulario.cta_gasto1 = this.$store.state.e.CodigoCuentaGastoActivo;
      this.descripCta_activo = this.$store.state.e.DescripCuentaGastoActivo;
    },
    CodigoPasivo() {
      this.formulario.cta_pasivo = this.$store.state.e.CodigoCuentaGastoPasivo;
      this.descripCta_pasivo = this.$store.state.e.DescripCuentaGastoPasivo;
    },
  },
  created() {
    this.CrearMaximoCodigo();
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
