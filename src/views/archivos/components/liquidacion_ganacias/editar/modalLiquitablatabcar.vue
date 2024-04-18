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
          @click="$modal.hide('ModalTablatabcar')"
          style="position: absolute; top: 3%; right: 5%"
          type="text"
          icon="el-icon-close"
        >
        </el-button>
      </div>
    </el-card>
    <div class="row">
        <el-card>
          <div class="col-00">
            <label for="">Año: </label>
            <el-input laber="Año" disabled v-model="Datos[1].anio"></el-input>
          </div>
          <el-table
            :data="this.Datos"
            align="center"
            height="400"
            style="width: 100%; margin-top: 2%"
          ><el-table-column label="Año">
            <el-table-column label="Mes" prop="mes" align="center">
            </el-table-column>
            <el-table-column label="Alta cony" prop="acony" align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <laber>Editar:</laber>
                  <el-input
                  size="mini"
                  placeholder="..."
                  v-model="scope.row.acony">
                </el-input>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.acony }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="Baja cony" prop="bcony" align="center">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <laber>Editar:</laber>
                  <el-input
                  size="mini"
                  placeholder="..."
                  v-model="scope.row.bcony">
                </el-input>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.bcony }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="Alta hijo" prop="ahijo" align="center">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <laber>Editar:</laber>
                  <el-input
                  size="mini"
                  placeholder="..."
                  v-model="scope.row.ahijo">
                </el-input>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.ahijo }}</el-tag>
                  </div>
                </el-popover>
              </template></el-table-column>
            <el-table-column label="Baja hijo" prop="bhijo" align="center">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <laber>Editar:</laber>
                  <el-input
                  size="mini"
                  placeholder="..."
                  v-model="scope.row.bhijo">
                </el-input>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.bhijo }}</el-tag>
                  </div>
                </el-popover>
              </template></el-table-column>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    <div class="row">
      <div class="col-16">
        <el-button type="danger" @click="$modal.hide('ModalTablatabcar')">Cerrar</el-button>
      </div>
      <div class="col-25">
        <el-button type="primary" @click="Actualiza()">Aceptar</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {

  props:["Datos"],
  data() {
    return {
      Formulario_crud: [
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:1,

        
        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:2,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:3,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:4,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:5,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:6,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:7,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:8,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:9,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:10,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:11,

        },
        {
          acony: 0,
          ahijo: 0,
          anio: this.Datos[1].anio,
          bcony: 0,
          bhijo: 0,
          mes:12,

        },
      ],
      Datos:"",
    };
  },
  methods: {
    AxiosUpdate(Crud){
      // console.log('Pre put: ',Crud);
      Axios.put("http://localhost:3000/tabcar/",Crud)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status !== 200) {
              this.$alert("Disculpame pero sos muy tonto.", {
                confirmButtonText: "OK",
                callback: (action) => {
                  // location.reload()
                },
              });
            }
          });
    },
    ForAxios(){
      for(let i = 0; i < 12;i++){
      this.AxiosUpdate(this.Formulario_crud[i])
    }},
    Actualiza(){
      let cell = document.getElementsByTagName("span");
        let acony= 42
        let bcony = 44
        let ahijo = 46
        let bhijo = 48
        let l=0
      for(let i=1;i<13;i++,l++) { //Bucle con dos varialbel para armarel Crud 
      this.Formulario_crud[l].acony=parseFloat(cell[acony].innerText)
      this.Formulario_crud[l].bcony=parseFloat(cell[bcony].innerText) 
      this.Formulario_crud[l].ahijo=parseFloat(cell[ahijo].innerText) 
      this.Formulario_crud[l].bhijo=parseFloat(cell[bhijo].innerText) 
        acony = acony+8
        bcony = bcony+8
        ahijo = ahijo+8
        bhijo = bhijo+8
      }
      console.log("Formulario editado: ", this.Formulario_crud);
      this.ForAxios();
      // this.$modal.hide('ModalTablatabcar');
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
.col-16 {
  float: left;
  margin-right: 1%;
  margin-left: 25%;
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
  margin-left: 5%;
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