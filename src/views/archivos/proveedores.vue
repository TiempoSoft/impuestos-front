<template>
  <div class="app-container">
    <div class="col-100">
      <el-card>
        <el-table
          :data="this.datos_proveedores"
          highlight-current-row
          @current-change="handleCurrentChange"
        >
          <el-table-column label="Proveedores" align="center" prop="razon">
            <el-table-column label="Descripción" align="center" prop="razon">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-card>
    </div>
    <div class="footer-botones col-100">
      <el-card style="display: flex; justify-content: center">
        <el-button @click.native.prevent="ModalNuevoProveedor()" type="primary"
          >Nuevo</el-button
        >
        <el-button @click.native.prevent="eliminar_datos()" type="danger"
          >Eliminar</el-button
        >
        <el-button type="info" @click.native.prevent="ModalEditarProveedor()"
          >Editar</el-button
        >
        <el-button>Listar</el-button>
        <el-button>Buscar</el-button>
      </el-card>
    </div>
    <modal
      name="ModalNuevoProveedor"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
      draggable=".app-container"
    >
      <ModalNuevoProveedor :datos="this.datos_proveedores" />
    </modal>
    <modal
      name="ModalEditarProveedor"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
      draggable=".app-container"
    >
      <ModalEditarProveedor :DatosModal="this.todosLosDatos" />
    </modal>
  </div>
</template>
<script>
import Axios from "axios";
import ModalNuevoProveedor from "./components/proveedores/ModalNuevoProveedor";
import ModalEditarProveedor from "./components/proveedores/ModalEditarProveedor";

const datos_proveedores = [];
export default {
  components: {
    ModalNuevoProveedor,
    ModalEditarProveedor,
  },
  data() {
    return {
      datos_proveedores: "",
      currentRow: null,
      todosLosDatos: {},
    };
  },
  methods: {
    ModalNuevoProveedor() {
      this.$modal.show("ModalNuevoProveedor");
    },
    ModalEditarProveedor() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Editar un Proveedor", {
          confirmButtonText: "OK",
        });
      } else {
        this.$modal.show("ModalEditarProveedor");
      }
    },
    handleCurrentChange(val) {
      this.todosLosDatos = val;
      this.currentRow = val.codig;
      console.log("val", this.currentRow);
      console.log("valores", this.todosLosDatos);
    },
    eliminar_datos() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Eliminar Proveedor", {
          confirmButtonText: "OK",
        });
      } else {
        Axios.delete("http://localhost:3000/prov/" + this.currentRow)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 200) {
              this.$alert(
                "Usted elimino el proveedor con exito.",
                "Eliminar Proveedor",
                {
                  confirmButtonText: "OK",
                  callback: (action) => {
                    location.reload();
                  },
                }
              );
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
    Axios.get("http://localhost:3000/prov/").then((result) => {
      this.datos_proveedores = result.data;
      console.log("datos_proveedores", this.datos_proveedores);
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
