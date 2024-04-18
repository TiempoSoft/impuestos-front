<template>
  <div class="app-container">
    <el-card class="header-container">
      <div class="header-content">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="30vw" />
        <h4 class="claseDeTituloMesYAño">
          Ingrese mes/año de imputación del comprobante
        </h4>
      </div>
    </el-card>
    <el-card>
      <el-row>
        <div class="col-100 lineaMesYAñoImputacion">
          <h5>Mes / año imputación</h5>
          <el-input
            class="inputFechaMesYAñoDeImputacion"
            v-model="formattedDate"
            size="small"
            maxlength="7"
            placeholder="MM/AAAA"
            :mask="['99-9999']"
            :clearable="false"
            @input="monthYearControl"
          >
          </el-input>
          <el-button
            id="botonDeModalImputacion"
            @click="PushFecha()"
            type="primary"
            size="medium"
            :disabled="fecha_imputacion === ''"
          >
            Guardar
          </el-button>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["fecha_imputacion"],
  data() {
    return {
      formattedDate: "",
    };
  },
  methods: {
    monthYearControl() {
      const inputNumbers = this.formattedDate.replace(/\D/g, "");
      const firstTwoDigits = inputNumbers.slice(0, 2);
      this.formattedDate =
        firstTwoDigits +
        (inputNumbers.length > 2 ? "/" + inputNumbers.slice(2) : "");
      console.log(inputNumbers.slice(2));

      this.fecha_imputacion = this.formattedDate;
    },
    PushFecha() {
      this.$emit("valueUpdated", this.formattedDate);
      /* this.$parent.$parent.$refs.formulario.$el[6].value = this.fecha_imputacion; */
      this.$modal.hide("Fecha_Imputacion");
    },
  },
};
</script>

<style scoped>
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

.header-container {
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-content {
  display: flex;
  align-items: center;
}
.claseDeTituloMesYAño {
  margin-left: 1rem;
  margin-top: 4px;
}
.inputFechaMesYAñoDeImputacion {
  width: 40%;
  height: 1rem;
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-left: 1rem;
}
.lineaMesYAñoImputacion {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-left: 1rem;
}
#botonDeModalImputacion {
  margin-left: 1rem;
}
</style>
