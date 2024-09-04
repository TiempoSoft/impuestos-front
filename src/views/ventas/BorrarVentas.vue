<template>
  <div class="app-container">
    <el-card>
      <div class="row" style="margin-left: 38%" >
        <label>¡¡ IMPORTANTE: NO PODRA RECUPERAR LOS DATOS BORRADOS !!</label>
        <label>Se eliminaran los comprobantes y sus asientos contables.</label>
      </div>
    </el-card>

    <el-card>
      <div class="row" style="margin-left: 20%">
        <div class="col-20" style="margin-left: 1%">
          <el-radio v-model="radio" label="1">Por mes de imputación</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: 150%">DE:</label>
        </div>
        <div class="col-10" style="margin-left: 5%">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-5">
          <label style="margin-left: 30%">A:</label>
        </div>
        <div class="col-10" style="margin-left: -5%">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
      </div>

      <div class="row" style="margin-left: 20%">
        <div class="col-20" style="margin-left: 1%">
          <el-radio v-model="radio" label="1">Por fecha del Comprobante</el-radio>
        </div>
        <div class="col-5">
          <label style="margin-left: 150%">DE:</label>
        </div>
        <div class="col-5" style="margin-left: 5%">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-5">
          <label style="margin-left: 30%">A:</label>
        </div>
        <div class="col-5" style="margin-left: -5%">
          <el-input id="suma" type="text" />
        </div>
        <div class="col-10">
          <el-input id="suma" type="text" />
        </div>
      </div>

      <div class="row" style="margin-left: 25%">
          <div class="col-5" style="margin-left: -1%">
            <label>Establecimientos</label>
          </div>
          <div class="col-5" style="margin-left: 6%">
            <label>Desde:</label>
          </div>
          <div class="col-10" style="margin-left: -4%">
            <el-input id="suma" type="text" />
          </div>
          <div class="col-5" style="margin-left: 2%">
            <label style="margin-left: 0%">Hasta:</label>
          </div>
          <div class="col-10" style="margin-left: -4%">
            <el-input id="suma" type="text" />
          </div>
       
      </div>
      <div class="row">  
        <div class="col-10" style="margin-left: 35%">
          <el-checkbox-group v-model="checkList" :max="1">
            <el-checkbox label="Borrar también los asientos contables relacionados"></el-checkbox>
          </el-checkbox-group>
        </div></div>
    </el-card>

    <el-card>
      <el-button style="margin-left: 45%" type="primary" plain>SI</el-button>
      <el-button type="primary" plain>NO</el-button>
    </el-card>
  </div>
</template>

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
  width: 10%;
  margin-right: -1%;
  margin-top: 6px;
}

.col-10 {
  float: left;
  width: 10%;
  margin-top: 6px;
  margin-right: -1%;
}
.col-15 {
  float: left;
  margin-right: -1%;
  width: 10%;
  margin-top: 6px;
}
.col-20 {
  float: left;
  margin-right: -1%;
  width: 10%;
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
