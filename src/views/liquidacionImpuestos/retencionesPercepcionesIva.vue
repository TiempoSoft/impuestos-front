<template>
    <el-card class="retencionesCard">
        <el-row :gutter="20">
            <el-col :span="6" :offset="7"><el-radio v-model="radioDDJJ" label="1">DDJJ de Retenciones</el-radio>
                <el-radio v-model="radioDDJJ" label="2">DDJJ de Percepciones</el-radio>
            </el-col>
            
        </el-row>
        <el-row :gutter="20"  class="labelClass">
            <el-col :span="7" :offset="1">Código de Régimen</el-col>
            <el-col :span="3" :offset="0"><el-input  v-model="inputNumber" ></el-input></el-col>
            <el-col :span="7" :offset="0"><el-input  v-model="inputText" type="text"></el-input></el-col>
        </el-row>
        

        <el-row :gutter="20" class="labelClass">
        <el-col :span="7" :offset="1">Datos del libro:</el-col>
        <el-col :span="4" :offset="0"> <el-radio v-model="radioIva" label="1">Iva.Ventas</el-radio></el-col>
        <el-col :span="4" :offset="0"> <el-radio v-model="radioIva" label="2">Iva.Compras</el-radio></el-col>
    </el-row>
 
    <el-row :gutter="20" class="labelClass">
            <el-col :span="6" :offset="1">Importe recibido:</el-col>
            <el-col :span="10" :offset="1">  <el-select v-model="value" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select> </el-col>
        </el-row>
        <el-row :gutter="20"  class="labelClass">
            <el-col :span="7" :offset="1">Periodo a informar:</el-col>
            <el-col :span="6" :offset="0"> <el-date-picker
            v-model="value1"
            type="date"
            placeholder="Pick a date"
            format="dd/MM/yyyy"> 
    </el-date-picker></el-col>
        </el-row>
        
        <el-row :gutter="20" class="inputClass">
            <el-col :span="14" :offset="4"> <el-input  v-model="input2"></el-input> </el-col>
            <el-button>?</el-button>
        </el-row>
        <div class="buttonClass">
            <el-button>Generar</el-button>
            <el-button>Salir</el-button>
        </div>
        
    </el-card>
    
</template>


<script>
export default {

data() {
    return {
        radioDDJJ:"1",
        radioIva:"1",
        inputNumber:0,
        inputText:'',
        input2:"",
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
        value: '',
        value1:'',
        

    };
},

mounted() {

},

methods: {

},
};


</script>

<style>
.retencionesCard{
    width:700px;
    margin-top: 5%;
    margin-left: 20%;
}
.labelClass{
        margin: 2% 0%;
    }

.buttonClass{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 5%;
}
</style>