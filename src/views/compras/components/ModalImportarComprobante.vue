<template>
  <el-container>
    <el-card class="importarComprob">
      <div>
        <input type="file" @change="handleFileUpload">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th v-for="header in tableHeaders" :key="header">{{ header }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in csvData" :key="index">
                <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="buttonClass">
        <el-button type="primary" @change="handleFileUpload">Insertar</el-button>
      </div>
    </el-card>
  </el-container>
</template>

<script>
import Papa from "papaparse";

export default {
  data() {
    return {
      csvData: [],
      tableHeaders: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      Papa.parse(file, {
        complete: (results) => {
          this.csvData = results.data.slice(1); // Excluir la primera fila (encabezado)
          this.tableHeaders = results.data[0];
        },
      });
    },
  },
};
</script>

<style>
.importarComprob{
 
  width:100%
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

.buttonClass {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 5%;
}
</style>