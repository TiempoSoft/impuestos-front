<template>
  <div class="app-container">
    <el-card style="height: 40%; text-align: center">
      <el-checkbox-group v-model="checkList" :max="1">
        <el-checkbox label="1 Reporte Rápido"></el-checkbox>
        <el-checkbox label="2 Libro c/cabecera"></el-checkbox>
        <el-checkbox label="3 Libro s/cabecera"></el-checkbox>
      </el-checkbox-group>
    </el-card>
    <el-card style="height: 40%">
      <div class="row">
        <div class="col-20" style="margin-left: 21%">
          <el-radio v-model="radio" label="1">Por mes de imputación</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: 75%">De:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-5">
          <label style="margin-left: 75%">a:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-20" style="margin-left: 21%">
          <el-radio v-model="radio" label="1">Por fecha del Comprob.</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: 75%">De:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-5">
          <label style="margin-left: 75%">a:</label>
        </div>
        <div class="col-5">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
      </div>
      <div class="row" style="margin-left: 30%">
        <div class="col-70">
          <div class="col-5" style="margin-left: 6%">
            <label>Establecimientos: </label>
          </div>
          <div class="col-5"></div>
          <div class="col-5" style="margin-left: 5%">
            <label>Desde: </label>
          </div>
          <div class="col-10" style="margin-left: 1%">
            <el-input id="suma" type="text" />
          </div>

          <div class="col-5" style="margin-left: 0%">
            <label style="margin-left: 1%">hasta: </label>
          </div>

          <div class="col-10" style="margin-left: 1%">
            <el-input id="suma" type="text" />
          </div>
        </div>
      </div>
      <div class="row" style="margin-left: 30%">
        <div class="col-15" style="margin-left: 1%">
          <br />
          <label>Agrupar por:</label>
        </div>
        <div class="col-15" style="margin-left: -2%">
          <br />
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="col-10" style="margin-left: 6%">
          <el-checkbox-group v-model="checkList" :max="1">
            <el-checkbox label="Papel continuo"></el-checkbox><br />
          </el-checkbox-group>
        </div>
      </div>
    </el-card>
    <el-card style="text-align: center">
      <el-button
        @click="abrirModalFormatoDeImpresionLibroIva()"
        style="margin-left: 40%"
        type="primary"
        plain
        >Formato</el-button
      >
      <el-button type="primary" plain>Descargar</el-button>
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
          value: "(No agrupar)",
          label: "(No agrupar)",
        },
        {
          value: "Rubros",
          label: "Rubros",
        },
        {
          value: "Jurisdicciones",
          label: "Jurisdicciones",
        },
        {
          value: "Clientes",
          label: "Clientes",
        },
        {
          value: "Comprobantes",
          label: "Comprobantes",
        },
        {
          value: "Caracter en IVA",
          label: "Caracter en IVA",
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
label {
  padding: 6px 6px 6px 0;
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
  width: 4%;
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
