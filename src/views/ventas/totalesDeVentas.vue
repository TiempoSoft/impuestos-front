<template>
  <div class="app-container">
    <el-card>
      <div class="row" style="margin-left: 30%">
        <div class="col-70">
          <label>Fechas de los comprobantes </label>
          <label>desde: </label>
          <el-date-picker
            style="width: 9%"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          >
          </el-date-picker>
          <label style="margin-left: 1%">hasta: </label>
          <el-date-picker
            style="width: 9%; margin-left: 0%"
            v-model="value1"
            type="date"
            placeholder="Pick a day"
          >
          </el-date-picker>
        </div>
        <div class="col-5" style="margin-left: -1%"></div>
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
            <el-checkbox label="Papel continuo"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-button style="margin-left: 48%" type="primary" plain>Formato</el-button>
      <el-button type="primary" plain>Descargar</el-button>
    </el-card>
  </div>
</template>
<script>
export default {
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
