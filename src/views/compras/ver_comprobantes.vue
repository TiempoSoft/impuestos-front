<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-100">
          <h3>Comprobantes Recibidos</h3>
        </div>
      </div>
    </el-card>

  <div class="main-content">
    <el-card class="Scroll" style="width: 100%">
      <el-table :data="tableData" class="tableStyle" align="center">
        <el-table-column prop="invoice_date" label="Fecha" width="190">
          <template slot-scope="scope">
            {{ scope.row.invoice_date | formatDate }}
          </template></el-table-column>
        <el-table-column prop="invoice_number" label="N Comprobante" width="240"></el-table-column>
        <el-table-column prop="name" label="Razon Social" width="250"></el-table-column>
        <el-table-column prop="cuit_number" label="CUIT" width="220"></el-table-column>
        <el-table-column prop="total_amount" label="Monto Total" width="110"></el-table-column>
        <el-table-column width="10">
          <template slot-scope="scope">
            <div style="display: flex; align-items: center; justify-content: flex-end;">
              <el-button @click="openModalVer(scope.row)" type="text" size="small">
                Ver
              </el-button>
              <el-button @click="updateInvoiceFinishDate(scope.row.id)" type="danger" size="small">
                BORRAR
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  
    <el-col :span="4">
      <h5>NETO</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IVA</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IVA RETENCION</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IVA PERCEPCION</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMPUESTOS INTERNOS</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMPORTES NO GRABADOS</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>EXENTOS</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IIBB PERCEPCION</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IIBB RETENCION</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMP. NACIONALES</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMP. MUNICIPALES</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>GANANCIAS RETEN.</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>GANANCIAS PERC</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>SIRCREB</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMP.CRE/DEB COMP.</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>IMP.CRE/DEB NO COMP.</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
      <h5>TOTAL</h5>
      <el-row>
        <el-col :span="11" :offset="0"><el-form-item label="NETO :" class="formItem"></el-form-item></el-col>
        <el-col :span="18" :offset="0"><el-input type="text" size="mini" class="uniform-input"
          v-model="formulario.invoice.invoice_net" readonly @change="calcularTotal" placeholder="0.00"></el-input></el-col>
      </el-row>
    </el-col>
  </div>
  
    <!-- Modal para mostrar los detalles del comprobante -->
    <modal name="modalVerComprobantes" :scrollable="true" :reset="true" width="90%" height="90%" :clickToClose="true" draggable=".app-container">
      <modalVerComprobantes :row="selectedInvoice" />
    </modal>
    <div class="classDeBotones">
      <el-button @click="sendData()" size="medium" type="success" class="float-left">Asiento</el-button>
      <el-button @click="sendData()" size="medium" type="success" class="float-left">Listar</el-button>
      <el-button @click="sendData()" size="medium" type="success" class="float-left">Cliente</el-button>
      <el-button @click="sendData()" size="medium" type="success" class="float-right">Cerrar</el-button>
    </div> 
  </div>
</template>

<script>
import { getAllInvoices, updateInvoice, finishDateInvoicesTenant, deleteInvoice } from "@/api/request/invoices.tenant";
import modalVerComprobantes from "../compras/modalVerComprobantes.vue";
import { createNewFiscalYearInTenant, getAllFiscalYears } from '@/api/request/fiscalYears.tenant';
import { getAllInvoicesTaxes, getInvoicesTaxesByInvoiceNum } from "@/api/request/invoiceTaxes.tenant";

export default {
  components: { modalVerComprobantes },
  data() {
    return {
      tableData: [],
      fiscalYearTable: [],
      taxesTable: [],
      selectedInvoice: null,
      tasaIva: '', // Agrega las demás variables que uses
    netoIva: '',
    formulario: {
      invoice: {
        heading: '',
        invoice_jurisdiction: '',
        tax_credit: '',
        vat_class: ''
      }
    },
    ivas: [],
    tablaRubrosDelFinal: [],
    tablaJurisdiction: [],
    tablaClasificacion3: [],
    tablaClasificacion2: [],
    };
  },
  methods: {
    async fetchInvoices() {
      try {
        this.tableData = await getAllInvoices("B");
        console.log("datos de factura", this.tableData);
      } catch (error) {
        console.error("Error al obtener los datos de las facturas:", error);
      }
    },

    openModalVer(invoice) {
      console.log(invoice);
      this.selectedInvoice = invoice;
      this.$modal.show("modalVerComprobantes");
    },

    async updateInvoiceFinishDate(invoiceId) {
      console.log("entra funcion finish");
      console.log(invoiceId)
      try {
        const invoice = { id: invoiceId };
        const response = await finishDateInvoicesTenant(invoice);
        if (response) {
          console.log("Factura Eliminada Exitosamente:", response);
          this.$message({
            message: "Factura Eliminada Exitosamente!",
            type: "success",
          });
          this.fetchInvoices();
        } else {
          console.error("Error al actualizar factura: ", response);
        }
      } catch (error) {
        console.error("Error en la llamada a la API: ", error);
      }
    },

    async editarComprobante(id) {
      let comprobante = this.compro;
      comprobanteEditado = await updateInvoice(id);
    },
  },
  filters: {
    formatDate(value) {
      if (!value) return "";
      const date = new Date(value);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
  created() {
    this.fetchInvoices();
  },
};
</script>

<style scoped>
h5 {
  color: grey;
  font-size: 12px;
  font-family: Arial, sans-serif;
  margin-top: 8px;
  margin-bottom: 3px;
  margin-left: 10px;
}

.float-right {
  background-color: grey;
  border: 2px solid grey;
  padding: 10px 20px;
}

.float-left {
  background-color: grey;
  border: 2px solid grey;
  padding: 10px 20px;
}

.Scroll {
  overflow-y: scroll;
  height: 100vh;
}

label {
  padding: 1px 3px 6px 0;
  display: inline-block;
  font-size: 1vw;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  margin-top: 0px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

.button {
  width: 50%;
}

.tableStyle {
  width: 100%;
  margin-bottom: -10px;
  margin-top: -10px;
}

.el-table th,
.el-table td {
  text-align: center;
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

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
  padding-bottom: 5px;
}

.col-100 {
  float: left;
  padding-left: 35%;
  padding-bottom: 0px;
  margin-bottom: -10px;
}

.main-content {
  display: flex;
  justify-content: space-between;
}

.right-column {
  max-height: 100vh;
  overflow-y: auto;
  margin-left: 20px;
  flex: 0 0 20%;
  margin-left: 10px;
}

.main-content {
  display: flex;
  width: 104%;
}

.main-content > .el-card {
  flex: 1 0 80%;
}

.columnaIva {
  display: flex;
  flex-direction: column;
}

.float-left {
  float: left;
  margin-top: 6px;
  margin-left: 100px;
  margin-bottom: 20px;
}

.float-right {
  float: right;
  margin-top: 6px;
  margin-right: 300px;
  margin-bottom: 20px;
}
</style>
