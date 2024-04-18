<template>
    <div class="app-container">
        <div class="col-70">
        <el-table
        ref="RespInsc1"
        :data="options"
        >
        <el-table-column
            prop="value"
            label="Detalle"
            width="400"
            :formatter="dateFormat"
        >
        </el-table-column>
        <el-table-column
            prop="value"
            label="Formulas"
            width="500"
            :formatter="dateFormat"
        >
        </el-table-column>
        </el-table>
      </div>
    </div>
</template>
<script>


export default {
 
  data() {
    return {
      datos_ver_comprobantes: "",
    };
  },
  
  beforeCreate() {
    console.log("asdasd")
  },
};
</script>