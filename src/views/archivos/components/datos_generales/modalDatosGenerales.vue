<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <el-button @click="drawer = true" type="primary" class="col-100"
          >Ver formulas</el-button
        >
      </div>
      <div class="row">
        <div class="col-85">
          <textarea name="" @change="FormulaTextArea()" id="textarea" cols="30" rows="10"></textarea>
        </div>
        <div class="col-15" style="display:flex;flex-direction:column">
          <div class="col-100">
          <el-button class="buttons" @click="ValueBoton()" value="+">+</el-button>
        </div>
        <div class="col-100">
          <el-button class="buttons" @click="ValueBoton()" value="-">-</el-button>
        </div>
        <div class="col-100">
          <el-button class="buttons" @click="ValueBoton()" value="*">*</el-button>
        </div>
        <div class="col-100">
          <el-button class="buttons" @click="ValueBoton()" value="/">/</el-button>
        </div>
        <div class="col-100">
          <el-button type="danger" class="buttons" @click="BorrarFormula()" value="C"><b>C</b></el-button>
        </div>
        </div>
      </div>
    </el-card>
    <div class="row">
      <div class="col-25"></div>
      <div class="col-25">
        <el-button type="primary" @click="VerObj()">Aceptar</el-button>
      </div>
      <div class="col-15"></div>
      <div class="col-15">
        <el-button type="danger" @click="abrirModalImputaciones()"
          >Cerrar</el-button
        >
      </div>
      <el-drawer
        size="20%"
        id="drawer"
        title="Formulas"
        :wrapperClosable="true"
        :visible.sync="drawer"
        :before-close="handleClose"
      >
        <el-table :data="this.datos_formula_paraselects"
         width="100"
         @current-change="handleCurrentChange">
          <el-table-column
            property="campo"
            width="300"
          ></el-table-column>
        </el-table>
      </el-drawer>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      currentRow : null,
      drawer: false,
      operacion :"",
      datos_formula: [],
      datos_formula_conoperaciones: {},
      datos_formula_sinoperaciones: {},
      datos_formula_paraselects: {},
      descripcion: [
        { nombre: "(NETO)" },
        { nombre: "(IVA DEBITO FISCAL)" },
        { nombre: "(IMPORTES NO GRAVADOS)" },
        { nombre: "(IMPUESTOS INTERNOS)" },
        { nombre: "(IVA PERCEPCIÓN)" },
        { nombre: "(EXENTOS)" },
        { nombre: "(COMERCIO EXTERIOR)" },
        { nombre: "(IMP. MUNICIPALES)" },
        { nombre: "(OTROS IMPUESTOS)" },
        { nombre: "(IMPUESTOS NACIONALES)" },
        { nombre: "(II.BB. PERCEPCIÓN)" },
        { nombre: "(SIRCREB)" },
        { nombre: "(NO CATEGORIZADOS)" },
        { nombre: "(TOTAL)" },
        { nombre: "(Tasa IVA)" },
        { nombre: "(Tasa RNI)" },
        { nombre: "(Tasa Ret.IVA)" },
        { nombre: "(Tasa 1)" },
        { nombre: "(Tasa 2)" },
        { nombre: "(Constante)" },
      ],
    };
  },
  methods: {
    BorrarFormula(){
      let textarea = document.getElementById("textarea");
      textarea.value = textarea.value.substring(0 , textarea.value.length - 1)
    },
    FormulaTextArea(){
      let textarea = document.getElementById("textarea");
      if (textarea.value.length >= 1){
          textarea.setAttribute('style' , 'border : solid 1px #ccc');
        }
    },
    ValueBoton(val){
      val = window.event;
      this.operacion = val.srcElement.value
      if(this.operacion ===  undefined ){
        return false
      }else{
        let textarea = document.getElementById("textarea");
      if(textarea.value < 1){
        this.$message('Seleccione una formula antes');
        textarea.setAttribute('style' , 'border : solid 1px red');
      }else{
          textarea.setAttribute('style' , 'border : solid 1px #ccc');
          textarea.value = textarea.value + " " + this.operacion
        }
      }   
    },
    handleCurrentChange(val) {
        this.currentRow = val;
        let textarea = document.getElementById("textarea");
        let html =  val.campo
        if(textarea.value.length >= 1){
          textarea.value = textarea.value + " " + html;
        }else{
          textarea.value = html;
        }
      },
    handleClose(done) {    
          done(); 
    },
    VerObj() {
      console.log(this.datos_formula_paraselects);
    },
    GenerarObjConOps() {
      this.datos_formula_conoperaciones = this.datos_formula.filter(
        (datos) =>
          datos.campo === "+" ||
          datos.campo === "-" ||
          datos.campo === "*" ||
          datos.campo === "/"
      );

      this.datos_formula_sinoperaciones = this.datos_formula.filter(
        (datos) =>
          (datos.campo != "+") &
          (datos.campo != "-") &
          (datos.campo != "*") &
          (datos.campo != "/") &
          (datos.campo != "(") &
          (datos.campo != ")")
      );

      this.datos_formula_paraselects = this.datos_formula_sinoperaciones.filter(
        (datos) => datos.campo != "IVANOIS"
      );
    },
    abrirModalImputaciones() {
      this.$modal.hide("modalDatosGenerales");
    },
  },
  created() {
    axios.get("http://localhost:3000/formula/").then((result) => {
      this.datos_formula = result.data;
      this.datos_formula_original = this.datos_formula;
      console.log("datos_responsablemodal ", this.datos_formula);
      this.GenerarObjConOps();
    });
  },
  mounted() {},
};
</script>
<style scoped>

.el-table .cell{
  line-height : 0;
}
.el-table{
  font-size:11px;
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
.el-select {
  height: 30px;
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
.buttons {
  margin-bottom: 1%;
  width: 100%;
}
/* Style the container */
.container {
  border-radius: 5px;
  background-color: #ffffff;
  padding: 20px;
}

/* Floating column for labels: 25% width */
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
  margin-left: 1%;
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
.col-30 {
  float: left;
  width: 29%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-35 {
  float: left;
  width: 34%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-40 {
  float: left;
  width: 39%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-45 {
  float: left;
  width: 44%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-50 {
  float: left;
  width: 49%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-55 {
  float: left;
  width: 54%;
  margin-right: 1%;
  margin-top: 6px;
}
.col-60 {
  float: left;
  width: 59%;
  margin-right: 1%;
  margin-top: 6px;
}
/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
.col-85 {
  float: left;
  width: 84%;
  margin-top: 6px;
}
.col-100 {
  float: left;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
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