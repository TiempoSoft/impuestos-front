<template>
    <div class="app-container">
        <el-alert :closable="true" title="Armado Resumen Año Fiscal"></el-alert>
        <el-tabs type="border-card" @tab-click="reiniciarcurrenRow()">
            <!-- !!!!!!!!!!!!!!!!!!!!!!! 1ra pestaña!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <el-tab-pane label="Empresa">
                <el-card>
                    <el-form>
                        <div>
                            <el-row style="display: flex;">
                                <el-button>Guardar</el-button>
                            </el-row>
                        </div>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <!-- !!!!!!!!!!!!!!!!!!!!!!! 2da pestaña!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <el-tab-pane label="I V A">
                <el-card>
                    <el-form ref="form" :model="form" label-width="300px" label-position="rigth">
                        <el-form-item label="Comprobantes entre las fechas">
                            <el-col :span="4" :offset="2">
                                <el-date-picker type="date" placeholder="Fecha Inicio" v-model="form.date1"
                                    style="width: 200px;"></el-date-picker>
                            </el-col>
                            <el-col :span="7">
                                <el-date-picker placeholder="Fecha Fin" v-model="form.date2"
                                    style="width: 200px;"></el-date-picker>
                            </el-col>
                        </el-form-item>
                        <el-row :gutter="20">
                            <el-col :span="7" :offset="0">
                                <el-form-item label="IVA Tasa General">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-form-item label="Impuesto RNI">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-form-item label="Percepcion IVA">
                                    <el-input></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5" :offset="5">
                                <el-checkbox label="Prorrateo del credito fiscal de IVA" name="type"></el-checkbox>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-checkbox label="Incluir notas de credito sumando en los libros de iva"
                                    name="type"></el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" style="margin-top: 1%;">
                            <el-col :span="12" :offset="6">
                                <el-header style="font-size: large; color: #606266;">
                                    Carga de comprobantes con fechas de períodos ya liquidados en el IVA
                                </el-header>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4" :offset="7">
                                <el-checkbox label="Solamente Avisar" name="type"></el-checkbox>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-checkbox label="No Permitir La Registracion" name="type"></el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" style="margin-top: 1%;">
                            <el-col :span="12" :offset="6">
                                <el-header style="font-size: large; color: #606266;">
                                    Borrar Comprobantes Con Fechas de Periodos ya Liquidados en el IVA
                                </el-header>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4" :offset="7">
                                <el-checkbox label="Solamente Avisar" name="type"></el-checkbox>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-checkbox label="No Permitir Borrar" name="type"></el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" style="margin-top: 1%;">
                            <el-col :span="11" :offset="9">
                                <el-header style="font-size: large; color: #606266;">
                                    Libros de IVA Reducidos
                                </el-header>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4" :offset="7">
                                <el-checkbox label="Compras" name="type"></el-checkbox>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-checkbox label="Ventas" name="type"></el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" style="margin-top: 1%;">
                            <el-col :span="12" :offset="6">
                                <el-header style="font-size: large; color: #606266;">
                                    Carga de Comprobantes con Fechas que no Coinciden con el Periodo Contable Activo
                                </el-header>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4" :offset="7">
                                <el-checkbox label="Solamente Avisar" name="type"></el-checkbox>
                            </el-col>
                            <el-col :span="7" :offset="0">
                                <el-checkbox label="No Permitir La Registracion" name="type"></el-checkbox>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" style="margin-top: 1%;">
                            <el-col :span="4" :offset="8"><el-button type="primary"
                                    @click="onSubmit">Aceptar</el-button></el-col>
                            <el-col :span="7" :offset="0"><el-button type="danger">Cancelar</el-button></el-col>
                        </el-row>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 3ra tabla!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <el-tab-pane label="Ingresos Brutos">
                <el-card>
                    <el-form>
                    </el-form>
                </el-card>
            </el-tab-pane>
            <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!4ta tabla!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
            <el-tab-pane label="Contabilidad">
                <el-card>
                    <el-form>
                    </el-form>
                </el-card>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>

export default {
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        };
    },

    methods: {
        onSubmit() {
            console.log('submit!');
        }
    },

    created() {
    },
};
</script>
<style scoped>
.button {
    width: 50%;
}

.tableStyle {
    width: 70%;
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
    float: right;
    width: 50%;
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
    float: right;
    width: 70%;
    margin-top: 6px;
    padding-bottom: 5px;
}
</style>
  