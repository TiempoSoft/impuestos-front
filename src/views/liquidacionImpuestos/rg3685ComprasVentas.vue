<template>
    <div style="padding: 30px">
        <el-alert :closable="false"> </el-alert>
        <el-card :body-style="{ padding: '20px' }">
            <el-row :gutter="20">
                <el-col :span="12" :offset="0">CUIT Informante:<el-input class="elinputrg" v-model="cuit1"
                        placeholder="30-11111111-8" size="normal"></el-input></el-col>
                <el-col class="elrow1" :span="10" :offset="0">Prorratear Crédito Fiscal Computable:<el-select
                        class="elinputrg2" v-model="value" placeholder="No">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="0">Mes-Año:<el-date-picker class="elinputrg" v-model="añomes1" size="normal"
                        default-value="03/23" format="MM/yyyy">
                    </el-date-picker>
                </el-col>
                <el-col class="elrow2" :span="10" :offset="0">Crédito Fiscal Computable:<el-select class="elinputrg2"
                        v-model="value" placeholder="1">
                        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="0">Secuencia:<el-input class="elinputrg1" v-model="secuencia1" placeholder="0"
                        size="normal"></el-input>
                </el-col>
                <el-col class="elrow3" :span="10" :offset="0">% Créd. Computable:<el-input class="elinputrg1"
                        v-model="secuencia1" placeholder="0" size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. Comp. Global:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred1" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. Comp. con asig. directa:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred2" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. Comp. determinado por prorrateo:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred3" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. No Comp. Global:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred4" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. Contrib. Seg. Soc. y Otros Conceptos:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred5" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="10" :offset="4">Créd. Fisc. Comp. Contrib. Seg. Soc. y Otros Conceptos:</el-col>
                <el-col :span="6" :offset="0"><el-input class="elinputrg" v-model="cred6" placeholder="0.00"
                        size="normal"></el-input></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <div class="divtitulo">Importaciones</div>
            <div style="margin: 25px;"></div>
            <el-checkbox-group class="divtitulo2" v-model="checkedCities" :min="0" :max="1">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
            </el-checkbox-group>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="7" :offset="0">Guardar los archivos generados en:</el-col>
                <el-col :span="4" :offset="0"><el-input class="inputfinalcvrg" v-model="archivosGuardado" placeholder="" size="normal"></el-input></el-col>
                <el-col :span="1" :offset="0"><el-button size="default">?</el-button></el-col>
                <el-col :span="2" :offset="4"><el-button>Procesar</el-button></el-col>
                <el-col :span="4" :offset="2"><el-button type="danger" size="default">Salir</el-button>
                </el-col>
            </el-row>
            
        </el-card>
    </div>
</template>

<script>
const cityOptions = ['Bienes', 'Servicios'];
export default {
    name: 'ImpuestosRg3685ComprasVentas',

    data() {
        return {
            cuit1: '',
            cuit2: '',
            añomes1: '',
            secuencia1: '',
            options: [{
                value: 'No',
                label: 'No'
            }, {
                value: 'Si',
                label: 'Si'
            }],
            options1: [{
                value: '1',
                label: '1'
            }, {
                value: '2',
                label: '2'
            }, {
                value: '3',
                label: '3'
            }, {
                value: '4',
                label: '4'
            }, {
                value: '5',
                label: '5'
            }],
            checkedCities: ['Bienes', 'Servicios'],
            cities: cityOptions,
            archivosGuardado:'',
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.elinputrg {
    width: 130px;
    margin-left: 2%;
}

.elinputrg1 {
    width: 50px;
    margin-left: 2%;
}

.elinputrg2 {
    width: 65px;
    margin-left: 2%;
}

.divtitulo {
    margin-left: 45%;
}

.divtitulo2 {
    margin-left: 41%;
}

.elrow1 {
    margin-left: 8%;
}

.elrow2 {
    margin-left: 8%;
}

.elrow3 {
    margin-left: 8%;
}
.inputfinalcvrg{
width: 170px;
margin-left: -20px;
}
</style>