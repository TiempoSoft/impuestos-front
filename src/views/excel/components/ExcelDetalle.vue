<template>
  <div class="app-container" style="width: 100%">
    <el-card class="Papa" >
      <div style="display: flex; justify-content: space-around">
        <div class="drop" style="width:40%">
        <h4>Otro importes del comprobante</h4>
        <div
          style="display: flex; justify-content: space-around; margin-top: 1vw"
        >
          <div style="width:70%">
            <label for="">Detalle</label>
            <hr />
            <label for="" class="label">IVA PERCEPCIÓN</label><br>
            <label for="" class="label">IMP. INTERNOS</label><br>
            <label for="" class="label">IIBB PERCEPCIÓN</label><br>
            <label for="" class="label">COMERCIO EXT</label><br>
            <label for="" class="label">IMP. NACIONALES</label><br>
            <label for="" class="label">IMP. MUNICIPALES</label><br>
            <label for="" class="label">OTROS </label><br>
            <label for="" class="label">SIRCREB</label><br>
            <label for="" class="label">NO CATEG</label><br>
          </div>
          <div>
            <label for="">Importe</label>
            <hr />
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.ivaPercepcion"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.impuestosInternacionales"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.iibbPercepcion"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.comercioExterior"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.impuestosNacionales"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.impuestosMunicipales"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.otrosImpuestos"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.sircreb"></el-input><br>
            <el-input @blur="RellenarDecimInput()" class="input" v-model="Comprobante.noCategorizados"></el-input><br>
          </div>
        </div>
      </div>
      <div class="drop" style="width:40%">
        <h4>Importes de iva del comprobante</h4>
        <div
          style="display: flex; justify-content: space-around; margin-top: 1vw"
        >
         <div style="width:70%">
            <label for="">Detalle</label>
            <hr />
            <label for="" class="label">2.50%</label><br>
            <label for="" class="label">5.00%</label><br>
            <label for="" class="label">10.50%</label><br>
            <label for="" class="label">21.00%</label><br>
            <label for="" class="label">27.00%</label><br>
          </div>
          <div>
            <label for="">Importe</label>
            <hr />
            <label for="" class="label">0.00%</label><br>
            <label for="" class="label">0.00%</label><br>
            <label for="" class="label">0.00%</label><br>
            <label for="" class="label">0.00%</label><br>
            <label for="" class="label">0.00%</label><br>
          </div>
        </div>
      </div>
      </div>
    </el-card>
    <div class="row">
      <div style="width: 50%; height: 6vw; margin-top: 1vw">
        <label for="diferencia">DIFERENCIA</label>
        <el-input style="width: 90%;background-color: #d9534f;margin-top:2%"></el-input>
      </div>
      <div style="width: 50%; height: 6vw; margin-top: 1vw">
        <label for="diferencia">IVA</label><br>
        <el-input style="width: 90%;margin-top:2%"></el-input>
      </div>
    </div>
    <div>
      <el-card>
        <div style="display: flex; justify-content: space-around">
          <div class="Importante">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptas soluta doloremque! Ipsa, soluta temporibus corrupti laudantium enim saepe eligendi. Explicabo maxime eius perferendis architecto, quod cumque sequi est dignissimos.
          </div>
          <el-button @click="CerrarModal()">Procesar<i class="el-icon-check"></i></el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Comprobante"],
  data() {
    return {
      Comprobante: {},
    };
  },
  methods: {
    RellenarDecimInput(e){
      if(!e) e = window.event
      if(e.target.value === '0.00'){
        return false
      }
      else 
        if(e.target.value.includes('.')){
          return false 
        }
      else{ e.target.value += ".00"}
    },
    CerrarModal(){
      this.$modal.hide('ExcelDetalle');
    }
  },
  created(){
    console.log(this.Comprobante);
  }
};
</script>
<style scoped>
.row {
  height: 10%;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: f;
}
.label{
  margin-bottom: 1px;
  width:"60%";
  font-size:1vw
}
.input{
  width: 50%;
  margin-left: 50%;
}
.col-70 {
  float: left;
  width: 79%;
  margin-top: 6px;
  padding-bottom: 5px;
}
.drop {
  /* border: 2px dashed #bbb;
  width: 600px;
  height: 160px;
  line-height: 160px;
  margin: 0 auto; */
  font-size: 15px;
  /* border-radius: 5px;
  text-align: center;
  color: #bbb;
  position: relative; */
}
</style>
