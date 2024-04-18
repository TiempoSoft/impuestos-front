<template>
    <el-card class="cardReintegro" >

        <el-row :gutter="20" class="labelClass">
            <el-col :span="20" :offset="2">El siguiente proceso realizará la confección del archivo.txt que servirá de base para realizar la importación de datos al sistema SICORE</el-col>  
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="6" :offset="2">Retención:</el-col>
            <el-col :span="10" :offset="0">  <el-select v-model="value" placeholder="Select">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select> </el-col>
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="6" :offset="5"><el-date-picker
      v-model="value1"
      type="daterange"
      format="dd/MM/yyyy"
      start-placeholder="Fecha inicial"
      end-placeholder="Fecha final"
      size="small">
      
    </el-date-picker></el-col>   
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="7" :offset="7"><el-checkbox v-model="checkSicore">Exportar los comprobantes LI como OP</el-checkbox></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><el-link type="primary">Descargar de la web de AFIP el SICORE versión 8.0</el-link></el-col>
            
        </el-row>
        
    
        <div class="buttonClass">
            <el-button>Exportar</el-button>
            <el-button>Salir</el-button>
        </div>
        


    </el-card>
    </template>
       <script>
       export default {
   
           data() {
               return {
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
                   value1:"",
                   checkSicore: true,
               };
           },
       
           mounted() {
       
           },
       
           methods: {
       
           },
       };
       </script>
       <style>
       .cardReintegro{
           width: 700px;
           margin-top: 5%;
           margin-left: 15%;
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