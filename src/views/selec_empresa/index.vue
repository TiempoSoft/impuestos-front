<template>
  <div class="login-container">
    <header>
      <div class="title-container">
        <img src="/logo-tiempo.png" alt="Smiley face" width="250" height="90" />
      </div>
    </header>
    <div class="login">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="name"
            v-model="loginForm.name"
            placeholder="name"
            name="name"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <el-button
          :loading="loading"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click.native.prevent="handleLogin"
          >Siguiente</el-button
        >
      </el-form>
    </div>
    <modal
      name="login"
      :min-width="200"
      :min-height="200"
      :scrollable="true"
      :reset="true"
      width="50%"
      height="50%"
      style="overflow-y: scroll"
    >
      <login :prop_login="Datos_empresa" />
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import login from "./components/login";
const datosdelLogin = [];
export default {
  components: { login },
  data() {
    return {
      get_ciuser: [],
      DatoEmpresa: {},
      loginForm: {
        name: "Zulema",
        password: "123456",
      },
      loading: false,
      redirect: undefined,
      passwordType: "password",
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      this.DatoEmpresa = val;
      // console.log("currentRow: ", this.DatoEmpresa); andando
    },

    modal_login() {
      this.Datos_empresa = this.DatoEmpresa;
      // console.log("Datos Empresa:", this.Datos_empresa); Andando
      this.$modal.show("login");
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },

    guardarId(datosdelLogin) {
      localStorage.usersId = datosdelLogin.data.id;
      localStorage.usersRolId = datosdelLogin.data.rol_id;
      localStorage.usersToken = datosdelLogin.data.token;
    },

    async login(loginForm) {
      let user = await this.enviar_datos(loginForm);
      //   console.log("User: ", user);
      if (user !== undefined) {
        this.guardarId(user);
        this.$router.push({ path: "/registros/registros" });
        this.loading = false;
        this.$message({
          message: "¡Usted se logueo correctamente!",
          type: "success",
        });
      } else {
        this.$message({
          message: "Usuario o contraseña incorrectos",
          type: "error",
        });
      }
    },

    // async enviar_datos(loginForm) {
    //   return new Promise((resolve) => {
    //     console.log("SALIENDO " + JSON.stringify(loginForm));
    //     let user;
    //     axios
    //       .post("http://192.168.50.50:8291/users/login/", loginForm)
    //       .then((result) => {
    //         user = result;
    //         resolve(user);
    //       })
    //       .catch(function (err, message) {
    //         resolve();
    //       });
    //   });
    // },

    handleLogin() {
      this.$router.push({
        path: this.redirect || "/compras",
      });
    },
  },

  created() {
    axios.get("http://localhost:3000/ciuser").then((result) => {
      this.get_ciuser = result.data;
      console.log("getCiuser: ", this.get_ciuser);
      // console.log("getCiuser: ", this.get_ciuser);
    });
  },
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: rgb(0, 0, 0);
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #283443;
$light_gray: rgb(0, 0, 0);
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$dark_gray: #030303;
$light_gray: rgb(0, 0, 0);

.login {
  height: 100%;
  width: 100%;
  background-size: 100% 30%;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-color: #bbc0c4;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 70px 35px 0;
    margin: 0 auto;
  }

  .tips {
    font-size: 14px;
    color: rgb(0, 0, 0);
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 40px;
    display: inline-block;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28vh;

    .title {
      font-size: 40px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
$dark_gray: #030303;
$light_gray: rgb(0, 0, 0);

.login-container {
  height: 100%;
  width: 100%;
  background-image: url(/cabezal1.png);
  background-size: 100% 30%;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-color: #bbc0c4;

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 28vh;

    .title {
      font-size: 40px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
<style>
.text {
  font-size: 10px;
}
.item {
  padding: 18px 0;
}

.boton_Entrar {
  background: rgba(9, 44, 243, 0);
  text-emphasis: inherit;
  margin: -20% 50%;
  width: 350px;
}
.empresas {
  font-size: 10%;
  margin: 4% 20%;
  width: 23%;
  height: 40%;
}
</style>
