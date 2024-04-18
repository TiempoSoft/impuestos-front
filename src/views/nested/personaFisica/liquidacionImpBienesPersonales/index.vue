<template>
    <div style="padding: 30px">
      <el-alert :closable="false"> </el-alert>
      <el-card class="cardliqimpgan">
      <el-row :gutter="20">
        <el-col :span="12" :offset="8">
          <el-select v-model="value" class="selectcoloragugsto" placeholder="Socio--CUIT">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option></el-select></el-col>
      </el-row>
      <el-form :inline="true" :model="formInline">
        <el-form-item class="yearinputpersfisc" label="Año">
          <el-date-picker type="year" placeholder="2023"></el-date-picker>
        </el-form-item>
        <el-form-item label="DDJJ">
          <el-input class="inputpersfisc" placeholder="0"></el-input>
        </el-form-item>
        <el-form-item label="Dependencia DGI">
          <el-input class="inputpersfisc" placeholder="20"></el-input>
          <el-button class="botonpersfisc">?</el-button>
        </el-form-item>
      </el-form>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 1 Bienes situados en el país</el-col>
        <el-col :span="6" :offset="0">141,750.00</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 2 Bienes situados en el exterior</el-col>
        <el-col :span="6" :offset="0">0.00</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 3 Determinación de impuestos</el-col>
        <el-col :span="6" :offset="0">197.25</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 4 Determinación de impuesto</el-col>
        <el-col :span="6" :offset="0">197.25</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 5 Forma de ingreso saldo a favor DGI</el-col>
        <el-col :span="6" :offset="0">0.00</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">R 6 Datos del titular</el-col>
        <el-col :span="6" :offset="0"></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col class="columnapersfisc" :span="12">
          <el-button type="default" size="default">Imprimir</el-button>
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
      inputs: {
        inmuebles: '0',
        autoEmbarcaAero: '0',
        capAfecyotras: '0',
        ctaCteyCajaA: '0',
        inversionesE: '0',
        restBienesPais: '0',
        bienesExte: '0',
        deudasPersFisica: '0',
        otrasDeudasPais: '0',
        deudasPersFisicaExte: '0',
        patrimonioNetoFiscAnterio: '0',
      },
      options: [{
        value: 'Socio1--12-34567899-8',
        label: 'Socio1--12-34567899-8'
      }, {
        value: 'Socio2--12-34567899-8',
        label: 'Socio2--12-34567899-8'
      }, {
        value: 'Socio3--12-34567899-8',
        label: 'Socio3--12-34567899-8'
      }, {
        value: 'Socio4--12-34567899-8',
        label: 'Socio4--12-34567899-8'
      }, {
        value: 'Socio5--12-34567899-8',
        label: 'Socio5--12-34567899-8'
      }],
      labelPosition: 'right',
      value: ''
    }
  }
}
  </script>
  
  <style scoped>
  .selectcoloragugsto {
  border: solid 1.5px #ccc;
  background-color: #ccc;

}

.inputpersfisc {
  width: 50px;
}

.botonpersfisc {
  color: #ccc;
  margin-left: 5px;
}

.columnapersfisc {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2%;
}

.yearinputpersfisc {
  width: 260px;
  margin-left: 60px;
}
.cardliqimpgan{
  min-width: 800px;
  margin-left: 30px;
}
.backgrounddata{
  background-color: #CCC;
}
  </style>
