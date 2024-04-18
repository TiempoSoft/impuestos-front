<template>
  <div class="app-container">
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 20%; margin-top: -20px">
          Formato de Impresión libro IVA compras
        </h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('FormatoDeImpresionLibroIva')"
          style="position: absolute; top: 10%; right: 35px"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <el-card>
      <div class="row">
        <label>Cantidad de renglones por comprobante (1 ó 2)</label>
      </div>
    </el-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    axios.get("http://localhost:3000/Afiptipocomp").then((result) => {
      this.datos = result.data;
      this.datosCompletos = result.data;
      this.datosLength = this.datos.length;
      this.paginate();
      console.log("datos de facturas: ", this.datos);
    });
  },
};
</script>
<style scoped>
.pagination {
  margin-bottom: -15px;
  margin-top: 1%;
}
.app {
  font-size: 12px;
  padding: 0px;
}

/* Style inputs, select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 6px 6px 6px 0;
  display: inline-block;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-2 {
  float: left;
  width: 1%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-5 {
  float: left;
  width: 4%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-8 {
  float: left;
  width: 6%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-10 {
  float: left;
  width: 9%;
  margin-top: 6px;
  margin-right: 1%;
}
.col-15 {
  float: left;
  margin-right: 1%;
  width: 14%;
  margin-top: 6px;
}
.col-20 {
  float: left;
  margin-right: 1%;
  width: 19%;
  margin-top: 6px;
}
.col-25 {
  float: left;
  width: 24%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-40 {
  float: left;
  width: 39%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-50 {
  float: left;
  width: 49%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-70 {
  float: left;
  width: 70%;
  margin-top: 6px;
}
/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
@media screen and (min-width: 601px) and (max-width: 1330px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
