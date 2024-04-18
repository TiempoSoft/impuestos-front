import Layout from "@/layout";

const liquidacionImp = {
  path: "/nested",
  component: Layout,
  redirect: "/nested/menu1/menu1-1",
  name: "Nested",
  meta: {
    title: "Liquidacion Imp.",
    icon: "usuarios",
  },
  children: [
    {
      path: "liquidacionIva",
      component: () => import("@/views/nested/liquidacionIva/index"), // Parent router-view
      name: "liquidacionIva",
      meta: { title: "Liquidacion Iva" },
      redirect: "/nested/liquidacionIva/liquidarIva",
      children: [
        {
          path: "liquidarIva",
          component: () =>
            import("@/views/nested/liquidacionIva/liquidarIva/index"),
          name: "liquidarIva",
          meta: { title: "liquidarIva" },
        },
        {
          path: "pagoIva",
          component: () =>
            import("@/views/nested/liquidacionIva/pagoIva/index"),
          name: "pagoIva",
          meta: { title: "pagoIva" },
        },
        {
          path: "posicionesMensuales",
          component: () =>
            import("@/views/nested/liquidacionIva/posicionesMensuales/index"),
          name: "posicionesMensuales",
          meta: { title: "Pos. mensuales" },
        },
        {
          path: "reintegroIVA",
          component: () =>
            import("@/views/nested/liquidacionIva/reintegroIVA/index"),
          name: "reintegroIVA",
          meta: { title: "Reintegro IVA" },
        },
        {
          path: "ajusteAnualProrrateoIVA",
          component: () =>
            import("@/views/nested/liquidacionIva/ajusteAnualProrrateoIVA/index"),
          name: "ajusteAnualProrrateoIVA",
          meta: { title: "Ajuste An. Prorr. IVA" },
        },
      ],
    },
    {
      path: "personaFisica",
      component: () => import("@/views/nested/personaFisica/index"), // Parent router-view
      name: "personaFisica",
      meta: { title: "Persona Fisica" },
      redirect: "/nested/personaFisica/datosIniciales",
      children: [
        {
          path: "datosIniciales",
          component: () =>
            import("@/views/nested/personaFisica/datosIniciales/index"),
          name: "datosIniciales",
          meta: { title: "datos iniciales" },
        },
        {
          path: "participacionEmpresa",
          component: () =>
            import("@/views/nested/personaFisica/participacionEmpresa/index"),
          name: "participacionEmpresa",
          meta: { title: "Particip. empresa" },
        },
        {
          path: "liquidacionImpGanancias",
          component: () =>
            import("@/views/nested/personaFisica/liquidacionImpGanancias/index"),
          name: "liquidacionImpGanancias",
          meta: { title: "liq. Imp. Ganancias" },
        },
        {
          path: "liquidacionImpBienesPersonales",
          component: () =>
            import("@/views/nested/personaFisica/liquidacionImpBienesPersonales/index"),
          name: "liquidacionImpBienesPersonales",
          meta: { title: "liq. Imp. Bs Personales" },
        },
        {
          path: "borrarDeclaracionesJuradas",
          component: () =>
            import("@/views/nested/personaFisica/borrarDeclaracionesJuradas/index"),
          name: "borrarDeclaracionesJuradas",
          meta: { title: "borrar DD JJ" },
        },
      ],
    },
    {
      path: "sociedades",
      component: () => import("@/views/nested/sociedades/index"), // Parent router-view
      name: "sociedades",
      meta: { title: "Personas Juridicas" },
      redirect: "/nested/sociedades/index",
      children: [
        {
          path: "equivalenciaDeRubros",
          component: () =>
            import("@/views/nested/sociedades/equivalenciaDeRubros/index"),
          name: "equivalenciadeRubros",
          meta: { title: "Equivalencia de Rubros" },
        },
        {
          path: "exportarImpGanancias",
          component: () =>
            import("@/views/nested/sociedades/exportarImpGanancias/index"),
          name: "exportarImpGanancias",
          meta: { title: "Exportar Imp. Ganancias" },
        },
        {
          path: "liquidarImpGanancias",
          component: () =>
            import("@/views/nested/sociedades/liquidarImpGanancias/index"),
          name: "liquidarImpGanancias",
          meta: { title: "liquidar Imp. Ganancias" },
        },
      ],
    },
    {
      path: "ingresosBrutos",
      component: () => import("@/views/nested/ingresosBrutos/index"), // Parent router-view
      name: "ingresosBrutos",
      meta: { title: "Ingresos Brutos" },
      redirect: "/nested/ingresosBrutos/liquidarIva",
      children: [
        {
          path: "totalPorAlicuotasIngBrutos",
          component: () =>
            import("@/views/nested/ingresosBrutos/totalPorAlicuotasIngBrutos/index"),
          name: "totalPorAlicuotasIngBrutos",
          meta: { title: "Total por alicuotas IngBrutos" },
        },
        {
          path: "convenioMultilateralCoeficiente",
          component: () =>
            import("@/views/nested/ingresosBrutos/convenioMultilateralCoeficiente/index"),
          name: "convenioMultilateralCoeficiente",
          meta: { title: "Convenio Mult. Coeficiente" },
        },
        {
          path: "convenioMultilateralLiquidacion",
          component: () =>
            import("@/views/nested/ingresosBrutos/convenioMultilateralLiquidacion/index"),
          name: "convenioMultilateralLiquidacion",
          meta: { title: "Convenio Mult. Liquidacion" },
        },

      ],
    },
    
   
    {
      path: "libroIvaElectronico",
      name: "libroIvaElectronico",
      component: () =>
        import("@/views/liquidacionImpuestos/libroIvaElectronico"),
      meta: { title: "Libro Iva Electronico" },
    },
    {
      path: "citiCompras",
      name: "citiCompras",
      component: () => import("@/views/liquidacionImpuestos/citiCompras"),
      meta: { title: "C.I.T.I. Compras" },
    },
    {
      path: "citiVentas",
      name: "citiVentas",
      component: () => import("@/views/liquidacionImpuestos/citiVentas"),
      meta: { title: "C.I.T.I. Ventas" },
    },
    {
      path: "ingresosBrutosSiap",
      name: "ingresosBrutosSiap",
      component: () =>
        import("@/views/liquidacionImpuestos/ingresosBrutosSiap"),
      meta: { title: "Ingresos Br. S.I.Ap." },
    },
    {
      path: "retencionesPercepcionesIva",
      name: "retencionesPercepcionesIva",
      component: () =>
        import("@/views/liquidacionImpuestos/retencionesPercepcionesIva"),
      meta: { title: "Ret.y Percep. Iva" },
    },
    {
      path: "sifereParaSiap",
      name: "sifereParaSiap",
      component: () => import("@/views/liquidacionImpuestos/sifereParaSiap"),
      meta: { title: "SI.FE.RE para el S.I.Ap." },
    },
    {
      path: "percepcionesGanancias",
      name: "percepcionesGanancias",
      component: () =>
        import("@/views/liquidacionImpuestos/percepcionesGanancias"),
      meta: { title: "Percep. de Ganancias" },
    },
    {
      path: "reintegroImpuestoFacturado",
      name: "reintegroImpuestoFacturado",
      component: () =>
        import("@/views/liquidacionImpuestos/reintegroImpuestoFacturado"),
      meta: { title: "Reintgr. Imp. Facturado" },
    },
    {
      path: "sicoreSiap",
      name: "sicoreSiap",
      component: () => import("@/views/liquidacionImpuestos/sicoreSiap"),
      meta: { title: "SI.CO.RE S.I.Ap." },
    },
    {
      path: "rg3685ComprasVentas",
      name: "rg3685ComprasVentas",
      component: () =>
        import("@/views/liquidacionImpuestos/rg3685ComprasVentas"),
      meta: { title: "RG 3685-Comp. Vtas" },
    },
    {
      path: "rg4597libroIvaDigital",
      name: "rg4597libroIvaDigital",
      component: () =>
        import("@/views/liquidacionImpuestos/rg4597libroIvaDigital"),
      meta: { title: "RG 4597-Libr.IVADigital" },
    },
    {
      path: "comisionArbitralSircar",
      name: "comisionArbitralSircar",
      component: () =>
        import("@/views/liquidacionImpuestos/comisionArbitralSircar"),
      meta: { title: "Comision Arb.-SIRCAR" },
    },
  ],
};

export default liquidacionImp;
