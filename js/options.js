//----------------------------------- OPTION VENDEDORAS -----------------------------------

const insertOptionVendedoraVentas = () => {
    const { vendedoras } = local;
    for (const vendedora of vendedoras) {
        const optionVendedoraVentas = document.createElement('option');
        optionVendedoraVentas.innerHTML = `${vendedora}`;
        listaVendedorasVentas.appendChild(optionVendedoraVentas);
    }
}

insertOptionVendedoraVentas();

const insertOptionVendedoraEditar = () => {
    const { vendedoras } = local;
    for (const vendedora of vendedoras) {
        const optionVendedoraEditar = document.createElement('option');
        optionVendedoraEditar.innerHTML = `${vendedora}`;
        listaVendedorasEditar.appendChild(optionVendedoraEditar);
    }
}

insertOptionVendedoraEditar();

//----------------------------------- OPTION COMPONENTES -----------------------------------

const insertOptionComponenteVentas = () => {
    const { precios } = local;
    for (const precio of precios) {
        const optionComponenteVentas = document.createElement('option');
        optionComponenteVentas.innerHTML = `${precio.componente}`;
        listaComponentesVentas.appendChild(optionComponenteVentas);
    }
}

insertOptionComponenteVentas()

const insertOptionComponenteEditar = () => {
    const { precios } = local;
    for (const precio of precios) {
        const optionComponenteEditar = document.createElement('option');
        optionComponenteEditar.innerHTML = `${precio.componente}`;
        listaComponentesEditar.appendChild(optionComponenteEditar);
    }
}

insertOptionComponenteEditar()

//----------------------------------- OPTION SUCURSALES -----------------------------------

const insertOptionSucursalVentas = () => {
    const { sucursales } = local;
    for (const sucursal of sucursales) {
        const optionSucursalVentas = document.createElement('option');
        optionSucursalVentas.innerHTML = `${sucursal}`;
        listaSucursalesVentas.appendChild(optionSucursalVentas);
    }
}

insertOptionSucursalVentas()

const insertOptionSucursalEditar = () => {
    const { sucursales } = local;
    for (const sucursal of sucursales) {
        const optionSucursalEditar = document.createElement('option');
        optionSucursalEditar.innerHTML = `${sucursal}`;
        listaSucursalesEditar.appendChild(optionSucursalEditar);
    }
}

insertOptionSucursalEditar()