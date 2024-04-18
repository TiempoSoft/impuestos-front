<template>
    <div style="padding: 30px">
      <el-alert :closable="false"> </el-alert>
      <el-card class="cardliqimpgan">
      <el-row :gutter="20">
        <el-col :span="12" :offset="5">
          <el-select v-model="value" class="selectcoloragugsto" placeholder="Impuesto a los bienes personales">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option></el-select></el-col>
      </el-row>
      <el-table
    :data="tableData" 
    style="width: 100%">
    <el-table-column
      label="Año"
      width="150">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="CUIT"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operaciones">
      <template slot-scope="scope">
        <el-button
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Eliminar</el-button>
      </template>
    </el-table-column>
  </el-table>
      </el-card>
    </div>
  </template>      

  <script>
  export default {
    name: 'ImpuestosIndex',
    data() {
    return {
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
      value: '',
      tableData: [{
          date: '2023',
          name: '20-11111111-1',
          address: 'DDJJ Numero: 1'
        }, {
          date: '2023',
          name: '20-11111111-1',
          address: 'DDJJ Numero: 2'
        }, {
          date: '2023',
          name: '20-11111111-2',
          address: 'DDJJ Numero: 3'
        }, {
          date: '2023',
          name: '20-11111111-2',
          address: 'DDJJ Numero: 4'
        }],
        methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
}}   
  


  </script>
  
  <style scoped>
  .selectcoloragugsto {
  border: solid 1.5px #ccc;
  background-color: #ccc;
  min-width: 260px;
}
.cardliqimpgan{
  min-width: 500px;
  max-width: 550px;
  margin-left: 240px;
}
  </style>



