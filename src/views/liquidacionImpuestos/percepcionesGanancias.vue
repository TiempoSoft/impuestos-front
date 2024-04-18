<template>
    <div style="padding: 30px">
        <el-alert :closable="false"> </el-alert>
        <el-card class="cardPercepciondegan">
            <el-row :gutter="20">
                <el-col :span="12" :offset="7"><el-checkbox-group :max="1" v-model="checkList">
                        <el-checkbox label="Ganancias Personas"></el-checkbox>
                        <el-checkbox label="Ganancias Sociedades"></el-checkbox>
                    </el-checkbox-group>
                </el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="9"><el-checkbox label="DDJJ de Percepciones"></el-checkbox></el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="5" :offset="7">Datos del Libro:</el-col>
                <el-col :span="7" :offset="0" class="checkboxpercgananc"><el-checkbox-group :max="1" v-model="checkList2">
                        <el-checkbox label="Iva Ventas"></el-checkbox>
                        <el-checkbox label="Iva Compras"></el-checkbox>
                    </el-checkbox-group></el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="9" class="titulocentrado">Código de Régimen</el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="6"><el-input v-model="value1" size="normal" class="elinputnumber"
                        placeholder="0"></el-input><el-input class="elinputnumber2" v-model="value2"
                        size="normal"></el-input>
                </el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="3" :offset="7">Percepción</el-col>
                <el-col :span="7" :offset="0"><el-select v-model="value" placeholder="">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select></el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="8" :offset="5">Periodo a informar (Ej. 03/2007)</el-col>
                <el-col :span="2" :offset="0" class="checkboxpercgananc"><el-input class="elinputnumber2" v-model="value3"
                        size="normal"></el-input>
                </el-col>
            </el-row>
            <div style="margin: 10px;"></div>
            <el-row :gutter="20">
                <el-col :span="12" :offset="5"><el-input class="input2" v-model="value5" placeholder=""
                        size="normal"></el-input><el-button class="botonpersfisc" type="default"
                        size="default">?</el-button>
                </el-col>
            </el-row>
            <div style="margin: 20px;"></div>
            <div class="divisorbutton">
                <el-button>Exportar</el-button>
                <el-button type="danger">Salir</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'ImpuestosPercepcionesGanancias',

    data() {
        return {
            checkList: ['Ganancias Personas'],
            checkList2: ['Iva Ventas'],
            value1: '',
            value2: '',
            options: [{
                value: 'Option1',
                label: 'Option1'
            }, {
                value: 'Option2',
                label: 'Option2'
            }, {
                value: 'Option3',
                label: 'Option3'
            }, {
                value: 'Option4',
                label: 'Option4'
            }, {
                value: 'Option5',
                label: 'Option5'
            }],
            value: '',
            value3: '',
            value5: '',

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.cardPercepciondegan {
    margin-left: 50px;
    max-width: 900px;
}

.checkboxpercgananc {
    margin-left: -60px;
}

.titulocentrado {
    margin-left: 357px;
}

.elinputnumber {
    width: 50px;
    margin-left: 70px;
}

.elinputnumber2 {
    width: 200px;
}

.input2 {
    width: 300px;
    margin-left: 65px;
}

.divisorbutton {
    margin-bottom: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.botonpersfisc {
    color: #ccc;
    margin-left: 5px;
}</style>