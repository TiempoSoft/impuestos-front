<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-100">
          <div class="col-100">
            <h3>Comprobantes Recibidos</h3>
          </div>
        </div>
      </div>
    </el-card>

    <div style="display: flex; justify-content: flex-end">
      <el-card class="Scroll" style="width: 100%">
        <el-table :data="tableData" class="tableStyle" align="center">
          <el-table-column prop="invoice_date" label="Fecha" width="120">
            <!-- Ancho ajustado -->
            <template slot-scope="scope">
              {{ scope.row.invoice_date | formatDate }}
            </template>
          </el-table-column>
          <el-table-column prop="invoice_number" label="N Comprobante" width="130">
            <!-- Ancho ajustado -->
          </el-table-column>
          <el-table-column prop="name" label="Razon Social" width="220">
            <!-- Ancho ajustado -->
          </el-table-column>
          <el-table-column prop="cuit_number" label="CUIT" width="130">
            <!-- Ancho ajustado -->
          </el-table-column>
          <el-table-column prop="total_amount" label="Monto Total" width="120">
            <!-- Ancho ajustado -->
          </el-table-column>
          <el-table-column width="150">
            <!-- Ancho ajustado -->
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
    </div>


    <!-- Modal para mostrar los detalles del comprobante -->
    <modal name="modalVerComprobantes" :scrollable="true" :reset="true" width="90%" height="90%" :clickToClose="true"
      draggable=".app-container">
      <modalVerComprobantes :row="selectedInvoice" />
    </modal>
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
        const invoice = {
          id: invoiceId,
        };
        console.log("updateInvoiceFinishDate llamada con invoiceId:", invoiceId)
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
      let comprobnante = this.compro;
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
.Scroll {
  overflow-y: scroll;
  height: 80vh;
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

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
  padding-bottom: 5px;
}

.col-100 {
  float: left;
  padding-left: 20%;
}
</style>
