<template>
  <div class="app-container">
    <el-card>
      <div class="row" style="margin-left: 27.7%">
        <div class="col-70">
          <label>Fechas de los comprobantes </label>
          <label style="margin-left: 1%">Desde:</label>
          <el-date-picker
            style="width: 15%"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          >
          </el-date-picker>
          <label style="margin-left: 1%">Hasta:</label>
          <el-date-picker
            style="width: 15%; margin-left: 0%"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          >
          </el-date-picker>
        </div>
        <div class="col-5" style="margin-left: -1%"></div>
      </div>

      <div class="row" style="margin-left: 26.3%">
        <div class="col-70">
          <div class="col-5" style="margin-left: 6%">
            <label>Establecimientos</label>
          </div>
          <div class="col-5"></div>
          <div class="col-5" style="margin-left: 1%">
            <label>Desde:</label>
          </div>
          <div class="col-10" style="margin-left: 0%">
            <el-input id="suma" type="text" />
          </div>

          <div class="col-5" style="margin-left: 0%">
            <label style="margin-left: 0%">Hasta:</label>
          </div>

          <div class="col-10" style="margin-left: -0.5%">
            <el-input id="suma" type="text" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-15" style="margin-left: 34.5%">
          <label>Filtrar por:</label>
        </div>
        <div class="col-10" style="margin-left: -9.5%">
          <el-select v-model="value" placeholder="Rubros">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="col-10" style="margin-left: 2.2%">
          <el-select v-model="value" placeholder="Mercaderia XXX">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="row">  
        <div class="col-10" style="margin-left: 35%">
          <el-checkbox-group v-model="checkList" :max="1">
            <el-checkbox label="Incluir subtotales mensuales"></el-checkbox><br />
            <el-checkbox label="Incluir subtotales por puntos de venta"></el-checkbox>
          </el-checkbox-group>
        </div></div>
    </el-card>

    <el-card>
      <el-button style="margin-left: 55%" type="primary" plain>Formato</el-button>
      <el-button type="primary" plain>Listar</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "Ninguno",
          label: "Ninguno",
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
};
</script>
<style scoped>
/* Style the label to display next to the inputs */
label {
  padding: 6px 16px 16px 0;
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
  width: 18%;
  margin-top: 6px;
  margin-right: -2%;
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
