<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="liquidacionIva">
      <router-view />
    </el-alert>
    <el-card class="tamañoDeLaCard">
      <fieldset>
          <el-row :gutter="20" class="row-pagos-deliva">
            <el-col :span="1" offset="0">Mes</el-col>
            <el-col :span="2">
              <el-input
                v-model="month"
                style="margin-left: 30%"
                type="month"
              ></el-input>
            </el-col>
            <el-col :span="1" offset="3">Año</el-col>
            <el-col :span="3">
              <el-input
                v-model="year"
                style="margin-left: 10%"
                type="year"
              ></el-input>
            </el-col>

            <el-col
              class="claseDeFechaDeVencimiento"
              :span="5"
              style="margin-left: 3%"
              offset="0"
              >Fecha de vencimiento</el-col
            >
            <el-col :span="5" style="margin-left: 1%">
              <el-date-picker
                type="date"
                style="width: 140px"
                v-model="vencimientoDate"
                placeholder="Seleccionar"
                size="Base"
                format="dd/MM/yyyy"
              >
              </el-date-picker>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="1" offset="0" style="margin-right: 2%">
              <span>Fecha</span>
            </el-col>
            <el-col :span="4">
              <el-date-picker
                style="width: 140px"
                type="date"
                v-model="fechaHoyDate"
                size="Base"
                format="dd/MM/yyyy"
              >
              </el-date-picker>
            </el-col>
            <el-col
              id="columnaBanco"
              :span="1"
              style="margin-left: 2%"
              offset="0"
              >Banco</el-col
            >
            <el-col :span="5">
              <el-input size="Base" placeholder="" v-model="banco"> </el-input>
            </el-col>
            <el-col id="columnaCheque" :span="2" offset="1">Cheque</el-col>
            <el-col :span="3">
              <el-input size="Base" placeholder="" v-model="cheque"> </el-input>
            </el-col>
          </el-row>
          <el-col>
            <el-row :span="2" class="lineaDeImporte">
              <el-col
                >Importe
                <el-input
                  class="inputDeImporte"
                  placeholder=""
                  v-model="importe"
                >
                </el-input>
              </el-col>
            </el-row>
          </el-col>
        </fieldset>
        <div class="botondepagodeIva">
          <el-button class="">Aceptar</el-button>
          <el-button class="">Cancelar</el-button>
        </div>
      </fieldset>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TiempoImpuestosMainPagosDelIva",

  data() {
    return {
      importe: "$" + "1437",
      year: 2023,
      vencimientoDate: "",
      month: 7,
      fechaHoyDate: new Date(),
      cheque: 37218953,
      banco: "Galicia",
    };
  },

  async mounted() {
    await this.updateInputs();
  },
  async created() {},
  methods: {
    async updateInputs() {},
  },
};
</script>
<style scoped>
.row-pagos-deliva {
  margin-bottom: 2%;
}

.botondepagodeIva {
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.inputDeImporte {
  width: 9rem;
  margin-left: 10px;
}
.lineaDeImporte {
  display: flex;
  margin-top: 1rem;
  margin-left: 23.5%;
}

.tamañoDeLaCard {
  width: 900px;
  font-size: 14px;
}

.claseDeFechaDeVencimiento {
  margin-right: -3em;
}
.align-center {
  display: block;
  margin: 1em auto;
  text-align: center;
}

#columnaBanco {
  margin-right: 10px;
}
#columnaCheque {
  margin-right: -1em;
}
</style>
