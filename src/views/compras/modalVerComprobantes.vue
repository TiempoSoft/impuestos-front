<template>
  <div class="containter">
    <el-form :inline="true" :model="formulario" :rules="rules" ref="formulario">
      <div style="margin-left: 1.3rem;">
        <el-row :gutter="20">
          <el-col :span="7">
            <el-form-item label="Comprobante:">
              <el-select default-first-option="" v-model="formulario.invoice.invoice_class" placeholder="Comprobante"
                @change="updateTipoSelect" size="mini" required>
                <el-option v-for="classType in tableOfCLassTypeInvoice" :key="classType.id" :label="classType.claseTipo"
                  :value="classType.numeroAfip">
                </el-option>
              </el-select>

              <el-select class="select2" v-model="formulario.invoice.invoice_type" placeholder="Clase Tipo" size="mini">
                <el-option v-for="classType in tableOfCLassTypeInvoice" :key="classType.id" :label="classType.siglas"
                  :value="classType.siglas">
                </el-option>
              </el-select>

            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="N°:">
              <el-input type="text" v-model="formulario.invoice.vouchers_point" maxlength="5" size="mini"
                placeholder="00000" @blur="rellenarConCerosNROEST(formulario.invoice.vouchers_point, 5)"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="text" v-model="formulario.invoice.invoice_number" size="mini" maxlength="8"
                placeholder="00000000" @blur="rellenarConCerosNC(formulario.invoice.invoice_number, 8)"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="Fecha:">
              <el-date-picker v-model="formulario.invoice.invoice_date" size="mini" type="date" format="dd/MM/yyyy"
                class="select2">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="Imputacion:">
              <el-date-picker v-model="formulario.invoice.month_charge" size="mini" type="month" format="MM/yyyy"
                class="select2">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="N° CAE:">
              <el-input type="text" v-model="formulario.invoice.invoice_cae" size="mini" maxlength="10"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Vto CAE:">
              <el-date-picker v-model="formulario.invoice.invoice_date_cae" type="date" format="dd/MM/yyyy" size="mini">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="Establecimiento:">
              <el-select v-model="formulario.invoice.company_id" placeholder="Establecimiento" size="mini"
                @change="updateCUITOptions">
                <el-option v-for="company in tablaCompanies" :key="company.id" :label="company.nombre"
                  :value="company.id"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Proveedor:">
              <el-select v-model="formulario.invoice.entity_id" placeholder="Selecciona un Proveedor" size="mini">
                <el-option v-for="entidad in tableData" :key="entidad.id" :label="entidad.nombre"
                  :value="entidad.id"></el-option></el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
          </el-col>
        </el-row>
      </div>
      <el-card shadow="hover">

        <!-- CAPOCAPOCAPOACAEMPIEZALACARD< -->
        <!-- Primera Columna -->
        <el-row>


          <el-col :span="8">
            <!-- NETO -->

            <el-row>
              <el-col :span="10" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
              <el-col :span="2" :offset="0"> <el-input type="text" size="mini" class="uniform-input"
                  v-model="formulario.invoice.invoice_net" @change="calcularTotal"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>

            <el-row>
              <!-- IVA DEBITO FISCAL -->

              <el-row>
                <el-col :span="10"><el-form-item label="IVA DEBITO FISCAL:" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.sumIvas"
                    class="uniform-input" size="mini" placeholder="0"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- COMERCIO EXTERIOR -->

              <el-row>
                <el-col :span="10"><el-form-item label="COMERCIO EXTERIOR :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[16].value"
                    class="uniform-input" size="mini" placeholder="0"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IVA PERCEPCIÓN -->

              <el-row>
                <el-col :span="10"><el-form-item label="IVA PERCEPCIÓN :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[3].value"
                    class="uniform-input" placeholder="0" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IMPUESTOS INTERNOS -->

              <el-row>
                <el-col :span="10"><el-form-item label="IMPUESTOS INTERNOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[4].value"
                    class="uniform-input" placeholder="0" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IMPORTES NO GRAVADOS -->

              <el-row>
                <el-col :span="10"><el-form-item label="IMPORTES NO GRAVADOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" placeholder="0"
                    v-model="formulario.taxes[13].value" class="uniform-input" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- EXENTOS -->

              <el-row>
                <el-col :span="10"><el-form-item label="EXENTOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[14].value"
                    class="uniform-input" size="mini" placeholder="0"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- II.BB PERCEPCIÓN -->

              <el-row>
                <el-col :span="10"><el-form-item label="II.BB PERCEPCIÓN :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[2].value"
                    class="uniform-input" size="mini" placeholder="0"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>
              <el-row>
                <!-- NO CATEGORIZADOS -->
                <el-col :span="10"><el-form-item label="NO CATEGORIZADOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[5].value"
                    class="uniform-input" size="mini" placeholder="0"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>
            </el-row>
          </el-col>

          <!-- Segunda columna -->

          <el-col :span="8">
            <!-- IIBB RETENCION -->
            <el-row>
              <el-col :span="10" :offset="0"><el-form-item label="II.BB RETENCIÓN :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[6].value" class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>
            <!-- IMPUESTOS NACIONALES -->

            <el-row>
              <el-col :span="10"><el-form-item label="IMPUESTOS NACIONALES :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[7].value"
                  class="uniform-input" placeholder="0" size="mini"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>


            <!-- IMPUESTOS MUNICIPAL -->

            <el-row>
              <el-col :span="10"><el-form-item label="IMPUESTOS MUNICIPAL :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[15].value"
                  class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>


            <!-- GANANCIAS RETE  -->
            <el-row>
              <el-col :span="10" :offset="0"><el-form-item label="GANANCIAS RETENCION :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[9].value" class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- GANANCIAS PERCEPTCION -->
            <el-row>
              <el-col :span="10" :offset="0"><el-form-item label="GANANCIAS PERCEPCION :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[8].value" class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- SIRCREB -->

            <el-row>
              <el-col :span="10"><el-form-item label="SIRCREB :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[10].value"
                  class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>

            <!-- IMP.CRE/DEB COMPUTAD -->

            <el-row>
              <el-col :span="10" :offset="0"><el-form-item label="IMP.CRE/DEB COMPUTAD :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[11].value" class="uniform-input" size="mini" placeholder="0"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- IMP.CRE/DEB NO COMPUT -->

            <el-row>
              <el-col :span="10" :offset="0"><el-form-item class="formItem1"
                  label="IMP.CRE/DEB NO COMPUT. :"></el-form-item></el-col>
              <el-col :span="2" :offset="0">
                <el-input @change="calcularTotal" type="text" v-model="formulario.taxes[12].value" class="uniform-input"
                  size="mini" placeholder="0"><template slot="append">$</template></el-input></el-col>
            </el-row>
          </el-col>

          <!-- Tercera columna -->
          <el-col :span="8">
            <div class="columnaIva">

              <el-row :gutter="20">
                <el-form-item class="ivas" label="IVA :">
                  <div>
                    <el-input type="text" v-model="tasaIva" class="uniform-input" style="width:70px" size="mini"
                      placeholder="Tasa"></el-input>
                    <el-input type="text" v-model="netoIva" class="uniform-input" size="mini" style="width:70px"
                      placeholder="Neto"></el-input>
                    <el-input type="text" v-model="montoIva" class="uniform-input" style="width:70px" size="mini"
                      placeholder="Monto"></el-input>
                    <el-button size="mini" type="info" style="margin-left: 2%" @click="pushIva()">+</el-button>
                  </div>

                  <el-table :data="ivas" style="width: 90%">
                    <el-table-column label="Tasa IVA" prop="vat_rate" width="100">
                    </el-table-column>
                    <el-table-column label="Neto" prop="net" width="100">
                    </el-table-column>
                    <el-table-column label="Monto IVA" prop="value" width="100">
                    </el-table-column>
                    <el-table-column align="right">
                      <template slot-scope="scope">
                        <el-button size="mini" type="danger"
                          @click="handleDeleteIvas(scope.$index, scope.row)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form-item>

              </el-row>
              <el-row :gutter="20">

                <el-col :span="6">
                  <el-form-item label="Jurisdiccion: "></el-form-item></el-col>
                <el-col :span="2">

                  <el-select placeholder="MENDOZA" v-model="formulario.invoice.invoice_jurisdiction" class="uniform-input"
                    size="mini">
                    <el-option v-for="item in tablaJurisdiction" :key="item.id" :label="item.nombre"
                      :value="item.nombre"></el-option>
                  </el-select>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6"><el-form-item label="Credito Fiscal: "></el-form-item></el-col>
                <el-col :span="2"><el-select v-model="formulario.invoice.tax_credit"
                    @change="varControl(formulario.invoice.tax_credit)" class="uniform-input"
                    placeholder="Compras de bienes en General" size="mini">
                    <el-option v-for="item in tablaClasificacion3" :key="item.value" :label="item.label"
                      :value="item.label"></el-option>
                  </el-select></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="6" :offset="0"><el-form-item label="Clas IVA: "></el-form-item></el-col>
                <el-col :span="2" :offset="0">
                  <el-select v-model="formulario.invoice.vat_class" @change="varControl(formulario.invoice.vat_class)"
                    class="uniform-input" placeholder="Compras de bienes en General" size="mini">
                    <el-option v-for="item in tablaClasificacion2" :key="item.value" :label="item.label"
                      :value="item.label"></el-option>
                  </el-select></el-col>
              </el-row>

            </div>
          </el-col>
        </el-row>
        <div class="columnaMedio">
          <el-form-item class="formItem1" label="TOTAL :">
            <el-input @input="" type="text" v-model="formulario.invoice.total_amount" class="uniform-input" size="default"
              readonly></el-input>
          </el-form-item>
          <el-form-item label="RUBRO :">
            <el-select size="mini" v-model="formulario.invoice.heading" class="uniform-input" placeholder="Rubros">
              <el-option v-for="item in tablaRubrosDelFinal" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Tipo Gasto :">
            <el-select size="mini" v-model="formulario.invoice.expense_type" class="uniform-input"
              placeholder="Tipo Gasto">
              <el-option v-for="item in tablaRubrosDelFinal" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="classDeBotones">
          <el-button @click="updateData()" size="medium" type="success">NEXT</el-button>
        </div>
      </el-card>
    </el-form>
  </div>
</template>
<script>
import { updateInvoice } from "@/api/request/invoices.tenant";
import { getAllEntities } from "@/api/request/entities.tenant";
import { getAllCompanies } from '@/api/request/companies.tenant';
import { getTaxesByInvoiceNum } from "@/api/request/invoiceTaxes.tenant";
import { getAllTypesOfTenant } from '@/api/request/typeofexpenses.tenant';
import { getClassTypeInvoice } from '@/api/request/classTypeInvoice.tenant';
import { getJurisdictionTenant } from '@/api/request/jurisdiction.tenant';
export default {

  props: ["row"],
  data() {
    return {
      rules: {
        CLASE: [
          { required: true, message: 'La clase es obligatoria', trigger: 'blur' },
        ],
        NETO: [
          { required: true, message: 'El neto es obligatorio', trigger: 'blur' },
        ],
      },
      ivas: [],
      montoIva: "",
      tasaIva: "",
      netoIva: "",
      formulario: {
        sumIvas: 0,
        //cabecera
        invoice: {
          invoices_id: this.row.invoices_id,
          //companyCuit: this.row.companyCuit,
          fiscal_year_id: this.row.fiscal_year_id,
          invoice_class: this.row.invoice_class,
          invoice_type: this.row.invoice_type,
          invoice_transaction: this.row.invoice_transaction,
          vouchers_point: this.row.vouchers_point,
          invoice_number: this.row.invoice_number,
          invoice_date: this.row.invoice_date,
          invoice_cae: this.row.invoice_cae,
          invoice_date_cae: this.row.invoice_date_cae,
          company_id: this.row.company_id,
          entity_id: this.row.entity_id,
          invoice_net: this.row.invoice_net,
          invoice_jurisdiction: this.row.invoice_jurisdiction,
          total_amount: this.row.total_amount,
          month_charge: this.row.month_charge,
          vat_class: this.row.vat_class,
          heading: this.row.heading,
          expense_type: this.row.expense_type,
          tax_credit: this.row.tax_credit
        },
        // card taxes
        taxes:
          [
            {
              taxes_id: 17,
              value: 0,
              name: ""
            },            
            {
              taxes_id: 18,
              value: 0,
              name: ""
            },
            {
              taxes_id: 2,
              value: 0,
              name: "II.BB PERCEPCION"
            },
            {
              taxes_id: 3,
              value: 0,
              name: "PERCEPCION IVA"
            },
            {
              taxes_id: 4,
              value: 0,
              name: "IMPUESTOS INTERNOS"
            },
            {
              taxes_id: 5,
              value: 0,
              name: "NO CATEGORIZADOS"
            },
            {
              taxes_id: 6,
              value: 0,
              name: "IIBB RETENCION"
            },

            {
              taxes_id: 7,
              value: 0,
              name: "IMPUESTOS NACIONALES"
            },
            {
              taxes_id: 8,
              value: 0,
              name: "GANANCIAS PERCEPCION"
            },
            {
              taxes_id: 9,
              value: 0,
              name: "GANANCIAS RETENCION"
            },
            {
              taxes_id: 10,
              value: 0,
              name: "SIRCREB"
            },
            {
              taxes_id: 11,
              value: 0,
              name: "IMPUESTOS CRE/DEB COMPUTADOS"
            },
            {
              taxes_id: 12,
              value: 0,
              name: "IMPUESTOS CRE/DEB NO COMPUTADOS"
            },
            {
              taxes_id: 13,
              value: 0,
              name: "IMPORTES NO GRAVADOS"
            },
            {
              taxes_id: 14,
              value: 0,
              name: "EXENTOS"
            },
            {
              taxes_id: 15,
              value: 0,
              name: "IMPUESTOS MUNICIPALES"
            },
            {
              taxes_id: 16,
              value: 0,
              name: "COMERCIO EXTERIOR"
            },

          ],
      },
      invoices_id: this.row.invoices_id,
      tableOfCLassTypeInvoice: [],
      diminutivoTipo: [],
      options1: [],
      tablaClasificacion3: [
        {
          value: "Imputables al costo",
          label: "Imputables al Costo",
        },
        {
          value: "Bienes de Uso",
          label: "Bienes de Uso",
        },
        {
          value: "No Imputables al Costo",
          label: "No Imputables al Costo",
        },
        {
          value: "Otros",
          label: "Otros",
        },
      ],
      /* Aca vemos si puedo hacer que seleccione en base a este otro input */
      value: "",
      fecha_imputacion: "",
      diminutivoTipo: [],
      options1: [],
      tablaClasificacion3: [
        {
          value: "Imputables al costo",
          label: "Imputables al Costo",
        },
        {
          value: "Bienes de Uso",
          label: "Bienes de Uso",
        },
        {
          value: "No Imputables al Costo",
          label: "No Imputables al Costo",
        },
        {
          value: "Otros",
          label: "Otros",
        },
      ],
      /* Aca vemos si puedo hacer que seleccione en base a este otro input */
      selectJurisdiccion: [],
      value: "",
      fecha_imputacion: "",
      isValidNC: true,
      tableData: [],
      tablaCompanies: [],
      tablaTaxes: [],
      tableOfTypes: [],
      tablaClasificacion2: [
        {
          value: "Compras de bienes en general",
          label: "Compras de bienes en general"
        },
        {
          value: "Locaciones",
          label: "Locaciones",
        },
        {
          value: "Prestaciones de Servicios",
          label: "Prestaciones de Servicios",
        },
        {
          value: "Bienes de Uso",
          label: "Bienes de Uso",
        },
        {
          value: "Bienes usados a Cons. Finales",
          label: "Bienes usados a Cons. Finales",
        },
        {
          value: "Otros Conceptos",
          label: "Otros Conceptos",
        },
        {
          value: "Contribucion Seg. Social (Drecreto 814/01)",
          label: "Contribucion Seg. Social (Drecreto 814/01)",
        },
        {
          value: "Derechos de Autor o Contrib. Seg. Social (Dto.814/01)",
          label: "Derechos de Autor o Contrib. Seg. Social (Dto.814/01)",
        },
        {
          value: "Contribucion Seg. Social (Drecreto 730/01)",
          label: "Contribucion Seg. Social (Drecreto 730/01)",
        },
      ],
      tablaImpGanacias: [
        {
          value: "Imputable al Costo",
          label: "Imputable al Costo",
        },
        {
          value: "Bienes de Uso",
          label: "Bienes de Uso",
        },
        {
          value: "No Imputable al Costo",
          label: "No Imputable al Costo",
        }
      ],
      tablaRubrosDelFinal: [
        {
          value: "Comestible",
          label: "Comestible",
        },
        {
          value: "Limpieza",
          label: "Limpieza",
        },
        {
          value: "Electrodomesticos",
          label: "Electrodomesticos",
        },
        {
          value: "Descartables",
          label: "Descartables",
        },
      ],
    };
  },
  methods: {
    pushIva() {
      let iva = {
        taxes_id: 1,
        name: "IVA",
        vat_rate: this.tasaIva + "%",
        value: this.montoIva,
        net: this.netoIva
      }
      console.log("en push iva", this.tasaIva, this.montoIva, this.netoIva);
      this.formulario.taxes.push(iva)
      console.log("en push iva", this.formulario.taxes);
      this.ivas.push(iva)
      console.log("en push iva", this.ivas);
      this.formulario.sumIvas = Number(this.formulario.sumIvas) + Number(iva.value);

      this.tasaIva = ""
      this.montoIva = ""
      this.netoIva = ""

    },
    handleDeleteIvas(index, row) {
      this.ivas.splice(index, 1)
    },
    async fillTableIva(iva) {
      this.ivas.push(iva)
      this.formulario.sumIvas === 0 ? this.formulario.sumIvas = iva.value : this.formulario.sumIvas = this.formulario.sumIvas + iva.value;
    },
    async getJurisdiction() {
      try {
        this.selectJurisdiccion = await getJurisdictionTenant();
      } catch (error) {
        console.error('Error al obtener las juriscicciones', error);
      }
    },
    async getCompanies() {
      try {
        const company = await getAllCompanies();
        this.tablaCompanies = company.map((companies) => ({
          id: companies.company_id,
          nombre: companies.name,
          cuit: companies.company_cuit,
        }));
      } catch (error) {
        console.error('Error al obtener las compañias', error);
      }
    },
    async updateCUITOptions() {
      // Obtén el ID de la compañía seleccionada
      const selectedCompanyId = this.formulario.COMPANIES;
      // Filtra las opciones de CUIT basadas en el ID de la compañía seleccionada
      this.options1 = this.tablaCompanies
        .filter(company => company.id === selectedCompanyId)
        .map(company => ({
          value: company.cuit,
          label: company.cuit,
        }));
      this.formulario.CUIT = null;
    },
    async getEntidades() {
      try {
        const entidad = await getAllEntities();
        this.tableData = entidad.map((entity) => ({
          id: entity.entities_id,
          nombre: entity.name,
          cuit: entity.cuit_number,
          establecCodTex: entity.entities_codetext_1, //Esto es el establecimiento o sucursal, pero en la db sale como codtext1
        }));
      } catch (error) {
        console.error('Error al obtener las entidades', error);
      }
    },
    async getTaxesTenant() {
      try {
        let params = {
          invoice_number: this.row.invoice_number,
          invoice_type: this.row.invoice_type,
          entity_id: this.row.entity_id,
          invoice_transaction: this.row.invoice_transaction,
        }
        this.row.taxes = await getTaxesByInvoiceNum(params)
        for (let i = 0; i < this.row.taxes.length; i++) {
          if (this.row.taxes[i].taxes_id === 1) {
            console.log("row iva", this.row.taxes);
/*             this.formulario.taxes.push(this.row.taxes[i])
 */            this.fillTableIva(this.row.taxes[i])
          }
          for (let j = 0; j < this.formulario.taxes.length; j++) {
            if (this.row.taxes[i].taxes_id === this.formulario.taxes[j].taxes_id) {
              this.formulario.taxes[j].value = this.row.taxes[i].value
            }
          }

        }
      } catch (error) {
        console.error('Error al obtener la data de Taxes', error);
      }
    },
    async getTypeClass() {
      try {
        const typeClassInvoice = await getClassTypeInvoice();
        this.tableOfCLassTypeInvoice = typeClassInvoice.map((classType) => ({
          id: classType.class_type_id,
          claseTipo: classType.class_type_invoice,
          numeroAfip: classType.class_type_num,
          siglas: classType.class_type_acronym,
        }));
      } catch (error) {
        console.error('Error al obtener data de classtypeinvoice', error);
      }
    },
    async getTypesOf() {
      try {
        const typesOf = await getAllTypesOfTenant();
        this.tableOfTypes = typesOf.map((type) => ({
          id: type.typesofexpenses_id,
          name: type.name,
        }))
      } catch (error) {
        console.error('Error al obtener la data de Types Of Expenses', error);
      }
    },
    updateTipoSelect() {
      // Obtén el objeto classType seleccionado en el primer select
      const selectedClassType = this.tableOfCLassTypeInvoice.find(
        (classType) => classType.numeroAfip === this.formulario.invoice.invoice_class
      );
      // Asigna el valor del segundo select (TIPO) basado en el objeto classType
      if (selectedClassType) {
        this.formulario.invoice.invoice_type = selectedClassType.siglas;
      } else {
        this.formulario.invoice.invoice_type = null; // Otra acción en caso de que no haya coincidencia
      }
    },
    sumaMontoIvas() {
      console.log("into sumaMontoIvas");
      if (this.ivas.length > 1) {
        let sumaIvas = 0
        let sumaNet = 0
        this.ivas.forEach(obj => {
          sumaIvas = Number(sumaIvas) + Number(obj.value)
          sumaNet = Number(sumaNet) + Number(obj.net)
        })
        console.log("neto", sumaNet);
        this.formulario.invoice.invoice_net = sumaNet
        console.log("neto form", this.formulario.invoice.invoice_net);
        return sumaIvas
      }
      this.formulario.invoice.invoice_net = this.ivas[0].net
      return Number(this.ivas[0].value)
    },
    // Método para calcular la suma y actualizar el campo TOTAL
    async calcularTotal() {
      this.iva = this.sumaMontoIvas()
      this.neto = parseFloat(this.formulario.invoice.invoice_net) || 0;
      this.formulario.taxes[0].value = (parseFloat(this.formulario.taxes[0].value) || 0).toFixed(2);
      this.formulario.taxes[1].value = (parseFloat(this.formulario.taxes[1].value) || 0).toFixed(2);
      this.formulario.taxes[2].value = (parseFloat(this.formulario.taxes[2].value) || 0).toFixed(2);
      this.formulario.taxes[3].value = (parseFloat(this.formulario.taxes[3].value) || 0).toFixed(2);
      this.formulario.taxes[4].value = (parseFloat(this.formulario.taxes[4].value) || 0).toFixed(2);
      this.formulario.taxes[5].value = (parseFloat(this.formulario.taxes[5].value) || 0).toFixed(2);
      this.formulario.taxes[6].value = (parseFloat(this.formulario.taxes[6].value) || 0).toFixed(2);
      this.formulario.taxes[7].value = (parseFloat(this.formulario.taxes[7].value) || 0).toFixed(2);
      this.formulario.taxes[8].value = (parseFloat(this.formulario.taxes[8].value) || 0).toFixed(2);
      this.formulario.taxes[9].value = (parseFloat(this.formulario.taxes[9].value) || 0).toFixed(2);
      this.formulario.taxes[10].value = (parseFloat(this.formulario.taxes[10].value) || 0).toFixed(2);
      this.formulario.taxes[11].value = (parseFloat(this.formulario.taxes[11].value) || 0).toFixed(2);
      this.formulario.taxes[12].value = (parseFloat(this.formulario.taxes[12].value) || 0).toFixed(2);
      this.formulario.taxes[13].value = (parseFloat(this.formulario.taxes[13].value) || 0).toFixed(2);
      this.formulario.taxes[14].value = (parseFloat(this.formulario.taxes[14].value) || 0).toFixed(2);
      this.formulario.taxes[15].value = (parseFloat(this.formulario.taxes[15].value) || 0).toFixed(2);
      this.formulario.taxes[16].value = (parseFloat(this.formulario.taxes[16].value) || 0).toFixed(2);
      this.formulario.sumIvas = parseFloat(this.iva).toFixed(2);
      this.formulario.invoice.total_amount = (Number(this.neto) + this.iva +
        Number(this.formulario.taxes[0].value) +
        Number(this.formulario.taxes[1].value) +
        Number(this.formulario.taxes[2].value) +
        Number(this.formulario.taxes[3].value) +
        Number(this.formulario.taxes[4].value) +
        Number(this.formulario.taxes[5].value) +
        Number(this.formulario.taxes[6].value) +
        Number(this.formulario.taxes[7].value) +
        Number(this.formulario.taxes[8].value) +
        Number(this.formulario.taxes[9].value) +
        Number(this.formulario.taxes[10].value) +
        Number(this.formulario.taxes[11].value) +
        Number(this.formulario.taxes[12].value) +
        Number(this.formulario.taxes[13].value) +
        Number(this.formulario.taxes[14].value) +
        Number(this.formulario.taxes[15].value) +
        Number(this.formulario.taxes[16].value)).toFixed(2)
    },
    //insertar los datos del medio en una tabla, teniendo en cuenta el id de la factura, hacer un get de la factura recien creada y 
    //insertarlo como FK del objeto que estamos creando.
    varControl(variable) {
      console.log("esta variables se controla", variable);
    },
    async updateData() {
      try {
        // Verifica si hay una factura seleccionada para edición
        if (!this.formulario.invoice.invoices_id) {
          console.log("Id de la Factura?", this.formulario.invoice.invoices_id);
          console.error('No hay factura seleccionada para editar.');
          return;
        }
        // Actualizar fx para que haga bien el update con el modelao nuevo del obj
        const response = await updateInvoice(this.formulario.invoice);
        fetchInvoices();
        
        // Maneja la respuesta según sea necesario
        if (response) {
          console.log('Factura actualizada exitosamente:', response);
          this.$modal.hide("modalVerComprobantes");
          // Realiza acciones adicionales si es necesario
          this.$message({
            title: 'Éxito',
            message: 'La factura se ha actualizado correctamente.',
            type: 'success'
          });
          // Actualiza la lista de facturas u otras acciones necesarias
          // Cierra el modal de edición
        } else {
          console.error('Error al actualizar factura.');
        }
      } catch (error) {
        console.error('Error en la llamada a la API: ', error);
      }
    },

    rellenarConCerosNROEST() {
      this.formulario.invoice.vouchers_point = this.rellenarConCeros(this.formulario.invoice.vouchers_point, 5);
    },
    rellenarConCerosNC() {
      this.formulario.invoice.invoice_number = this.rellenarConCeros(this.formulario.invoice.invoice_number, 8);
    },
    rellenarConCeros(valor, longitudDeseada) {
      if (valor === null || valor === undefined) {
        valor = '';
      }

      const strValue = String(valor);
      const missingZeros = longitudDeseada - strValue.length;
      if (missingZeros > 0) {
        return '0'.repeat(missingZeros) + strValue;
      } else {
        return strValue;
      }
    },

  },
  async created() {
    this.getTaxesTenant();
    this.getJurisdiction();
    this.getTypeClass();
    this.getEntidades();
    this.getCompanies();
    this.getTypesOf();
    this.getFiscalYears();
    this.getJurisdiction();
  },
  mounted() {
  },
};
</script>
<style scoped>
#tamañoInput {
  height: 28px;
}

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

.formPrincipal {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;

}

.classDeBotones {
  display: flex;
  align-content: center;
  justify-content: center;
}

.columna {
  display: flex;
  flex-direction: column;
}

.columnaIva {
  border: 0.5px solid #0367A6;
  background-color: rgba(3, 103, 166, 0.2);
}

.uniform-input {
  width: 130px;
}

.columnaMedio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.formItem {
  width: fit-content;
}

.select2 {
  margin-left: 20px;
  max-width: 125px;
}

.formItem1 .el-input {
  justify-items: auto;
  margin-bottom: 10px;
}

.containter {
  max-height: 850px;
  /* Establece la altura máxima deseada */
  overflow-y: auto;
  /* Permite el desplazamiento vertical si el contenido excede la altura máxima */
}
</style>
