<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Tipo">
          <el-select v-model="form.Tipo" placeholder="...">
            <el-option label="RF" value=""></el-option>
            <el-option label="FC" value=""></el-option>
            <el-option label="ND" value=""></el-option>
            <el-option label="NC" value=""></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Letra">
          <el-select v-model="form.Letra" placeholder="...">
            <el-option label="A" value=""></el-option>
            <el-option label="E" value=""></el-option>
            <el-option label="C" value=""></el-option>
            <el-option label="B" value=""></el-option>
            <el-option label="M" value=""></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="Letra">
          <el-select v-model="form.Establecimiento" placeholder="...">
            <el-option label="0001" value=""></el-option>
            <el-option label="0002" value=""></el-option>
          </el-select>
          <el-form-item label="Controlador fiscal">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
        </el-form-item>

        <el-form-item label="Rango Numerico">
          <el-input
            v-model="form.Rnumerico00"
            type="number"
            maxnumber="2"
            placeholder="1-20"
            style="width: 25%"
          ></el-input>
          <label for=""></label>
          <el-input
            v-model="form.Rnumerico01"
            type="number"
            maxnumber="2"
            placeholder="1-20"
            style="width: 25%"
            col="20"
          ></el-input>
        </el-form-item>

        <!-----------Modulo Datos del cai --->
        <el-tabs type="border-card">
          <el-tab-pane label="Datos del CAI">
            <el-form-item label="Rango Numerico">
              <el-input
                v-model="form.Rnumerico00"
                type="number"
                maxnumber="2"
                placeholder="1-20"
                style="width: 25%"
              ></el-input>
            </el-form-item>

            <el-form-item label="Fecha utilizacion">
              <el-col :span="11">
                <el-date-picker
                  type="date"
                  placeholder="MM/DD/AA"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>

            <el-form-item label="Fecha vencimiento">
              <el-col :span="12">
                <el-date-picker
                  type="date"
                  placeholder="MM/DD/AA"
                  v-model="form.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-tab-pane>

          <div class="botton">
            <el-button class="button">Nuevo</el-button>
          </div>

        </el-tabs>
      </el-form>
    </el-tabs>
  </div>
</template>


<script>
export default {
  data() {
    return {
      form: {
        Tipo: "",
        Letra: "",
        Establecimiento: "",
        Rnumerico00: "",
        Rnumerico01: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
/* Style inputs, select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  padding: 6px 6px 6px 0;
  display: inline-block;
}

/* Style the submit button */
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: 5px;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Style the container */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

/* Floating column for labels: 25% width */
.col-2 {
  float: left;
  width: 1%;
  margin-right: 1%;
  margin-top: 6px;
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
.botton {
  float: left;
  width: 75%;
  margin-top: 6px;
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