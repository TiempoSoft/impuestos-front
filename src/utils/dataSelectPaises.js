const paises = [
        {
          value: 1,
          label: "Argentina",
        },
        /*  {
          id: 2,
          label: "Chile",
        },
        {
          id: 3,
          label: "Uruguay",
        },
        {
          id: 4,
          label: "Paraguay",
        },
        {
          id: 5,
          label: "Brasil",
        }, */
      ]

     const provincias= [
        {
          value: 1,
          label: "Ciudad Autónoma de Buenos Aires",
        },
        {
          value: 2,
          label: "Buenos Aires",
        },
        {
          value: 3,
          label: "Catamarca",
        },
        {
          value: 4,
          label: "Córdoba",
        },
        {
          value: 5,
          label: "Corrientes",
        },
        {
          value: 6,
          label: "Entre Ríos",
        },
        {
          value: 7,
          label: "Jujuy",
        },
        {
          value: 8,
          label: "Mendoza",
        },
        {
          value: 9,
          label: "La Rioja",
        },
        {
          value: 10,
          label: "Salta",
        },
        {
          value: 11,
          label: "San Juan",
        },
        {
          value: 12,
          label: "San Luis",
        },
        {
          value: 13,
          label: "Santa Fe",
        },
        {
          value: 14,
          label: "Santiago del Estero",
        },
        {
          value: 15,
          label: "Tucumán",
        },
        {
          value: 16,
          label: "Chaco",
        },
        {
          value: 17,
          label: "Chubut",
        },
        {
          value: 18,
          label: "Formosa",
        },
        {
          value: 19,
          label: "Misiones",
        },
        {
          value: 20,
          label: "Neuquén",
        },
        {
          value: 21,
          label: "La Pampa",
        },
        {
          value: 22,
          label: "Río Negro",
        },
        {
          value: 23,
          label: "Santa Cruz",
        },
        {
          value: 24,
          label: "Tierra del Fuego",
        },
      ]
     const localidades= [
        {
          value: 1,
          label: "Ciudad de Mendoza",
        },
        {
          value: 2,
          label: "Guaymallen",
        },
        {
          value: 3,
          label: "Las Heras",
        },
        {
          value: 4,
          label: "Lavalle",
        },
        {
          value: 5,
          label: "Junin",
        },
        {
          value: 6,
          label: "La Paz",
        },
        {
          value: 7,
          label: "Maipu",
        },
        {
          value: 8,
          label: "Rivadavia",
        },
        {
          value: 9,
          label: "Santa Rosa",
        },
        {
          value: 10,
          label: "San Martin",
        },
        {
          value: 11,
          label: "Godoy Cruz",
        },
        {
          value: 12,
          label: "Lujan de Cuyo",
        },
        {
          value: 13,
          label: "San Carlos",
        },
        {
          value: 14,
          label: "Tunuyan",
        },
        {
          value: 15,
          label: "Tupungato",
        },
        {
          value: 16,
          label: "General Alvear",
        },
        {
          value: 17,
          label: "Malargüe",
        },
        {
          value: 18,
          label: "San Rafael",
        },
]

const status = [
  {
  value: 1,
          label: "Cliente",
  },
  {
  value: 2,
          label: "Proveedor",
  }, 
  {
  value: 3,
          label: "Cliente-Proveedor",
}
] 

const tipoIva = [
  {
    value: 1,
    label: "INSCRIPTO",
  },
  {
    value: 2,
    label: "NO INSCRIPTO",
  },
  {
    value: 3,
    label: "NO CATEGORIZADO",
  },
  {
    value: 4,
    label: "NO RESPONSABLE",
  },
  {
    value: 5,
    label: "CONS.FINAL",
  },
  {
    value: 6,
    label: "MONOTRIBUTISTA",
  },
  {
    value: 7,
    label: "EXENTO",
  },
  {
    value: 8,
    label: "OTRO PAÍS",
  },
]

export const getTipoIVa = () => {
    return tipoIva
    }

export const getEntityStatus = () => {
    return status
    }

export const getPaises = () => {
    return paises
    }
      
export const getProvincias =  () => {
return provincias
}

export const getLocalidades =  () => {
return localidades
}

 export const generarArrayAleatorio = () => {
  // Genera un número aleatorio entre 1 y 10 para determinar la longitud del array
  const longitud = Math.floor(Math.random() * 10) + 1;
  
  // Inicializa un array vacío
  const arrayAleatorio = [];

  // Llena el array con números aleatorios entre 0 y 10
  for (let i = 0; i < longitud; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 10)+1; // Genera un número aleatorio entre 0 y 10
    let num = {
      ptoVenta: numeroAleatorio != 10 ? "000" + numeroAleatorio : "00" + numeroAleatorio
    }
    arrayAleatorio.push(num); // Agrega el número al array
  }
console.log(arrayAleatorio);
  return arrayAleatorio;
}
