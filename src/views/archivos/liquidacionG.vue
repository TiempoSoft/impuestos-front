<template>
  <div class="app-container">
    <el-card class="row">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-select style="margin-top : 0.8% ; margin-left :1%" v-model="valueModels">
           <el-option
                  v-for="item in optionsmodels"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
        </el-select>
        <el-menu-item index="1" id="elmenu" label="Responsable inscripto" @click="RespInc1()">Responsable inscripto</el-menu-item>
        <el-menu-item index="3" id="elmenu1" label="Responsable no inscripto" @click="RespnoInc1()">Responsable no inscripto</el-menu-item>
        <el-menu-item index="4" id="elmenu2" label="Consumidor final" @click="ConsFin1()">Consumidor final</el-menu-item>
        <el-button @click="EncontrarTabla">Boton1</el-button>
      </el-menu>
    </el-card>
    <el-card>
      <div class="col-70">
        <el-table
        :data="options"
        ref="tablaref"
        >
        <el-table-column
            prop="value"
            label="Detalle"
            width="400"
            :formatter="dateFormat"
        >
        </el-table-column>
        <el-table-column
            prop="FormRespInsc1"
            id="Columndos"
            :label="label(data)"
            width="500"
            :formatter="dateFormat"
        >
        </el-table-column>
        </el-table>
      </div>
      <div class="col-30">
        <el-card>
          <div class="row">
            <div class="col-100">
              <el-select style="width: 100%" v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>


<script>
import Vue from 'vue';  
import Axios from "axios";
import RespInsc1 from "./components/ResponsInsc";
export default {
  
data() {   
    return {
      components: {
        RespInsc1
      },
      datos_ver_comprobantes : {},
      elmenu :"",
      options: [
        {
          value: "Neto",
          FormRespInsc1: "1",
        },
        {
          value: "Iva debito fiscal",
          FormRespInsc1: "2",
        },
        {
          value: "Importes no gravados",
          FormRespInsc1: "3",
        },
        {
          value: "Impuestos internos",
          FormRespInsc1: "4",
        },
        {
          value: "Iva percepción",
          FormRespInsc1: "5",
        },
        {
          value: "Exentos",
          FormRespInsc1: "6",
        },
        {
          value: "Comercio exterior",
          FormRespInsc1: "7",
        },
        {
          value: "Imp.Municipales",
          FormRespInsc1: "8",
        },
      ],
      options2: [
        {
          value: "Neto",
          label: "Neto",
          FormRespInsc1: "",
        },
        {
          value: "Iva debito fiscal",
          label: "Iva debito fiscal",
          FormRespInsc1: "",
        },
        {
          value: "Importes no gravados",
          label: "Importes no gr43avados",
          FormRespInsc1: "",
        },
        {
          value: "Impuestos internos",
          label: "Impuestos inter3243nos",
          FormRespInsc1: "",
        },
        {
          value: "Iva percepción",
          label: "Iva 12",
          FormRespInsc1: "",
        },
        {
          value: "Exentos",
          label: "Exentos",
          FormRespInsc1: "32",
        },
        {
          value: "Comercio exterior",
          label: "Comercio exterior",
          FormRespInsc1: "12",
        },
        {
          value: "Imp.Municipales",
          label: "Imp.Municipales",
          FormRespInsc1: "32",
        },
      ],
       optionsmodels: [
        {
          value: "Modelo 1",
          label: "Modelo 1",
        },
        {
          value: "Modelo 2",
          label: "Modelo 2",
        },
      ],
      label :"Orden",
      value: "",
      nombreColumn :"",
      valueModels :"",
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
      label(data){
        this.label = "formula"
        return this.label
      },
      RespInc1(){
        this.elmenu = document.getElementById("elmenu").innerText;
        this.$refs.tablaref._props.data = this.options2
        this.label();
      },
       RespnoInc1(){
        this.elmenu = document.getElementById("elmenu1").innerText;
      },
       ConsFin1(){
        this.elmenu = document.getElementById("elmenu2").innerText;
      },
      EncontrarTabla(){
        let columnados = document.getElementById("Columndos").__vue__.$options.propsData.label
        console.log(document.getElementById("Columndos").__vue__.$options)
      }
  },
   created() {
    Axios.get("http://localhost:3000/ivacomp").then((result) => {
      this.datos_ver_comprobantes = result.data;
      this.$refs.tablaref._props.data = this.options
      console.log("datos", this.datos_ver_comprobantes);
    });
  },
};
</script>
<style scoped>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
label {
  padding: 6px 6px 6px 0;
  display: inline-block;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  margin-bottom: 1px;
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
.col-70 {
  float: left;
  width: 70%;
  margin-top: 6px;
  padding-bottom: 5px;
}
/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
  padding-bottom: 5px;
}
.col-100 {
  float: left;
  width: 99%;
  margin-top: 6px;
  padding-bottom: 5px;
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
