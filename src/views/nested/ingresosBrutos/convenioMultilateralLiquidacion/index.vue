<template>
  <div style="padding: 30px">
    <el-alert :closable="false"> </el-alert>
    <el-card class="alicuotaCard">
      <el-row :gutter="20">
        <el-col :span="3" :offset="0">Periodo:</el-col>
        <el-col :span="21" :offset="0"><el-input v-model="Titulo" placeholder="" size="xl"></el-input>
        </el-col>
      </el-row>
      <div style="margin: 25px;"></div>
      <el-date-picker v-model="value2" type="daterange" align="right" start-placeholder="Fecha Inicial"
        end-placeholder="Fecha Final" default-value="2022-01-01">
      </el-date-picker>
      <el-row :gutter="20">
        <el-col class="columnapersfisc" :span="12">
          <el-button type="default" size="default">Procesar</el-button>
        </el-col>
        <el-col class="columnapersfisc" :span="12">
          <el-button type="danger" size="default">Cerrar</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'ImpuestosIndex',

  data() {
    return {
      Titulo: '',
      value1: '',
      value2: '',
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>
  
<style scoped>
.alicuotaCard {
  margin-left: 250px;
  max-width: 900px;
}

.columnapersfisc {
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2%;
}
</style>