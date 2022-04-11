/****************************************************************************************/

//----------------------------------- VENDEDORAS -----------------------------------

//NO ME FUNCIONA

const insertOptionVendedoraVentas = () => {
    const { vendedoras } = local;
    for (const vendedora of vendedoras) {
        // inserto las option en html
        const optionVendedoraVentas = document.createElement('option');
        listaVendedorasVentas.appendChild(optionVendedoraVentas);
        optionVendedoraVentas.innerHTML = `${vendedora}`;
    }
}
/* 

quise hacer lo mismo que con los btnEditar. porque no me funcionaban con querySelectorAll

for (let i = 0; i < listaVendedoras.length; i++){
    listaVendedoras
} */

insertOptionVendedoraVentas();

const insertOptionVendedoraEditar = () => {
    const { vendedoras } = local;
    for (const vendedora of vendedoras) {
        // inserto las option en html
        const optionVendedoraEditar = document.createElement('option');
        listaVendedorasEditar.appendChild(optionVendedoraEditar);
        optionVendedoraEditar.innerHTML = `${vendedora}`;
    }
}

insertOptionVendedoraEditar();

/*******************************************************************/

//----------------------------------- COMPONENTES -----------------------------------

//NO ME FUNCIONA

const insertOptionComponenteVentas = () => {
    const { precios } = local;
    for (const precio of precios) {
        // inserto las option en html
        const optionComponenteVentas = document.createElement('option');
        listaComponentesVentas.appendChild(optionComponenteVentas);
        optionComponenteVentas.innerHTML = `${precio.componente}`;
    }
}

insertOptionComponenteVentas()

// const cargarComponentes = () => {
//     const {precios} = local
//     for (const precio of precios) {

//       const listaComponentes = document.createElement("option");
//       //listaComponentes.classList.add("seleccionar-componentes");
//       listaComponentes.setAttribute("value", `${precio.componente}`);
//       //console.log(listaComponentes)
//       listaComponentes.innerHTML = `${precio.componente}`;
//       optionComponenteVentas.appendChild(listaComponentes);
//     }
// };  

// cargarComponentes()

const insertOptionComponenteEditar = () => {
    const { precios } = local;
    for (const precio of precios) {
        // inserto las option en html
        const optionComponenteEditar = document.createElement('option');
        listaComponentesEditar.appendChild(optionComponenteEditar);
        optionComponenteEditar.innerHTML = `${precio.componente}`;
    }
}

insertOptionComponenteEditar()


//option = select.options[select.selectedIndex].value;


/*******************************************************************/

//----------------------------------- SUCURSALES -----------------------------------

//NO ME FUNCIONA

const insertOptionSucursalVentas = () => {
    const { sucursales } = local;
    for (const sucursal of sucursales) {
        // inserto las option en html
        const optionSucursalVentas = document.createElement('option');
        listaSucursalesVentas.appendChild(optionSucursalVentas);
        optionSucursalVentas.innerHTML = `${sucursal}`;
    }
}

insertOptionSucursalVentas()

/**************************************************************************/

const insertOptionSucursalEditar = () => {
    const { sucursales } = local;
    for (const sucursal of sucursales) {
        // inserto las option en html
        const optionSucursalEditar = document.createElement('option');
        listaSucursalesEditar.appendChild(optionSucursalEditar);
        optionSucursalEditar.innerHTML = `${sucursal}`;
    }
}

insertOptionSucursalEditar()

//----------------------------------- (falta)FECHA -----------------------------------

// //VENTAS

// const insertOptionDateVentas = () => {
//     const inputFechaVenta = document.createElement('input');
//     inputFechaVenta.setAttribute('type', 'date');
//     inputFechaVenta.setAttribute('id', 'input-date-ventas');
//     inputFechaVenta.setAttribute('onChange', 'formatoFecha(nuevoArrVentas)');
//     formVentas.appendChild(inputFechaVenta);
// }

// insertOptionDateVentas();

// //EDITAR

// const insertOptionDateEditar = () => {
//     const inputFechaEditar = document.createElement('input');
//     inputFechaEditar.setAttribute('type', 'date');
//     inputFechaEditar.setAttribute('id', 'input-date-edit');
//     inputFechaEditar.setAttribute('onChange', 'formatoFecha(nuevoArrVentas)');
//     formEditar.appendChild(inputFechaEditar);
// }

// insertOptionDateEditar();