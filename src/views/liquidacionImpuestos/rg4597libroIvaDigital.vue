<template>
   <el-card class="rgCard">
    <el-row :gutter="10" class="labelClass">
        <el-col :span="4" :offset="1">CUIT informante:</el-col>
        <el-col :span="5" :offset="0"><el-input  v-model="inputCuit"></el-input></el-col>
        <el-col :span="8" :offset="3">Prorratear Crédito fiscal computable:</el-col>
        <el-col :span="3" :offset="0"><el-select v-model="creditoFiscal" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
        
        
    </el-row>
    <el-row :gutter="10" class="labelClass">
            
            <el-col :span="4" :offset="1">Mes-Año</el-col>
            
            <el-col :span="2" :offset="0"> <el-date-picker v-model="dateMes" type="month" format="MM/yyyy" placeholder="Mes" >
                        </el-date-picker></el-col>
            <el-col :span="8" :offset="6">Crédito fiscal computable:</el-col>
            <el-col :span="3" :offset="0"><el-select v-model="selectCredito" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select></el-col>
        </el-row>
        <el-row :gutter="10" class="labelClass">
            <el-col :span="8" :offset="13">Crédito fiscal computable:</el-col>
            <el-col :span="3" :offset="0"><el-input  v-model="input"></el-input></el-col>
            
        </el-row>
        
        <el-row :gutter="20" class="labelClass">
            <el-col :span="7" :offset="1"> Guardar los archivos generados en:</el-col>
            <el-col :span="8" :offset="0"> <el-input  v-model="input"></el-input> </el-col>
            <el-button>?</el-button>
            <el-button>Exportar</el-button>
            <el-button>Salir</el-button>
        </el-row>
    
   </el-card> 
</template>
<script>
export default {

    data() {
        return {
             inputCuit:"",
             creditoFiscal:"",
             dateMes:"",
             options: [{
        value: 'Option1',
        label: 'Option1'
        }, {
        value: 'Option2',
        label: 'Option2'
        }, {
        value: 'Option3',
        label: 'Option3'
        }],
        selectCredito:"",

           
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>
<style>
.rgCard{
    width: 950px;
    margin-top: 5%;
    margin-left: 10%;
    
}
.labelClass{
 margin:2% 0%;
}

.buttonClass{
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top: 5%;
}
</style>