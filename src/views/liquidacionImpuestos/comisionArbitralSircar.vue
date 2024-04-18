<template>
    <div style="padding: 30px">
        <el-alert :closable="false"> </el-alert>
        <el-card :body-style="{ padding: '20px' }">
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">
                    <h6>El siguiente proceso realizará la confección de los archivos .txt que servirán de base para realizar
                        la importación de datos al sistema SIRCAR.</h6>
                </el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6">Jurisdicción:<el-select class="elinputcomarbsir" v-model="value"
                        placeholder="PROVINCIA">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="7"><el-date-picker v-model="value2" type="daterange" align="right"
                        start-placeholder="Fecha Inicial" end-placeholder="Fecha Final" default-value="2022-01-01"
                        format="dd/MM/yyyy">
                    </el-date-picker></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6"><el-input v-model="rutacomarsir" placeholder=""
                        size="normal"></el-input></el-col>
                <el-col :span="1" :offset="0"><el-button size="default">?</el-button></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <div class="divisorbutton">
                <el-button>Exportar</el-button>
                <el-button type="danger">Salir</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'ImpuestosComisionArbitralSircar',
    data() {
        return {
            options1: [{
                value: 'CATAMARCA',
                label: 'CATAMARCA',
            }, {
                value: 'SAN LUIS',
                label: 'SAN LUIS'
            }, {
                value: 'SAN JUAN',
                label: 'SAN JUAN'
            }, {
                value: 'LA RIOJA',
                label: 'LA RIOJA'
            }, {
                value: 'TUCUMAN',
                label: 'TUCUMAN'
            }],
            value2: '',
            rutacomarsir: '',
        };
    },
    mounted() {
    },
    methods: {
    },
};
</script>
<style scoped>
.elinputcomarbsir {
    margin-left: 20px;
    width: 300px;
}

.divisorbutton {
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}</style>