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
          Editar responsable
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalEditarResponsable')"
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
                  maxlength="4"
                  type="text"
                  disabled
                  v-model.number="DatosParaEditar.nrocli"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 12%">
                <label>Nombre</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -3%">
                <input maxlength="30" type="text" v-model="DatosParaEditar.apeynom" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Dirección</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input maxlength="30" type="text" v-model="DatosParaEditar.domicilio" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 10%">
                <label>Localidad</label>
              </div>
              <div class="col-25" style="width: 45%; margin-left: -1%">
                <input maxlength="30" type="text" v-model="DatosParaEditar.localidad" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-15" style="margin-left: 16%">
                <label>CUIT</label>
              </div>
              <div class="col-25" style="width: 30%; margin-left: -7%">
                <input maxlength="13" type="text" v-model="DatosParaEditar.nrocuit" />
              </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-30" style="margin-left: -2%">
                <label>Codigo actividad</label>
              </div>
              <div class="col-25" style=" margin-left: -4%">
                <input type="text" maxlength="5" v-model.number="DatosParaEditar.cod_act" />
              </div>
               <div class="col-15" >
              <el-button style="height : 15px" @click="AbrirModalTipoActs()"
                ><i class="fas fa-wrench" style="line-height : 0"></i>
              </el-button>
            </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>Dependecia DGI</label>
              </div>
              <div class="col-25" style=" margin-left: -4%">
                <input type="text" v-model.number="DatosParaEditar.dependenci" maxlength="3"/>
              </div>
              <div class="col-5" >
              <el-button style="height : 15px" @click="AbrirModalSedesDgi()"
                ><i class="fas fa-wrench" style="line-height : 0"></i>
              </el-button>
            </div>
            </div>
            <div class="row">
              <div class="col-20"></div>
              <div class="col-25" style="margin-left: 3%">
                <label>Autonomo (S/N)</label>
              </div>
              <div class="col-25" style="width: 10%; margin-left: -4%">
                <input type="text" maxlength="1" v-model="DatosParaEditar.autonomo" />
              </div>
            </div>
          </div>
        </div>
      </el-form>
    </el-card>
    <el-card
      ><div style="margin-left: 60%">
        <el-button class="button" size="medium" @click.native.prevent="Enviardatos()"
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
      name="TipoActs"
      :scrollable="true"
      :reset="true"
      width="40%"
      height="49%"
      :clickToClose="true"
      draggable=".app-container"
       @before-close ="CodigoAct()"
    >
      <TablaActs/>
    </modal>
      <modal
      name="SedesDgi"
      :scrollable="true"
      :reset="true"
      width="40%"
      height="49%"
      :clickToClose="true"
      draggable=".app-container"
      @before-close ="CodigoSedes()"
    >
      <SedesDgi/>
    </modal>
  </div>
</template>
<script>
import Axios from "axios";
import SedesDgi from './ModalSedesDgi'
import TablaActs from './ModalTipoActividades'

export default {
  components :{TablaActs ,SedesDgi},
  props: ["DatosParaEditar"],
  components :{TablaActs ,SedesDgi},
  data() {
    return {
      DatosParaEditar: {},
    };
  },
  methods: {
    AbrirModalSedesDgi(){
      this.$modal.show("SedesDgi")
    },
    AbrirModalTipoActs (){
        this.$modal.show("TipoActs")
      },
    Enviardatos() {
      this.ActualizarAdb();
    },
    ActualizarAdb() {
      console.log("Formulario ", this.DatosParaEditar);
        Axios.put("http://localhost:3000/cliente/" , this.DatosParaEditar)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 200) {
              this.$alert("Usted actualizo el proveedor con exito.", {
                confirmButtonText: "OK",
                callback: (action) => {
                  location.reload();
                  this.$store.commit('ResetStateResponsables')
                },
              });
              this.VaciarCamposDeStore()
            }
          }) 
    },
  },
  computed : {
    CodigoSedes(){
      this.DatosParaEditar.dependenci = this.$store.state.a.CodigoTipoSedes
    },
    CodigoAct(){
      this.DatosParaEditar.cod_act = this.$store.state.a.CodigoTipoActs
    }
  },
  created(){
      console.log(this.$store.state.a.CodigoTipoSedes);
      this.$store.state.a.CodigoTipoSedes = this.DatosParaEditar.dependenci;
      this.$store.state.a.CodigoTipoActs = this.DatosParaEditar.cod_act;
  }
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
