<template>
  <div class="app-container">
    <!-- Cabecera  -->
    <el-card style="height: 30px">
      <div style="margin-top: -15px" class="col-10">
        <img src="/Q_tiempo.jpg" alt="Smiley face" width="20vw" />
      </div>
      <div class="titulo col-70">
        <h3 style="margin-left: 40%; margin-top: -12px"></h3>
      </div>
      <div class="col-5-close closeModal">
        <el-button
          @click="$modal.hide('ModalTablatabcarNew')"
          style="position: absolute; top: 3%; right: 5%"
          type="number"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <div class="row">
      <el-card>
        <div class="col-00">
          <label for="">Año: </label>
          <el-input
            type="year"
            laber="Año"
            v-model="this.Añio"
            placeholder="Año"
          ></el-input>
        </div>
        <el-table
          :data="formulario"
          align="center"
          height="400"
          style="width: 100%; margin-top: 2%"
          id="Tabla"
        >
          <el-table-column label="Mes" prop="mes" align="center">
          </el-table-column>
          <el-table-column label="Alta cony" prop="acony" align="center">
            <template>
              <el-input-number
                v-model="this.formulario[0].acony"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="Baja cony" prop="bcony" align="center">
            <template>
              <el-input-number
                v-model="this.formulario[0].bcony"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="Alta hijo" prop="ahijo" align="center">
            <template>
              <el-input-number
                v-model="this.formulario[0].ahijo"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="Baja hijo" prop="bhijo" align="center">
            <template>
              <el-input-number
                v-model="this.formulario[0].bhijo"
              ></el-input-number>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="row">
      <div class="col-16">
        <el-button type="danger" @click="$modal.hide('ModalTablatabcarNew')"
          >Cerrar</el-button
        >
      </div>
      <div class="col-25">
        <el-button type="primary" @click="ActualizarCrud()">Aceptar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import AbrirModalTabcar from "../archivos/tablaLiquiGanancias";
import Axios from "axios";
export default {
  // components:{
  // AbrirModalTabcar
  // },
  props: [""],
  data() {
    return {
      //Array para alrmar tabla
      formulario: [
        {
          acony: 0.0,
          ahijo: 0.0,
          anio:0,
          bcony: 0.0,
          bhijo: 0.0,
          mes: 1,
        },
        {
          mes: 2,
        },
        {
          mes: 3,
        },
        {
          mes: 4,
        },
        {
          mes: 5,
        },
        {
          mes: 6,
        },
        {
          mes: 7,
        },
        {
          mes: 8,
        },
        {
          mes: 9,
        },
        {
          mes: 10,
        },
        {
          mes: 11,
        },
        {
          mes: 12,
        },
      ],
      //Datos a enviar
      Formulario_crud: [
        {
          anio: this.Añio,
          mes:1,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        
        },
        {
          anio: this.Añio,
          mes:2,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:3,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:4,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:5,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:6,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:7,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:8,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:9,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:10,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:11,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
        {
          anio: this.Añio,
          mes:12,
          acony: 0,
          bcony: 0,
          ahijo: 0,
          bhijo: 0,
        },
      ],
      Añio: "",
      datos_tabcar: "",
      aniosEnArray: "",
      valueAnio: "",
    };
  },
  methods: {
    //Arma el formulario y envia datos.
    ActualizarCrud() {
      let input = document.getElementsByTagName("input");
      console.log("input", input);
      this.Formulario_crud[0].mes = this.formulario[0].mes;
      this.Formulario_crud[0].acony = input[5].value;
      console.log("crud lleno: ", this.Formulario_crud[0].acony);
      this.Formulario_crud[0].bcony = input[6].value;
      this.Formulario_crud[0].ahijo= input[7].value;
      this.Formulario_crud[0].bhijo= input[8].value;
      this.Formulario_crud[1].acony= input[9].value;
      this.Formulario_crud[1].bcony= input[10].value;
      this.Formulario_crud[1].ahijo= input[11].value;
      this.Formulario_crud[1].bhijo= input[12].value;
      this.Formulario_crud[2].acony= input[13].value;
      this.Formulario_crud[2].bcony= input[14].value;
      this.Formulario_crud[2].ahijo= input[15].value;
      this.Formulario_crud[2].bhijo= input[16].value;
      this.Formulario_crud[3].acony= input[17].value;
      this.Formulario_crud[3].bcony= input[18].value;
      this.Formulario_crud[3].ahijo= input[19].value;
      this.Formulario_crud[3].bhijo= input[20].value;
      this.Formulario_crud[4].acony= input[21].value;
      this.Formulario_crud[4].bcony= input[22].value;
      this.Formulario_crud[4].ahijo= input[23].value;
      this.Formulario_crud[4].bhijo= input[24].value;
      this.Formulario_crud[5].acony= input[25].value;
      this.Formulario_crud[5].bcony= input[26].value;
      this.Formulario_crud[5].ahijo= input[27].value;
      this.Formulario_crud[5].bhijo= input[28].value;
      this.Formulario_crud[6].acony= input[29].value;
      this.Formulario_crud[6].bcony= input[30].value;
      this.Formulario_crud[6].ahijo= input[31].value;
      this.Formulario_crud[6].bhijo= input[32].value;
      this.Formulario_crud[7].acony= input[33].value;
      this.Formulario_crud[7].bcony= input[34].value;
      this.Formulario_crud[7].ahijo= input[35].value;
      this.Formulario_crud[7].bhijo= input[36].value;
      this.Formulario_crud[8].acony= input[37].value;
      this.Formulario_crud[8].bcony= input[38].value;
      this.Formulario_crud[8].ahijo= input[39].value;
      this.Formulario_crud[8].bhijo= input[40].value;
      this.Formulario_crud[9].acony= input[41].value;
      this.Formulario_crud[9].bcony= input[42].value;
      this.Formulario_crud[9].ahijo= input[43].value;
      this.Formulario_crud[9].bhijo= input[44].value;
      this.Formulario_crud[10].acony= input[45].value;
      this.Formulario_crud[10].bcony= input[46].value;
      this.Formulario_crud[10].ahijo= input[47].value;
      this.Formulario_crud[10].bhijo= input[48].value;
      this.Formulario_crud[11].acony= input[49].value;
      this.Formulario_crud[11].bcony= input[50].value;
      this.Formulario_crud[11].ahijo= input[51].value;
      this.Formulario_crud[11].bhijo= input[52].value;
      //POST para insertar dato.
      console.log("Form", this.formulario);
      Axios.post("http://localhost:3000/tabcar/", this.Formulario_crud).then(
        (result) => {
          console.log("result" + JSON.stringify(result));
          if (result.status === 201) {
            this.$alert("Usted actualizo con exito.", {
              confirmButtonText: "OK",
              callback: (action) => {
                location.reload()
              },
            });
          }
        }
      ); 
      this.$modal.hide('ModalTablatabcarNew');
    },
    AbrirModalTabcar() {
      console.log("datos_tabcar", this.formulario);

      for (let i = 0; i < 20; i++) {
        console.log(this.datos_tabcar.keys);
      }
    },
  },
  created() {
    Axios.get("http://localhost:3/tabcar/").then((result) => {
      this.datos_tabcar = result.data;
      this.aniosEnArray = Object.keys(this.datos_tabcar);
      console.log(this.datos_tabcar);
      console.log(this.datos);
    });
  },
};
</script>
<style scoped>
/* Style inputs, select elements and numberareas */
input[type="number"],
select,
numberarea {
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
  background-color: #ffffff;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-00 {
  float: left;
  width: 13%;
  margin-right: 3%;
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
  float: right;
  margin-right: 1%;
  width: 30%;
  margin-top: 6px;
}
.col-15 {
  float: right;
  margin-right: 1%;
  width: 30%;
  margin-top: 6px;
}
.col-16 {
  float: right;
  margin-right: 1%;
  width: 30%;
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
  margin-left: 15%;
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
  margin-top: 2%;
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