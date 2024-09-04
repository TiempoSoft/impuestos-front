<template>
  <div class="app-container">
    <el-form :inline="true" :model="formulario" :rules="rules" ref="formulario">
      <div style="margin-left: 1.3rem;">
        <el-row style="margin-bottom: 0.5rem">
          <el-col>
            <el-button @click.native.prevent="abrirModalImportarCsv()" type="info">
              Importar csv
            </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="10">
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

          <el-col :span="16">
            <el-form-item label="Fecha:">
              <el-date-picker v-model="formulario.invoice.invoice_date" size="mini" type="date" format="dd/MM/yyyy"
                class="select2">
              </el-date-picker>
            </el-form-item>
            <el-col :span="10">
            <el-form-item label="Imputacion:">
              <el-date-picker v-model="formulario.invoice.month_charge" size="mini" type="month" format="MM/yyyy"
                class="select2">
              </el-date-picker>
            </el-form-item>
          </el-col></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="N° CAI:">
              <el-input type="text" v-model="formulario.invoice.invoice_cae" size="mini" maxlength="10"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Vto CAI:">
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
            <el-form-item>
              <el-select size="mini" v-model="formulario.invoice.cuit_number" placeholder="CUIT">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"
                  size="small">
                </el-option>
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

        <!-- Primera Columna -->
        <el-row>

          <el-col :span="8">
              <!-- NETO -->

            <el-row>
              <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
              <el-col :span="2" :offset="0"> <el-input type="text" size="mini" class="uniform-input"
                  v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>

            <el-row>
              <!-- IVA DEBITO FISCAL -->

              <el-row>
                <el-col :span="11"><el-form-item label="IVA DEBITO FISCAL:" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input readonly @change="calcularTotal" type="text" v-model="formulario.sumIvas"
                    class="uniform-input" size="mini" placeholder="0.00"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- COMERCIO EXTERIOR -->

              <el-row>
                <el-col :span="11"><el-form-item label="IVA RETENCIÓN :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[16].value"
                    class="uniform-input" size="mini" placeholder="0.00" clearable><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IVA PERCEPCIÓN -->

              <el-row>
                <el-col :span="11"><el-form-item label="IVA PERCEPCIÓN :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[3].value" 
                    class="uniform-input" placeholder="0.00" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IMPUESTOS INTERNOS -->

              <el-row>
                <el-col :span="11"><el-form-item label="IMPUESTOS INTERNOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[4].value"
                    class="uniform-input" placeholder="0.00" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- IMPORTES NO GRAVADOS -->

              <el-row>
                <el-col :span="11"><el-form-item label="IMPORTES NO GRAVADOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" placeholder="0.00"
                    v-model="formulario.taxes[13].value" class="uniform-input" size="mini"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- EXENTOS -->

              <el-row>
                <el-col :span="11"><el-form-item label="EXENTOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[14].value"
                    class="uniform-input" size="mini" placeholder="0.00"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>


              <!-- II.BB PERCEPCIÓN -->

              <el-row>
                <el-col :span="11"><el-form-item label="II.BB PERCEPCIÓN :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[2].value"
                    class="uniform-input" size="mini" placeholder="0.00"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>

              <!-- IIBB RETENCION -->
            <el-row>
              <el-col :span="11" :offset="0"><el-form-item label="II.BB RETENCIÓN :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[6].value" class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>
          </el-row>
        </el-col>

          <!-- Segunda columna -->

          <el-col :span="8">

            <!-- NO CATEGORIZADOS -->

            <el-row>
                <el-col :span="11"><el-form-item label="NO CATEGORIZADOS :" class="formItem1"></el-form-item></el-col>
                <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[5].value"
                    class="uniform-input" size="mini" placeholder="0.00"><template
                      slot="append">$</template></el-input></el-col>
              </el-row>
            
            <!-- IMPUESTOS NACIONALES -->

            <el-row>
              <el-col :span="11"><el-form-item label="IMPUESTOS NACIONALES :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[7].value"
                  class="uniform-input" placeholder="0.00" size="mini"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>


            <!-- IMPUESTOS MUNICIPAL -->

            <el-row>
              <el-col :span="11"><el-form-item label="IMPUESTOS MUNICIPAL :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[15].value"
                  class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>


            <!-- GANANCIAS RETE  -->
            <el-row>
              <el-col :span="11" :offset="0"><el-form-item label="GANANCIAS RETENCIÓN :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[9].value" class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- GANANCIAS PERCEPTCION -->
            <el-row>
              <el-col :span="11" :offset="0"><el-form-item label="GANANCIAS PERCEPCIÓN :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[8].value" class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- SIRCREB -->

            <el-row>
              <el-col :span="11"><el-form-item label="SIRCREB :" class="formItem1"></el-form-item></el-col>
              <el-col :span="2"><el-input @change="calcularTotal" type="text" v-model="formulario.taxes[10].value"
                  class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input></el-col>
            </el-row>

            <!-- IMP.CRE/DEB COMPUTAD -->

            <el-row>
              <el-col :span="11" :offset="0"><el-form-item label="IMP.CRE/DEB COMPUTADO :"></el-form-item></el-col>
              <el-col :span="2" :offset="0"><el-input @change="calcularTotal" type="text"
                  v-model="formulario.taxes[11].value" class="uniform-input" size="mini" placeholder="0.00"><template
                    slot="append">$</template></el-input>
              </el-col>
            </el-row>

            <!-- IMP.CRE/DEB NO COMPUT -->

            <el-row>
              <el-col :span="11" :offset="0"><el-form-item class="formItem1"
                  label="IMP.CRE/DEB NO COMPUTADO :"></el-form-item></el-col>
              <el-col :span="2" :offset="0">
                <el-input @change="calcularTotal" type="text" v-model="formulario.taxes[12].value" class="uniform-input"
                  size="mini" placeholder="0.00"><template slot="append">$</template></el-input></el-col>
            </el-row>
          </el-col>

          <!-- Tercera columna -->

          <el-col :span="8">
            <div class="columnaIva">

              <el-row :gutter="10">
                <el-form-item class="ivas" label="IVA :">
                  <div>
                    <el-input type="text" v-model="netoIva" class="uniform-input" size="mini" style="width:120px"
                      placeholder="Neto"></el-input>
                    <el-input type="text" v-model="tasaIva" class="uniform-input" style="width:120px" size="mini"
                      placeholder="Alicuota"></el-input>
                    <!-- <el-input type="text" v-model="montoIva" class="uniform-input" style="width:70px" size="mini"
                      placeholder="Monto"></el-input> -->
                    <el-select v-model="formulario.invoice.heading" class="uniform-input" style="width:120px" size="mini" placeholder="Rubro">
                      <el-option v-for="item in tablaRubrosDelFinal" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                    <el-button size="mini" type="info" style="margin-left: 2%" @click="pushIva()">+</el-button>
                  </div>

                  <el-table :data="ivas" style="width: 99%">
                    <el-table-column label="Neto" prop="net" width="80">
                    </el-table-column>
                    <el-table-column label="Alicuota" prop="vat_rate" width="80">
                    </el-table-column>
                    <el-table-column label="IVA" prop="value" width="70">
                    </el-table-column>
                    <el-table-column label="Rubro" prop="heading" width="100">
                    </el-table-column>
                    <el-table-column align="right">
                      <template slot-scope="scope">
                        <el-button size="mini" type="danger"
                          @click="handleDeleeIvas(scope.$index, scope.row)">Eliminar</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-form-item>t
        </el-row>

              <el-row :gutter="20">
                <el-col :span="7">
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
                <el-col :span="7"><el-form-item label="Credito Fiscal: "></el-form-item></el-col>
                <el-col :span="2"><el-select v-model="formulario.invoice.tax_credit"
                    @change="varControl(formulario.invoice.tax_credit)" class="uniform-input"
                    placeholder="Compras de bienes en General" size="mini">
                    <el-option v-for="item in tablaClasificacion3" :key="item.value" :label="item.label"
                      :value="item.label"></el-option>
                  </el-select></el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="7" :offset="0"><el-form-item label="Clas IVA: "></el-form-item></el-col>
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
          <!-- <el-form-item label="RUBRO :">
            <el-select size="mini" v-model="formulario.invoice.heading" class="uniform-input" placeholder="Rubros" style="width:70px" size="">
              <el-option v-for="item in tablaRubrosDelFinal" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item> -->
          <el-form-item label="Tipo Gasto :">
            <el-select size="mini" v-model="formulario.invoice.expense_type" class="uniform-input"
              placeholder="Tipo Gasto">
              <el-option v-for="item in tablaRubrosDelFinal" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="classDeBotones">
          <el-button @click="sendData()" size="medium" type="success" class="float-left">BUSCAR</el-button>
          <el-button @click="sendData()" size="medium" type="success" class="float-left">GRABAR</el-button>
        </div>
      </el-card>
    </el-form>
    <!--   </el-card> -->
    <modal name="ImportarCsv" :scrollable="true" :reset="true" width="55%" height="auto" :clickToClose="true"
      draggable=".app-container">
      <ModalImportarComprobante />
    </modal>
  </div>
</template>
<script>
import ModalImportarComprobante from "../compras/components/ModalImportarComprobante";
import { createNewInvoice } from "@/api/request/invoices.tenant";
import { createNewFiscalYearInTenant, getAllFiscalYears } from "@/api/request/fiscalYears.tenant"
import { getAllEntities } from "@/api/request/entities.tenant";
import { getAllCompanies } from '@/api/request/companies.tenant';
import { getAllTaxesFromTenant } from "@/api/request/taxes.tenant";
import { getAllTypesOfTenant } from '@/api/request/typeofexpenses.tenant';
import { getClassTypeInvoice } from '@/api/request/classTypeInvoice.tenant'; 16
import { getJurisdictionTenant } from '@/api/request/jurisdiction.tenant';
export default {
  components: {
    ModalImportarComprobante,
  },

  data() {
    return {
      neto: 0,
      iva: 0,
      ivas: [],    
      montoIva: "",
      tasaIva: "",
      netoIva: "",
      ivaIva: "",
      heading: "",
      rules: {
        invoice_class: [
          { required: true, message: 'La clase es obligatoria', trigger: 'blur' },
        ],
        invoice_net: [
          { required: true, message: 'El neto es obligatorio', trigger: 'blur' },
        ],
      },
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
      formulario: {
        sumIvas: null,
        //cabecera
        invoice: {
          month_charge: this.getCurrentMonthYear(),
          fiscal_year_id: null,
          invoice_class: null,
          invoice_type: null,
          invoice_transaction: "B",
          vouchers_point: "",
          invoice_number: "",
          invoice_date: this.getCurrentDate(),
          invoice_cae: "",
          invoice_date_cae: "",
          company_id: null,
          cuit_number: "",
          entity_id: null,
          invoice_net: "",
          invoice_jurisdiction: "",
          total_amount: 0,
          tax_credit: "",
          heading: "", //Rubro
          vat_class: "", //class iva
          expense_type: "", // tipo gasto
        },
        taxes:
          [
            {
              taxes_id: 17,
              value: null,
              name: ""
            },            
            {
              taxes_id: 18,
              value: null,
              name: ""
            },
            {
              taxes_id: 2,
              value: null,
              name: "II.BB PERCEPCION"
            },
            {
              taxes_id: 3,
              value: null,
              name: "PERCEPCION IVA"
            },
            {
              taxes_id: 4,
              value: null,
              name: "IMPUESTOS INTERNOS"
            },
            {
              taxes_id: 5,
              value: null,
              name: "NO CATEGORIZADOS"
            },
            {
              taxes_id: 6,
              value: null,
              name: "IIBB RETENCION"
            },

            {
              taxes_id: 7,
              value: null,
              name: "IMPUESTOS NACIONALES"
            },
            {
              taxes_id: 8,
              value: null,
              name: "GANANCIAS PERCEPCION"
            },
            {
              taxes_id: 9,
              value: null,
              name: "GANANCIAS RETENCION"
            },
            {
              taxes_id: 10,
              value: null,
              name: "SIRCREB"
            },
            {
              taxes_id: 11,
              value: null,
              name: "IMPUESTOS CRE/DEB COMPUTADOS"
            },
            {
              taxes_id: 12,
              value: null,
              name: "IMPUESTOS CRE/DEB NO COMPUTADOS"
            },
            {
              taxes_id: 13,
              value: null,
              name: "IMPORTES NO GRAVADOS"
            },
            {
              taxes_id: 14,
              value: null,
              name: "EXENTOS"
            },
            {
              taxes_id: 15,
              value: null,
              name: "IMPUESTOS MUNICIPALES"
            },
            {
              taxes_id: 16,
              value: null,
              name: "COMERCIO EXTERIOR"
            },
          ],
      },
      isValidNC: true,
      tablaJurisdiction: [],
      tableData: [],
      tablaCompanies: [],
      tablaTaxes: [],
      tableOfTypes: [],
      tableOfFiscalYears: [],
      tablaClasificacion2: [
        {
          value: "Compras de bienes en general",
          label: "Compras de bienes en general",
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

      if (!this.tasaIva) {
      this.tasaIva = "21";
      }

      this.ivaIva = parseFloat(this.tasaIva) * (parseFloat(this.netoIva)/100)
      this.montoIva = parseFloat(this.ivaIva) 
      if (!isNaN(parseFloat(this.tasaIva))) {
        let iva = {
          taxes_id: 1,
          name: "IVA",
          vat_rate: this.tasaIva + "%",
          value: this.montoIva,
          net: this.netoIva,
          heading: this.formulario.invoice.heading
        }

      this.formulario.taxes.push(iva)
      this.ivas.push(iva)
      let total = ""      
      this.netoIva = ""
      this.tasaIva = ""
      this.montoIva = ""
      this.formulario.invoice.heading = ""
      this.calcularTotal()
      } else {
        console.error("El valor de tasaIva no es un número válido.")
      }
    },
    handleDeleteIvas(index, row) {
      this.neto = Number(this.neto) - Number(row.net)
      this.formulario.invoice.invoice_net = this.neto
      this.iva = Number(this.iva) - Number(row.value)
      this.formulario.sumIvas = this.iva
      this.ivas.splice(index, 1)
    },
    getCurrentDate() {
      const today = new Date();
      today.setHours(today.getHours() - today.getTimezoneOffset() / 60);
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate() + 1).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
    getCurrentMonthYear() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 2).padStart(2, '0');
      return `${year}-${month}`;
    },
    async getJurisdiction() {

      try {
        const jurisdiccion = await getJurisdictionTenant();
        this.tablaJurisdiction = jurisdiccion.map((jurisdiccions) => ({
          id: jurisdiccions.jurisdiction_id,
          nombre: jurisdiccions.jurisdiction_name,
          enum: jurisdiccions.jurisdiction_corf,
          alicuota: jurisdiccions.jurisdiction_aliquota,
          codigoafip: jurisdiccions.jurisdiction_code_afip,
        }));
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
        const taxes = await getAllTaxesFromTenant();
        this.tablaTaxes = taxes.map((tax) => ({
          id: tax.taxes_id,
          nombre: tax.name,
          codText1: tax.taxes_codtext_1,
        }));
        if (!this.formulario.IVA1) {
          this.formulario.IVA1 = this.tablaTaxes[0].codText1;
        }
        if (!this.formulario.PERCERPIVA) {
          this.formulario.PERCERPIVA = this.tablaTaxes[1].codText1;
        }
        if (!this.formulario.TASAIMP) {
          this.formulario.TASAIMP = this.tablaTaxes[2].codText1;
        }
        if (!this.formulario.TASAIMP1) {
          this.formulario.TASAIMP1 = this.tablaTaxes[3].codText1;
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
        console.log('Datos cargados en tableOfCLassTypeInvoice:', this.tableOfCLassTypeInvoice);
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
    async updateCUITOptions() {
      // Obtén el ID de la compañía seleccionada
      const selectedCompanyId = this.formulario.invoice.company_id;
      // Filtra las opciones de CUIT basadas en el ID de la compañía seleccionada
      this.options1 = this.tablaCompanies
        .filter(company => company.id === selectedCompanyId)
        .map(company => ({
          value: company.cuit,
          label: company.cuit,
        }));
      this.formulario.invoice.cuit_number = null;
    },
    // Método para calcular la suma y actualizar el campo TOTAL
    sumaMontoIvas() {
      if (this.ivas.length > 1) {
        let sumaIvas = 0
        let sumaNet = 0
        this.ivas.forEach(obj => {
          sumaIvas = Number(sumaIvas) + Number(obj.value)
          sumaNet = Number(sumaNet) + Number(obj.net)
        })
        this.formulario.invoice.invoice_net = sumaNet
        return sumaIvas
      }
     this.formulario.invoice.invoice_net = this.ivas[0].net
      return Number(this.ivas[0].value)
    },

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
    async sendData() {
      console.log("form antes de validacion", this.formulario);

      const data2 = await createNewFiscalYearInTenant(this.formulario.fiscalYear);

      const fiscalid = await getAllFiscalYears();
      const lastInsertedId = fiscalid.reduce((maxId, fid) => Math.max(maxId, fid.fiscal_years_id), 0);
      const nextId = lastInsertedId;

      this.formulario.invoice.fiscal_year_id = nextId;
      console.log("Form antes de insert", typeof this.formulario.invoice.month_charge);
      const data = await createNewInvoice(this.formulario);

      this.formulario = {
        sumIvas: 0,
        //cabecera
        invoice: {
          month_charge: "",
          fiscal_year_id: null,
          invoice_class: null,
          invoice_type: null,
          invoice_transaction: "B",
          vouchers_point: "",
          invoice_number: "",
          invoice_date: "",
          invoice_cae: "",
          invoice_date_cae: "",
          company_id: null,
          cuit_number: "",
          entity_id: null,
          invoice_net: "",
          invoice_jurisdiction: "",
          total_amount: 0,
          tax_credit: "",
          heading: "", //Rubro
          vat_class: "", //class iva
          expense_type: "", // tipo gasto
        },
        // card taxes
        taxes: [
          {
            taxes_id: 2,
            value: null,
            name: "II.BB PERCEPCION"
          },
          {
            taxes_id: 3,
            value: null,
            name: "PERCEPCION IVA"
          },
          {
            taxes_id: 4,
            value: null,
            name: "IMPUESTOS INTERNOS"
          },
          {
            taxes_id: 5,
            value: null,
            name: "NO CATEGORIZADOS"
          },
          {
            taxes_id: 6,
            value: null,
            name: "IIBB RETENCION"
          },

          {
            taxes_id: 7,
            value: null,
            name: "IMPUESTOS NACIONALES"
          },
          {
            taxes_id: 8,
            value: null,
            name: "GANANCIAS PERCEPCION"
          },
          {
            taxes_id: 9,
            value: null,
            name: "GANANCIAS RETENCION"
          },
          {
            taxes_id: 10,
            value: null,
            name: "SIRCREB"
          },
          {
            taxes_id: 11,
            value: null,
            name: "IMPUESTOS CRE/DEB COMPUTADOS"
          },
          {
            taxes_id: 12,
            value: null,
            name: "IMPUESTOS CRE/DEB NO COMPUTADOS"
          },
          {
            taxes_id: 13,
            value: null,
            name: "IMPORTES NO GRAVADOS"
          },
          {
            taxes_id: 14,
            value: null,
            name: "EXENTOS"
          },
          {
            taxes_id: 15,
            value: null,
            name: "IMPUESTOS MUNICIPALES"
          },
          {
            taxes_id: 16,
            value: null,
            name: "COMERCIO EXTERIOR"
          },
        ],
      },
        this.$message({
          title: 'Éxito',
          message: 'La factura se ha insertado correctamente. Puede verla en la pantalla de Ver_Comp.',
          type: 'success'
        });
      console.log('Datos de la tabla "invoice":', data);
      console.log('Datos de la tabla "fiscal_year_in_tenant":', data2);
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

    abrirModalImportarCsv() {
      this.$modal.show("ImportarCsv");
    },
  },
  created() {
    this.getEntidades();
    this.getCompanies();
    this.getTypesOf();
    this.calcularTotal();
    this.getTypeClass();
    this.getJurisdiction();
    this.getFiscalYearsFromTenant();
    //  this.abrirModalImportarCsv()
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

.float-left {
  background-color: #cfe2f3;
  border: 2px solid #2986cc;
  color: #066fcf;
  padding: 10px 20px;
}

.classDeBotones {
  display: flex;
  align-content: center;
  justify-content: center;
 
  padding: 10px 20px;
}

.columna {
  display: flex;
  flex-direction: column;
  margin-right: auto;
}

.columnaIva {
  border: 0.5px solid #0367A6;
  background-color: rgba(3, 103, 166, 0.2);
}

.uniform-input {
  width: 150px;
}

.columnaMedio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
}

.select2 {
  margin-left: 20px;
  max-width: 125px;
}

.formItem1 .el-input {
  justify-items: auto;
  margin-bottom: 10px;
}

.ivas {
  margin-left: 2%;
}
</style>