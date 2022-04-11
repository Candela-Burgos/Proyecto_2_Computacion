const btnVenta = document.querySelector('#btn-venta');

const agregarVenta = document.querySelector('.agregar-venta'); // modal
const btnCancelarAgregar = document.querySelector('#btn-cancelar-agregar');
const btnGuardarAgregar = document.querySelector('#btn-guardar-agregar');

/*******************************************************************/

const btnEditar = document.querySelectorAll('.btn-editar'); // iconos

const editarVenta = document.querySelector('.editar-venta'); // modal
const btnCancelarEditar = document.querySelector('#btn-cancelar-editar');
const btnGuardarEditar = document.querySelector('#btn-guardar-editar');

/*******************************************************************/

const btnBorrar = document.querySelectorAll('.btn-borrar'); // iconos

const eliminarVenta = document.querySelector('.eliminar-venta'); // modal
const btnCancelarEliminar = document.querySelector('#btn-cancelar-eliminar');
const btnEliminar = document.querySelector('#btn-eliminar');

/*******************************************************************/

const formVentas = document.querySelector('#form-agregar');
const listaVendedorasVentas = document.querySelector('.vendedoras-ventas');
const listaComponentesVentas = document.querySelector('.componentes-ventas');
const listaSucursalesVentas = document.querySelector('.sucursales-ventas');
//const inputFechaAgregar = document.querySelector('#input-date-ventas');
const inputDateAgregar = document.querySelector('#input-date-ventas');

const formEditar = document.querySelector('#form-editar');
const listaVendedorasEditar = document.querySelector('.vendedoras-editar');
const listaComponentesEditar = document.querySelector('.componentes-editar');
const listaSucursalesEditar = document.querySelector('.sucursales-editar');
const inputDateEditar = document.querySelector('#input-date-edit');

/*******************************************************************/

let productoEliminarId = 0;
let productoEditarId = 0;
let nuevoArrVentas = [];

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
    if (e.target == agregarVenta) {
        agregarVenta.style.display = 'none';
        blur.style.filter = 'none';
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape') {
        cerrarModalAgregarVenta()
    }
})

/****************************************************************************************/

//----------------------------------- ABRIR MODAL EDITAR -----------------------------------

const abrirModalEditar = () => {
    editarVenta.style.display = 'flex';
    blur.style.filter = 'blur(3px)';
}

for (let i = 0; i < btnEditar.length; i++) {
    btnEditar[i].addEventListener('click', abrirModalEditar)
}

//----------------------------------- CERRAR MODAL EDITAR -----------------------------------

const cerrarModalEditar = () => {
    editarVenta.style.display = 'none';
    blur.style.filter = 'none';
}

btnCancelarEditar.addEventListener('click', cerrarModalEditar)

window.addEventListener('click', (e) => {
    if (e.target == editarVenta) {
        editarVenta.style.display = 'none';
        blur.style.filter = 'none';
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape') {
        cerrarModalEditar()
    }
})

/****************************************************************************************/

//----------------------------------- ABRIR MODAL BORRAR -----------------------------------

const abrirModalBorrar = () => {
    eliminarVenta.style.display = 'flex';
    blur.style.filter = 'blur(3px)';
}

for (let i = 0; i < btnBorrar.length; i++) {
    btnBorrar[i].addEventListener('click', abrirModalBorrar)
}

//----------------------------------- CERRAR MODAL BORRAR ----------------------------------- 

const cerrarModalBorrar = () => {
    eliminarVenta.style.display = 'none';
    blur.style.filter = 'none';
}

btnCancelarEliminar.addEventListener('click', cerrarModalBorrar)

window.addEventListener('click', (e) => {
    if (e.target == eliminarVenta) {
        eliminarVenta.style.display = 'none';
        blur.style.filter = 'none';
    }
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Scape') {
        cerrarModalBorrar()
    }
})

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

//********************************************************************/


// 1 - precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

const precioComponente = (componente) => {
    const { precios } = local;
    for (const precio of precios) {
        if (precio.componente === componente) {
            return precio.precio
        }
    }
}

//console.log(precioComponente('Monitor GPRS 3000'))

const precioMaquina = (componentes) => {
    let acc = 0;
    for (const componente of componentes) {
        acc += precioComponente(componente)
    }
    return acc
}

//console.log("precioMaquina: ", precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']))// 320 ($200 del monitor + $120 del motherboard));

// 2 - cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas

const cantidadVentasComponente = (componente) => {
    let acc = 0;
    const { ventas } = local;
    for (const venta of ventas) {
        if (venta.componentes.includes(componente)) {
            acc++
        }
    }
    return acc;
}

//console.log("cantidadVentasComponente: ", cantidadVentasComponente("Monitor ASC 543")); // 2

// 3 - vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasPorFecha = (mes, anio, ventas) => ventas.filter(({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio);

const ventasPorVendedora = (nombre, ventas) => ventas.filter(({ nombreVendedora }) => nombreVendedora === nombre);

const ventasPorSucursal = (nombreSucursal, ventas) => ventas.filter(({ sucursal }) => sucursal === nombreSucursal);

const ventasPorAño = (anio, ventas) => {
    return ventas.filter(({ fecha }) => {
        return fecha.getFullYear() === anio
    })
}

const montoVentasPorVendedora = (vend, arrVentas) => {
    let acc = 0;
    for (const { nombreVendedora, componentes } of arrVentas) {
        if (nombreVendedora === vend) {
            acc += precioMaquina(componentes);
        }
    }
    return acc;
};

// console.log("Ada:",montoVentasPorVendedora('Ada', local.ventas));
// console.log("Grace:",montoVentasPorVendedora('Grace', local.ventas));
// console.log("Hedy:",montoVentasPorVendedora('Hedy', local.ventas));
// console.log("Sheryl:",montoVentasPorVendedora('Sheryl', local.ventas));

const mejorVendedoraDelAño = (anio) => {
    const { ventas } = local
    const ventasAnio = ventasPorAño(anio, ventas)
    let nombre = ""
    for (const venta of ventasAnio) {
        for (const venta1 of ventasAnio) {
            const precioVenta = montoVentasPorVendedora(venta.nombreVendedora, ventasAnio);
            const precioVenta1 = montoVentasPorVendedora(venta1.nombreVendedora, ventasAnio);
            if (precioVenta > precioVenta1) {
                nombre = venta.nombreVendedora
            }
        }
    }
    return nombre;
};

//console.log(mejorVendedoraDelAño(2019));

const totalVendido = (ventas) => {
    let acc = 0;
    //const {ventas} = local
    for (const { componentes } of ventas) {
        acc += precioMaquina(componentes);

    }
    return acc;
};

// console.log("ventasPorFecha: ", ventasPorFecha(1, 2019, local.ventas));
// console.log("ventasPorVendedora: ", ventasPorVendedora("Ada", local.ventas));
// console.log("ventasPorFecha y vendedoras: ", ventasPorFecha(1, 2019, ventasPorVendedora("Ada", local.ventas))); // me trae las ventas del mes que le pasamos, segun la vendedora que le pasamos
//console.log(ventasPorSucursal("Centro", local.ventas)) 
//console.log(ventasPorAño(2019,ventas));
// console.log("totalVendido: ", totalVendido(local.ventas));

const ventasPorMesVendedora = (vendedora, mes, anio) => {
    mes--
    const { ventas } = local;
    let acc = 0;
    for (const { nombreVendedora, fecha, componentes } of ventas) {
        if (nombreVendedora === vendedora && fecha.getMonth() === mes && fecha.getFullYear() === anio) {
            acc += precioMaquina(componentes)
        }
    }
    return acc
}

const ventasPorMes = (mes, anio) => {
    mes--;
    const { ventas } = local;
    let acc = 0;
    for (const { fecha, componentes } of ventas) {
        if (fecha.getMonth() === mes && fecha.getFullYear() === anio) {
            acc += precioMaquina(componentes);
        }
    }
    return acc;
};

const ventasPorMesSucursal = (sucur, mes, anio) => {
    mes--
    const { ventas } = local;
    let acc = 0;
    for (const { sucursal, componentes, fecha } of ventas) {
        if (sucursal === sucur && fecha.getMonth() === mes && fecha.getFullYear() === anio) {
            acc += precioMaquina(componentes)
        }
    }
    return acc
}

// console.log(ventasPorMesSucursal("Centro", 1, 2019));
// console.log(ventasPorMesSucursal("Caballito", 2, 2019));

// console.log("mes 0: ", ventasPorMesVendedora("Grace", 1, 2019))
// console.log("mes 1: ", ventasPorMesVendedora("Ada", 2, 2019))

const vendedoraDelMes = (mes, anio) => {
    const { vendedoras } = local;
    const ventasPorVendedoraMensual = vendedoras.map(vendedora => {
        return {
            vendedora: vendedora,
            ventaTotalPorMes: ventasPorMesVendedora(vendedora, mes, anio)
        }
    })

    let acc = 0;
    let vendedoraDelMes = '';
    for (const { vendedora, ventaTotalPorMes } of ventasPorVendedoraMensual) {
        if (acc < ventaTotalPorMes) {
            acc = ventaTotalPorMes
            vendedoraDelMes = vendedora
        }
    }
    return vendedoraDelMes
}

// console.log("vendedoraDelMes: ", vendedoraDelMes(1, 2019)); // "Ada" (vendio por $670, una máquina de $320 y otra de $350)

// 4 - ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, anio) => {
    const { ventas } = local;
    return totalVendido(ventasPorFecha(mes, anio, ventas))
}

//console.log(ventasMes(1, 2019));

// 5 - ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.

const ventasVendedora = (nombre) => {
    const { ventas } = local
    return totalVendido(ventasPorVendedora(nombre, ventas))
}

//console.log(ventasVendedora("Ada"));

// 6 - componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

const componenteMasVendido = () => {
    let mayorCantidad = 0;
    let componenteEstrella = "";
    const { precios } = local;
    for (const precio of precios) {
        const {componente} = precio;
        const cantidad = cantidadVentasComponente(componente)
        if (mayorCantidad < cantidad) {
            mayorCantidad = cantidad
            componenteEstrella = precio.componente
        }
    }
    return componenteEstrella
}

console.log("producto estrella: ", componenteMasVendido());

// 7 - huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre)

const huboVentas = (mes, anio) => {
    const { ventas } = local;
    return ventas.some(({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio)
}

//console.log(huboVentas(3, 2019)); // false

// # Parte 2

// 1 - Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

const ventasSucursal = (sucursal) => {
    const { ventas } = local;
    return totalVendido(ventasPorSucursal(sucursal, ventas))
}

//console.log(ventasSucursal("Caballito"));

// 2 - Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const sucursalDelMes = (mes, anio) => {
    const { sucursales } = local;
    const ventasPorSucursalMensual = sucursales.map(sucursal => {
        return {
            sucursal: sucursal,
            ventaTotalPorMes: ventasPorMesSucursal(sucursal, mes, anio)
        }
    })
    // console.log(ventasPorSucursalMensual)

    let sucursalMasVentas = 0;
    let sucursalEstrella = '';
    for (const { sucursal, ventaTotalPorMes } of ventasPorSucursalMensual) {
        if (sucursalMasVentas < ventaTotalPorMes) {
            sucursalMasVentas = ventaTotalPorMes
            sucursalEstrella = sucursal
        }
    }
    return sucursalEstrella
}

//console.log(sucursalDelMes(1, 2019));

// # Parte 3

// 1 - renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

const renderPorMes = (anio) => {
    const arrMeses = [];
    const { ventas } = local;
    for (const venta of ventas) {
        const fechas = venta.fecha.getMonth();
        !arrMeses.includes(fechas) && arrMeses.push(fechas)
    }

    arrMeses.sort((a, b) => { return a - b })

    //console.log(arrMeses)

    const ventasMes = arrMeses.map(element => {
        return {
            fecha: element,
            total: ventasPorMes(element + 1, anio)
        }
    })
    return ventasMes;
}

//console.log(renderPorMes(2019));

// 2 - renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

const renderPorSucursal = () => {
    const { ventas, sucursales } = local;
    const totalVent = sucursales.map(sucursal => {
        return {
            sucursalVenta: sucursal,
            importe: totalVendido(ventasPorSucursal(sucursal, ventas))
        }
    })
    return totalVent
}

console.log(renderPorSucursal())

// 3 - render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

// Reporte
// Ventas por mes:
//   Total de enero 2019: 1250
//   Total de febrero 2019: 4210
// Ventas por sucursal:
//   Total de Centro: 4195
//   Total de Caballito: 1265
// Producto estrella: Monitor GPRS 3000
// Vendedora que más ingresos generó: Grace

const render = () => {
    const {ventas} = local;
    const vendConMasIngresos = ventas.forEach(venta => {
        const {fecha} = venta;
        return {
            vendedoraQueMasIngresosGenero: mejorVendedoraDelAño(fecha.getFullYear())
        }
    })
    return vendConMasIngresos
}

console.log(render());

//********************************************************************/
