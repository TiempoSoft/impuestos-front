<template>
    <el-card class="cardlibroIVA" >
        <el-row :gutter="20">
            
            <el-col :span="4" :offset="2">Mes-Año</el-col>
            
            <el-col :span="3" :offset="0"> <el-date-picker v-model="value1" type="month" placeholder="Mes">
                        </el-date-picker></el-col>
            <el-col :span="6" :offset="5">  <el-date-picker v-model="value2" type="year" placeholder="Año">
                        </el-date-picker></el-col>
        </el-row>
        <el-row :gutter="20" class="checkClass">
            <el-col :span="6" :offset="4">   <el-checkbox v-model="ivaCompras">Libro IVA Compras</el-checkbox></el-col>
            <el-col :span="6" :offset="4"> <el-checkbox v-model="ivaVentas">Libro IVA Ventas</el-checkbox></el-col>
        </el-row>
        
        <el-row :gutter="20" class="inputClass">
            <el-col :span="14" :offset="5"> <el-input  v-model="input"></el-input> </el-col>
            <el-button>?</el-button>
        </el-row>
        <div class="buttonClass">
            <el-button>Procesar</el-button>
            <el-button>Salir</el-button>
        </div>
        
        
        
    </el-card>
  
</template>
<script>
export default {

    data() {
        return {
            value1:"",
            value2:"",
            ivaCompras:true,
            ivaVentas:true,
            input:'',
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped >
.cardlibroIVA{
    width: 700px;
    margin-top: 5%;
    margin-left: 20%;
}
.checkClass{
    margin-top: 3%;
}
.inputClass{
    margin-top: 3%;
}

.buttonClass{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 5%;
}
</style>