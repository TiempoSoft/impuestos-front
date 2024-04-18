<template>
  <div class="app-container">
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 30%; margin-top: 35px">Selección de Comprobantes</h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('opcionesComprobanteGeneral')"
          style="position: absolute; top: 4%; right: 35px"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>

    <el-card>
      <div class="col-100" style="margin-left: 28%">
        <el-button style="width: 54%" @click="$modal.hide('opcionesComprobanteGeneral')"
          >1. Comprobantes en general</el-button
        >
      </div>
      <br />
      <div class="col-100" style="margin-left: 28%">
        <el-button style="width: 50%" @click="modalImpuestoInternos()"
          >2. Con impuestos internos</el-button
        >
      </div>
      <br />
      <div class="col-100" style="margin-left: 28%">
        <el-button style="width: 42%" @click="$modal.hide('opcionesComprobanteGeneral')"
          >3. Segun modelo "1"</el-button
        >
      </div>
      <br />
      <div class="col-100" style="margin-left: 28%">
        <el-button style="width: 42%" @click="$modal.hide('opcionesComprobanteGeneral')"
          >4. Segun modelo "2"</el-button
        >
      </div>
      <br />
      <div class="col-100" style="margin-left: 15%">
        <el-checkbox v-model="checked">Ventas a Inscriptos/No Inscr.</el-checkbox>
        <el-checkbox v-model="checked">Ventas a Cons.Final/Monotrib.</el-checkbox>
      </div>
      <br />

      <div class="col-100" style="margin-left: 35%">
        <el-checkbox v-model="checked">Ventas a Otro País</el-checkbox>
      </div>
    </el-card>

    <modal
      name="opcionImpuestoInternos"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
    >
      <opcionImpuestoInternos :datosalicuotas="datosali" />
    </modal>
  </div>
</template>

<script>
import opcionImpuestoInternos from "./opcionImpuestoInternos";

export default {
  components: { opcionImpuestoInternos },
  props: ["datosalicuotas"],

  methods: {
    modalImpuestoInternos() {
      this.$modal.show("opcionImpuestoInternos");
    },
    modalcarga_de_comprobantes() {
      this.$modal.show("carga_de_comprobantes");
    },
    ver() {
      console.log("Datos de props", this.datosalicuotas);
    },
  },
};
</script>

<style scoped>
.button-closed {
  padding: 9px;
}
.app {
  font-size: 11px;
  padding: 20px;
}
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
.col-5-close {
  float: right;
  width: 4%;
  margin-top: 1px;
  margin-right: 3%;
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
  margin-top: 1px;
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

@media screen and (min-width: 851px) and (max-width: 1505px) {
  .titulo {
    margin-top: -50px;
    width: 100%;
  }
}
@media screen and (min-width: 851px) and (max-width: 1505px) {
  .closeModal {
    height: 10%;
    margin-right: 10%;
    margin-top: -40px;
    float: right;
  }
}
@media screen and (min-width: 851px) and (max-width: 1475px) {
  .InputImputacion {
    margin-top: 20px;
  }
}
@media screen and (min-width: 601px) and (max-width: 1330px) {
  .col-10,
  .col-15,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
