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
        <div class="col-5" style="margin-left: 38%">
          <label>Período:</label>
        </div>
        <div class="col-15">
          <el-input id="suma" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-10" style="margin-left: 15%">
          <label style="margin-left: 5%">FECHA INICIAL:</label>
        </div>
        <div class="col-5">
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
          </el-date-picker>
        </div>

        <div class="col-10" style="margin-left: 15%">
          <label style="margin-left: 20%">FECHA FINAL:</label>
        </div>
        <div class="col-5">
          <el-date-picker v-model="value1" type="date" placeholder="Pick a day">
          </el-date-picker>
        </div>
      </div>

      <div class="row">
        <div class="col-5" style="margin-left: 38%">
          <label>Establecimiento:</label>
        </div>
        <div class="col-10" style="margin-left: 5%">
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
      </div>
      <div class="row">
        <div class="col-15" style="margin-left: 28%">
          <label style="margin-left: 40%">N° De libro</label>
        </div>
        <div class="col-5">
          <el-input style="margin-left: -80%" id="suma" type="text" />
        </div>
        <div class="col-15">
          <label style="margin-left: -2%">N° De páginas</label>
        </div>
        <div class="col-10">
          <el-input style="margin-left: -85%" id="suma" type="text" />
        </div>
      </div>

      <div class="row">
        <div class="col-20" style="margin-left: 20%">
          <label style="margin-left: 30%">Establec.para título:</label>
        </div>
        <div class="col-5">
          <el-input style="margin-left: -80%" id="suma" type="text" />
        </div>
        <div class="col-10" style="margin-left: 10%">
          <el-checkbox-group v-model="checkList" :max="1">
            <el-checkbox label="Papel continuo"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-card>

    <el-card style="text-align: center">
      <el-button style="margin-left: 40%" type="primary" plain>Formato</el-button>
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
