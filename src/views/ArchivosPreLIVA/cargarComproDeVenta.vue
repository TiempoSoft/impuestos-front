<template>
  <div class="app-container">
    <div class="col-75">
      <el-card>
        <el-table :data="this.Dato_CargaComDCom">
          <el-table-column align="center" label="Registro de las compras">
            <el-table-column
              align="center"
              prop="campo"
              label="Nombre de columna"
              width="auto"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="incluye"
              label="Incluir (S/N)"
              width="auto"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="rg4056"
              label="Opera.CITI"
              width="auto"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="imputa"
              label="Imputaciòn"
              width="auto"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop=""
              label="Tipo Percepc"
              width="auto"
              ><div>
                <el-select v-model="Tipo_Percepc" placeholder="" value="">
                  <el-option label="" value=""></el-option>
                  <el-option label="Municipal" value=""></el-option>
                  <el-option label="Provincial" value=""></el-option>
                  <el-option label="Nacional" value=""></el-option>
                </el-select>
              </div>
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="col-25" style="margin-top: 4%">
      <div class="col-25"></div>
      <div class="col-75"></div>
      <div class="col-25"></div>
      <div class="col-75">
        <el-button class="button">Nuevo</el-button>
      </div>
      <div class="col-25"></div>
      <div class="col-75">
        <el-button class="button">Borrar</el-button>
      </div>
      <div class="col-25"></div>
      <div class="col-75">
        <el-button class="button">Editar</el-button>
      </div>
      <div class="col-25"></div>
      <div class="col-75">
        <el-button class="button">Listar</el-button>
      </div>
      <div class="col-25"></div>
      <div class="col-75">
        <el-button class="button">Buscar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
const Dato_CargaComDCom = [];
export default {
  data() {
    return {
      Dato_CargaComDCom: "",
    };
  },
  created() {
    Axios.get("http://localhost:3000/imputa/cuentasVenta").then((result) => {
      this.Dato_CargaComDCom = result.data;
      console.log("Imputa", this.Dato_CargaComDCom);
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