<template>
    <el-tabs type="border-card">
      <el-tab-pane label="Rubros">
        <el-card class="cardClass">
          <el-row :gutter="20" >
            <el-col :span="12" :offset="5">
              <el-input placeholder="" v-model="search">
              </el-input>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" round>Buscar</el-button>
            </el-col>
          </el-row>

<div class="flexClass">
          <div class="tableClass">
          <el-table
    :data="tableDataRubros"
    style="width: 100%"
    margin-top="20px">
    
    <el-table-column
      label="ID"
      prop="id"
      width="80">
    </el-table-column>
    <el-table-column
      label="Nombre"
      prop="name"
      width="150">
    </el-table-column>
    <el-table-column
      label="Fecha creación"
      prop="created_at"
      width="120">
    </el-table-column>
      <el-table-column
      label="Fecha actualización"
      prop="update_atdatetime"
      width="180">
    </el-table-column>
    
    <el-table-column
      >
      
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
<el-tab-pane label="Alicuotas JyR">
  <el-card>
  <el-row :gutter="20" >
            <el-col :span="12" :offset="5">
              <el-input placeholder="" v-model="search">
              </el-input>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" round>Buscar</el-button>
            </el-col>
          </el-row>
          <div class="flexClass">
          <div class="tableClass">
          <el-table
    :data="tableDataAlicuota"
    style="width: 100%"
    margin-top="20px">
    
    <el-table-column
      label="Alicuota %"
      prop="id"
      width="150">
    </el-table-column>
    <el-table-column
      label="Jurisdiccion"
      prop="name"
      width="150">
    </el-table-column>
 
    <el-table-column
      >
      
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




export default {
  
  data() {
    return {
      tableDataRubros:[],
      tableDataAlicuota:[],

    };
  },
  methods :{
    
     OpenModalNewRubro(){
      this.$modal.show('ModalNuevoRubro')
    },
     OpenModalEditRubro(){
        if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Eliminar Proveedor", {
          confirmButtonText: "OK",
        });
      }else {
      this.$modal.show('ModalEditarRubro')
    }
     },
 

  },
 
  
  created() {
    Axios.get("http://localhost:3000/rubros/").then((result) => {
      this.datos_rubros = result.data;
      console.log("rubros", this.datos_rubros);
    });
  },
}
</script>
<style scoped>
.flexClass{
  display:flex;
  flex-direction: column;
  align-items:center ;
  
}
.modalClass{
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top:10%;
}
</style>