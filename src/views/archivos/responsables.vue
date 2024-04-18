<template>
  <div class="app-container">
    <div class="col-100">
      <el-card>
        <el-table :data="this.datos_responsable" highlight-current-row
          @current-change="handleCurrentChange">
          <el-table-column align="center" label="Responsables">
            <el-table-column label="nrocli" align="center" prop="nrocli">
            </el-table-column>
            <el-table-column label="Responsables" align="center" prop="apeynom">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-card>
      <div class="footer-botones col-100">
      <el-card style="display : flex ; justify-content:center">
        <el-button
          @click.native.prevent="AbrirModalNuevo()"
          type="primary"
        >Nuevo</el-button>
        <el-button
          @click.native.prevent="eliminar_datos()"
          type="danger"
        >Eliminar</el-button>
        <el-button
          type="info"
          @click.native.prevent="AbrirModalEditar()"
        >Editar</el-button>
        <el-button>Listar</el-button>
        <el-button>Buscar</el-button>
      </el-card>
    </div>
    </div>
      <modal
      name="ModalEditarResponsable"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
      draggable=".app-container"
    >
      <EditarResponsables :DatosParaEditar ="this.todosLosDatos"/>
    </modal>
      <modal
      name="ModalNuevoResponsable"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
      draggable=".app-container"
    >
      <NuevoResponsables/>
    </modal>
  </div>
</template>
<script>

import Axios from "axios";
import EditarResponsables from "./components/responsables/ModalEditarResponsables"
import NuevoResponsables from "./components/responsables/ModalNuevoResponsable"
const datos_responsable = [];
export default {
  
  components :{
    EditarResponsables,
    NuevoResponsables
  },
  data() {
    return {
      datos_responsable:"",
      currentRow: null,
      todosLosDatos : {},
    };
  },
  methods :{
    increment() {
    this.$store.commit('increment')
    console.log(this.$store.state.a.count)
  },
    handleCurrentChange(val) {
      this.todosLosDatos = val;
      this.currentRow = val.nrocli;
      console.log("val", this.currentRow);
      console.log("valores", this.todosLosDatos);
    },
    AbrirModalEditar(){
      this.$modal.show("ModalEditarResponsable")
    },
    AbrirModalNuevo(){
      this.$modal.show("ModalNuevoResponsable")
    },
    eliminar_datos() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Eliminar Proveedor", {
          confirmButtonText: "OK",
        });
      } else {
        Axios.delete("http://localhost:3000/cliente/" + this.currentRow)
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
          .catch(function (err) {
            console.log("puto el que lee", typeof err);
            if (err === "Error: Request failed with status code 400") {
              console.log("puto culo concha");
            }
          });
      }
    },
  },
  created() {
    Axios.get("http://localhost:3000/cliente/").then((result) => {
      this.datos_responsable = result.data;
      console.log("datos_responsable", this.datos_responsable);
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