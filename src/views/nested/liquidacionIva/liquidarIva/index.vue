<template>
  <el-row>
    <div class="center">
      <!--  <el-row>
        <el-col> -->
      <el-button type="primary" plain>NUEVA LIQUIDACIÓN DEL IVA</el-button>
      <!--  </el-col>
        <el-col> -->
      <el-button type="primary" plain>LIQUIDACIÓN DEL IVA ANTERIOR</el-button>
      <!--   </el-col>
      </el-row> -->
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.el-button {
  min-width: 250px;
}
.center {
  margin-left: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
