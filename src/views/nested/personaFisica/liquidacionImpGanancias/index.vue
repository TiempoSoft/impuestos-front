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
          <el-date-picker type="year" placeholder="Año"></el-date-picker>
        </el-form-item>
        <el-form-item label="DDJJ">
          <el-input class="inputpersfisc" placeholder="DDJJ"></el-input>
        </el-form-item>
        <el-form-item label="Actv.">
          <el-input class="inputpersfisc" placeholder="Activ."></el-input>
          <el-button class="botonpersfisc">?</el-button>
        </el-form-item>
        <el-form-item label="DGI">
          <el-input class="inputpersfisc" placeholder="DGI"></el-input>
          <el-button class="botonpersfisc">?</el-button>
        </el-form-item>
      </el-form>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Delcaracion de bienes y deudas</el-col>
        <el-col :span="6" :offset="0">704,372.40</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Justif.variac.patr y erogac</el-col>
        <el-col :span="6" :offset="0">-7,959.18</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Determinacion del resultado neto</el-col>
        <el-col :span="6" :offset="0">29,655.82</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Determinacion del impuesto</el-col>
        <el-col :span="6" :offset="0">1,485.58</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Determinacion del saldo impuesto</el-col>
        <el-col :span="6" :offset="0">1,485.58</el-col>
      </el-row>
      <el-row :gutter="20" class="backgrounddata">
        <el-col :span="12" :offset="4">Forma de ingreso del saldo</el-col>
        <el-col :span="6" :offset="0">0.00</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col class="columnapersfisc" :span="8">
          <el-button type="default" size="default">Imprimir</el-button>
        </el-col>
        <el-col class="columnapersfisc" :span="8">
          <el-button type="default" size="default">Exportar</el-button>
        </el-col>
        <el-col class="columnapersfisc" :span="8">
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
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2%;
}

.yearinputpersfisc {
  width: 260px;
  margin-left: 20px;
}
.cardliqimpgan{
  min-width: 800px;
  margin-left: 30px;
}
.backgrounddata{
  background-color: #CCC;
}
</style>