<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <header class="header" >
        <div class="title-container">
          <img
            src="/logo-grande.png"
            alt="Smiley face"
            width="140"
            height="30"
          />
        </div>
      </header>
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import router from "@/router";
import { title } from "@/settings";

export default {
  components: { SidebarItem, Logo },

  computed: {
    ...mapGetters(["sidebar"]),

    routes() {
      if (localStorage.usersRolId === "1") {
        return this.$router.options.routes;
      } else {
       /*  this.$router.options.routes.splice(4, 1);
        this.$router.options.routes.splice(5, 1); */
        return this.$router.options.routes;
      }
    },

    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set

      if (meta.activeMenu) {
        return meta.activeMenu;
      }

      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 6px 5px 15px 26px;
  background: #ffff;
  /* border: 0 1px 4px #ff7800; */
}
</style>>

