const btnVenta = document.querySelector('#btn-venta');

const agregarVenta = document.querySelector('.agregar-venta');
const btnCancelarAgregar = document.querySelector('#btn-cancelar-agregar');
const btnGuardarAgregar = document.querySelector('#btn-guardar');

/*******************************************************************/

const btnEditar = document.querySelectorAll('.btn-editar'); //con querySelectorAll no funciona

const editarVenta = document.querySelector('.editar-venta');
const btnCancelarEditar = document.querySelector('#btn-cancelar-editar');
const btnGuardarEditar = document.querySelector('#btn-guardar-editar');

/*******************************************************************/

const btnBorrar = document.querySelectorAll('.btn-borrar'); //con querySelectorAll no funciona

const eliminarVenta = document.querySelector('.eliminar-venta');
const btnCancelarEliminar = document.querySelector('#btn-cancelar-eliminar');
const btnEliminar = document.querySelector('#btn-eliminar');

/*******************************************************************/

const listaVendedoras = document.querySelectorAll('.vendedoras');
const listaComponentes = document.querySelectorAll('.componentes');
const listaSucursales = document.querySelectorAll('.sucursales');

/****************************************************************************************/


// Abrir modal AGREGAR VENTA

const abrirModalAgregarVenta = () => {
    agregarVenta.style.display = 'flex';
}

btnVenta.addEventListener('click', abrirModalAgregarVenta)

// Cerrar modal AGREGAR VENTA

const cerrarModalAgregarVenta = () => {
    agregarVenta.style.display = 'none';
}

btnCancelarAgregar.addEventListener('click', cerrarModalAgregarVenta)

window.addEventListener('click', (e) => {
    if (e.target == agregarVenta){
        agregarVenta.style.display = 'none'
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape'){
        cerrarModalAgregarVenta()
    }
})

/****************************************************************************************/

// Abrir modal editar

const abrirModalEditar = () => {
    editarVenta.style.display = 'flex';
}

for (let i = 0; i < btnEditar.length; i++){
    btnEditar[i].addEventListener('click', abrirModalEditar)
}

// Cerrar modal editar

const cerrarModalEditar = () => {
    editarVenta.style.display = 'none';
}

btnCancelarEditar.addEventListener('click', cerrarModalEditar)

window.addEventListener('click', (e) => {
    if (e.target == editarVenta){
        editarVenta.style.display = 'none'
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape'){
        cerrarModalEditar()
    }
})

/****************************************************************************************/

// Abrir modal borrar

const abrirModalBorrar = () => {
    eliminarVenta.style.display = 'flex';
}

for (let i = 0; i < btnBorrar.length; i++){
    btnBorrar[i].addEventListener('click', abrirModalBorrar)
}

// Cerrar modal borrar

const cerrarModalBorrar = () => {
    eliminarVenta.style.display = 'none';
}

btnCancelarEliminar.addEventListener('click', cerrarModalBorrar)

window.addEventListener('click', (e) => {
    if (e.target == eliminarVenta){
        eliminarVenta.style.display = 'none'
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape'){
        cerrarModalBorrar()
    }
})

/****************************************************************************************/

// Comienzo a agregar los arrays 

// Aqui se agregan los llamados de funciones

const cargaPagina = () => {
    drawVendedoras()
    drawComponentes()
    drawSucursales()
}

window.addEventListener('load', cargaPagina);


// Vendedoras

const drawVendedoras = () =>{
    const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];
    for (let i = 0; i < vendedoras.length; i++){
        insertOptionVendedora(vendedoras[i]);
    }

}

const insertOptionVendedora = (optionName) =>{
    for (let i = 0; i < listaVendedoras.length; i++){
        // inserto las option en html
        let insertOptionHtml = `<option> ${optionName} </option>`;
        listaVendedoras[i].insertAdjacentHTML('beforeend', insertOptionHtml);
    }
}

/*******************************************************************/

// Componentes

const drawComponentes = () =>{
    const componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1500", "Monitor ASC 543", "Motherboard ASUS 1200", "Motherboard MZI", "HDD Toyiva", "HDD Wezter Dishital", "RAM Quinston", "RAM Quinston Fury"];
    for (let i = 0; i < componentes.length; i++){
        insertOptionComponente(componentes[i]);
    }

}

const insertOptionComponente = (optionName) =>{
    for (let i = 0; i < listaComponentes.length; i++){
        // inserto las option en html
        let insertOptionHtml = `<option> ${optionName} </option>`;
        listaComponentes[i].insertAdjacentHTML('beforeend', insertOptionHtml);
    }
}

/*
const precios = [
   ["Monitor GPRS 3000",200] ,
   ["Motherboard ASUS 1500",120 ],
   ["Monitor ASC 543", 250 ],
   ["Motherboard ASUS 1200", 100 ],
   ["Motherboard MZI", 30 ],
   ["HDD Toyiva", 90 ],
   ["HDD Wezter Dishital", 75 ],
   ["RAM Quinston", 110 ],
   ["RAM Quinston Fury", 230 ],
]; */

/*******************************************************************/

// Sucursales

const drawSucursales = () =>{
    const sucursales = ["Centro", "Caballito"];
    for (let i = 0; i < sucursales.length; i++){
        insertOptionSucursal(sucursales[i]);
    }

}

const insertOptionSucursal = (optionName) =>{
    for (let i = 0; i < listaSucursales.length; i++){
        // inserto las option en html
        let insertOptionHtml = `<option> ${optionName} </option>`;
        listaSucursales[i].insertAdjacentHTML('beforeend', insertOptionHtml);
    }
}

/*******************************************************************/

// Fecha

/* const drawFecha = () => {
    const fecha = new Date;
    for (let i = 0; i < fecha.length; i++){
        insertOptionFecha(fecha[i]);
    }
} */

/* const formulario = document.querySelectorAll('form');

const agregarFecha = () => {
    for(let i = 0; i < editarVenta.lenght; i++){
        let fecha = document.createElement('input type = date');
        fecha.classList.add('input-fecha')
        formulario.appendChild(fecha)
    }
} */


/* terminar lo de arriba, agregarlo a el html desde js */

/*******************************************************************/

// Fecha
// toLocaleDateString()

// Vendedora

// hay que agregar desde los "tr" los "td"

/*******************************************************************/
/* 
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"],

const precios = [
    ["Monitor GPRS 3000",200] ,
    ["Motherboard ASUS 1500",120 ],
    ["Monitor ASC 543", 250 ],
    ["Motherboard ASUS 1200", 100 ],
    ["Motherboard MZI", 30 ],
    ["HDD Toyiva", 90 ],
    ["HDD Wezter Dishital", 75 ],
    ["RAM Quinston", 110 ],
    ["RAM Quinston Fury", 230 ],
] */
// Ventas

const ventas = [
    [
      1,
      new Date(2019, 1, 4),
      "Grace",
      "Centro",
      ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    ],
    [
      2,
      new Date(2019, 0, 1),
      "Ada",
      "Centro",
      ["Monitor GPRS 3000", "Motherboard ASUS 1500"],
    ],
    [
      3,
      new Date(2019, 0, 2),
      "Grace",
      "Caballito",
      ["Monitor ASC 543", "Motherboard MZI"],
    ],
    [
      4,
      new Date(2019, 0, 10),
      "Ada",
      "Centro",
      ["Monitor ASC 543", "Motherboard ASUS 1200"],
    ],
    [
      5,
      new Date(2019, 0, 12),// toLocaleDateString()
      "Grace",
      "Caballito",
     ["Monitor GPRS 3000", "Motherboard ASUS 1200"],
    ],
  ]


const insertTdVentas = (array) => {
    // Traigo: table, tr
    const tablaVentas = document.querySelector('#tabla-ventas');
    const fila = document.querySelectorAll('tr');

    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            const fecha = array[j][1]; 
            const vendedora = array[j][2];/*
            const sucursal = ventas[i][3];
            const componente = ventas[i][4]; */
            //const precio = ventas[i][5];
            //const tr = document.createElement('tr');

            fila.innerHTML = `<td>${fecha}</td><td>${vendedora}</td>`;

            tablaVentas.appendChild(fila); /*  */
        }
    
    }
}

insertTdVentas(ventas)

/*<td>${vendedora}</td><td>${sucursal}</td><td>${componente}</td>*/