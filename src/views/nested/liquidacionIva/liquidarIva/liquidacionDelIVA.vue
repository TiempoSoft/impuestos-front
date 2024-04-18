<template>
  <el-card class="cardclass1">
    <el-form class="formularioliq">
      <el-form-item>
        <el-col justify="center">
          <div class="block">
            Mes y Año:
            <el-date-picker v-model="value2" type="month" placeholder="Mes">
            </el-date-picker
            >-
            <el-date-picker v-model="value2" type="year" placeholder="Año">
            </el-date-picker>
          </div>
        </el-col>
        <el-form-item
          label="¿Va a cargar el impuesto facturado vinculado con exportaciones perfeccionadas en el periodo?"
        >
          <el-radio-group v-model="form.resource1">
            <el-radio label="Si"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          label="¿Va a cargar ingresos a cuenta originados en el periodo?"
        >
          <el-radio-group class="radiogroupliqiva" v-model="form.resource2">
            <el-radio label="Si"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          class="radiogroupliqiva"
          label="¿Va a corregir los saldos a favor de la DDJJ del periodo anterior?"
        >
          <el-radio-group v-model="form.resource3">
            <el-radio label="Si"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item
          class="divclass1"
          label="¿Va a cargar Uso del saldo a favor del periodo anterior?"
        >
          <el-radio-group v-model="form.resource4">
            <el-radio label="Si"></el-radio>
            <el-radio label="No"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form-item>
    </el-form>
    <div class="divisorbutton">
      <el-button>Procesar</el-button>
      <el-button>Cancelar</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "TiempoImpuestosLiquidacionDelIVA",

  data() {
    return {
      form: {
        name: "",
        resource1: "",
        resource2: "",
        resource3: "",
        resource4: "",
      },
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.formularioliq {
  margin-bottom: 1%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.el-form-item {
  width: 100%;
  margin-top: 1.5%;
}

.divisorbutton {
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.cardclass1 {
  margin-bottom: 1%;
  width: 800px;
}

.divclass1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
