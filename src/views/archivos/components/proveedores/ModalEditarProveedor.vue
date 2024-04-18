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
          Editar Proveedor
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalEditarProveedor')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>

    <el-card>
      <el-form status-icon id="form">
        <div class="row">
          <div class="col-75">
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 12%">
                <label>Código</label>
              </div>
              <div class="col-25" style="width: 15%; margin-left: -3%">
                <input type="text" disabled v-model.number="DatosModal.codig" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 12%">
                <label>Nombre</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -3%">
                <input type="text" v-model="DatosModal.razon" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Dirección</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input type="text" v-model="DatosModal.direccion" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Localidad</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input type="text" v-model="DatosModal.localidad" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Provincia</label>
              </div>
              <div class="col-25" style="width: 20%; margin-left: -1%">
                <input type="text" v-model="DatosModal.provincia" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-20" style="margin-left: 6%">
                <label>Posición IVA</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -2%">
                <input type="text" disabled v-model="DatosModal.tipoiva" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 17%">
                <label>C.P</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -8%">
                <input type="text" v-model.number="DatosModal.postal" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 11%">
                <label>Teléfono</label>
              </div>
              <div class="col-25" style="width: 30%; margin-left: -2%">
                <input type="text" v-model="DatosModal.telefono" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 16%">
                <label>CUIT</label>
              </div>
              <div class="col-25" style="width: 30%; margin-left: -7%">
                <input type="text" v-model="DatosModal.iva" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-30" style="margin-left: -2%">
                <label>N° Ingresos Brutos</label>
              </div>
              <div class="col-25" style="width: 35%; margin-left: -4%">
                <input type="text" v-model="DatosModal.nroingbrut" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>Cód.docum.DGI</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -4%">
                <input type="text" v-model="DatosModal.docdgi" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>N° Ag.Ret.Ing.Br</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -4%">
                <input type="text" v-model.number="DatosModal.agenret" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>N° Ag.Per.Ing.Br</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -4%">
                <input type="text" v-model="DatosModal.agenper" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-20" style="margin-left: 7%">
                <label>Activo/Gasto</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -3%">
                <input type="text" v-model.number="DatosModal.cta_gasto1" />
              </div>
              <div class="col-25" style="width: 25%; margin-left: -3%">
                <input type="text" v-model="descripCta_activo" />
              </div>
              <div class="col-5">
                <el-button style="height: 15px" @click="AbrirModalActivoGasto()"
                  ><i class="fas fa-wrench" style="line-height: 0"></i>
                </el-button>
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 14%">
                <label>Pasivo</label>
              </div>
              <div class="col-25" style="width: 25%; margin-left: -5%">
                <input type="text" v-model.number="DatosModal.cta_pasivo" />
              </div>
              <div class="col-25" style="width: 25%; margin-left: -3%">
                <input type="text" v-model.number="descripCta_pasivo" />
              </div>
              <div class="col-5">
                <el-button style="height: 15px" @click="AbrirModalPasivoGasto()"
                  ><i class="fas fa-wrench" style="line-height: 0"></i>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </el-card>
    <el-card
      ><div style="margin-left: 60%">
        <el-button class="button" type="success" size="medium" @click="datos()"
          >Aceptar</el-button
        >
        <el-button
          type="danger"
          class="button"
          size="medium"
          @click="CerrarModal()"
          >Cancelar</el-button
        >
      </div>
    </el-card>
    <modal
      name="modalGastoActivoEditar"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      @before-close="CodigoActivo()"
    >
      <ModalGastoActivo />
    </modal>
    <modal
      name="modalGastoPasivoEditar"
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
  props: ["DatosModal"],
  data() {
    return {
      DatosAModificarProvedores: {},
      descripCta_pasivo: "",
      descripCta_activo :"",
      formulario: {
        nombre: "",
        direccion: "",
        localidad: "",
        provincia: "",
        posicion: "Incripto",
        cp: "",
        telefono: "",
        cuit: "",
        ingbrut: "",
        codDoc: "",
        AgRet: "",
        AgPerc: "",
        Activo: "21300",
        Pasivo: "21800",
        Activo1: "DGI- impuestos resp impuesto.no incrip",
        Activo2: "Acreedores varios",
      },
    };
  },
  methods: {
    CerrarModal() {
      this.$modal.hide("ModalEditarProveedor");
      let form = document.getElementById("form");
      form.reset();
    },
    AbrirModalActivoGasto() {
      this.$modal.show("modalGastoActivoEditar");
    },
    AbrirModalPasivoGasto() {
      this.$modal.show("modalGastoPasivoEditar");
    },
    datos() {
      this.ActualizarAdb();
    },
    ActualizarAdb() {
      Axios.put("http://localhost:3000/prov/", this.DatosModal).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 200) {
            this.$alert("Usted actualizo el proveedor con exito.", {
              confirmButtonText: "OK",
              callback: (action) => {
                this.$store.commit("ResetStateProveedores");
                location.reload();
              },
            });
          }
        }
      );
    },
  },
  computed: {
    CodigoActivo() {
      this.DatosModal.cta_gasto1 = this.$store.state.e.CodigoCuentaGastoActivo;
      this.descripCta_activo = this.$store.state.e.DescripCuentaGastoActivo;
    },
    CodigoPasivo() {
      this.DatosModal.cta_pasivo = this.$store.state.e.CodigoCuentaGastoPasivo;
      this.descripCta_pasivo = this.$store.state.e.DescripCuentaGastoPasivo;
    },
  },
  mounted(){
      if (this.descripCta_pasivo === "") {
        Axios.get("http://localhost:3000/maestro1").then((result) => {
          let options = result.data;
          console.log("datos" ,options); 
          for(let i = 0 ; i < options.length ; i++){
          if(this.DatosModal.cta_pasivo === options[i].cuenta){
              this.descripCta_pasivo = options[i].descrip
              console.log(this.DescripCuentaGastoPasivo);
            } 
          }
        });
    }if (this.descripCta_activo === "") {
      console.log("Segundo if");
        Axios.get("http://localhost:3000/maestro1").then((result) => {
          let options = result.data;
          console.log("datos2" ,options); 
          for(let i = 0 ; i < options.length ; i++){
          if(this.DatosModal.cta_gasto1 === options[i].cuenta){
              this.descripCta_activo = options[i].descrip
              console.log(this.descripCta_activo);
            } 
          }
        });
    }
  },
  beforeMount() {
    this.$store.state.e.CodigoCuentaGastoActivo = this.DatosModal.cta_gasto1;
    this.$store.state.e.DescripCuentaGastoActivo = this.descripCta_activo;
  },
  created() {
    this.codigActivo = this.DatosModal.cta_gasto1;
    this.codigPasivo = this.DatosModal.cta_pasivo;
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

/* Sthis.$store.state.e.DescripCuentaGastoActivo;tyle the label to display next to the inputs */
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