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
const inputDate = document.querySelectorAll('.input-date')//nose si va

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

const blur = document.querySelector('#blur');

const abrirModalAgregarVenta = () => {
    agregarVenta.style.display = 'flex';
    blur.style.filter = 'blur(3px)';
}

btnVenta.addEventListener('click', abrirModalAgregarVenta)

//----------------------------------- CERRAR MODAL AGREGAR VENTA -----------------------------------

const cerrarModalAgregarVenta = () => {
    agregarVenta.style.display = 'none';
    blur.style.filter = 'none';
}

btnCancelarAgregar.addEventListener('click', cerrarModalAgregarVenta)

window.addEventListener('click', (e) => {
    if (e.target == agregarVenta){
        agregarVenta.style.display = 'none';
        blur.style.filter = 'none';
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
    blur.style.filter = 'blur(3px)';
}

for (let i = 0; i < btnEditar.length; i++){
    btnEditar[i].addEventListener('click', abrirModalEditar)
}

//----------------------------------- CERRAR MODAL EDITAR -----------------------------------

const cerrarModalEditar = () => {
    editarVenta.style.display = 'none';
    blur.style.filter = 'none';
}

btnCancelarEditar.addEventListener('click', cerrarModalEditar)

window.addEventListener('click', (e) => {
    if (e.target == editarVenta){
        editarVenta.style.display = 'none';
        blur.style.filter = 'none';
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
    blur.style.filter = 'blur(3px)';
}

for (let i = 0; i < btnBorrar.length; i++){
    btnBorrar[i].addEventListener('click', abrirModalBorrar)
}

//----------------------------------- CERRAR MODAL BORRAR ----------------------------------- 

const cerrarModalBorrar = () => {
    eliminarVenta.style.display = 'none';
    blur.style.filter = 'none';
}

btnCancelarEliminar.addEventListener('click', cerrarModalBorrar)

window.addEventListener('click', (e) => {
    if (e.target == eliminarVenta){
        eliminarVenta.style.display = 'none';
        blur.style.filter = 'none';
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

//----------------------------------- IMPRIMIR DATOS EN TABLA VENTAS -----------------------------------

// Variable que cambia el formato de la fecha para que se vea bien
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

// Me traigo la tabla desde html
const tablaVentas = document.querySelector('#tabla-ventas');

const insertTdVentas = () => {
    for (let i = 0; i < ventas.length; i++){
        const trV = document.createElement('tr');
        tablaVentas.appendChild(trV);
        for (let j = 0; j < ventas[i].length; j++){
            trV.innerHTML = 
            `<td>${format(ventas[i][1], 'es')}</td>
            <td>${ventas[i][2]}</td>
            <td>${ventas[i][3]}</td>
            <td>${ventas[i][4]}</td>
            <td>Precio Total</td>
            <td> 
            <button class="btn-editar"><i class="fas fa-pencil-alt"></i></button>
            <button class="btn-borrar"><i class="fas fa-trash-alt"></i></button> 
            </td>`;

        }
    
    }
}

insertTdVentas(ventas)

/*******************************************************************/

//----------------------------------- IMPRIMIR DATOS EN TABLA SUCURSAL -----------------------------------

// Me traigo la tabla desde html
const tablaSucursal = document.querySelector('#tabla-sucursal');

const insertTdSucursal = () => {
    for (let i = 0; i < sucursales.length; i++){
        const trS = document.createElement('tr');
        tablaSucursal.appendChild(trS);
        for (let j = 0; j < sucursales[i].length; j++){
            trS.innerHTML = 
            `<td>${sucursales[i]}</td>
            <td>Precio Total</td>`
        }
    }
}

insertTdSucursal(sucursales);

/*******************************************************************/

//----------------------------------- IMPRIMIR DATOS REPORTES -----------------------------------

// Me traigo los datos desde html
const productoEstrella = document.querySelector('#producto-estrella');

const insertProductoEstrella = () => {
    const dato = document.createElement('b');
    productoEstrella.appendChild(dato);
    dato.innerHTML = `<b>Producto estella.</b>`;
}

insertProductoEstrella();

/*******************************************************************/

const vendedoraIngreso = document.querySelector('#vendedora-ingreso');

const insertIngresoVendedora = () => {
    const ingreso = document.createElement('b');
    vendedoraIngreso.appendChild(ingreso);
    ingreso.innerHTML = `<b>Ingreso de Vendedora.</b>`;
}

insertIngresoVendedora();

/*******************************************************************/

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

//----------------------------------- FUNCION PRECIO MAQUINA -----------------------------------

const precioMaquina = (array) => {
    let suma = 0;
    for (let precio of precios) {
        array.forEach(element => {
            if (precio.includes(element)){
                suma += precio[1];
            }
        })
    }
    return suma
}

//console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']));

//----------------------------------- FUNCION VENTA VENDEDORA -----------------------------------

const ventasVendedora = (vendedora) => {
    let ventasVendedoraTotal = 0;
    for (let venta of ventas){
        if (venta[2].includes(vendedora)){
            ventasVendedoraTotal += precioMaquina(venta[4])
        }
    }
    return ventasVendedoraTotal;
}

//ventasVendedora(ventas)

//console.log(ventasVendedora('Grace')); // 900

