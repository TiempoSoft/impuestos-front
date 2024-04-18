<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="Exportar imp. a las ganancias">
    </el-alert>
    <el-card class="cartaDeExportarImpALasGanancias">
      <el-row :gutter="20" class="linea1">
        <el-col :span="5" offset="1">Ejercicio economico n°</el-col>
        <el-col id="inputDeEjercicioEconomico" :span="2">
          <el-input
            class="inputDeEjercicioEconomico"
            v-model="input1expImp"
            type="number"
            controls-position="center"
          >
          </el-input>
        </el-col>
        <el-col :span="4" :offset="1">Comprendido entre el</el-col>
        <el-col id="ColumnaDeLaPrimeraLinea" :span="4">
          <el-input
            class="inputDeComprendidoen"
            v-model="input2expImp"
            type="date"
          ></el-input>
        </el-col>
        <el-col class="tercerColumna" :span="2">y el</el-col>
        <el-col :span="4">
          <el-input
            class="inputDeComprendidoen"
            v-model="input3expImp"
            type="date"
          ></el-input>
        </el-col>
      </el-row>
      <el-row class="segundaRow">
        <el-col :span="4" :offset="2">CUIT del contador</el-col>
        <el-col :span="4" >
          <el-input
            class="inputDeEjercicioEconomico"
            v-model="input4expImp"
            type="number"
            value="-   -        "
            label="ContenidoDeEjerciciosEconomico"
          >
          </el-input>
        </el-col>
        <el-col class="columnaDeFechaDeInforme" :span="4" :offset="3">Fecha de informe</el-col>
        <el-col :span="1">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="elige una fecha"
            format="dd-MM-yyyy"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row class="linea3">
        <el-col :span="1" offset="1">
          <span>DDJJ</span>
        </el-col>
        <el-col class="claseDeColumna5" :span="2">
          <el-input
            class="inputDeDDJJ"
            v-model="input5expImp"
            type="number"
          ></el-input>
        </el-col>
        <el-col id="columnaDePeriodoFiscal" :span="3">Periodo fiscal</el-col>
        <el-col :span="4">
          <el-input
            class="inputDePeriodoFiscal"
            v-model="input6expImp"
            type="number"
          ></el-input>
        </el-col>
        <el-col class="columnaDeArchivo" :span="1" :offset="1">Archivo</el-col>
        <el-col :span="7" offset="1">
          <el-input class="inputDeArchivo" v-model="input7expImp"></el-input>
        </el-col>
      </el-row>
      <div class="botonesDeExportarGanancias">
        <el-button>Aceptar</el-button>
        <el-button>Cancelar</el-button>
      </div>
      </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1expImp: "",
      input2expImp: "",
      input3expImp: "",
      value1: "",
      input4expImp: "",
      input5expImp: "",
      input6expImp: "",
      input7expImp: "",
    };
  },
};
</script>
<style scoped>
.botonesDeExportarGanancias{
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.linea3 {
  margin-top: 1rem;
}
.claseDeColumna5 {
  margin-left: 1rem;
}
.inputDeDDJJ {
  width: 3rem;
  right: 15px;
}
#columnaDePeriodoFiscal {
  margin-right: 1rem;
}
#ColumnaDeLaPrimeraLinea {
    margin-left: 1em;
}
.inputDeComprendidoen {
  right: 25px;
}
.segundaRow {
  margin-top: 1rem;
  margin-left: 5rem;
}
.cartaDeExportarImpALasGanancias {
  width: 60rem;
  font-size: 14px;
}
.columnaDeFechaDeInforme {
  margin-left: 25px;
}
.tercerColumna{
  margin-right: -1em;
}
#inputDeEjercicioEconomico{
  margin-left: -3em;
}
</style>
