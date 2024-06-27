<template>
  <div class="app-container">
  
    <el-card style="height: 40%">
      <div class="row">
        <div class="col-20" style="margin-left: 18%">
          <el-radio v-model="radio" label="1">Por mes de imputación</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: -45%">DE:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" style="margin-left: -125%"/>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" style="margin-left: -125%"/>
        </div>
        <div class="col-5">
          <label style="margin-left: -75%">A:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" style="margin-left: -160%"/>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" style="margin-left: -161%"/>
        </div>
      </div>
      <div class="row">
        <div class="col-20" style="margin-left: 18%">
          <el-radio v-model="radio" label="1">Por fecha del Comprobante</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: -45%">DE:</label>
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" style="margin-left: -65%"/>
        </div>
        <div class="col-5">
          <label style="margin-left: -115%">A:</label>
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" style="margin-left: -99%"/>
        </div>
      </div>
     
    </el-card>
    <el-card style="text-align: center">
      <el-button
        @click="abrirModalFormatoDeImpresionLibroIva()"
        style="margin-left: 25%"
        type="primary"
        plain
        >Formato</el-button
      >
      <el-button style="margin-left: 3%" type="primary" plain>Descargar</el-button>
    </el-card>
    <modal
      name="FormatoDeImpresionLibroIva"
      :scrollable="true"
      :reset="true"
      width="40%"
      height="auto"
      :clickToClose="false"
      draggable=".app-container"
    >
      <FormatoDeImpresionLibroIva :FormatoDeImpresionLibroIva="datosImpresionLibroIva" />
    </modal>
  </div>
</template>
<script>
import FormatoDeImpresionLibroIva from "./components/FormatoDeImpresionLibroIva";

export default {
  components: { FormatoDeImpresionLibroIva },
  data() {
    return {
      options: [
        {
          value: "Todos",
          label: "Todos",
        },
        {
          value: "Algunos",
          label: "Algunos",
        },
      ],
      value: "",
      checkList: [],
      radio: [],
    };
  },
  methods: {
    abrirModalFormatoDeImpresionLibroIva() {
      console.log("hola");
      this.$modal.show("FormatoDeImpresionLibroIva");
    },
  },
};
</script>
<style scoped>
/* Style the label to display next to the inputs */
.el-button {
  background-color: #cfe2f3;
  border: 2px solid #2986cc;
  color: #066fcf;
  padding: 10px 20px;
}

label {
  padding: 10x 50px 6px 0;
  display: inline-block;
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
  width: 8%;
  margin-right: -1%;
  margin-top: 10px;
}

.col-10 {
  float: left;
  width: 15%;
  margin-top: 1px;
  margin-right: 1%;
  margin: 10px;
}
.col-15 {
  float: left;
  margin-right: 4%;
  width: 14%;
  margin-top: 16px;
}
.col-20 {
  float: left;
  margin-right: 1%;
  width: 19%;
  margin-top: 15px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-10 .col-10,
  .col-15,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
@media screen and (min-width: 601px) and (max-width: 1330px) {
  .col-10 .col-10,
  .col-15,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
