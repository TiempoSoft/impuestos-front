<template>
  <div class="app-container">
    <div class="row">
      <div class="col-15"></div>
      <div class="col-50">
        <label for=""> Jurisdicción : </label>
      </div>
      <div class="col-30">
        <label for=""> Tipo de gasto : </label>
      </div>
    </div>
    <div class="row">
      <div class="col-50">
        <el-card>
          <div class="col-10"></div>
          <el-select
            @change="PushJurisdiccion"
            v-model="value2"
            placeholder="Select"
          >
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-card>
      </div>
      <div class="col-50">
        <el-card>
          <div class="col-10"></div>
          <el-select
            @change="PushTipoDeGasto"
            v-model="value"
            id="TipoDeGasto"
            placeholder="Select"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-card>
      </div>
    </div>
    <div class="row">
      <div class="col-15"></div>
      <div class="col-50">
        <label for=""> Credito fiscal IVA : </label>
      </div>
      <div class="col-30">
        <label for=""> Clasificación para el IVA : </label>
      </div>
    </div>
    <div class="row">
      <div class="col-50">
        <el-card ref="CreditoFiscalIva">
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushCreditoFiscalIva()"
              >Computable</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushCreditoFiscalIva()"
              >No computable</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushCreditoFiscalIva()"
              >Prorrateable</el-checkbox
            >
          </div>
        </el-card>
        <div class="col-25"></div>
        <div class="col-70">
          <label for="" style="padding: 16px 0px 16px 0px">
            Clasif.para imp.ganancias :
          </label>
        </div>
        <el-card ref="ClasifParaImpGanancias">
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushClasifimpGanancias"
              >Imputable al costo</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushClasifimpGanancias"
              >Bienes de uso</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-25"></div>
            <el-checkbox @change="PushClasifimpGanancias"
              >No imput. al costo</el-checkbox
            >
          </div>
        </el-card>
      </div>
      <div class="col-50">
        <el-card ref="ClasificacionParaElIva">
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Compra de bienes en general</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva">Locaciones</el-checkbox>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Prestaciones de servicios</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva">Bienes de uso</el-checkbox>
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Bienes usados a cons.final</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Otros conceptos</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Contrib.Seg.Social</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Derechos de autor</el-checkbox
            >
          </div>
          <div class="row">
            <div class="col-20"></div>
            <el-checkbox @change="PushClasifiDelIva"
              >Contrib.Seg.Social</el-checkbox
            >
          </div>
        </el-card>
      </div>
    </div>
    <div class="row">
      <div class="col-25"></div>
      <div class="col-25">
        <el-button type="primary" @click="abrirModalImputaciones()"
          >Aceptar</el-button
        >
      </div>
      <div class="col-15"></div>
      <div class="col-15">
        <el-button type="danger" @click="abrirModalImputaciones()"
          >Cerrar</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      options: [
        {
          value: "Mercaderia",
          label: "Mercaderia",
        },
        {
          value: "Gastos administrativos",
          label: "Gastos administrativos",
        },
        {
          value: "Gastos comercialización",
          label: "Gastos comercialización",
        },
      ],
      value: "",
      options2: [
        {
          value: "Mendoza",
          label: "Mendoza",
        },
        {
          value: "San juan",
          label: "San juan",
        },
        {
          value: "San luis",
          label: "San luis",
        },
      ],
      value2: "",
    };
  },
  methods: {
    abrirModalImputaciones() {
      this.$modal.hide("Cambio_de_Imputacion");
    },
    PushCreditoFiscalIva() {
      for (let i = 0; i <= 3; i++) {
        if (
          this.$refs.CreditoFiscalIva.$children[i].$el.control.checked === true
        ) {
          let datos = this.$refs.CreditoFiscalIva.$children[i].$el.innerText;
          this.$parent.$parent.$refs.ruleForm2.$el[18].value = datos;
        }
      }
    },
    PushClasifimpGanancias() {
      for (let i = 0; i <= 3; i++) {
        if (
          this.$refs.ClasifParaImpGanancias.$children[i].$el.control.checked ===
          true
        ) {
          let datos = this.$refs.ClasifParaImpGanancias.$children[i].$el
            .innerText;
          this.$parent.$parent.$refs.ruleForm2.$el[20].value = datos;
        }
      }
    },
    PushClasifiDelIva() {
      for (let i = 0; i <= 10; i++) {
        if (
          this.$refs.ClasificacionParaElIva.$children[i].$el.control.checked ===
          true
        ) {
          let datos = this.$refs.ClasificacionParaElIva.$children[i].$el
            .innerText;
          this.$parent.$parent.$refs.ruleForm2.$el[22].value = datos;
        }
      }
    },
    PushTipoDeGasto() {
      let valor = this.value;
      this.$parent.$parent.$refs.ruleForm2.$el[13].value = valor;
    },
    PushJurisdiccion() {
      let valor = this.value2;
      this.$parent.$parent.$refs.ruleForm2.$el[15].value = valor;
    },
  },
};
</script>
<style scoped>
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
.col-30 {
  float: left;
  width: 29%;
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