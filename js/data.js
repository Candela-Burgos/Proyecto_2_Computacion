const local = {
  vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
  sucursales: ["Centro", "Caballito"],

  ventas: [
    // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
    { 
      id: 1,
      fecha: new Date(2019, 1, 4),
      nombreVendedora: "Grace", 
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
      sucursal: "Centro" 
    },
    {
      id: 2, 
      fecha: new Date(2019, 0, 1), 
      nombreVendedora: "Ada", 
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], 
      sucursal: "Centro"  
    },
    { 
      id: 3,
      fecha: new Date(2019, 0, 2), 
      nombreVendedora: "Grace", 
      componentes: ["Monitor ASC 543", "Motherboard MZI"], 
      sucursal: "Centro"  
    },
    { 
      id: 4,
      fecha: new Date(2019, 0, 10), 
      nombreVendedora: "Ada", 
      componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], 
      sucursal: "Centro"  
    },
    { 
      id: 5,
      fecha: new Date(2019, 0, 12), 
      nombreVendedora: "Grace", 
      componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], 
      sucursal: "Centro"  
    },
    { 
      id: 6,
      fecha: new Date(2019, 1, 24), 
      nombreVendedora: "Sheryl", 
      componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], 
      sucursal: "Caballito"
    },
    { 
      id: 7,
      fecha: new Date(2019, 1, 12), 
      nombreVendedora: "Hedy", 
      componentes: ["Monitor GPRS 3000", "HDD Toyiva"], 
      sucursal: "Centro"
    },
    { 
      id: 8,
      fecha: new Date(2019, 1, 1), 
      nombreVendedora: "Ada", 
      componentes: ["Motherboard MZI", "RAM Quinston Fury"], 
      sucursal: "Centro"
    },
    { 
      id: 9,
      fecha: new Date(2019, 1, 11), 
      nombreVendedora: "Grace", 
      componentes: ["Monitor ASC 543", "RAM Quinston"], 
      sucursal: "Caballito"
    },
    { 
      id: 10,
      fecha: new Date(2019, 1, 15), 
      nombreVendedora: "Ada", 
      componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], 
      sucursal: "Centro"
    },
    { 
      id: 11,
      fecha: new Date(2019, 1, 12), 
      nombreVendedora: "Hedy", 
      componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], 
      sucursal: "Caballito"
    },
    { 
      id: 12,
      fecha: new Date(2019, 1, 21), 
      nombreVendedora: "Grace", 
      componentes: ["Motherboard MZI", "RAM Quinston"], 
      sucursal: "Centro"
    },
    { 
      id: 13,
      fecha: new Date(2019, 1, 8), 
      nombreVendedora: "Sheryl", 
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
      sucursal: "Centro"
    },
    { 
      id: 14,
      fecha: new Date(2019, 1, 16), 
      nombreVendedora: "Sheryl", 
      componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], 
      sucursal: "Centro"
    },
    { 
      id: 15,
      fecha: new Date(2019, 1, 27), 
      nombreVendedora: "Hedy", 
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
      sucursal: "Caballito"
    },
    { 
      id: 16,
      fecha: new Date(2019, 1, 22), 
      nombreVendedora: "Grace", 
      componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], 
      sucursal: "Centro"
    },
    { 
      id: 17,
      fecha: new Date(2019, 1, 5), 
      nombreVendedora: "Ada", 
      componentes: ["Motherboard ASUS 1500", "RAM Quinston"], 
      sucursal: "Centro"
    },
    { 
      id: 18,
      fecha: new Date(2019, 1, 1), 
      nombreVendedora: "Grace", 
      componentes: ["Motherboard MZI", "HDD Wezter Dishital"], 
      sucursal: "Centro"
    },
    { 
      id: 19,
      fecha: new Date(2019, 1, 7), 
      nombreVendedora: "Sheryl", 
      componentes: ["Monitor GPRS 3000", "RAM Quinston"], 
      sucursal: "Caballito"
    },
    { 
      id: 20,
      fecha: new Date(2019, 1, 14), 
      nombreVendedora: "Ada", 
      componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], 
      sucursal: "Centro"
    }
  ],

  precios: [
    { componente: "Monitor GPRS 3000", precio: 200 },//6
    { componente: "Motherboard ASUS 1500", precio: 120 },//5
    { componente: "Monitor ASC 543", precio: 250 },//5
    { componente: "Motherboard ASUS 1200", precio: 100 },//5
    { componente: "Motherboard MZI", precio: 30 },//4
    { componente: "HDD Toyiva", precio: 90 },//4
    { componente: "HDD Wezter Dishital", precio: 75 },//4
    { componente: "RAM Quinston", precio: 110 },//4
    { componente: "RAM Quinston Fury", precio: 230 }//3
  ]
};