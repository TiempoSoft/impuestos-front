<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="User">
        <el-card>
          <el-form :inline="true" :model="ruleForm" ref="ruleForm">
            <div class="row">
              <div class="col-20">
                <label for="fname">Nombre de la empresa</label>
              </div>
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-10">
                <label for="fname">Dirección</label>
              </div>
              <div class="col-25">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Domicilio"
                />
              </div>
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Localidad"
                />
              </div>
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Provincia"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <label for="fname">C.P</label>
              </div>
              <div class="col-10">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-10">
                <label for="fname">CUIT</label>
              </div>
              <div class="col-10">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-10">
                <label for="fname">I.V.A</label>
              </div>
              <div class="col-20">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-15">
                <label for="fname">Tipo de menú</label>
              </div>
              <div class="col-20">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-15">
                <label for="fname">Ingresos brutos</label>
              </div>
              <div class="col-20">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-20">
                <label for="fname">N° agente de percepción</label>
              </div>
              <div class="col-20">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
              <div class="col-10">
                <label for="fname">Actividad</label>
              </div>
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
            </div>
            <div class="row">
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Contador"
                />
              </div>
              <div class="col-5">
                <label for="fname">D.G.I</label>
              </div>
              <div class="col-15">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
              </div>
            </div>
          </el-form>
        </el-card>
      </el-tab-pane>
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <el-tab-pane label="Config">
        <el-card>
          <el-form>
            <div class="row">
              <div class="col-40">
                <label for="fname" style= "margin-left : 10%"
                  >Registración de comprobantes solo entre las fechas :
                </label>
              </div>
              <div class="col-10">
                <input type="date" style="border-radius: 4px ; padding : 4px" />
              </div>
              <div class="col-5">
                <label for="fname" style="margin-left : 10%">y</label>
              </div>
              <div class="col-15">
                <input type="date" style="border-radius: 4px ; padding : 4px" />
              </div>
              <div class="col-10">
                  <label for="fname">IVA tasa gral.</label>
                </div>
                <div class="col-15">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>            
            </div>
              <div class="row">           
                <div class="col-10">
                  <label for="fname">Impuesto RNI</label>
                </div>
                <div class="col-15">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
                <div class="col-5">
                  
                </div>
                <div class="col-15">
                  <label for="fname">Percepción IVA</label>
                </div>
                <div class="col-20">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
                <div class="col-5">    
                </div>
                 <div class="col-5">
                  <input type="checkbox" class="CheckStyle">
                </div>
                 <div class="col-20">
                  <label for="fname">Prorrateo de credito fiscal IVA</label>
                </div>
              </div>
              <div class="row">
                <div class="col-30">
                </div>
                <div class="col-5">
                  <input type="checkbox" class="CheckStyle">
                </div>
                 <div class="col-40">
                  <label for="fname">Incluir notas de credito sumando en los libros de IVA</label>
                </div>
              </div>
               <div class="row">
                <div class="col-30">
                </div>              
                 <div class="col-50">
                  <label for="fname">Carga de comprobantes con fechas de periodos ya liquidados en el IVA</label>
                </div>
              </div>
              <div class="row">
                 <div class="col-30">
                </div>                
                <div class="col-25">
                  <input type="checkbox">
                  <label for="fname" style="margin-left : 5px">Solamente avisar</label>
                </div>              
                 <div class="col-25">
                    <input type="checkbox">
                  <label for="fname" style="margin-left : 5px">No permitir la registración</label>
                </div>
              </div>
          </el-form>
        </el-card>
      </el-tab-pane>
      <el-tab-pane label="Role">Role</el-tab-pane>
      <el-tab-pane label="Task">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}
.CheckStyle{
  margin-top:10px
}
label {
  padding: 6px 6px 6px 0;
  display: inline-block;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.buttonWidth {
  width: 60%;
}
.contenedor {
  width: 80%;
  margin: auto;
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
  float: left;
  width: 24%;
  margin-right: 1%;
  margin-top: 6px;
  margin-bottom: 1px;
}
.col-30 {
  float: left;
  width: 29%;
  margin-right: 1%;
  margin-top: 6px;
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
  float: left;
  width: 75%;
  margin-top: 6px;
  padding-bottom: 5px;
}
.col-100 {
  float: left;
  width: 99%;
  margin-top: 6px;
  padding-bottom: 5px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
@media screen and (min-width: 601px) and (max-width: 1330px) {
  .col-10,
  .col-15,
  .col-40,
  .col-50,
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>