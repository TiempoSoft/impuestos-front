<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Entidad">
      <el-card class="cardClass">
        <el-row :gutter="20">
          <el-col :span="12" :offset="5">
            <el-input 
            placeholder="Ingrese un nombre o CUIT" 
            v-model="search"
            @change="searchEntities"
            ></el-input>
          </el-col>
          <el-col :span="5">
            <el-button style="margin-top: 2%;" type="primary" round @input="searchEntities"
              >Buscar</el-button
            >
          </el-col>
        </el-row>
        <br/>
      
        <el-row style="height: auto;">
          <el-col :span="12" :offset="8">
          <el-checkbox v-model="checkClientes">Clientes</el-checkbox>
           <el-checkbox v-model="checkProveedores">Proveedores</el-checkbox>
  </el-col>
        </el-row>
      
        <div class="flexClass">
          <div class="tableClass">
            <el-table :data="updateTable" style="width: 100%" margin-top="20px">
              <el-table-column label="Nombre Empresa" prop="nombre" width="180">
              </el-table-column>
              <el-table-column label="CUIT" prop="cuit" width="140">
              </el-table-column>
              <el-table-column label="País" prop="pais" width="130">
              </el-table-column>
              <el-table-column label="Provincia" prop="provincia" width="130">
              </el-table-column>
              <el-table-column label="Localidad" prop="localidad" width="160">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-row>
                    <el-button
                      size="mini"
                      type="info"
                      @click="openEditModal(scope.row)"
                    >
                      Editar
                    </el-button>
                  </el-row>
                  <el-row>
                    <el-button
                      size="mini"
                      type="danger"
                      @click="updateEntityFinishDate(scope.row.id)" 
                    >
                      Anular
                    </el-button>
                  </el-row>
                  
                </template>
              </el-table-column>
            </el-table>
          <div class="pagination-container">
            <el-pagination
   layout="prev, pager, next"
   :page-count="totalPages"
   :pager-size="10"
   :current-page.sync="currentPage"
   @current-change="setCurrentPage"
   :hide-on-single-page="true"
  >
 </el-pagination>
 </div>
            <modal
                    :overlayOpacity="0"
                    name="rowEntidad"
                    :reset="true"
                    width="70%"
                    draggable=".app-container"
                    :clickToClose="true"
                    height="90%"
                    @modal-closed="onModalClosed"
                  >
                    <rowEntidad :row="scopeEntidad" />
                  </modal>
          </div>

          <div class="pagination">
            <!--   <el-pagination @size-change="handleSizeChange" :total="50">
            </el-pagination> -->
          </div>
        </div>
        <el-row :gutter="20">
          <el-col :span="10" :offset="5"> </el-col>
        </el-row>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="Nuevo/Editar">
      <el-card class="nuevaEntidadClass">
        <div class="flexForm">
          <div>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="Nombre:">
                <el-input
                  v-model="insertEntidades.nameEntity"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="Dirección:">
                <el-input
                  v-model="insertEntidades.direccion"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="País:">
                <el-select
                  class="inputClass"
                  v-model="insertEntidades.pais"
                  placeholder="Pais"
                >
                  <el-option
                    v-for="item in paises"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Provincia:">
                <el-select
                  class="inputClass"
                  v-model="insertEntidades.provincia"
                  placeholder="Provincia"
                >
                  <el-option
                    v-for="item in provincias"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Localidad:">
                <el-select
                  class="inputClass"
                  v-model="insertEntidades.localidad"
                  placeholder="Pais"
                >
                  <el-option
                    v-for="item in localidades"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="CUIT:">
                <el-input
                  v-model="insertEntidades.cuit"
                  class="inputClass"
                  @input="formattedCUIT"
                ></el-input>
              </el-form-item>
               <el-form-item label="Tipo Entidad:">
                <el-select
                  class="inputClass"
                  v-model="insertEntidades.status"
                  placeholder="Cliente / Proveedor"
                >
                  <el-option
                    v-for="item in tipoEntidad"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>
          <div class="formClass2">
            <el-form ref="form" label-width="150px">
              <el-form-item label="N° Ing. Brutos:">
                <el-input
                  v-model="insertEntidades.impuestos"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="Categoría:">
                <el-input
                  v-model="insertEntidades.tipoEntidad"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="N° IIBB retención:">
                <el-input
                  v-model="insertEntidades.retencion"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="N° IIBB percepción:">
                <el-input
                  v-model="insertEntidades.percepcion"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="Cuenta compra:">
                <el-input
                  v-model="insertEntidades.imputacionCompra"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              <el-form-item label="Cuenta venta:">
                <el-input
                  v-model="insertEntidades.imputacionVenta"
                  class="inputClass"
                ></el-input>
              </el-form-item>
              
            </el-form>
          </div>
        </div>
        <div class="divisorbutton">
          <div>
            <el-button type="primary" @click="editarEntidad()"
              >EDITAR</el-button
            >
            <el-button type="primary" @click="anularEntidad()"
              >BORRAR CAMBIOS</el-button
            >
          </div>
          <div>
            <el-button type="primary" @click="createEntities()"
              >CREAR ENTIDAD</el-button
            >
          </div>
        </div>
      </el-card>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import { getEntitiesFromTenantById } from "../../../src/api/request/entities.tenant";
import { createEntitiesTenantId, finishDateEntitiesTenant, getCheckCuit, updateByEntitiesTenantId, getAllEntities, getEntitiesByCuit, getEntitiesByName } from "../../../src/api/request/entities.tenant";
import { deleteEntity } from "../../../src/api/request/entities.tenant";
import { discoverEntitiesFromTenant } from "../../../src/api/request/entities.tenant";
import rowEntidad from "../archivos/rowEntidad.vue";
import {getPaises, getProvincias, getLocalidades, getEntityStatus} from "../../utils/dataSelectPaises"

export default {
  components: { rowEntidad },
  data() {
    return {
      entidad: [], 
        searchFlag: false, 
        itemsPerPage: 6,
        currentPage: 1,
      checkClientes: false, 
      checkProveedores: false, 
      tableData: [],
      entidades: [],
      validate: false,
      tipoEntidad: getEntityStatus(),
      paises: getPaises(),
      provincias: getProvincias(),
      localidades: getLocalidades(),
      search: "",
      scopeEntidad: {},
      insertEntidades: {
        nameEntity: "",
        pais: "",
        provincia: "",
        localidad: "",
        direccion: "",
        impuestos: "",
        tipoEntidad: "",
        compania: "",
        dni: "",
        cuit: "",
        retencion: "",
        percepcion: "",
        imputacionVenta: "",
        imputacionCompra: "",
        imputacionPasiva: "",
        fechaCreacion: "",
        fechaActualizacion: "",
        status:"", 
      },
    };
  },
  methods: {
    async searchEntities() { 
      if (this.search.length >= 4) {
        this.searchFlag = true
        if (/^[0-9]+$/.test(this.search)) {
          let param  = this.search.length < 11 ? this.search.slice(0,2)+"-"+ this.search.slice(2) : this.search.slice(0,2)+"-"+ this.search.slice(2,10)+"-"+this.search.slice(11)
          this.entidad = await getEntitiesByCuit(param)
          {
          this.tableData, this.entidad = this.entidad.map((entity) => ({
            id: entity.entities_id,
            nombre: entity.name,
            pais: entity.country_name,
            pais_id: entity.country_id,
            provincia: entity.state_name,
            provincia_id: entity.state_id,
            localidad: entity.locality_name,
            localidad_id: entity.locality_id,
            direccion: entity.address,
            impuestos: entity.taxes_id,
            tipoEntidad: entity.entity_type,
            compania: entity.company_id,
            dni: entity.document_id,
            cuit: entity.cuit_number,
            retencion: entity.retention_ib_number,
            percepcion: entity.perception_ib_number,
            imputacionVenta: entity.imputation_sales,
            imputacionCompra: entity.imputation_purchase,
            imputacionPasiva: entity.imputation_passive,
            fechaCreacion: entity.created_at,
            fechaActualizacion: entity.updated_at,
            status: entity.status,
          }));
        }
        } else {
          this.entidad = await getEntitiesByName(this.search)
          {
          this.tableData, this.entidad = this.entidad.map((entity) => ({
            id: entity.entities_id,
            nombre: entity.name,
            pais: entity.country_name,
            pais_id: entity.country_id,
            provincia: entity.state_name,
            provincia_id: entity.state_id,
            localidad: entity.locality_name,
            localidad_id: entity.locality_id,
            direccion: entity.address,
            impuestos: entity.taxes_id,
            tipoEntidad: entity.entity_type,
            compania: entity.company_id,
            dni: entity.document_id,
            cuit: entity.cuit_number,
            retencion: entity.retention_ib_number,
            percepcion: entity.perception_ib_number,
            imputacionVenta: entity.imputation_sales,
            imputacionCompra: entity.imputation_purchase,
            imputacionPasiva: entity.imputation_passive,
            fechaCreacion: entity.created_at,
            fechaActualizacion: entity.updated_at,
            status: entity.status,
          }));
        }
         }
      } else {
        this.searchFlag = false
        this.getEntidades()
      }
    },
    async clearInputs() {
      this.insertEntidades = {
        nameEntity: "",
        pais: "",
        provincia: "",
        localidad: "",
        direccion: "",
        impuestos: "",
        tipoEntidad: "",
        compania: "",
        dni: "",
        cuit: "",
        retencion: "",
        percepcion: "",
        imputacionVenta: "",
        imputacionCompra: "",
        imputacionPasiva: "",
        fechaCreacion: "",
        fechaActualizacion: "",}
},
 async checkCUIT(cuit) {
      let entityCuitValidate = await getCheckCuit(cuit)
  return entityCuitValidate
    }, 
    formatCuitForApi(input) {
    if (input.length === 4 && !input.includes("-")) {
      
    }
},
     async formattedCUIT() {
      let inputNumbers = this.insertEntidades.cuit.replace(/\D/g, "")
      const firstTwoDigits = inputNumbers.slice(0, 2);
      const firstElevenDigits =
        firstTwoDigits +
        (inputNumbers.length > 2 ? "-" + inputNumbers.slice(2,10) : "");
      this.insertEntidades.cuit =  firstElevenDigits +
        (inputNumbers.length > 9 ? "-" + inputNumbers.slice(10) : "");
        if (this.insertEntidades.cuit.endsWith("-")) {
    this.insertEntidades.cuit = this.insertEntidades.cuit.slice(0, -1);
        }
      if (this.insertEntidades.cuit.length > 13) {
        this.insertEntidades.cuit = this.insertEntidades.cuit.slice(0, 13);
      }
        if (this.insertEntidades.cuit.length === 13) {
          this.validate = await this.checkCUIT(this.insertEntidades.cuit)
          if (this.validate === true) {
            this.$message({
        message: "CUIT existente, por favor revisar entidades",
        type: "error",
      });
          }
        }
    },

    openEditModal(entidad) {
      this.scopeEntidad = entidad;
      this.$modal.show("rowEntidad");
    },

    onModalClosed(data) { //terminar de armar, no actualiza la tabla cuando sale del modal
      this.getEntidades()
    },
    async getEntidades() {
      try {
        this.entidad = await getAllEntities();
        {
          this.tableData, this.entidad = this.entidad.map((entity) => ({
            id: entity.entities_id,
            nombre: entity.name,
            pais: entity.country_name,
            pais_id: entity.country_id,
            provincia: entity.state_name,
            provincia_id: entity.state_id,
            localidad: entity.locality_name,
            localidad_id: entity.locality_id,
            direccion: entity.address,
            impuestos: entity.taxes_id,
            tipoEntidad: entity.entity_type,
            compania: entity.company_id,
            dni: entity.document_id,
            cuit: entity.cuit_number,
            retencion: entity.retention_ib_number,
            percepcion: entity.perception_ib_number,
            imputacionVenta: entity.imputation_sales,
            imputacionCompra: entity.imputation_purchase,
            imputacionPasiva: entity.imputation_passive,
            fechaCreacion: entity.created_at,
            fechaActualizacion: entity.updated_at,
            status: entity.status,
          }));
        }
      } catch (error) {
        console.error("Error en getEntities", error);
      }
    },

    async updateEntityFinishDate(entityId) {
      try {
        const entity = {
          id: entityId,
        };
        const response = await finishDateEntitiesTenant(entity);
        if (response) {
          console.log("Entidad Anulada Exitosamente:", response);
          this.$message({
            message: "Entidad Anulada Exitosamente!",
            type: "success",
          });
          this.getEntidades();
        } else {
          console.error("Error al actualizar entidad: ", response);
        }
      } catch (error) {
        console.error("Error en la llamada a la API: ", error);
      }
    },
    async createEntities() {
      try {
         if (this.validate === true && this.rowEntidad.cuit_number != this.cuit) {
          this.$message({
        message: "CUIT existente, por favor revisar entidades",
        type: "error",
      });
      }else{
        const newEntity = await createEntitiesTenantId({
          name: this.insertEntidades.nameEntity,
          country_id: this.insertEntidades.pais,
          state_id: this.insertEntidades.provincia,
          locality_id: this.insertEntidades.localidad,
          address: this.insertEntidades.direccion,
          taxes_id: this.insertEntidades.impuestos,
          entity_type: this.insertEntidades.tipoEntidad,
          company_id: 1,
          document_id: 1,
          cuit_number: this.insertEntidades.cuit,
          retention_ib_number: this.insertEntidades.retencion,
          perception_ib_number: this.insertEntidades.percepcion,
          imputation_sales: this.insertEntidades.imputacionVenta,
          imputation_purchase: this.insertEntidades.imputacionCompra,
          status: this.insertEntidades.status
          //imputation_passive: this.insertEntidades.imputacionPasiva,
          //created_at: "2023-08-31",
          //updated_at: this.insertEntidades.fechaActualizacion,
          //entities_codtext_1: this.insertEntidades.,
          //entities_codtext_2: this.insertEntidades.,
          //users_id: 2,
        });
        console.log("Entidad creada con exito!");
        this.$message({
          message: "Entidad Creada Exitosamente!",
          type: "success",
        });
        this.clearInputs()
           this.getEntidades();
        }
      } catch (error) {
        this.$message({
          message: "Error", error,
          type: "error",
        });
      }
    },
  },

  async editarEntidad(id) {
    let entity = this.entidades;
    entityEdited = await updateByEntitiesTenantId(id);
  },

  setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
  computed: {
  
    updateTable() {
      if (this.checkClientes === true && this.checkProveedores === false) {
        this.tableData = this.entidad.filter(entidad => entidad.status === 1)
       const start = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.tableData.slice(start, end);
      } else if (this.checkProveedores === true && this.checkClientes === false) {
         this.tableData = this.entidad.filter(entidad => entidad.status === 2)
         const start = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.tableData.slice(start, end);
      } else if (this.checkProveedores === true && this.checkClientes === true) {
        this.tableData = this.entidad.filter(entidad => entidad.status === 3)
        const start = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.tableData.slice(start, end);
      } else if (this.checkProveedores === false) {
           this.tableData = this.entidad
         const start = this.currentPage === 1 ? 0 : (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
      console.log(this.entidad);
        return this.entidad.slice(start, end)
      }
    }, 
    selectedCountryObject() {
      return this.countries.find(
        (country) => country.id === this.selectedCountryId
      );
    },

    totalPages() {
      return Math.ceil(this.tableData.length / this.itemsPerPage);
    },
  },
  async created() {
    await this.getEntidades();
    await this.editarEntidad();
    await this.anularEntidad();
  },
};
</script>
<style scoped>
.flexClass {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tableClass {
  margin-top: 10px;
  margin-left: 20px;
  width: 80%;
}

.pagination {
  margin-top: 20px;
}

.flexForm {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
}

.guardarButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 4%;
  margin-right: 4%;
}

.divisorbutton {
  margin-top: 3%;
  margin-bottom: 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.pagination-container {
  margin-top: 20px; /* Adjust the margin to your preferred spacing */
  display: flex;
  justify-content: center;
}
</style>
