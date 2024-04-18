<template>
    <div style="padding: 30px">
        <el-alert :closable="false"> </el-alert>
        <el-card>
            <el-row :gutter="20">
                <el-col :span="6" :offset="0"><el-checkbox v-model="checked">Por mes de imputación</el-checkbox></el-col>
                <el-col :span="8" :offset="0">Inicial:<el-date-picker class="InputFechasciticompras" v-model="value2"
                        type="month" format="MM" placeholder="Mes">
                    </el-date-picker><el-date-picker class="InputFechasciticompras" v-model="value3" type="year"
                        placeholder="Año">
                    </el-date-picker></el-col>
                <el-col :span="8" :offset="0">Final:<el-date-picker class="InputFechasciticompras" v-model="value2"
                        type="month" format="MM" placeholder="Mes">
                    </el-date-picker><el-date-picker class="InputFechasciticompras" v-model="value3" type="year"
                        placeholder="Año">
                    </el-date-picker></el-col>
            </el-row>
            <div style="margin: 25px;"></div>
            <el-row :gutter="20">
                <el-col :span="6" :offset="0"><el-checkbox v-model="checked1">Por fecha del
                        comprobante</el-checkbox></el-col>
                <el-col :span="8" :offset="0">De<el-date-picker class="InputFechasciticompras2" v-model="value1" type="date"
                        placeholder="20-02-2022" format="dd/MM/yyyy" >
                    </el-date-picker>
                </el-col>
                <el-col :span="8" :offset="0">A <el-date-picker class="InputFechasciticompras2" v-model="value4" type="date"
                        placeholder="20-02-2023" format="dd/MM/yyyy">
                    </el-date-picker></el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col class="columnapersfisc" :span="12">
                    <el-button type="default" size="default">Generar</el-button>
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
    name: 'ImpuestosCitiCompras',

    data() {
        return {
            checked: true,
            checked1: true,
            value1: '',
            value2: '',
            value3: '',
            value4: '',
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>
<style scoped>
.InputFechasciticompras {
    width: 120px;
    margin-left: 2%;
}

.InputFechasciticompras2 {
    margin-left: 2%;
    width: 272px;

}

.columnapersfisc {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2%;
}
</style>