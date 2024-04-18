<template>
    <div style="padding: 30px">
      <el-alert :closable="false"> </el-alert>
      <el-card class="elcardFiscalAnterior">
        <div>
            <h6>Estos datos solo deben completarse la primera vez que se liquide el Impuestos
            a las ganancias con este sistema. En los años siguientes, estos datos se tomarán
            de la declaracion jurada anterior.</h6>
        </div>
        <el-row :gutter="20" class="rowClass">
          <el-col :span="3" :offset="7" class="labelClass">Año fiscal:</el-col>
          <el-col :span="2" :offset="0"><el-date-picker class="yearpickerclass" size="small" v-model="inputs.año" type="year" placeholder="Año">
                </el-date-picker></el-col>
        </el-row>
       <el-row :gutter="20" class="rowClass">
        <el-col :span="4" :offset="7" class="labelClass" >Bienes de cambio: </el-col>
        <el-col :span="2" :offset="0"> <el-input-number size="small" controls-position="right" class="inputnumberclass" v-model="inputs.bienes" :precision="2"
                    :step="0.1" :min="0" /></el-col>
       </el-row>
       <el-row :gutter="20"  class="rowClass">
        <el-col :span="4" :offset="7" class="labelClass">Total del activo: </el-col>
        <el-col :span="2" :offset="0"><el-input-number size="small" controls-position="right" class="inputnumberclass" v-model="inputs.activo" :precision="2"
                    :step="0.1" :min="0" /></el-col>
       </el-row>
       <el-row :gutter="20" class="rowClass">
        <el-col :span="4" :offset="7" class="labelClass">Total del pasivo: </el-col>
        <el-col :span="2" :offset="0"><el-input-number size="small" controls-position="right" class="inputnumberclass" v-model="inputs.pasivo" :precision="2"
                    :step="0.1" :min="0" /></el-col>
       </el-row>
       
        <div class="divisor2">
            <el-button type="default" size="default">Declaracion de bienes y deudas...</el-button>
        </div>
        <div class="divisorbutton">
            <el-button>Procesar</el-button>
            <el-button type="danger">Cancelar</el-button>
        </div>
    </el-card>
    
  </div>
</template>

<script>
export default {
    name: 'TiempoImpuestosDatosDelPeriodoFiscalAnterior',

    data() {
        return {
            inputs: {
                bienes: '0',
                activo: '0',
                pasivo: '0',
                año: '0',
            },

            labelPosition: 'right',
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.elcardFiscalAnterior {
    max-width: 800px;
    margin-left: 50px;
}

h6{
  text-align: center;
  margin: 3% 0%;
}
.rowClass{
  margin:2% 0%;
  
}
.labelClass{
  font-size: 14px;
  margin-top: 1%;
}

.inputnumberclass {
 
  margin-left: -30%;
}

.yearpickerclass {
    border: #C0C0C0;
    background-color: #C0C0C0;
    margin-left: 18px;
    width: 130px;

}
.divisor2 {
    margin-top: 4%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content:center;
}

.divisorbutton {
  margin-top: 4%;
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

}


</style>
 
