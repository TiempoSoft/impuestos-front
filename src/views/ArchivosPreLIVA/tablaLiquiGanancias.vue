<template>
  <div class="app-container">
    <div class="col-75">
    <el-card>
          <el-select v-model="form.LiquiGanacias" placeholder="...">
            <el-option label="Deduccion por carga de familia" value=""></el-option>
            <el-option label="Coeficientes de actualización" value=""></el-option>
            <el-option label="Tabla de de liquidacion del impuesto a las ganancias" value=""></el-option>
            <el-option label="Deduccion" value=""></el-option>
            <el-option label="Equivalencia de las monedas" value=""></el-option>
            <el-option label="Reduccion de las deducciones personales" value=""></el-option>
          </el-select>
          <el-table-column align="center" label="">
          <!---<el-table-column align="center" prop="" label="" width="auto">----->
          </el-table-column>
    </el-card>
  </div>
  </div>
</template>
<script>
import Axios from "axios";
const datos_tablaLiquiGanancias = [];
export default {
  data() {
    return {
      form: {
        LiquiGanacias:"",
        
      },
      datos_tablaLiquiGanancias: "",
    };
  },
  created() {
    Axios.get("http://localhost:3000//").then((result) => {
      this.datos_tablaLiquiGanancias = result.data;
      console.log("datos_tablaLiquiGanancias", this.datos_tablaLiquiGanancias);
    });
  },
};
</script>
<style scoped>
.button {
  width: 50%;
}
.tableStyle {
  width: 70%;
}
.tableStyleButton {
  width: 25%;
}
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
  margin-bottom: 1px;
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
  padding-bottom: 5px;
}
</style>