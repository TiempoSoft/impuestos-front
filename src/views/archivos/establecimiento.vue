<template>
  <div class="app-container">
    <div class="col-100" >
      <el-card>
        <el-table :data="this.datos_establecimiento" highlight-current-row
          @current-change="handleCurrentChange">
          <el-table-column align="center" label="Establecimientos">
            <el-table-column align="center" prop="numero" label="Numero" width="auto">
            </el-table-column>
            <el-table-column align="center" prop="domi" label="Domicilio" width="auto">
            </el-table-column>
            <el-table-column align="center" prop="localidad" label="Localidad" width="auto">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="footer-botones col-100">
      <el-card style="display : flex ; justify-content:center">
        <el-button
          @click.native.prevent="OpenModalNewEsta()"
          type="primary"
        >Nuevo</el-button>
        <el-button
          @click.native.prevent="eliminar_datos()"
          type="danger"
        >Eliminar</el-button>
        <el-button
          type="info"
          @click.native.prevent="OpenModalEditEsta()"
        >Editar</el-button>
        <el-button>Listar</el-button>
        <el-button>Buscar</el-button>
      </el-card>
    </div>
     <modal
      name="ModalNuevoEsta"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
    >
      <Esta />
    </modal>
    <modal
      name="ModalEditarEsta"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      
    >
      <EstaEdit :datos="this.datosaPasar"/>
    </modal>
  </div>  
</template>
<script>
import Axios from "axios";
import Esta from './components/establecimientos/ModalNuevoEsta'
import EstaEdit from './components/establecimientos/ModalEditarEsta'
const datos_establecimiento = [];
export default {
  components :{Esta , EstaEdit},
  data() {
    return {
      datos_establecimiento: "",
      datosaPasar : {},
      currentRow : null
    };
   
  },
  methods:{
    handleCurrentChange(val) {
      this.datosaPasar = val;
      this.currentRow = val.numero
      console.log("valores", this.datosaPasar);
    },
    OpenModalNewEsta(){
      this.$modal.show('ModalNuevoEsta')
    },
     OpenModalEditEsta(){
      this.$modal.show('ModalEditarEsta')
    },
    eliminar_datos() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Eliminar Proveedor", {
          confirmButtonText: "OK",
        });
      } else {
        Axios.delete("http://localhost:3000/establec/" + this.currentRow)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 200) {
              this.$alert("Usted elimino el proveedor con exito.", "Eliminar Proveedor", {
                confirmButtonText: "OK",
                callback: (action) => {
                  this.$router.push({ path: "/archivos/proveedores" });
                },
              });
            }
          })
          .catch((result) => {
             console.log("result" + JSON.stringify(result));
            if (result.response.data.statusCode === 400){
              this.$alert("El establecimiento seleccionado tiene comprobantes de venta registrados. No puede borrarlo", {
                confirmButtonText: "OK",
                callback: (action) => {
                  window.location.reload();
                },
              });
            }
          });
      }
    },
  },
  created() {
    Axios.get("http://localhost:3000/establec/").then((result) => {
      this.datos_establecimiento = result.data;
      console.log("datos_establecimiento", this.datos_establecimiento);
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
.col-100 {
  float: left;
  width: 98%;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 6px;
  padding-bottom: 5px;
}
</style>