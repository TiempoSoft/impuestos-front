<template>
   <el-card class="cardIngBrutosSIap">
    <el-row :gutter="20" class="labelClass">
            <el-col :span="3" :offset="1">Entidad:</el-col>
            <el-col :span="4" :offset="0">
                <el-radio v-model="radioIB" label="1">Ing.Brutos Mza</el-radio>
            </el-col>
            <el-col :span="4" :offset="1">
                <el-radio v-model="radioIB" label="2">Agente de Rec. Bs.As.</el-radio></el-col>
                <el-col :span="4" :offset="2">
                <el-radio v-model="radioIB" label="3">Ing. Brutos Cordoba</el-radio></el-col>
    </el-row>
    <el-row :gutter="20" class="labelClass">
        <el-col :span="5" :offset="1">Periodo a importar:</el-col>
        <el-col :span="2" :offset="0"> <el-input-number  size= "mini" v-model="num1" @change="handleChange" :min="1" :max="12"></el-input-number></el-col>
        <el-col :span="5" :offset="2"> <el-date-picker v-model="value3" type="year" placeholder="Pick a year">
    </el-date-picker> </el-col>
    <el-col :span="6" :offset="2"> <el-radio v-model="radioIB2" label="1">Por mes de imputación </el-radio>  
        <el-radio v-model="radioIB2" label="2">Por fecha de comprobante</el-radio>
    </el-col>
    </el-row>
    <el-row :gutter="20" class="labelClass">
        <el-col :span="6" :offset="1">Tipo de exportación:</el-col>
        <el-col :span="4" :offset="0"> <el-radio v-model="radioIB3" label="1">Percepciones</el-radio></el-col>
        <el-col :span="4" :offset="0"> <el-radio v-model="radioIB3" label="2">Retenciones</el-radio></el-col>
    </el-row>
    <el-row :gutter="20" class="labelClass">
            <el-col :span="4" :offset="1">Archivo destino:</el-col>
            <el-col :span="10" :offset="0"> <el-input  v-model="input"></el-input> </el-col>
            <el-button>Examinar</el-button>
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="4" :offset="1">Importe recibido:</el-col>
            <el-col :span="10" :offset="0">  <el-select v-model="value" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select> </el-col>
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
               radioIB:"1",
               radioIB2:"1",
               radioIB3:"1",
               num1: 1,
               value1:"",
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
        value: ''

            };
        },
    
        mounted() {
    
        },
    
        methods: {
    
        },
    };
    </script>
    <style>
    .cardIngBrutosSIap{
        width: 900px;
        margin-top: 5%;
        margin-left: 10%;
    }
    .labelClass{
        margin: 1% 0%;
    }



.buttonClass{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 5%;
}
    </style>
