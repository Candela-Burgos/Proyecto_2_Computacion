/***************************VARIABLES GLOBALES*************************/

const btnVenta = document.querySelector('#btn-venta');

const agregarVenta = document.querySelector('.agregar-venta');
const btnCancelarAgregar = document.querySelector('#btn-cancelar-agregar');
const btnGuardarAgregar = document.querySelector('#btn-guardar-agregar');

/*******************************************************************/

const btnEditar = document.querySelectorAll('.btn-editar');

const editarVenta = document.querySelector('.editar-venta');
const btnCancelarEditar = document.querySelector('#btn-cancelar-editar');
const btnGuardarEditar = document.querySelector('#btn-guardar-editar');

/*******************************************************************/

const btnBorrar = document.querySelectorAll('.btn-borrar');

const eliminarVenta = document.querySelector('.eliminar-venta'); 
const btnCancelarEliminar = document.querySelector('#btn-cancelar-eliminar');
const btnEliminar = document.querySelector('#btn-eliminar');

/*******************************************************************/

const formVentas = document.querySelector('#form-agregar');
const listaVendedorasVentas = document.querySelector('.vendedoras-ventas');
const listaComponentesVentas = document.querySelector('.componentes-ventas');
const listaSucursalesVentas = document.querySelector('.sucursales-ventas');
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
let nuevoArrPrecios = [];

nuevoArrPrecios = local.precios;
nuevoArrVentas = local.ventas;

/********************************SUCURSALES***********************************/

const sucurCentro = document.querySelector('#ventasCentro');
const sucurCaballito = document.querySelector('#ventasCaballito');

/********************************PRODUCTO ESTRELLA***********************************/

const productoEstrella = document.querySelector('#producto-estrella');

/********************************VENDEDORA CON MAS INGRESOS***********************************/

const vendedoraIngreso = document.querySelector('#vendedora-ingreso');

//*******************************PRECIO COMPONENTE*************************************/

const precioComponente = (componente) => {
    const { precios } = local;
    for (const precio of precios) {
        if (precio.componente === componente) {
            return precio.precio
        }
    }
}

//*******************************PRECIO MAQUINA*************************************/

const precioMaquina = (componentes) => {
    let acc = 0;
    for (const componente of componentes) {
        acc += precioComponente(componente)
    }
    return acc
}

//*******************************CANTIDAD VENTAS COMPONENTE*************************************/

const cantidadVentasComponente = (componente, arrNuevo) => {
    let acc = 0;
    for (const venta of arrNuevo) {
        if (venta.componentes.includes(componente)) {
            acc++
        }
    }
    return acc;
}

//*******************************VENTAS POR FECHA*************************************/

const ventasPorFecha = (mes, anio, ventas) => ventas.filter(({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio);

//*******************************VENTAS POR VENDEDORA*************************************/

const ventasPorVendedora = (nombre, ventas) => ventas.filter(({ nombreVendedora }) => nombreVendedora === nombre);

//*******************************VENTAS POR SUCURSAL*************************************/

const ventasPorSucursal = (nombreSucursal, ventas) => ventas.filter(({ sucursal }) => sucursal === nombreSucursal);

//*******************************VENTAS POR AÑO*************************************/

const ventasPorAño = (anio, ventas) => {
    return ventas.filter(({ fecha }) => {
        return fecha.getFullYear() === anio
    })
}

//*******************************MONTO VENTAS POR VENDEDORA*************************************/

const montoVentasPorVendedora = (vend, arrVentas) => {
    let acc = 0;
    for (const { nombreVendedora, componentes } of arrVentas) {
        if (nombreVendedora === vend) {
            acc += precioMaquina(componentes);
        }
    }
    return acc;
};

//*******************************MEJOR VENDEDORA CON INGRESOS*************************************/

const mejorVendedoraConIngresos = (arrVentas) => {
    let suma = 0;
    let nombreVendedoraMayor = "";
    for (const venta of arrVentas) {
        const {nombreVendedora} = venta;
        const precioTotal = montoVentasPorVendedora(nombreVendedora, arrVentas);
        if (suma < precioTotal) {
            suma = precioTotal
            nombreVendedoraMayor = nombreVendedora
        }
    }
    return nombreVendedoraMayor
};

//*******************************CANTIDAD VENTAS*************************************/

const cantidadVentas = (sucur, arrVentas) => {
    let totalVentas = 0;
    arrVentas.filter(venta => {
        if (venta.sucursal === sucur) {
            totalVentas += precioMaquina(venta.componentes)
        }
    })
    return totalVentas;
}

//*******************************TOTAL VENDIDO*************************************/

const totalVendido = (ventas) => {
    let acc = 0;
    //const {ventas} = local
    for (const { componentes } of ventas) {
        acc += precioMaquina(componentes);
    }
    return acc;
};

//*******************************VENTAS POR MES VENDEDORA*************************************/

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

//*******************************VENTAS POR MES*************************************/

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

//*******************************VENTAS POR MES SUCURSAL*************************************/

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

//*******************************VENDEDORA DEL MES*************************************/

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

//*******************************VENTAS MES*************************************/

const ventasMes = (mes, anio) => {
    const { ventas } = local;
    return totalVendido(ventasPorFecha(mes, anio, ventas))
}

//*******************************VENTAS VENDEDORA*************************************/

const ventasVendedora = (nombre) => {
    const { ventas } = local
    return totalVendido(ventasPorVendedora(nombre, ventas))
}

//*******************************COMPONENTE MAS VENDIDO*************************************/

const componenteMasVendido = (arrNuevo) => {
    let mayorCantidad = 0;
    let componenteEstrella = "";
    for (const precio of arrNuevo) {
        const {componente} = precio;
        const cantidad = cantidadVentasComponente(componente, nuevoArrVentas);
        if (mayorCantidad < cantidad) {
            mayorCantidad = cantidad
            componenteEstrella = precio.componente
        }
    }
    return componenteEstrella
}

//*******************************HUBO VENTAS*************************************/

const huboVentas = (mes, anio) => {
    const { ventas } = local;
    return ventas.some(({ fecha }) => fecha.getMonth() + 1 === mes && fecha.getFullYear() === anio)
}

//*******************************VENTAS SUCURSAL*************************************/

const ventasSucursal = (sucursal) => {
    const { ventas } = local;
    return totalVendido(ventasPorSucursal(sucursal, ventas))
}

//*******************************SUCURSAL DEL MES*************************************/

const sucursalDelMes = (mes, anio) => {
    const { sucursales } = local;
    const ventasPorSucursalMensual = sucursales.map(sucursal => {
        return {
            sucursal: sucursal,
            ventaTotalPorMes: ventasPorMesSucursal(sucursal, mes, anio)
        }
    })

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

//*******************************RENDER POR MES*************************************/

const renderPorMes = (anio) => {
    const arrMeses = [];
    const { ventas } = local;
    for (const venta of ventas) {
        const fechas = venta.fecha.getMonth();
        !arrMeses.includes(fechas) && arrMeses.push(fechas)
    }

    arrMeses.sort((a, b) => { return a - b })

    const ventasMes = arrMeses.map(element => {
        return {
            fecha: element,
            total: ventasPorMes(element + 1, anio)
        }
    })
    return ventasMes;
}

//*******************************RENDER POR SUCURSAL*************************************/

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

//*******************************RENDER*************************************/

const render = () => {
    sucurCentro.innerHTML = cantidadVentas("Centro", nuevoArrVentas);
    sucurCaballito.innerHTML = cantidadVentas("Caballito", nuevoArrVentas);

    productoEstrella.innerHTML = componenteMasVendido(nuevoArrPrecios);

    vendedoraIngreso.innerHTML = mejorVendedoraConIngresos(nuevoArrVentas);
}

render()
