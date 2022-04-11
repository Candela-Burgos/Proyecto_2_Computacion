//----------------------------------- IMPRIMIR DATOS EN TABLA VENTAS -----------------------------------

// Variable que cambia el formato de la fecha para que se vea bien
let format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date);

// let formatoFecha = (arrVentas) =>{
//     // const {ventas} = local;
//     for (const venta of arrVentas) {
//         const {fecha} = venta;
//         return `${fecha.getUTCDate()}/${fecha.getUTCMonth()+1}/${fecha.getUTCFullYear()}`;
//     }
// } 
// console.log(formatoFecha(nuevoArrVentas));

// Me traigo la tabla desde html
const tablaVentas = document.querySelector('#tabla-ventas');

const insertDatos = (arrVentas) => {
    //const {ventas} = local;
    for (const venta of arrVentas) {
        const trV = document.createElement('tr');
        tablaVentas.appendChild(trV);
        trV.innerHTML = /* formatoFecha(arrVentas) */`
            <td>${format(venta.fecha, "es")}</td>
            <td>${venta.nombreVendedora}</td>
            <td>${venta.sucursal}</td>
            <td>${venta.componentes}</td>
            <td>${precioMaquina(venta.componentes)}</td>
            <td> 
            <i class="far fa-edit btn-editar" id="editar-btn" onclick="funcEdit(${venta.id})" aria-hidden="true"></i> 
            <i class="far fa-trash-alt btn-borrar" onclick="funcDelete(${venta.id})"></i>
            </td>
            `;
    }
}

nuevoArrVentas = local.ventas;

insertDatos(nuevoArrVentas)

//----------------------------------- IMPRIMIR DATOS EN TABLA SUCURSAL -----------------------------------

// Me traigo la tabla desde html
const sucurCentro = document.querySelector('#ventasCentro');
const sucurCaballito = document.querySelector('#ventasCaballito');

const cantidadVentas = (sucur) => {
    let totalVentas = 0;
    const {ventas} = local;
    ventas.filter(venta => {
        if (venta.sucursal === sucur) {
            totalVentas += precioMaquina(venta.componentes)
        }
    })
    return totalVentas;
}

const insertPrecioSucur = () => {
    sucurCentro.innerHTML = cantidadVentas("Centro");
    sucurCaballito.innerHTML = cantidadVentas("Caballito");
}

insertPrecioSucur();

/*******************************************************************/

//----------------------------------- IMPRIMIR DATOS REPORTES -----------------------------------

// Me traigo los datos desde html
const productoEstrella = document.querySelector('#producto-estrella');

const insertProductoEstrella = () => {
    const {precios} = local;
    for (const precio of precios) {
        const {componente} = precio;
        const dato = document.createElement('b');
        productoEstrella.appendChild(dato);
        if (componenteMasVendido() === componente){
            return dato.innerHTML += `<b>${componenteMasVendido()}</b>`;
        }
    }
}

insertProductoEstrella();

/*******************************************************************/

const vendedoraIngreso = document.querySelector('#vendedora-ingreso');

const insertIngresoVendedora = () => {
    const ingreso = document.createElement('b');
    vendedoraIngreso.appendChild(ingreso);
    ingreso.innerHTML = `<b>${render()}</b>`;
}

insertIngresoVendedora();

/*******************************************************************/


//*************************COMIENZA BORRAR UNA VENTA****************************

let funcDelete = (id) => {
    eliminarVenta.style.display = 'flex';
    blur.style.filter = "blur(3px)";
    productoEliminarId = id;
};

btnEliminar.addEventListener("click", () => {
    if (nuevoArrVentas.length == 0) {
        nuevoArrVentas = nuevoArrVentas.filter(({ id }) => id != productoEliminarId)
    } else {
        nuevoArrVentas = nuevoArrVentas.filter(({ id }) => id != productoEliminarId)
    }

    blur.style.filter = "none";
    eliminarVenta.style.display = 'none';

    limpiarTabla();
    //console.log(nuevoArrVentas)
    // insertPrecioSucur();
    // insertProductoEstrella();
    //insertIngresoVendedora();
    insertDatos(nuevoArrVentas);
});

let limpiarTabla = () => {
    tablaVentas.innerHTML = "";
    // trS.innerHTML = "";
    // dato.innerHTML = "";
    //console.log(tablaVentas)
    //insertDatos()
};

//*****************************************************************************

//*************************TERMINA BORRAR UNA VENTA****************************

//*************************COMIENZA AGREGAR UNA VENTA****************************

let saveData = () => {
    //const {ventas} = local
    let componentes = getSelectComponentValues(listaComponentesVentas);
    let fecha = new Date(inputDateAgregar.value);
    let vendedora = listaVendedorasVentas.value;
    let sucursal = listaSucursalesVentas.value;
    if (validateAllItems(componentes, fecha, vendedora, sucursal)) {
        alert("Porfavor, complete todos los campos");
    } else {
        nuevoArrVentas.push({
            id: nuevoArrVentas.length + 1,
            fecha: fecha,
            nombreVendedora: vendedora,
            componentes: componentes,
            sucursal: sucursal
        });
        //console.log(nuevoArrVentas)
        limpiarTabla();
        insertPrecioSucur();
        insertProductoEstrella();
        //insertIngresoVendedora();
        insertDatos(nuevoArrVentas);
    }
};

btnGuardarAgregar.addEventListener("click", () => {
    saveData();
    agregarVenta.style.display = 'none';
    blur.style.filter = "none";
});

//*************************TERMINA AGREGAR UNA VENTA****************************

//*************************COMIENZA EDITAR UNA VENTA****************************

let funcEdit = (id) => {
    editarVenta.style.display = 'flex';
    blur.style.filter = "blur(3px)";
    productoEditarId = id;
    //alert(productoEditarId)
};

let changeData = () => {
    //const {id} = nuevoArrVentas
    let componentes = getSelectComponentValues(listaComponentesEditar);
    let fecha = new Date(inputDateEditar.value);
    let vendedora = listaVendedorasEditar.value;
    let sucursal = listaSucursalesEditar.value;
    if (validateAllItems(componentes, fecha, vendedora, sucursal)) {
        alert("Porfavor, complete todos los campos");
    } else {
        nuevoArrVentas.forEach(e => {
            if (e.id === productoEditarId){
            e.fecha = fecha
            e.nombreVendedora = vendedora
            e.componentes = componentes
            e.sucursal = sucursal
            }
        })
                
        //console.log(nuevoArrVentas)
        limpiarTabla();
        insertPrecioSucur();
        insertProductoEstrella();
        //insertIngresoVendedora();
        insertDatos(nuevoArrVentas)
    }
};

btnGuardarEditar.addEventListener("click", () => {
    changeData();
    editarVenta.style.display = 'none';
    blur.style.filter = 'none';
});

//*************************TERMINA EDITAR UNA VENTA****************************

//--------------♥--------- VALUE ---------♥---------------//

let validateAllItems = (comp, fec, vend, suc) => {
    return comp.length == 0 || fec == "" || vend == "" || suc == "";
};

let getSelectComponentValues = (select) => {
    let result = [];
    let options = select && select.options;
    let opt;

    for (let i = 0; i < options.length; i++) {
        opt = options[i];
        opt.selected ? result.push(opt.value) : false;
    }
    return result;
};