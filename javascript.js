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
    [ 1, new Date(2019, 1, 4), new Date(2019, 0, 1), new Date(2019, 0, 2), new Date(2019, 0, 10), new Date(2019, 0, 12), ],

    [ 2, "Grace", "Ada", "Grace" , "Ada", "Grace", ],

    [ 3, "Centro", "Centro", "Caballito", "Centro", "Caballito", ],

    [ 4, ["Monitor GPRS 3000", "Motherboard ASUS 1500"], ["Monitor GPRS 3000", "Motherboard ASUS 1500"], ["Monitor ASC 543", "Motherboard MZI"], ["Monitor ASC 543", "Motherboard ASUS 1200"], ["Monitor GPRS 3000", "Motherboard ASUS 1200"], ],
    
    [ 5, 300, 350, 280, 320, 320, ],

    [ 6, `<button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button>`,  `<button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button>`,  `<button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button>`,  `<button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button>`,  `<button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
    <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button>`]

]


const insertTdVentas = (array) => {
    // Traigo: table, tr
    const tablaVentas = document.querySelector('#tabla-ventas');
    const fila = document.querySelectorAll('tr');

    for (let i = 0; i < array.length; i++){
        const fila1 = array[i][1];
        // toLocaleDateString()
        const fila2 = array[i][1];
        const fila3 = array[i][3];
        const fila4 = array[i][4];
        const fila5 = array[i][5];

        const td = document.createElement('td');

        td.innerHTML = `<td>${fila1}</td>`;

        tablaVentas.appendChild(td);
    }
}

insertTdVentas(ventas)

