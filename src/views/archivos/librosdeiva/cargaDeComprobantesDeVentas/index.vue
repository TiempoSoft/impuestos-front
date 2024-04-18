<template>
  <div class="app-container">
    <div class="col-100">
      <el-card id="container-body">
        <div class="col-100" style="display: flex ;justify-content:space-between">
            <el-button @click="PrevPage()">Prev</el-button>
            <el-button @click="NextPage()">Next</el-button>
        </div>
        <el-table id="table" :data="this.Dato_CargaComDCom">
          <el-table-column
            align="center"
            label="Cargar comprobante de gastos"
            style="width: 100%"
          >
            <el-table-column
              align="center"
              prop="campo"
              label="Nombre de columna"
              width="300"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="incluye"
              label="Incluir (S/N)"
              width="250"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="rg4056"
              label="Opera.CITI"
              width="200"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="imputa"
              label="Percepción"
            >
            </el-table-column>
            <el-table-column
              align="center"
              prop="imputa"
              label="Imputaciòn"
            >
              <div>
                <el-checkbox id="CheckTable" @change="EnabledCheckbox()"></el-checkbox>
              </div>
            </el-table-column>
            <el-table-column
              align="center"
              prop=""
              label="Tipo Percepc"
              width="200"
              ><div>
                <select
                  class="form-select"
                  aria-label="Disabled select example"
                  disabled
                  @mouseover="ValidateSelect()"
                >
                  <option selected>Tipo percepción</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </el-table-column>
          </el-table-column>
        </el-table>
        <div id="table2" style="display : none">
        <el-table id="table" :data="this.Dato_CargaComDCom">
          <el-table-column
            align="center"
            label="Cargar comprobante de gastos"
            style="width: 100%"
          >
            <el-table-column
              align="center"
              prop="campo"
              label="Nombre de columna"
              width="350"
            >
            </el-table-column>
            <el-table-column
              align="center"
              label="P/RESP. INSCRIP"
              width="300"
            >
            </el-table-column>
            <el-table-column
              align="center"

              label="P/RESP. NO INSCRIP"
              width="350"
            >
            </el-table-column>
            <el-table-column
              align="center"
              label="P/CONSUM. FINAL"
              
            >
            </el-table-column>

            </el-table-column>
          
        </el-table>
        </div>
      </el-card>
    </div>
    <div
      class="col-100"
      style="margin-top: 4%; display: flex; justify-content: center"
    >
      <div class="col-25">
        <el-button class="button" onMouseover="EnabledCheckbox">Nuevo</el-button>
      </div>
      <div class="col-25">
        <el-button class="button">Editar</el-button>
      </div>

      <div class="col-25">
        <el-button class="button">Listar</el-button>
      </div>

      <div class="col-25">
        <el-button class="button">Buscar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      Dato_CargaComDCom: "",
      DivTable:""
    };
  },
  methods: {
    PrevPage(){
      let tableBody2 = document.getElementById('table2');
      tableBody2.style.display = "none";
      let tableBody = document.getElementById('table');
      tableBody.style.display = "block";
    },
    NextPage(){
       let tableBody = document.getElementById('table');
      tableBody.style.display = "none";
      let tableBody2 = document.getElementById('table2');
      tableBody2.style.display = "block";
    },
    ValidateSelect(){
      let select = document.getElementsByClassName("form-select");
      for(let i = 0; i < select.length ; i++){
        select[i].addEventListener('mouseover' , function(){
          console.log(document.getElementById('button'));
          if(select[i].disabled === true){
              select[i].title = 'Habilite check para ser usado'
          }else 
          if(select[i].disabled === false){
            select[i].title = ''          
            }
        })
      }
    },
    EnabledCheckbox() {
      let select = document.getElementsByClassName("form-select");
      let check = document.getElementsByClassName("el-checkbox");
      for (let i = 0; i < select.length; i++) {
        if (check[i].control.checked === true) {
          select[i].disabled = false
        }else if(check[i].control.checked === false){
          select[i].disabled = true
        }
      }
    },
  },
  created() { 
    Axios.get("http://localhost:3000/imputa/cuentasVenta").then((result) => {
      this.Dato_CargaComDCom = result.data;
      console.log("Imputa", this.Dato_CargaComDCom);
    });
  },
  beforeUpdate(){
    this.DivTable = document.getElementById('table');
    console.log(this.DivTable);
  }
};
</script>
<style scoped>
.button {
  width: 50%;
}
.tableStyle {
  width: 70%;
}
.tableStyleButton {
  width: 25%;
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
  padding-bottom: 5px;
}
.col-90 {
  float: left;
  width: 89%;
  margin-top: 6px;
  padding-bottom: 5px;
}
.col-100 {
  float: left;
  width: 98%;

  margin: 6px 1% 2% 1%;
  padding-bottom: 5px;
}
</style>

