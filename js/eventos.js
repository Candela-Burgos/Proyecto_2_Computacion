
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

//********************************************************************/