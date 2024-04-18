<template>
    <el-tabs type="border-card">
  <el-tab-pane label="Impuestos">
   <el-card class="cardClass">
    <el-row :gutter="20">
        <el-col :span="5"></el-col>
    </el-row>
    <div class="flexClass">
          <div class="tableClass">
          <el-table
    :data="tableData"
    style="width: 100%"
    margin-top="20px">
    
    <el-table-column
      label="Id"
      prop="id"
      width="80">
    </el-table-column>
    <el-table-column
      label="Nombre Empresa"
      prop="name"
      width="180">
    </el-table-column>
    <el-table-column
      label="CUIT"
      prop="CUIT_number"
      width="120">
    </el-table-column>
    <el-table-column
      label="País"
      prop="country_id"
      width="80">
    </el-table-column>
      <el-table-column
      label="Localidad"
      prop="locality_id"
      width="100">
    </el-table-column>
    <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
      </template>
    
    <el-table-column    
      align="right"
      width="200">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          placeholder="Buscar"/>
      </template>
   
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Editar</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Anular</el-button>
      </template>
    </el-table-column>
  </el-table>
         </div> 
            
    </div>

   </el-card> 


  </el-tab-pane>
    </el-tabs>
</template>


<script>

import { axiosProvider } from '@/api/axiosConfig';

import {getTaxesFromTenant} from '../../../src/api/request/taxes.tenant';
import {createNewTaxesInTenant} from '../../../src/api/request/taxes.tenant';
import {updateTaxes} from '../../../src/api/request/taxes.tenant';
import {deleteTaxes} from '../../../src/api/request/taxes.tenant';
import {discoverTaxesFromTenant} from '../../../src/api/request/taxes.tenant';




export default {
    data (){
        return{
          tableData: [{
          name: 'Tello SA',
          CUIT_number:"30-12345678-2",
          locality_id:"1",
          country_id: "1",
        },],

        taxes_id:"",
        operation:"",
        name:"",
        description:"",
        condition:"",
        formula:"",
        math_type:"",
        created_at:"",
        updated_at:"",
        finished_at:"",
        taxes_codtext_1:"",
        taxes_codtext_2:"",
        user_id:""

        }
    }



}




</script>
<style>


.flexClass{
  display:flex;
  flex-direction: column;
  align-items:center ;
  
}
</style>

