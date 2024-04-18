<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-alert :closable="true" title="Claves de usuario"></el-alert>
      <el-form :inline="true" :model="form" ref="form">
        <div class="row">
          <div class="col-20">
            <label for="fname">Nombre</label>
          </div>
          <div class="col-15">
            <el-input
              type="string"
              v-model="form.Nombre"
              placeholder="Nombre"
            ></el-input>
          </div>
          <div class="col-20">
            <label for="Fname">clave</label>
          </div>
          <div class="col-25">
            <el-input
              type="string"
              placeholder="..."
              v-model="form.clave"
            ></el-input>
          </div>
          <div class="col-1">
            <label for="Fname">vencim.</label>
          </div>
          <div class="col-10">
            <el-date-picker
              type="date"
              placeholder="MM/DD/AA"
              v-model="form.date1"
            ></el-date-picker>
          </div>
        </div>
        <el-table
          :data="ListaDeTareas"
          align="center"
          height="400"
          style="width: 100%; margin-top: 2%"
        ><el-table-column
            align="center"
            prop="menu"
            label="Tipo - Tareas"
            width="500%"
          >
          </el-table-column>
          <el-table-column type="selection" align="100%"> </el-table-column>
        </el-table>
        <div class="row">
          <el-button type="primary">Autorizar tareas</el-button>
        </div>
      </el-form>
    </el-tabs>
  </div>
</template>
<script>
import Axios from "axios";
const Datos_clavesDeUsuario = [];
export default {
  data() {
    return {
      form: {
        Nombre: "",
        date1: "",
        clave: "",
        //AutorizarT:"",
      },
      //Objeto, DBF original no esta en los archivos.
      ListaDeTareas: [
        { menu: "Archivo - Claves de usuario" },
        { menu: "Archivo   - Claves de usuario" },
        { menu: "Archivo - Proveedores" },
        { menu: "Archivo - Clientes" },
        { menu: "Archivo - Reponsables" },
        { menu: "Archivo - Establecimientos" },
        { menu: "Archivo - Rubros" },
        { menu: "Archivo - Jurisdicciones" },
        { menu: "Archivo - Alícuotas por rubros" },
        { menu: "Archivo - Alícuotas por jurisdicción y rubros" },
        { menu: "Archivo - Tipos de gastos" },
        { menu: "Archivo - Tablas para liquidar ganancias" },
        { menu: "Archivo - Tabla CAI.de ventas" },
        { menu: "Libros de Iva - Carga de comprobantes ventas" },
        { menu: "Libros de Iva - Modelo de cargas de ventas" },
        { menu: "Libros de Iva - Modelo de cargas de ventas" },
        { menu: "Compras - Carga de comprobantes" },
        { menu: "Compras - Libro Iva.compras" },
        { menu: "Compras - Totales de compras" },
        { menu: "Compras - Totales de compras" },
        { menu: "Compras - Consultas de compras" },
        { menu: "Compras - Listado de control" },
        { menu: "Compras - Borrar libro Iva.compras" },
        { menu: "Ventas - Carga de comprobantes" },
        { menu: "Ventas - Libro Iva.ventas" },
        { menu: "Ventas - Totales de ventas" },
        { menu: "Ventas - Consultas de ventas" },
        { menu: "Ventas - Listado de control" },
        { menu: "Ventas - Borrar libro Iva.ventas" },
        { menu: "Liquidación impuestos - Liquidación de I.V.A." },
        { menu: "Liquidación impuestos - Personas Físicas" },
        { menu: "Liquidación impuestos - Sociedades" },
        { menu: "Liquidación impuestos - Ingresos Brutos" },
        { menu: "Liquidación impuestos - Regím.de Información" },
        { menu: "Herramientas - Reconstruir indices de archivo" },
        { menu: "Herramientas - Reparar bases de datos" },
        { menu: "Herramientas - Preimpresión de libros" },
        { menu: "Herramientas - Movimientos de hacienda" },
        { menu: "Herramientas - Ejecutar aplicaciones" },
        { menu: "Herramientas - Ejecutar VNC" },
        { menu: "Herramientas - Asistentes para informes" },
        { menu: "Herramientas - Recibir datos Tiempo Gestión" },
        { menu: "Liquidación del I.V.A." },
        { menu: "Liquidación de I.V.A. - Pagos del I.V.A." },
        { menu: "Liquidación de I.V.A. - Posiciones mensuales" },
        { menu: "Liquidación de I.V.A. - Preparación F.439" },
        { menu: "Liquidación de I.V.A. - Impresión F.439" },
        { menu: "Liquidación de I.V.A. - Reintegro de I.V.A." },
        { menu: "Liquidación de I.V.A. - Ajuste anual-Prorrate" },
        { menu: "Personas Físicas - Datos iniciales" },
        { menu: "Personas Físicas - Participación en la empres" },
        { menu: "Personas Físicas - Liquidar impuesto a gananc" },
        { menu: "Personas Físicas - Liquidar imp.bienes person" },
        { menu: "Personas Físicas - Borrar declaraciones jurad" },
        { menu: "Sociedades - Equivalencia de rubros" },
        { menu: "Sociedades - Liquidar imp.ganancias" },
        { menu: "Sociedades - Exportar imp.ganancias" },
        { menu: "Sociedades - Imprimir imp.ganancias" },
        { menu: "Ingresos Brutos - Total por alícuotas ingreso" },
        { menu: "Ingresos Brutos - Convenio multilateral: Coef" },
        { menu: "Ingresos Brutos - Convenio multilateral: Liqu" },
        { menu: "Ingresos Brutos - Salta: Generación F.906" },
        { menu: "Ingresos Brutos - Salta: Generación F.905/B" },
        { menu: "Ingresos Brutos - Salta: Generación F.905/A" },
        { menu: "Ingresos Brutos - Buenos Aires: Mínimo acumul" },
        { menu: "Ingresos Brutos - Buenos Aires: Antic-Retenci" },
        { menu: "Ingresos Brutos - Buenos Aires: Liquidación" },
        { menu: "Ingresos Brutos - Mendoza: AP-01" },
        { menu: "Regímenes de Información - Libro IVA. Electr." },
        { menu: "Regímenes de Información - C.I.T.I. Compras" },
        { menu: "Regímenes de Información - C.I.T.I. Ventas" },
        { menu: "Sistema de Contabilidad" },
        { menu: "Compras - Ver comprobantes" },
        { menu: "Ventas - Ver comprobantes" },
        { menu: "Compras - Listado de rubros y tipos de gastos" },
        { menu: "Liquidación impuestos-Reintegro del Impuesto" },
      ],

      Datos_clavesDeUsuario: "",
    };
  },
  created() {
    Axios.get("http://localhost:3000//").then((result) => {
      this.Datos_clavesDeUsuario = result.data;
      console.log("Datos_ClavesDeUsuario", this.Datos_clavesDeUsuario);
    });
  },
};
</script>
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
.CheckStyle {
  margin-top: 10px;
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
.col-1 {
  float: left;
  width: 4%;
  margin-right: 5%;
  margin-top: 6px;
  margin-left: 5%;
}
.col-5 {
  float: left;
  width: 10%;
  margin-right: 5%;
  margin-top: 75px;
}
.col-8 {
  float: left;
  width: 6%;
  margin-right: -6%;
  margin-top: 6px;
}
.col-10 {
  float: left;
  width: 1%;
  margin-top: 6px;
  margin-right: 0%;
}
.col-15 {
  float: left;
  margin-right: 9%;
  width: 19%;
  margin-top: 6px;
}
.col-20 {
  float: left;
  margin-right: 1%;
  width: 7%;
  margin-top: 10px;
}
.col-25 {
  float: left;
  width: 13%;
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