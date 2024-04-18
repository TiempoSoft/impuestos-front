<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Empresa">
        <el-card>
          <el-form :inline="true" :model="ruleForm" ref="ruleForm">
            <div class="row">
              <div class="col-15">
                <label for="fname">Nombre de la empresa</label>
              </div>
              <div class="col-20">
                <input type="text" id="fname" name="firstname" placeholder="Your name.." v-model="company.name" />
              </div>
              <div class="col-10">
                <label for="fname">Dirección</label>
              </div>
              <div class="col-25">
                <input type="text" id="fname" name="firstname" placeholder="Domicilio" v-model="company.address" />
              </div>
              <div class="col-15">
                <input type="text" id="fname" name="firstname" placeholder="Localidad" v-model="company.locality_id" />
              </div>
              <div class="col-15">
                <input type="text" id="fname" name="firstname" placeholder="Provincia" v-model="company.state_id" />
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <label for="fname">C.P</label>
              </div>
              <div class="col-10">
                <input type="text" id="fname" name="firstname" placeholder="5500" v-model="company.postal_code"/>
              </div>
              <div class="col-5">
                <label for="fname">CUIT</label>
              </div>
              <div class="col-15">
                <input type="text" id="fname" name="firstname" placeholder="30-11111111-8" v-model="company.company_cuit"/>
              </div>
              <div class="col-10">
                <label for="fname">I.V.A</label>
              </div>
              <div class="col-20">
                <input type="text" id="fname" name="firstname" placeholder="INSCRIPTO" v-model="company.vat_ib_id"/>
              </div>
              <div class="col-15">
                <label for="fname">Tipo de menú</label>
              </div>
              <div class="col-20">
                <select v-model="Tipodemenu">
                  <option label="Grafico" value=""></option>
                  <option label="Arbol" value=""></option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-15">
                <label for="fname">Ingresos brutos</label>
              </div>
              <div class="col-20">
                <input type="text" id="fname" name="firstname" placeholder="1234567" v-model="company.company_ibr" />
              </div>
              <div class="col-10">
                <label for="fname">Actividad</label>
              </div>
              <div class="col-20">
                <input type="text" id="fname" name="firstname" placeholder="Contador" v-model="company.company_activity"/>
              </div>
              <div class="col-25">
                <input type="text" id="fname" name="firstname" placeholder="832111" v-model="company.company_activity_name"/>
              </div>
            </div>
            <div class="row">
              <div class="col-20">
                <label for="fname">N° Agente de percepción</label>
              </div>
              <div class="col-15">
                <input type="text" id="fname" name="firstname" placeholder="630 Mendoza" v-model="company.company_perception"/>
              </div>
              <div class="col-10">
                <label for="fname">D.G.I</label>
              </div>
              <div class="col-15">
                <input type="text" id="fname" name="firstname" placeholder="630 Mendoza" />
              </div>
            </div>
          </el-form>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getCompanyFromTenantById } from "@/api/request/companies.tenant";
import {createNewCompanyInTenant} from "@/api/request/companies.tenant"
import {updateCompanyInTenant } from "@/api/request/companies.tenant";
import {deleteCompanyInTenant} from "@/api/request/companies.tenant"

import ModalDatosGenerales from "../archivos/components/datos_generales/modalDatosGenerales";
export default {
  components: { ModalDatosGenerales },

  data() {
    return {
      company: {
        company_id: "",
        name: "",
        taxes_id: "",
        address: "",
        postal_code: "",
        phone_number: "",
        email: "",
        website: "",
        created_at: "",
        vat_ib_id: "",
        country_id: "",
        state_id: "",
        locality_id: "",
        updated_at: "",
        company_expiration: "",
        business_activities_id: "",
        company_cuit: "",
        company_ibr: "",
        companies_codtext_1: "",
        companies_codtext_2: "",
        company_perception: "",
        company_activity: "",
        company_activity_name: "",
      }
    };
  },
  methods: {
  },

  async created() {
    const company = await getCompanyFromTenantById(6);
    if (company) this.company = company;
  },

};
</script>

<style scoped>
input[type="text"],

select,
textarea {
  width: 100%;
  padding: 6px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

input[type="number"] {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

.CheckStyle {
  margin-top: 10px;
}

label {
  font-size: 12px;
  padding: 8px 8px 8px 0;
  display: inline-block;
}

input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buttonWidth {
  width: 60%;
}

.row {
  margin-top: 5px;
}

.contenedor {
  width: 80%;
  margin: auto;
}

.col-1 {
  float: left;
  width: 2%;
  margin-right: 1%;
  margin-top: 6px;
}

.col-5 {
  float: left;
  width: 4%;
  margin-right: 1%;
  margin-top: 6px;
}

.col-8 {
  float: left;
  width: 7%;
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
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 74%;
  margin-top: 6px;
  padding-bottom: 5px;
}

.col-100 {
  float: left;
  width: 99%;
  margin-top: 6px;
  padding-bottom: 5px;
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