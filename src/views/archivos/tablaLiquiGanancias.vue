<template>
  <div class="app-container">
    <el-alert
      :closable="true"
      title="Tablas para de liquidacion ganacias"
    ></el-alert>
    <el-tabs type="border-card"
    @tab-click="reiniciarcurrenRow()"
    >
      <el-tab-pane label="Deduccion por carga familiar">
        <el-card>
          <el-form>
            <el-table
              :data="this.tabcarFinal" highlight-current-row
              @current-change="handleCurrentChange"
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
            >
              <el-table-column
                label="Deduccion por carga familiar"
                align="center"
                prop="anio"
              >
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalTabcarNew()" >Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalTabcar()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="ModalTablatabcar"
          :scrollable="true"
          :reset="true"
          width="70%"
          height="auto"
        >
          <ModalTablatabcar :Datos="this.DfinalT"/>
        </modal>
        <modal
          name="ModalTablatabcarNew"
          :scrollable="true"
          :reset="true"
          width="70%"
          height="auto"
        >
          <ModalTablatabcarNew />
        </modal>
      </el-tab-pane>
      <!-- !!!!!!!!!!!!!!!!!!!!!!! 2da tabla!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <el-tab-pane label="Coeficientes de actualizacion">
        <el-card>
          <el-form>
            <el-table
              :data="this.datos_coefact"
              highlight-current-row
              @current-change="handleCurrentChange"
              label="Coeficientes de actuali."
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
              ><el-table-column
                align="center"
                label="Coeficientes de actualización"
              >
                <el-table-column
                  align="center"
                  prop="dia"
                  label="Año/Mes/Día/Hora"
                >
                </el-table-column>
                <el-table-column
                  label="Coeficientes "
                  align="center"
                  prop="calc"
                ></el-table-column>
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalCoefactNew()">Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalcoefac()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="ModalTablacoefact"
          :scrollable="true"
          :reset="true"
          width="40%"
          height="auto"
        >
          <ModalTablacoefact :Datos="this.currentRow" />
        </modal>
        <modal
          name="ModalTablacoefactNew"
          :scrollable="true"
          :reset="true"
          width="40%"
          height="auto"
        >
          <ModalTablacoefactNew />
        </modal>
      </el-tab-pane>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 3ra tabla!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <el-tab-pane label="Liquidacion del impuesto a las ganancias" >
        <el-card>
          <el-form>
            <el-table
              :data="this.datos_tablaLiquiGanancias"
              highlight-current-row
              @current-change="handleCurrentChange"
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
              ><el-table-column
                align="center"
                label="Tabla  de liquidacion del impuesto a las ganancias"
              >
                <el-table-column label="Año" align="center" prop="anio">
                </el-table-column>
                <el-table-column
                  label="De"
                  align="center"
                  prop="de"
                ></el-table-column>
                <el-table-column
                  label="Hasta"
                  align="center"
                  prop="hasta"
                ></el-table-column>
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalLiquiNew()"
                >Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalLiqui()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="ModalTablaliqui"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <ModalTablaliqui :Datos="this.currentRow" />
        </modal>
        <modal
          name="ModalTablaliquiNew"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <ModalTablaliquiNew />
        </modal>
      </el-tab-pane>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4ta tabla!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <el-tab-pane label="Deduccion">
        <el-card>
          <el-form>
            <el-table
              :data="this.concdeduFinal"
              highlight-current-row
              @current-change="handleCurrentChange"
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
            >
              <el-table-column label="Deduccion" align="center" prop="anio">
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalconcdeduNew()">Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalconcdedu()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="ModalTablaconcdedu"
          :scrollable="true"
          :reset="true"
          width="55%"
          height="auto"
        >
          <ModalTablaconcdedu :Datos="this.Dfinal" />
        </modal>
        <modal
          name="ModalTablaconcdeduNew"
          :scrollable="true"
          :reset="true"
          width="55%"
          height="auto"
        >
          <ModalTablaconcdeduNew />
        </modal>
      </el-tab-pane>
      <!-- /////////////////////////////////5ta tabla////////////////////////// -->
      <el-tab-pane label="Equivalencia de monedas">
        <el-card>
          <el-form>
            <el-table
              :data="this.datos_equivale"
              highlight-current-row
              @current-change="handleCurrentChange"
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
              ><el-table-column
                label="Equivalencia de las monedas"
                align="center"
              >
                <el-table-column
                  label="De"
                  align="center"
                  prop="fechain"
                ></el-table-column>
                <el-table-column label="Hasta" align="center" prop="fechafin">
                </el-table-column>
                <el-table-column label="Moneda" align="center" prop="signomon">
                </el-table-column>
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalequivaleNew()">Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalequivale()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="Modaltablaequivale"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <Modaltablaequivale :Datos="this.currentRow" />
        </modal>
        <modal
          name="ModaltablaequivaleNew"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <ModaltablaequivaleNew />
        </modal>
      </el-tab-pane>
      <!-- ///////////////////////6ta tabla//////////////////////////////////// -->
      <el-tab-pane label="Reduccion de deducciones personales">
        <el-card>
          <el-form>
            <el-table
              :data="this.datos_redudedu"
              highlight-current-row
              @current-change="handleCurrentChange"
              align="center"
              height="400"
              style="width: 100%; margin-top: 2%"
              ><el-table-column
                label="Reduccion de las deducciones personales"
                align="center"
              >
                <el-table-column label="Año" align="center" prop="anio">
                </el-table-column>
                <el-table-column label="De" align="center" prop="desde">
                </el-table-column>
                <el-table-column label="Hasta" align="center" prop="hasta">
                </el-table-column>
              </el-table-column>
            </el-table>
            <div class="col-75">
              <el-row>
                <el-button type="primary" @click="AbrirModalredudeduNew()">Nuevo</el-button>
                <el-button>Borrar</el-button>
                <el-button type="primary" @click="AbrirModalredudedu()"
                  >Editar</el-button
                >
                <el-button>Lista</el-button>
                <el-button>Buscar</el-button>
              </el-row>
            </div>
          </el-form>
        </el-card>
        <modal
          name="Modaltablaredudedu"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <Modaltablaredudedu :Datos="this.currentRow" />
        </modal>
        <modal
          name="ModaltablaredudeduNew"
          :scrollable="true"
          :reset="true"
          width="60%"
          height="auto"
        >
          <ModaltablaredudeduNew />
        </modal>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
//Import De modales
import Axios from "axios";
import ModalTablatabcar from "./components/liquidacion_ganacias/editar/modalLiquitablatabcar";
import ModalTablacoefact from "./components/liquidacion_ganacias/editar/modalLiquitablacoefact";
import ModalTablaliqui from "./components/liquidacion_ganacias/editar/modalLIquitablaliqui";
import ModalTablaconcdedu from "./components/liquidacion_ganacias/editar/modalLiquitablaconcdedu";
import Modaltablaequivale from "./components/liquidacion_ganacias/editar/modalLiquitablaequivale";
import Modaltablaredudedu from "./components/liquidacion_ganacias/editar/modalLiquitablaredudedu";
//New 
import ModalTablatabcarNew from "./components/liquidacion_ganacias/new/modalLiquitablatabacarNew"
import ModalTablacoefactNew from "./components/liquidacion_ganacias/new/modalLiquitablacoefactNew";
import ModalTablaliquiNew  from "./components/liquidacion_ganacias/new/modalLiquitablaliquiNew";
import ModalTablaconcdeduNew from "./components/liquidacion_ganacias/new/modalLiquitablaconcdeduNew";
import ModaltablaequivaleNew from  "./components/liquidacion_ganacias/new/modalLiquitablaequivaleNew";
import ModaltablaredudeduNew from "./components/liquidacion_ganacias/new/modalLiquitablaredudeduNew";
//Todas las tablas como array

const datos_tablaLiquiGanancias = [];
const datos_coefact = [];
const datos_equivale = [];
const datos_tabcar = [];
const datos_redudedu = [];
const datos_concdedu = [];

export default {
//Modales definidos.
components: {
    //Update
    ModalTablatabcar,
    ModalTablacoefact,
    ModalTablaliqui,
    ModalTablaconcdedu,
    Modaltablaequivale,
    Modaltablaredudedu,
    //NEWs
    ModalTablacoefactNew,
    ModalTablatabcarNew,
    ModalTablaliquiNew,
    ModalTablaconcdeduNew,
    ModaltablaequivaleNew,
    ModaltablaredudeduNew,
  },

  data() {
    return {
      //Todas las tablas por get.
      datos_tablaLiquiGanancias: "",
      datos_coefact: "",
      datos_equivale: "",
      datos_tabcar: "",
      datos_redudedu: "",
      datos_concdedu: "",
      dataModal:"",

      //Datos para modals
      currentRow:null,
      Dfinal:null,
      DfinalT:null,


      //Arrays de objetos para funciones
      tabcarFinal: [{}],
      concdeduFinal: [{}],
      coefactFinal: [{}],

      //Strings para funciones
      Stringtabcar: "",
      Stringdcoefact: "",
      Stringconcdedu: "",
    };
  },

  methods: {
    //Reinicia el currentRow para que las alertas y llamadas a los modalales funcionene correctamente
    reiniciarcurrenRow() {
      this.currentRow=null
      console.log("RowActuali: ",this.currentRow )
    },

    //Metodos para abrir modales  
    AbrirModalTabcarNew() {
      this.$modal.show("ModalTablatabcarNew");
      // console.log("modal tabcar", this.currentRow);
    },
    AbrirModalTabcar() 
    {if (this.currentRow === null) {
        this.$alert("Seleeccione un Dato.", {
          confirmButtonText: "OK",
        });
    }else{
      let dataModal = this.FiltrarAñoTabcar();
      this.DfinalT=dataModal;
      console.log("Movimientos : ", this.DfinalT);
      this.$modal.show("ModalTablatabcar");
      // console.log("modal concdedu",  this.currentRow);
    }},
    //2da Pestaña
    AbrirModalcoefac() 
    {if (this.currentRow === null) {
        this.$alert("Seleeccione un Dato.", {
          confirmButtonText: "OK",
        });
      }else {
      this.$modal.show('ModalTablacoefact')
      // console.log("modal coefact",  this.currentRow);
    } 
    },
    AbrirModalCoefactNew(){
      this.$modal.show("ModalTablacoefactNew");
    },
    //3ra Pestaña
    AbrirModalLiqui() {
      if (this.currentRow===null){
        this.$alert("Seleeccione un Dato.",{
        confirmButtonText:"OK"
      });
      }else{this.$modal.show("ModalTablaliqui");
      }
      // console.log("modal ",  this.currentRow);
    },
    // 4ta Pestaña
    //Si el current Row es null no habre el modal.Si Abre el modal y lo  rellena con la tabla correspondiente
    // Usando la funcion "FiltrarAño".
    AbrirModalconcdedu()
    {if (this.currentRow === null) {
        this.$alert("Seleeccione un Dato.", {
          confirmButtonText: "OK",
        });
    }else{
      let dataModal = this.FiltrarAño();
      this.Dfinal=dataModal;
      // console.log("Movimientos : ", this.Dfinal);
      this.$modal.show("ModalTablaconcdedu");
      // console.log("modal concdedu",  this.currentRow);
      return this.Dfinal;
    }
    },
    
    AbrirModalconcdeduNew() {
      this.$modal.show("ModalTablaconcdeduNew");
      // console.log("modal concdedu",  this.currentRow);
    },
    //5ta Pestaña
    AbrirModalequivale() 
    {if (this.currentRow === null) {
        this.$alert("Seleeccione un Dato.", {
          confirmButtonText: "OK",
        });
    }else{
      this.$modal.show("Modaltablaequivale");
        // console.log("modal equivale",  this.currentRow);
    }
    },

    AbrirModalequivaleNew() {
      this.$modal.show("ModaltablaequivaleNew");
      // console.log("modal equivale",  this.currentRow);
    },
    //6ta Pestaña
    AbrirModalredudedu() 
    {if (this.currentRow === null) {
        this.$alert("Seleeccione un Dato.", {
          confirmButtonText: "OK",
        });
    }else{
      this.$modal.show("Modaltablaredudedu");
      // console.log("modal redudedu",  this.currentRow);
    }
    },
    AbrirModalredudeduNew() {
      this.$modal.show("ModaltablaredudeduNew");
      // console.log("modal redudedu",  this.currentRow);
    },

    //Valores en las lineas selecionadas. 
    handleCurrentChange(val) {
      this.currentRow = val;
      // console.log(this.currentRow);
      },

    //Agrupa los datos, agrega el string.
    Agrupartabcarystring() {
      for (let i = 0; i <= this.datos_tabcar.length; i++) {
        this.Stringtabcar =
          "Deducciones para el año fiscal " + this.datos_tabcar[i].anio;
        this.tabcarFinal.push({ anio: this.Stringtabcar });
        //Seleciona uno de cada 12.
        i = i + 12;
      }
    },
    // Lee los ultimos 4 dijitos de el string para quedarse solo con el año, con este dato puede filtrar la tabla. 
    FiltrarAño(){  
    let concdeduData;
    let Añio = this.currentRow.anio.substr(-4)
    // let result = datos_coefact.filter(Items => Items.anio === Añio)
    this.datos_concdedu.forEach(element => {
      if (element.anio.toString() === Añio)
      {
        concdeduData = element;
      }
    });
    return concdeduData;
    },
    //Filtro para Tabcar.
    FiltrarAñoTabcar(){  
    let TabcarData = [];
    let Añio = this.currentRow.anio.substr(-4)
    // let result = datos_coefact.filter(Items => Items.anio === Añio)
    this.datos_tabcar.forEach(element => {
      if (element.anio.toString() === Añio)
      {
        TabcarData.push(element);
      
      }
    });
    return TabcarData;
    },

    //Agrega el string.
    Concdeduystring() {
      for (let i = 0; i <= this.datos_concdedu.length; i++) {
        this.Stringconcdedu =
          "Deducciones para el año fiscal " + this.datos_concdedu[i].anio;
        this.concdeduFinal.push({ anio: this.Stringconcdedu });
        //  console.log("tabla final", this.concdeduFinal)
      }
    },

    //Seleciona las partes utiles, agrega los decimales
    ConseguirAño() {
      for (let i = 0; i <= this.datos_coefact.length; i++) {
        this.Stringdcoefact = this.datos_coefact[i].dia.substr(0, 4);
      }
    },
  },

  created() {
    //"1"   
    Axios.get("http://localhost:3000/tabcar/").then((result) => {
      this.datos_tabcar = result.data;
      console.log("datos_tabcar", this.datos_tabcar);
      this.Agrupartabcarystring();
    });
    //"2"
    Axios.get("http://localhost:3000/coefact/").then((result) => {
      this.datos_coefact = result.data;
      // console.log("datos_coefact", this.datos_coefact);
      this.ConseguirAño();
    });
    //"3"
    Axios.get("http://localhost:3000/tablagan/").then((result) => {
    this.datos_tablaLiquiGanancias = result.data;
    // console.log("datos_tablaLiquiGanancias", this.datos_tablaLiquiGanancias);
    });
    //"4"
    Axios.get("http://localhost:3000/concdedu/").then((result) => {
      this.datos_concdedu = result.data;
      // console.log("datos_concdedu", this.datos_concdedu);
      this.Concdeduystring();
    });
    //"5"
    Axios.get("http://localhost:3000/equivale/").then((result) => {
      this.datos_equivale = result.data;
      // console.log("datos_equivale", this.datos_equivale);
    });
    //"6"
    Axios.get("http://localhost:3000/redudedu/").then((result) => {
      this.datos_redudedu = result.data;
      // console.log("datos_redudedu", this.datos_redudedu);
    });
  },
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
  float: right;
  width: 50%;
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
  float: right;
  width: 70%;
  margin-top: 6px;
  padding-bottom: 5px;
}
</style>
