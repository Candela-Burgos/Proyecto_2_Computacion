//----------------------------------- IMPRIMIR DATOS EN TABLA VENTAS -----------------------------------

// Parsear Fecha
const formatDate = (date) => {
    let dd = (date.getDate() < 10 ? '0' : '') + date.getUTCDate();
    let anio = date.getFullYear();
    let mm = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);

    return `${dd}/${mm}/${anio}`
}

// Me traigo la tabla desde html
const tablaVentas = document.querySelector('#tabla-ventas');

const insertDatos = (arrVentas) => {
    for (const venta of arrVentas) {
        const trV = document.createElement('tr');
        tablaVentas.appendChild(trV);
        trV.innerHTML = `
            <td>${formatDate(venta.fecha)}</td>
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

insertDatos(nuevoArrVentas)

//**********************************LIMPIAR TABLA**********************************/

let limpiarTabla = () => {
    tablaVentas.innerHTML = "";
};

//*************************COMIENZA BORRAR UNA VENTA****************************

let funcDelete = (id) => {
    eliminarVenta.style.display = 'flex';
    blur.style.filter = "blur(3px)";
    productoEliminarId = id;
};

const deleteData = () => {
    if (nuevoArrVentas.length == 0) {
        nuevoArrVentas = nuevoArrVentas.filter(({ id }) => id != productoEliminarId)
    } else {
        nuevoArrVentas = nuevoArrVentas.filter(({ id }) => id != productoEliminarId)
    }

    limpiarTabla();
    render();
    insertDatos(nuevoArrVentas);
}

btnEliminar.addEventListener("click", () => {
    deleteData();
    eliminarVenta.style.display = 'none';
    blur.style.filter = "none";
});

//*************************TERMINA BORRAR UNA VENTA****************************

//*************************COMIENZA AGREGAR UNA VENTA****************************

let saveData = () => {
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

        limpiarTabla();
        render();
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
};

let changeData = () => {
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
                
        limpiarTabla();
        render();
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