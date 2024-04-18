<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="Liquidar imp. a las ganancias">
    </el-alert>
    <el-card class="cartaDeLiquidarImp">
      <el-row :gutter="20">
        <el-col :span="10">Ejercicio economico comprendido entre el</el-col>
        <el-col :span="3" :offset="0">
          <el-date-picker  type="date" v-model="value4" format="dd-MM-yyyy">
          </el-date-picker>
        </el-col>
        <!-- <el-col :span="5">
          <span class="demonstration"></span>
        </el-col> -->
        <el-col :span="3" :offset="0">
          <el-date-picker class="datePicker2" type="date" v-model="value1" format="dd-MM-yyyy">
          </el-date-picker>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      value4: "",
    };
  },
};
</script>
<style scoped>
.datePicker1 {
  left: 25px;
}
.cartaDeLiquidarImp{
 font-size: 16px;
  width: 850px;
}
.columnaDeEjercicioEconomico{

}
.datePicker2{
  margin-left: 10rem;
}
</style>
