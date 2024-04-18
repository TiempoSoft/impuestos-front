<template>
    <div style="padding: 30px">
        <el-alert :closable="false"> </el-alert>
        <el-card class="CardCitiVentas">

            <el-row :gutter="20">
                <el-col :span="6" :offset="0">Mes - Año:</el-col>
                <el-col :span="18" :offset="0"><el-date-picker class="InputFechasciticompras1" v-model="value2" type="month"
                        placeholder="Mes" format="MM">
                    </el-date-picker><el-date-picker class="InputFechasciticompras2" v-model="value3" type="year"
                        placeholder="Año">
                    </el-date-picker></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11" :offset="0">Marca de Facturación:</el-col>
                <el-col :span="13" :offset="0"><el-checkbox-group :max="1" v-model="checkList">
                        <el-checkbox label="A"></el-checkbox>
                        <el-checkbox label="M"></el-checkbox>
                    </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="11" :offset="0">Incluye la fecha e importe de retención:</el-col>
                <el-col :span="13" :offset="0"><el-checkbox-group :max="1" v-model="checkList2">
                        <el-checkbox label="Si"></el-checkbox>
                        <el-checkbox label="No"></el-checkbox>
                    </el-checkbox-group>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="21" :offset="0"><el-input v-model="inputcitiVentas" placeholder="" size="normal"></el-input>
                </el-col>
                <el-col :span="3" :offset="0"><el-button>?</el-button></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col class="columnapersfisc" :span="12">
                    <el-button type="default" size="default">Procesar</el-button>
                </el-col>
                <el-col class="columnapersfisc" :span="12">
                    <el-button type="danger" size="default">Cerrar</el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'ImpuestosCitiVentas',

    data() {
        return {
            checkList: ['A'],
            checkList2: ['Si'],
            inputcitiVentas: '',
            value2: '',
            value3:'',
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.InputFechasciticompras2 {
    margin-left: 1%;
    width: 150px;
    margin-bottom: 3%;

}

.InputFechasciticompras1 {
    margin-left: 7%;
    width: 150px;
    margin-bottom: 3%;
}

.CardCitiVentas {
    max-width: 600px;
    margin-left: 23%;
}

.columnapersfisc {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2%;
}</style>
