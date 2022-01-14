const btnVenta = document.querySelector('#btn-venta');

const agregarVenta = document.querySelector('.agregar-venta'); // modal
const btnCancelarAgregar = document.querySelector('#btn-cancelar-agregar');
const btnGuardarAgregar = document.querySelector('#btn-guardar');

/*******************************************************************/

const btnEditar = document.querySelectorAll('.btn-editar');

const editarVenta = document.querySelector('.editar-venta'); // modal
const btnCancelarEditar = document.querySelector('#btn-cancelar-editar');
const btnGuardarEditar = document.querySelector('#btn-guardar-editar');

/*******************************************************************/

const btnBorrar = document.querySelectorAll('.btn-borrar'); 

const eliminarVenta = document.querySelector('.eliminar-venta'); // modal
const btnCancelarEliminar = document.querySelector('#btn-cancelar-eliminar');
const btnEliminar = document.querySelector('#btn-eliminar');

/*******************************************************************/

const listaVendedoras = document.querySelector('.vendedoras');
const listaComponentes = document.querySelector('.componentes');
const listaSucursales = document.querySelector('.sucursales');
const inputDate = document.querySelectorAll('#input-date')//nose si va

/****************************************************************************************/

// --------------------------- Comienzo a agregar los arrays ---------------------------

// Vendedoras
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

// Ventas
const ventas = [[1, new Date(2019, 1, 4), "Grace", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [2, new Date(2019, 0, 1), "Ada", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [3, new Date(2019, 0, 2), "Grace", "Caballito", ["Monitor ASC 543", "Motherboard MZI"]], [4, new Date(2019, 0, 10), "Ada", "Centro", ["Monitor ASC 543", "Motherboard ASUS 1200"]], [5, new Date(2019, 0, 12), "Grace", "Caballito", ["Monitor GPRS 3000", "Motherboard ASUS 1200"]]];

// Precios
const precios = [["Monitor GPRS 3000", 200], ["Motherboard ASUS 1500", 120], ["Monitor ASC 543", 250], ["Motherboard ASUS 1200", 100], ["Motherboard MZI", 30], ["HDD Toyiva", 90], ["HDD Wezter Dishital", 75], ["RAM Quinston", 110], ["RAM Quinston Fury", 230]];

// Sucursales
const sucursales = ["Centro", "Caballito"];

/****************************************************************************************/

//----------------------------------- ABRIR MODAL AGREGAR VENTA -----------------------------------

const abrirModalAgregarVenta = () => {
    agregarVenta.style.display = 'flex';
}

btnVenta.addEventListener('click', abrirModalAgregarVenta)

//----------------------------------- CERRAR MODAL AGREGAR VENTA -----------------------------------

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

//----------------------------------- ABRIR MODAL EDITAR -----------------------------------

const abrirModalEditar = () => {
    editarVenta.style.display = 'flex';
}

for (let i = 0; i < btnEditar.length; i++){
    btnEditar[i].addEventListener('click', abrirModalEditar)
}

//----------------------------------- CERRAR MODAL EDITAR -----------------------------------

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

//----------------------------------- ABRIR MODAL BORRAR -----------------------------------

const abrirModalBorrar = () => {
    eliminarVenta.style.display = 'flex';
}

for (let i = 0; i < btnBorrar.length; i++){
    btnBorrar[i].addEventListener('click', abrirModalBorrar)
}

//----------------------------------- CERRAR MODAL BORRAR ----------------------------------- 

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

//----------------------------------- VENDEDORAS -----------------------------------

//NO ME FUNCIONA

const insertOptionVendedora = () => {
    for (let i=0; i < vendedoras.length; i++){
        // inserto las option en html
        const optionVendedora = document.createElement('option');
        listaVendedoras.appendChild(optionVendedora);
        optionVendedora.innerHTML = `${vendedoras[i]}`;
    }
}
/* 

quise hacer lo mismo que con los btnEditar. porque no me funcionaban con querySelectorAll

for (let i = 0; i < listaVendedoras.length; i++){
    listaVendedoras
} */

insertOptionVendedora();

/*******************************************************************/

//----------------------------------- COMPONENTES -----------------------------------

//NO ME FUNCIONA

const insertOptionComponente = () => {
    for (let i = 0; i < precios.length; i++) {
        // inserto las option en html
        const optionComponente = document.createElement('option');
        listaComponentes.appendChild(optionComponente);
        optionComponente.innerHTML = `${precios[i][0]}`;
    }
}

insertOptionComponente()


/*******************************************************************/

//----------------------------------- SUCURSALES -----------------------------------

//NO ME FUNCIONA

const insertOptionSucursal = () => {
    for (let i = 0; i < sucursales.length; i++){
        // inserto las option en html
        const optionSucursal = document.createElement('option');
        listaSucursales.appendChild(optionSucursal);
        optionSucursal.innerHTML = `${sucursales[i]}`;
    }
}

insertOptionSucursal()

//----------------------------------- (falta)FECHA -----------------------------------


/*******************************************************************/


// ------------------ LO DE ABAJO NO LO USO ------------------

// Aqui se agregan los llamados de funciones

/* const cargaPagina = () => {
    drawVendedoras()
    drawComponentes()
    drawSucursales()
}

window.addEventListener('load', cargaPagina); */


/* 
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
} */


/* const drawComponentes = () =>{
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
}  */
/* 
const insertOptionComponente = () => {
    for (let i = 0; i < precios.length; i++){
        // inserto las option en html
        let option = document.createElement('option');
        option.innerHTML = listaComponentes[i][0];
        listaComponentes.appendChild(option);
    }
}
insertOptionComponente() */


/* const drawSucursales = () =>{
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
} */

// ------------------ LO DE ARRIBA NO LO USO ------------------


/*******************************************************************/

//----------------------------------- IMPRIMIR DATOS EN TABLA -----------------------------------

// Variable que cambia el formato de la fecha para que se vea bien
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

// Me traigo la tabla desde html
const tablaVentas = document.querySelector('#tabla-ventas');

const insertTdVentas = () => {
    for (let i = 0; i < ventas.length; i++){
        const tr = document.createElement('tr');
        tablaVentas.appendChild(tr);
        for (let j = 0; j < ventas[i].length; j++){
            const fecha = format(ventas[i][1], 'es'); 
            const vendedora = ventas[i][2];
            const sucursal = ventas[i][3];
            const componente = ventas[i][4];

            tr.innerHTML = 
            `<td>${fecha}</td>
            <td>${vendedora}</td>
            <td>${sucursal}</td>
            <td>${componente}</td>
            <td>Precio Total</td>
            <td> 
            <button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button> 
            </td>`;

        }
    
    }
}

insertTdVentas(ventas)

// nose como insertar el input type date en las modales


//esta funcion solo imprime en la tabla los precios, no la suma de ellos
/* const insertTdPrecio = () => {
    for ( let i = 0; i < precios.length; i++){
        const tr = document.createElement('tr');
        tablaVentas.appendChild(tr);
        for (let j = 0; j < ventas[i].length; j++){
            const precio = precios[i][1];

            tr.innerHTML = `<td>${precio}</td>`;

        }
    
    }
}

insertTdPrecio()  */
