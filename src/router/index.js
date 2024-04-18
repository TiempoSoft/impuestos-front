import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
import liquidacionImp from "./modules/liquidacionImpRouter";
export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/views/selec_empresa/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/archivos",
    component: Layout,
    // redirect: '/archivos/librosdeiva',
    name: "Archivos",
    meta: {
      title: "Archivos",
      icon: "usuarios",
    },
    children: [
      {
        path: "datosGenerales",
        name: "DatosGenerales",
        component: () => import("@/views/archivos/datosGenerales"),
        meta: { title: "Datos Generales." },
      },

      {
        path: "/entidades",
        name: "Entidades",
        component: () => import("@/views/archivos/entidades"),
        meta: { title: "Entidades." },
      },
      {
        path: "/impuestos",
        name: "Impuestos",
        component: () => import("@/views/archivos/impuestos"),
        meta: { title: "Impuestos." },
      },
      {
        path: "/responsables",
        name: "Responsables",
        component: () => import("@/views/archivos/responsables"),
        meta: { title: "Responsables." },
      },
      {
        path: "/establecimiento",
        name: "Establecimiento",
        component: () => import("@/views/archivos/establecimiento"),
        meta: { title: "Establecimiento." },
      },

      {
        path: "/rubros",
        name: "Rubros",
        component: () => import("@/views/archivos/rubros"),
        meta: { title: "Rubros." },
      },
      // {
      //   path: "/jurisdicciones",
      //   name: "Jurisdicciones",
      //   component: () => import("@/views/archivos/jurisdicciones"),
      //   meta: { title: "Jurisdicciones." },
      // },
      // {
      //   path: "/aliCuotasRubro",
      //   name: "AliCuotasRubro",
      //   component: () => import("@/views/archivos/aliCuotasRubro"),
      //   meta: { title: "Alicuotas rubro." },
      // },
      // {
      //   path: "/AlicuotasJyR",
      //   name: "Alicuotas JyR",
      //   component: () => import("@/views/archivos/AlicuotasJyR"),
      //   meta: { title: "Alicuotas J y R." },
      // },
      // {
      //   path: "/Activiades AFIP",
      //   name: "Activiades AFIP",
      //   component: () => import("@/views/archivos/actividadesAFIP"),
      //   meta: { title: "Activiades AFIP." },
      // },
      {
        path: "/tipoGasto",
        name: "Tipo gasto",
        component: () => import("@/views/archivos/tipoGasto"),
        meta: { title: "Tipo gasto." },
      },

      {
        path: "librosdeiva",
        component: () => import("@/views/archivos/librosdeiva/index"), // Parent router-view
        name: "Librosdeiva",
        icon: "usuarios",
        meta: {
          title: "Libros IVA",
          icon: "usuarios",
        },
        children: [
          {
            path: "imprimirLibroIVA",
            component: () =>
              import("@/views/archivos/librosdeiva/imprimirLibroIVA/index"),
            name: "ImprimirLibroIVA",
            meta: { title: "Cargar Libro IVA" },
          },
          {
            path: "cargaDeComprobantesDeVentas",
            component: () =>
              import(
                "@/views/archivos/librosdeiva/cargaDeComprobantesDeVentas/index"
              ),
            name: "CargaDeComprobantesDeVentas",
            meta: { title: "Compro. ventas" },
          },
          {
            path: "modelodecargadeventas",
            component: () =>
              import(
                "@/views/archivos/librosdeiva/modelodecargadeventas/index"
              ),
            name: "Modelodecargadeventas",
            meta: { title: "Modelos de ventas" },
          },
        ],
      },
      {
        path: "/tablaLiquiGanancias",
        name: "Tabla liquidacion Ganancias",
        component: () => import("@/views/archivos/tablaLiquiGanancias"),
        meta: { title: "Liquidación ganancias." },
      },

      {
        path: "tablaCaiVentas",
        name: "Tabla CAI Ventas",
        component: () => import("@/views/archivos/TablaCaiVentas1"),
        meta: { title: "Tabla CAI Ventas" },
      },
      {
        path: "/clavesDeUsuario",
        name: "claves De Usuario",
        component: () => import("@/views/archivos/clavesDeUsuario"),
        meta: { title: "Claves de usuario." },
      },
      {
        path: "/armadoResumenFiscalYear",
        name: "Armado Resumen Fiscal Year",
        component: () => import("@/views/archivos/armadoResumenFiscalYear"),
        meta: { title: "Armado Resumen Fiscal Year" },
      },
      {
        path: "/resumenAñoFiscal",
        name: "Resumen Año Fiscal",
        component: () => import("@/views/archivos/resumenAñoFiscal"),
        meta: { title: "Resumen Año Fiscal" },
      },
    ],
  },

  {
    path: "/compras",
    component: Layout,
    name: "Compras",
    meta: { title: "Compras", icon: "usuarios" },
    children: [
      {
        path: "compras",
        name: "Compras",
        component: () => import("@/views/compras/carga_de_comprobantes"),
        meta: { title: "Cargar Comp." },
      },
      {
        path: "vercomprobantes",
        name: "vercomprobantes",
        component: () => import("@/views/compras/ver_comprobantes"),
        meta: { title: "Ver Comp." },
      },
    ],
  },

  {
    path: "/ventas",
    component: Layout,
    name: "Ventas",
    meta: { title: "Ventas", icon: "usuarios" },
    children: [
      {
        path: "ventas",
        name: "Ventas",
        component: () => import("@/views/ventas/carga_de_comprobantes"),
        meta: { title: "Cargar Comp." },
      },
      {
        path: "vercomprobantes",
        name: "vercomprobantes",
        component: () => import("@/views/ventas/ver_comprobantes"),
        meta: { title: "Ver Comp." },
      },
    ],
  },

  /* path: "/liquidacionImpuestos",
    component: Layout,
    name: "Liquidacion Impuestos",
    meta: { title: "Liquidacion Imp.", icon: "usuarios" },
    children: [ */
  /* {
        path: "/liquidacionIVA",
        name: "liquidacionIVA",
        component: () =>
          import("@/views/liquidacionImpuestos/liquidacionIVA/liquidacionIva"),
        meta: { title: "Liquidacion IVA" },
      }, */
  liquidacionImp,
  /* { */

  /* ], */
  /*  }, */
  {
    path: "/excel",
    component: Layout,
    redirect: "/excel/export-excel",
    name: "Excel",
    meta: {
      title: "Excel",
    },
    children: [
      {
        path: "upload-excel",
        component: () => import("@/views/excel/upload-excel"),
        name: "UploadExcel",
        meta: { title: "Importar" },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
