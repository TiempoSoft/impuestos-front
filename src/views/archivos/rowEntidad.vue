<template>
  <el-container class="container">
    <el-card class="card">
      <div class="flexForm">
        <div class="formClass">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="Nombre:">
              <el-input v-model="rowEntidad.name" class="inputClass"></el-input>
            </el-form-item>
            <el-form-item label="Dirección:">
              <el-input
                v-model="rowEntidad.address"
                class="inputClass"
              ></el-input>
            </el-form-item>
            <el-form-item label="País:">
               <el-select
                  class="inputClass"
                  v-model="rowEntidad.country_id"
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
                  v-model="rowEntidad.state_id"
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
                   v-model="rowEntidad.locality_id"
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
                v-model="rowEntidad.cuit_number"
                class="inputClass"
                @input="formattedCUIT"
              ></el-input>
            </el-form-item>
            <el-form-item label="Tipo Entidad:">
                <el-select
                  class="inputClass"
                  v-model="rowEntidad.status"
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
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="N° Ing. Brutos:">
              <el-input
                v-model="rowEntidad.taxes_id"
                class="inputClass"
              ></el-input>
            </el-form-item>
            <el-form-item label="Tipo Iva:">
                <el-select
                  class="inputClass"
                  v-model="rowEntidad.entity_type"
                  placeholder="Tipo Iva"
                >
                  <el-option
                    v-for="item in tipoIva"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            <el-form-item label="N° IIBB retención:">
              <el-input
                v-model="rowEntidad.retention_ib_number"
                class="inputClass"
              ></el-input>
            </el-form-item>
            <el-form-item label="N° IIBB percepción:">
              <el-input
                v-model="rowEntidad.perception_ib_number"
                class="inputClass"
              ></el-input>
            </el-form-item>
            <el-form-item label="Cuenta compra:">
              <el-input
                v-model="rowEntidad.imputation_purchase"
                class="inputClass"
              ></el-input>
            </el-form-item>
            <el-form-item label="Cuenta venta:">
              <el-input
                v-model="rowEntidad.imputation_sales"
                class="inputClass"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
         <div class="tableClass">
            <el-table :data="tableData" style="width: 100%" margin-top="20px">
              <el-table-column label="Punto de Venta" prop="ptoVenta" width="180">            
              </el-table-column>
            </el-table>
      </div>
      <div>
        <el-button type="primary" @click="editarEntidad()">EDITAR</el-button>
      </div>
    </el-card>
  </el-container>
</template>

<script>
/* import Papa from "papaparse"; */
import { updateByEntitiesTenantId, getCheckCuit } from "../../api/request/entities.tenant";
import {getPaises, getProvincias, getLocalidades, getEntityStatus, generarArrayAleatorio, getTipoIVa} from "../../utils/dataSelectPaises"

export default {
  props: ["row"],
  data() {
    return {
      tableData: generarArrayAleatorio(), 
      paises: getPaises(),
      tipoIva: getTipoIVa(),
      provincias: getProvincias(),
      localidades: getLocalidades(),
      tipoEntidad: getEntityStatus(),
      validate: true,
      cuit: this.row.cuit,
      rowEntidad: {
        entities_id: this.row.id,
        name: this.row.nombre,
        address: this.row.direccion,
        taxes_id: this.row.impuestos,
        entity_type: this.row.tipoEntidad,
        company_id: this.row.compania,
        created_at: this.row.fechaCreacion,
        document_id: this.row.dni,
        updated_at: null,
        country_id: this.row.pais,
        state_id: this.row.provincia,
        locality_id: this.row.localidad,
        imputation_sales: this.row.imputacionVenta,
        imputation_purchase: this.row.imputacionCompra,
        imputation_passive: "1",
        entities_codtext_1: "",
        entities_codtext_2: "",
        cuit_number: this.row.cuit,
        retention_ib_number: this.row.retencion,
        perception_ib_number: this.row.percepcion,
        users_id: 1,
        finished_at: null,
        status:this.row.status
      },
    };
  },
  methods: {
     async checkCUIT(cuit) {
      let entityCuitValidate = await getCheckCuit(cuit)
  return entityCuitValidate
    }, 
    editarEntidad() {
      if (this.validate === true && this.rowEntidad.cuit_number != this.cuit) {
          this.$message({
        message: "CUIT existente, por favor revisar entidades",
        type: "error",
      });
      } else {
        try {
          console.log("row entidad a update", this.rowEntidad);
          this.rowEntidad.country_id === this.row.pais ? this.rowEntidad.country_id = this.row.pais_id : this.rowEntidad
          this.rowEntidad.state_id === this.row.provincia ? this.rowEntidad.state_id = this.row.provincia_id : this.rowEntidad
          this.rowEntidad.locality_id === this.row.localidad ? this.rowEntidad.locality_id = this.row.localidad_id : this.rowEntidad
          updateByEntitiesTenantId(this.rowEntidad);
          this.closeModal()
          this.$message({
          message: "Entidad modificada Exitosamente!",
          type: "success",
          });
          
        } catch (error) {
          this.$message({
          message: "Error: ", error,
          type: "error",
        });
        }
      }
      
    },

    closeModal() {
      this.$emit('modal-closed', this.rowEntidad);
      this.$modal.hide("rowEntidad")// You can pass data if needed
    },

   async formattedCUIT() {
      let inputNumbers = this.rowEntidad.cuit_number.replace(/\D/g, "")
      const firstTwoDigits = inputNumbers.slice(0, 2);
      const firstElevenDigits =
        firstTwoDigits +
        (inputNumbers.length > 2 ? "-" + inputNumbers.slice(2,10) : "");
      this.rowEntidad.cuit_number =  firstElevenDigits +
        (inputNumbers.length > 9 ? "-" + inputNumbers.slice(10) : "");
        if (this.rowEntidad.cuit_number.endsWith("-")) {
      this.rowEntidad.cuit_number = this.rowEntidad.cuit_number.slice(0, -1);
        }
      if (this.rowEntidad.cuit_number.length > 13) {
        this.rowEntidad.cuit_number = this.rowEntidad.cuit_number.slice(0, 13);
      }
        if (this.rowEntidad.cuit_number.length === 13) {
          this.validate = await this.checkCUIT(this.rowEntidad.cuit_number)
          if (this.validate === true && this.rowEntidad.cuit_number!= this.cuit) {
            this.$message({
        message: "CUIT existente, por favor revisar entidades",
        type: "error",
      });
          }
        }
    }
    
  },
  created() {
    console.log(this.row);
  },
};
</script>

<style>
.importarComprob {
  width: 100%;
}
.table-wrapper {
  overflow-x: auto;
  /* max-width: 100%; */
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}
.card {
  width: 100%;
  height: 100%;
}
.container {

  max-height: 670px;
  /* Establece la altura máxima deseada */
  overflow-y: auto;
  /* Permite el desplazamiento vertical si el contenido excede la altura máxima */

  margin-top: 1%;
}
.flexForm {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-around;
}
.buttonClass {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
}
</style>
