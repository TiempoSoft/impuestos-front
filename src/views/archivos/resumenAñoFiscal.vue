<template>
  <div class="app-container">
    <el-card>
      <div class="row">
        <div class="col-100">
          <div class="col-100">
            <h3 class="text-center">Años Fiscales</h3>
          </div>
        </div>
      </div>
    </el-card>

    <div style="display: flex; justify-content: center;">
      <el-card class="Scroll" style="width: 100%">
        <el-table
          :data="currentPageData"
          :page-size="pageSize"
          class="tableStyle"
          align="center"
        >
          <el-table-column prop="start_date" label="Fecha de Inicio" width="220">
            <template slot-scope="scope">
              {{ scope.row.start_date | formatDate }}
            </template>
          </el-table-column>
          <el-table-column prop="end_date" label="Fecha de Finalizado" width="220">
            <template slot-scope="scope">
              {{ scope.row.end_date | formatDate }}
            </template>
          </el-table-column>
          <el-table-column width="150">
            <template slot-scope="scope">
              <div style="display: flex; align-items: center; justify-content: flex-end;">
                <el-button @click="" type="text" size="small">
                  EDITAR
                </el-button>
                <el-button @click="" type="danger" size="small">
                  BORRAR
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="tableData.length"
          style="margin-top: 20px; text-align: center;"
        >
        </el-pagination>
        <div style="display: flex; align-items: center;">
            <el-button type="info" size="medium" @click="">Nuevo</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getAllFiscalYears } from "@/api/request/fiscalYears.tenant";
export default {
    data() {
        return {
            pageSize: 15, 
            currentPage: 1,
            tableData: [],
            fiscalYearTable: [],
            taxesTable: [],
            selectedInvoice: null,
        };
    },
    computed: {
        currentPageData() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            const endIndex = startIndex + this.pageSize;
            return this.tableData.slice(startIndex, endIndex);
        },
    },
    methods: {
        async fetchFiscalYear() {
            try {
                this.tableData = await getAllFiscalYears();
                console.log("datos de fiscalYear", this.tableData);
            } catch (error) {
                console.error(
                    "Error al obtener los datos de fiscalYear:",
                    error
                );
            }
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
    },
    created() {
        this.fetchFiscalYear();
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
        this.fetchFiscalYear();
    },
};
</script>
  
<style scoped>
.text-center {
    text-align: center;
    align-items: center;
}

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

/* Resto de estilos... */
</style>
  