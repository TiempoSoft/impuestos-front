<template>
    <div style="padding: 30px">
      <el-alert :closable="false"> </el-alert>
      <el-card>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
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
            <el-col :span="12" :offset="0">Ingresos computables</el-col>
            <el-col :span="6" :offset="6">360,545.45</el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Costo de ventas</el-col>
            <el-col :span="4" :offset="0">326,000.00</el-col>
            <el-col :span="8" :offset="0"></el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Gastos computables</el-col>
            <el-col :span="4" :offset="0">1,980.00</el-col>
            <el-col :span="8" :offset="0"></el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Deducc. no erogan fondos</el-col>
            <el-col :span="4" :offset="0">4,200.00</el-col>
            <el-col :span="8" :offset="0"></el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Rtado. vta. bienes de uso</el-col>
            <el-col :span="6" :offset="0">0.00</el-col>
            <el-col :span="6" :offset="0">4,000.00</el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Otros</el-col>
            <el-col :span="6" :offset="0">0.00</el-col>
            <el-col :span="6" :offset="0">0.00</el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Diferencia</el-col>
            <el-col :span="6" :offset="0">0.00</el-col>
            <el-col :span="6" :offset="0">42,365.45</el-col>
        </el-row>
        <div style="margin: 25px;"></div>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Ingresos exentos en el impuesto a las ganancias</el-col>
            <el-col :span="6" :offset="6">0.00</el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="12" :offset="0">Compras y gastos atribuibles a ganancias exentas</el-col>
            <el-col :span="6" :offset="6">0.00</el-col>
        </el-row>
        <div style="margin: 25px;"></div>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="6" :offset="0"></el-col>
            <el-col :span="6" :offset="6">Activo</el-col>
            <el-col :span="6" :offset="0">Pasivo</el-col>
            <el-col :span="6" :offset="0">Capital</el-col>
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="6" :offset="0">1998</el-col>
            <el-col :span="6" :offset="0">789,654.00</el-col>
            <el-col :span="6" :offset="0">12,340.00</el-col>
            <el-col :span="6" :offset="0">777,,314.00</el-col>
            
        </el-row>
        <el-row :gutter="20" class="backgrounddata">
            <el-col :span="6" :offset="0">1999</el-col>
            <el-col :span="6" :offset="0">36,870.00</el-col>
            <el-col :span="6" :offset="0">6,560.00</el-col>
            <el-col :span="6" :offset="0">30,310.00</el-col> 
            
        </el-row>        
        <div style="margin: 25px;"></div>
        <el-row :gutter="20">
            <el-col class="columnapersfisc" :span="8">
                <el-button type="default" size="default">Participación</el-button>
            </el-col>
            <el-col class="columnapersfisc"  :span="8">
                <el-button type="default" size="default">Imprimir</el-button>
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
        
      };
    },
  
    mounted() {
      
    },
  
    methods: {
      
    },
  };
  </script>
  
  <style scoped>
  .inputpersfisc {
    width: 100px;
}

.yearinputpersfisc {
    width: 260px;
}

.el-card {
    width: 900px;
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
}
.backgrounddata{
  background-color: #CCC;
}
  </style>