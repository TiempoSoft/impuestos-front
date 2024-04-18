<template>
    <div class="container">
        <!-- Primer bloque -->
        <div class="block">
            <el-form label-width="120px" inline>
                <el-form-item label="Tipo de Reporte">
                    <el-select v-model="selectedReportType" placeholder="Seleccionar tipo de reporte">
                        <el-option label="Reporte rápido" value="quickReport"></el-option>
                        <el-option label="Libro con cabecera" value="bookWithHeader"></el-option>
                        <el-option label="Libro sin cabecera" value="bookWithoutHeader"></el-option>
                    </el-select>
                </el-form-item>

                <!-- Tipo de Imputación y Selectores de fechas -->
                <el-form-item label="Imputación">
                    <el-select v-model="selectedImputationType" placeholder="Seleccionar tipo de imputación">
                        <el-option label="Por mes de imputación" value="monthlyImputation"></el-option>
                        <el-option label="Por fecha de comprobante" value="dateOfReceipt"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item v-if="selectedImputationType === 'monthlyImputation'">
                    <el-date-picker type="month" placeholder="Mes de inicio" v-model="startMonth"></el-date-picker>
                </el-form-item>
                <el-form-item v-if="selectedImputationType === 'monthlyImputation'">
                    <el-date-picker type="month" placeholder="Mes de fin" v-model="endMonth"></el-date-picker>
                </el-form-item>
                <el-form-item v-if="selectedImputationType === 'dateOfReceipt'">
                    <el-date-picker placeholder="Fecha de inicio" v-model="startDate"></el-date-picker>
                </el-form-item>
                <el-form-item v-if="selectedImputationType === 'dateOfReceipt'">
                    <el-date-picker placeholder="Fecha de fin" v-model="endDate"></el-date-picker>
                </el-form-item>
            </el-form>
        </div>

        <!-- Segundo bloque -->
        <div class="block">
            <el-form label-width="120px" inline>
                <el-form-item label="Establecimiento">
                    <el-select v-model="selectedEstablishment" placeholder="Seleccionar establecimiento">
                    </el-select>
                </el-form-item>
                <!-- Checks para papel continuo e incluir CAI -->
                <el-form-item>
                    <el-checkbox v-model="includeContinuousPaper">Papel Continuo</el-checkbox>
                    <el-checkbox v-model="includeCAI">Incluir CAI</el-checkbox>
                </el-form-item>
            </el-form>
        </div>

        <!-- Espacio para la tabla -->
        <div id="tablaIVAFull" class="table-space">
            <template v-if="selectedReportType === 'bookWithHeader'">
                <div>
                    <el-header>
                        ARSUMAX SAS Moreno 312-murphy-santa fe
                    </el-header>
                    <el-header>
                        LIBRO No: 001 PAGINA No:00000001 CUIT: 30-71673092-8
                    </el-header>
                    <el-header>
                        I.BRUTOS: 032732516-3 NroESTABLECIMIENTO SEDE TIMBRADO RESP:INSCRIPTO Nro AGENTE PERCEPCION:
                    </el-header>

                </div>
                <el-table id="tablaIVA" :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="comprobante" label="Comprobante" width="180">
                    </el-table-column>
                    <el-table-column prop="date" label="Fecha" width="100">
                    </el-table-column>
                    <el-table-column prop="neto" label="Neto" width="100">
                    </el-table-column>
                    <el-table-column prop="periibb" label="Perc. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosComprobables" label="Imp. Comp.">
                    </el-table-column>
                    <el-table-column prop="iva" label="IVA">
                    </el-table-column>
                    <el-table-column prop="retiibb" label="Ret. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosNoComprobables" label="Imp. No Comp.">
                    </el-table-column>
                    <el-table-column prop="retIva" label="Ret. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosNacionales" label="Imp. Nac.">
                    </el-table-column>
                    <el-table-column prop="percIva" label="Perc. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosMunicipales" label="Imp. Munic.">
                    </el-table-column>
                    <el-table-column prop="impuestosInternos" label="Imp. int.">
                    </el-table-column>
                    <el-table-column prop="retGanacias" label="Ret. Gan.">
                    </el-table-column>
                    <el-table-column prop="noGravados" label="No. Grav.">
                    </el-table-column>
                    <el-table-column prop="percGanacias" label="Perc. Gan.">
                    </el-table-column>
                    <el-table-column prop="exentos" label="Exentos">
                    </el-table-column>
                    <el-table-column prop="sircreb" label="Sircreb">
                    </el-table-column>
                    <el-table-column prop="total" label="TOTAL">
                    </el-table-column>
                </el-table>
            </template>
            <template v-if="selectedReportType === 'quickReport'">
                <!-- Columnas específicas para Reporte Rápido -->
                <el-table id="tablaIVA" :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="comprobante" label="Comprobante" width="180">
                    </el-table-column>
                    <el-table-column prop="date" label="Fecha" width="100">
                    </el-table-column>
                    <el-table-column prop="neto" label="Neto" width="100">
                    </el-table-column>
                    <el-table-column prop="periibb" label="Perc. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosComprobables" label="Imp. Comp.">
                    </el-table-column>
                    <el-table-column prop="iva" label="IVA">
                    </el-table-column>
                    <el-table-column prop="retiibb" label="Ret. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosNoComprobables" label="Imp. No Comp.">
                    </el-table-column>
                    <el-table-column prop="retIva" label="Ret. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosNacionales" label="Imp. Nac.">
                    </el-table-column>
                    <el-table-column prop="percIva" label="Perc. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosMunicipales" label="Imp. Munic.">
                    </el-table-column>
                    <el-table-column prop="impuestosInternos" label="Imp. int.">
                    </el-table-column>
                    <el-table-column prop="retGanacias" label="Ret. Gan.">
                    </el-table-column>
                    <el-table-column prop="noGravados" label="No. Grav.">
                    </el-table-column>
                    <el-table-column prop="percGanacias" label="Perc. Gan.">
                    </el-table-column>
                    <el-table-column prop="exentos" label="Exentos">
                    </el-table-column>
                    <el-table-column prop="sircreb" label="Sircreb">
                    </el-table-column>
                    <el-table-column prop="total" label="TOTAL">
                    </el-table-column>
                </el-table>
            </template>
            <template v-if="selectedReportType === 'bookWithoutHeader'">
                <!-- Columnas específicas para Libro sin Cabecera -->
                <!-- Similar a Reporte Rápido -->
                <el-table id="tablaIVA" :data="tableData" border style="width: 100%">
                    <el-table-column fixed prop="comprobante" label="Comprobante" width="180">
                    </el-table-column>
                    <el-table-column prop="date" label="Fecha" width="100">
                    </el-table-column>
                    <el-table-column prop="neto" label="Neto" width="100">
                    </el-table-column>
                    <el-table-column prop="periibb" label="Perc. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosComprobables" label="Imp. Comp.">
                    </el-table-column>
                    <el-table-column prop="iva" label="IVA">
                    </el-table-column>
                    <el-table-column prop="retiibb" label="Ret. IIBB">
                    </el-table-column>
                    <el-table-column prop="impuestosNoComprobables" label="Imp. No Comp.">
                    </el-table-column>
                    <el-table-column prop="retIva" label="Ret. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosNacionales" label="Imp. Nac.">
                    </el-table-column>
                    <el-table-column prop="percIva" label="Perc. IVA">
                    </el-table-column>
                    <el-table-column prop="impuestosMunicipales" label="Imp. Munic.">
                    </el-table-column>
                    <el-table-column prop="impuestosInternos" label="Imp. int.">
                    </el-table-column>
                    <el-table-column prop="retGanacias" label="Ret. Gan.">
                    </el-table-column>
                    <el-table-column prop="noGravados" label="No. Grav.">
                    </el-table-column>
                    <el-table-column prop="percGanacias" label="Perc. Gan.">
                    </el-table-column>
                    <el-table-column prop="exentos" label="Exentos">
                    </el-table-column>
                    <el-table-column prop="sircreb" label="Sircreb">
                    </el-table-column>
                    <el-table-column prop="total" label="TOTAL">
                    </el-table-column>
                </el-table>
            </template>
        </div>

        <!-- Botones para exportar -->
        <div class="button_style">
            <el-button type="primary" icon="el-icon-download" @click="exportToPDF">Guardar PDF</el-button>
            <el-button type="primary" icon="el-icon-s-grid" @click="exportToExcel">Excel</el-button>
        </div>
    </div>
</template>

<script>
import html2pdf from 'html2pdf.js';
import XLSX from 'xlsx';

export default {
    data() {
        return {
            selectedReportType: '',
            selectedImputationType: '',
            startMonth: '',
            endMonth: '',
            startDate: '',
            endDate: '',
            selectedEstablishment: '',
            includeCAI: false,
            includeContinuousPaper: false,
            period: '',
            bookNumber: '',
            pageNumber: '',
            tableData: [
                {
                    comprobante: 'TK A 00018 00005523 EESS-SHELL',
                    date: '04-01-2022',
                    neto: '5612.92',
                    periibb: '0.00',
                    impuestosComprobables: '0.00',
                    iva: '1178.71',
                    retiibb: '0.00',
                    impuestosNoComprobables: '0.00',
                    retIva: '0.00',
                    impuestosNacionales: '0.00',
                    percIva: '0.00',
                    impuestosMunicipales: '0.00',
                    impuestosInternos: '1208.37',
                    retGanacias: '0.00',
                    noGravados: '0.00',
                    percGanacias: '0.00',
                    exentos: '0.00',
                    sircreb: '0.00',
                    total: '8000.00'
                },
                {
                    comprobante: 'TK A 00018 00005523 EESS-SHELL',
                    date: '04-01-2022',
                    neto: '5612.92',
                    periibb: '0.00',
                    impuestosComprobables: '0.00',
                    iva: '1178.71',
                    retiibb: '0.00',
                    impuestosNoComprobables: '0.00',
                    retIva: '0.00',
                    impuestosNacionales: '0.00',
                    percIva: '0.00',
                    impuestosMunicipales: '0.00',
                    impuestosInternos: '1208.37',
                    retGanacias: '0.00',
                    noGravados: '0.00',
                    percGanacias: '0.00',
                    exentos: '0.00',
                    sircreb: '0.00',
                    total: '8000.00'
                },
                {
                    comprobante: 'TK A 00018 00005523 EESS-SHELL',
                    date: '04-01-2022',
                    neto: '5612.92',
                    periibb: '0.00',
                    impuestosComprobables: '0.00',
                    iva: '1178.71',
                    retiibb: '0.00',
                    impuestosNoComprobables: '0.00',
                    retIva: '0.00',
                    impuestosNacionales: '0.00',
                    percIva: '0.00',
                    impuestosMunicipales: '0.00',
                    impuestosInternos: '1208.37',
                    retGanacias: '0.00',
                    noGravados: '0.00',
                    percGanacias: '0.00',
                    exentos: '0.00',
                    sircreb: '0.00',
                    total: '8000.00'
                },
                {
                    comprobante: 'TK A 00018 00005523 EESS-SHELL',
                    date: '04-01-2022',
                    neto: '5612.92',
                    periibb: '0.00',
                    impuestosComprobables: '0.00',
                    iva: '1178.71',
                    retiibb: '0.00',
                    impuestosNoComprobables: '0.00',
                    retIva: '0.00',
                    impuestosNacionales: '0.00',
                    percIva: '0.00',
                    impuestosMunicipales: '0.00',
                    impuestosInternos: '1208.37',
                    retGanacias: '0.00',
                    noGravados: '0.00',
                    percGanacias: '0.00',
                    exentos: '0.00',
                    sircreb: '0.00',
                    total: '8000.00'
                },
            ]
        };
    },
    methods: {
        async exportToPDF() {
            const element = document.getElementById('tablaIVAFull');
            if (!element) {
                console.error('Element not found.');
                return;
            }

            // Configuraciones generales...
            const pdfOptions = {
                margin: 10,
                filename: 'table_data.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 3 },
                jsPDF: { unit: 'mm', format: 'A2', orientation: 'landscape' },
            };

            // Ajustar lógica según el tipo de reporte seleccionado
            if (this.selectedReportType === 'quickReport') {
                // Configuración específica para Reporte Rápido
                // ...
            } else if (this.selectedReportType === 'bookWithHeader') {
                // Configuración específica para Libro con Cabecera
                // Puedes agregar más datos de cabecera según sea necesario
            } else if (this.selectedReportType === 'bookWithoutHeader') {
                // Configuración específica para Libro sin Cabecera
                // Similar a Reporte Rápido
                // ...
            }

            // Generar el PDF
            await html2pdf(element, pdfOptions);
        },
        exportToExcel() {
            const ws = XLSX.utils.json_to_sheet(this.tableData);
            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            XLSX.writeFile(wb, 'table_data.xlsx');
        },
    },
};
</script>

<style>
.container {
    margin: 20px auto;
    max-width: 600px;
}

.block {
    margin-bottom: 20px;
}

.table-space {
    margin-top: 20px;
}

.button_style {
    margin-top: 20px;
    text-align: center;
}
</style>
