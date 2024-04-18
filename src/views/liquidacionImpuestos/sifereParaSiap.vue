<template>
  <div style="padding: 30px">
    <el-alert :closable="false"> </el-alert>
    <el-card class="cardPercepciondegan">
      <div style="margin: 10px"></div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="7"
          ><el-checkbox label="DDJJ de Retenciones"></el-checkbox
        ></el-col>
        <el-col :span="12" :offset="7"
          ><el-checkbox label="DDJJ de Percepciones"></el-checkbox
        ></el-col>
      </el-row>
      <el-row>
        <el-col id="idDeJurisdiccion" :offset="4"
          >Jurisdiccion:
          <el-select v-model="value" placeholder="">
            <el-option
              v-for="item in options"
              :key="item.value3"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row id="idDeTerceraLinea">
        <el-col :span="5" :offset="2">Datos del libro</el-col>
        <el-col :span="6"
          ><el-radio v-model="radio" label="1">Iva.Ventas</el-radio></el-col
        >
        <el-col :span="8"
          ><el-radio v-model="radio1" label="1">Iva.Compras</el-radio></el-col
        >
      </el-row>
      <el-row id="cuartaLinea">
        <el-col :offset="2"
          >Percepcion:
          <el-select v-model="value" placeholder="">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="3">
          <span class="demonstration">Periodo a informar(Ej. 03/2023): </span>
          <el-date-picker
            v-model="value2"
            type="month"
          >
          </el-date-picker>
        </el-col>
      </el-row>
      <el-row id="quintaLinea">
        <el-col offset="3" :span="16">
          <el-input v-model="input"></el-input>
        </el-col>
        <el-col :span="2">
          <el-button size="mini">?</el-button>
        </el-col>
      </el-row>
      <el-row class="botonesDeSifere">
        <el-button size="medium">Exportar</el-button>
        <el-button size="medium">Salir</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "ImpuestosSifereParaSiap",
    

  data() {
    return {
        value3:"",
        radio1:"",
        radio:"",
        value:"",
        value2:"",
        input:""

    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.cardPercepciondegan {
  width: 35rem;
  font-size: 14px;
}
#idDeJurisdiccion {
  margin-top: 1rem;
}
#idDeTerceraLinea {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
#cuartaLinea{
    margin-bottom: 1rem;
}
#quintaLinea{
    margin-top: 1rem;
}
.botonesDeSifere{
    margin-top: 1rem;
    display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

</style>
