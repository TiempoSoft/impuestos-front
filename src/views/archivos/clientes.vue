<template>
  <div class="app-container">
    <div class="col-100">
      <el-card>
        <el-table :data="this.datos_clientes"
          highlight-current-row
          @current-change="handleCurrentChange"
          >
          <el-table-column label="Clientes"  align="center" prop="cnombre">
            <el-table-column label="Descripción"  align="center" prop="cnombre">
            </el-table-column>
          </el-table-column>     
        </el-table>
      </el-card>
    </div>
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
    <modal
      name="ModalEditarCliente"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
    >
      <ModalEditarClientes :DatosAModificarClientes="this.datosRow" />
    </modal>
    <modal
      name="ModalNuevoCliente"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="auto"
      :clickToClose="false"
    >
      <ModalNuevoClientes />
    </modal>
  </div>
</template>
<script>
import Axios from "axios";
import ModalEditarClientes from "./components/clientes/ModalEditarClientes";
import ModalNuevoClientes from "./components/clientes/ModalNuevoClientes";
const datos_clientes = [];
export default {
  components: {
    ModalEditarClientes,
    ModalNuevoClientes
  },
  data() {
    return {
      datos_clientes: "",
      currentRow: null,
      datosRow : {}
    };
  },
  methods :{
   eliminar_datos() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un Proveedor.", "Eliminar Proveedor", {
          confirmButtonText: "OK",
        });
      } else {
        Axios.delete("http://localhost:3000/ctaclien/" + this.currentRow.cnumero)
          .then((result) => {
            console.log("result" + JSON.stringify(result));
            if (result.status === 201) {
              this.$alert("Usted elimino el proveedor con exito.", "Eliminar Proveedor", {
                confirmButtonText: "OK",
                callback: (action) => {
                  location.reload()
                },
              });
            }
          })
          .catch(function (err) {
            console.log(err);
            if (err) {
              console.log(this);
              alert("El cliente seleccionado tiene comprobantes registrados. No puede borrarlo")
            }
          });
      }
    },
     AbrirModalEditar() {
      if (this.currentRow === null) {
        this.$alert("Seleeccione un cliente.", "Editar un cliente", {
          confirmButtonText: "OK",
        });
      } else {
        this.$modal.show("ModalEditarCliente");
      }
    },
    AbrirModalNuevo(){
        this.$modal.show("ModalNuevoCliente");
    },
    handleCurrentChange(val) {
      this.datosRow = val;
      this.currentRow = val;
      console.log("val", this.currentRow);
      console.log("valores", this.datosRow);
    },
  },
  

  created() {
    Axios.get("http://localhost:3000/ctaclien/").then((result) => {
      this.datos_clientes = result.data;
      console.log("datos_clientes", this.datos_clientes);
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