<template>
    <el-card class="cardReintegro" >

        <el-row :gutter="20" class="labelClass">
            <el-col :span="8" :offset="1">Ingrese mes y año de imputación</el-col>
            <el-col :span="2" :offset="0"> <el-date-picker v-model="value1" type="month" placeholder="Mes">
                        </el-date-picker></el-col>
            <el-col :span="4" :offset="5">  <el-date-picker v-model="value2" type="year" placeholder="Año">
                        </el-date-picker></el-col>
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="4" :offset="6">Coeficiente</el-col>
            <el-col :span="8" :offset="0"> <el-input  v-model="inputCoeficiente"></el-input> </el-col>
           
        </el-row>
        <el-row :gutter="20" class="labelClass">
            <el-col :span="6" :offset="3">Exportar la observación:</el-col>
            <el-col :span="5" :offset="0">
                <el-radio v-model="radioExportar" label="1">del tipo de gasto</el-radio>
            </el-col>
            <el-col :span="5" :offset="0"><el-radio v-model="radioExportar" label="2">de la descripcion</el-radio></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="3">Exportar Iva como:</el-col>  
            <el-col :span="5" :offset="0">
                <el-radio v-model="radioExpIva" label="1">Iva. computable</el-radio> </el-col>
            <el-col :span="5" :offset="0"><el-radio v-model="radioExpIva" label="2">Iva. otras operaciones</el-radio></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="5" :offset="12"><el-radio v-model="radioExpIva" label="3">Iva Compras</el-radio> </el-col>
        </el-row>
        
        
        <div class="buttonClass">
            <el-button>Importar</el-button>
            <el-button>Salir</el-button>
        </div>
        


    </el-card>
    </template>
       <script>
       export default {
   
           data() {
               return {
                   value1:"",
                   value2:"",
                   radioExportar:"1",
                   radioExpIva:'1',
                   inputCoeficiente:'',
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
           width: 800px;
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