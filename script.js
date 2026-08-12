// =================================
// SUPABASE PARA EL LOGIN REAL
// =================================

const SUPABASE_URL =
    "https://deitpsdzjmokeheypnya.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_-t4XaaBezywTaGvYG-dprg_j6HWh9BG";

const clienteSupabase =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// =================================
// ELEMENTOS
// =================================
const btnLoginGoogle =
    document.getElementById(
        "btn-login-google"
    );

const btnLoginVolverInicio =
    document.getElementById(
        "btn-login-volver-inicio"
    );

const btnExplorarVolverInicio =
    document.getElementById(
        "btn-explorar-volver-inicio"
    );

const btnCerrarSesionCuenta =
    document.getElementById(
        "btn-cerrar-sesion-cuenta"
    );

const btnIrExplorar =
    document.getElementById(
        "btn-ir-explorar"
    );

const cuentaExplorar =
    document.getElementById(
        "cuenta-explorar"
    );


const btnCuentaExplorar =
    document.getElementById(
        "btn-cuenta-explorar"
    );


const nombreCuentaExplorar =
    document.getElementById(
        "nombre-cuenta-explorar"
    );


const btnMenuMiCuentaExplorar =
    document.getElementById(
        "btn-menu-mi-cuenta-explorar"
    );


const btnMenuCerrarSesionExplorar =
    document.getElementById(
        "btn-menu-cerrar-sesion-explorar"
    );

const cuentaInicio =
    document.getElementById(
        "cuenta-inicio"
    );


const btnCuentaInicio =
    document.getElementById(
        "btn-cuenta-inicio"
    );


const nombreCuentaInicio =
    document.getElementById(
        "nombre-cuenta-inicio"
    );


const btnMenuMiCuenta =
    document.getElementById(
        "btn-menu-mi-cuenta"
    );


const btnMenuCerrarSesion =
    document.getElementById(
        "btn-menu-cerrar-sesion"
    );

const seccionComentarios =
    document.getElementById(
        "seccion-comentarios"
    );


const listaComentarios =
    document.getElementById(
        "lista-comentarios"
    );


const sinComentarios =
    document.getElementById(
        "sin-comentarios"
    );


const contadorComentarios =
    document.getElementById(
        "contador-comentarios"
    );


const formularioComentario =
    document.getElementById(
        "formulario-comentario"
    );


const inputComentario =
    document.getElementById(
        "input-comentario"
    );


const contadorCaracteresComentario =
    document.getElementById(
        "contador-caracteres-comentario"
    );


const btnPublicarComentario =
    document.getElementById(
        "btn-publicar-comentario"
    );

const seccionInteraccionesLectura =
    document.getElementById(
        "seccion-interacciones-lectura"
    );


const btnLikeLectura =
    document.getElementById(
        "btn-like-lectura"
    );


const iconoLikeLectura =
    document.getElementById(
        "icono-like-lectura"
    );


const contadorLikeLectura =
    document.getElementById(
        "contador-like-lectura"
    );

const pantallaExplorar =
    document.getElementById(
        "pantalla-explorar"
    );


const btnExplorarInicio =
    document.getElementById(
        "btn-explorar-inicio"
    );


const btnExplorarEscritorio =
    document.getElementById(
        "btn-explorar-escritorio"
    );


const btnExplorarLogin =
    document.getElementById(
        "btn-explorar-login"
    );


const buscadorExplorar =
    document.getElementById(
        "buscador-explorar"
    );

const limpiarBuscadorExplorar =
    document.getElementById(
        "limpiar-buscador-explorar"
    );


const listaExplorar =
    document.getElementById(
        "lista-explorar"
    );


const explorarCargando =
    document.getElementById(
        "explorar-cargando"
    );


const explorarVacio =
    document.getElementById(
        "explorar-vacio"
    );

const btnVolverInicio =
    document.getElementById(
        "btn-volver-inicio"
    );

const btnVerMiPerfil =
    document.getElementById(
        "btn-ver-mi-perfil"
    );


const btnCopiarMiPerfil =
    document.getElementById(
        "btn-copiar-mi-perfil"
    );

const modalPopup =
    document.getElementById(
        "modal-popup"
    );

const popupIcono =
    document.getElementById(
        "popup-icono"
    );

const popupTitulo =
    document.getElementById(
        "popup-titulo"
    );

const popupMensaje =
    document.getElementById(
        "popup-mensaje"
    );

const popupCancelar =
    document.getElementById(
        "popup-cancelar"
    );

const popupConfirmar =
    document.getElementById(
        "popup-confirmar"
    );

const popupCampoContenedor =
    document.getElementById(
        "popup-campo-contenedor"
    );

const popupInput =
    document.getElementById(
        "popup-input"
    );

const popupAyudaInput =
    document.getElementById(
        "popup-ayuda-input"
    );

const btnEliminarBorrador =
    document.getElementById(
        "btn-eliminar-borrador"
    );

const btnNuevoEscrito =
    document.getElementById(
        "btn-nuevo-escrito"
    );

const modalNuevoEscrito =
    document.getElementById(
        "modal-nuevo-escrito"
    );

const cerrarNuevoEscrito =
    document.getElementById(
        "cerrar-nuevo-escrito"
    );

const nuevoEscritoTitulo =
    document.getElementById(
        "nuevo-escrito-titulo"
    );

const nuevoEscritoDescripcion = document.getElementById("nuevo-escrito-descripcion");
const contadorDescripcion = document.getElementById("contador-descripcion");

const estadoEditor =
    document.getElementById(
        "estado-editor"
    );

const contadorPalabrasEditor =
    document.getElementById(
        "contador-palabras-editor"
    );

const contadorCaracteresEditor =
    document.getElementById(
        "contador-caracteres-editor"
    );

const btnGuardarNuevoEscrito =
    document.getElementById(
        "btn-guardar-nuevo-escrito"
    );

const btnDescargarEscrito =
    document.getElementById(
        "btn-descargar-escrito"
    );


const modalFormatoGuardar =
    document.getElementById(
        "modal-formato-guardar"
    );

const cerrarFormatoGuardar =
    document.getElementById(
        "cerrar-formato-guardar"
    );

const guardarComoTxt =
    document.getElementById(
        "guardar-como-txt"
    );

const guardarComoDocx =
    document.getElementById(
        "guardar-como-docx"
    );


const modalDescargarEscrito =
    document.getElementById(
        "modal-descargar-escrito"
    );

const cerrarDescargarEscrito =
    document.getElementById(
        "cerrar-descargar-escrito"
    );

const descargarComoTxt =
    document.getElementById(
        "descargar-como-txt"
    );

const descargarComoDocx =
    document.getElementById(
        "descargar-como-docx"
    );

const headerFotoPerfil =
    document.getElementById(
        "header-foto-perfil"
    );

const headerFotoPlaceholder =
    document.getElementById(
        "header-foto-placeholder"
    );

const headerNombreAutor =
    document.getElementById(
        "header-nombre-autor"
    );

const modalElegirCuenta =
    document.getElementById(
        "modal-elegir-cuenta"
    );

const cerrarElegirCuenta =
    document.getElementById(
        "cerrar-elegir-cuenta"
    );

const listaCuentas =
    document.getElementById(
        "lista-cuentas"
    );

const btnNuevaCuenta =
    document.getElementById(
        "btn-nueva-cuenta"
    );

const btnAgregarCuenta =
    document.getElementById(
        "btn-agregar-cuenta"
    );

const btnEliminarCuenta =
    document.getElementById(
        "btn-eliminar-cuenta"
    );

const cuentaUsername =
    document.getElementById(
        "cuenta-username"
    );

const copiarPerfilPublico =
    document.getElementById(
        "copiar-perfil-publico"
    );

const modalPerfilPublico =
    document.getElementById(
        "modal-perfil-publico"
    );

const cerrarPerfilPublico =
    document.getElementById(
        "cerrar-perfil-publico"
    );

const perfilPublicoFoto =
    document.getElementById(
        "perfil-publico-foto"
    );

const perfilPublicoPlaceholder =
    document.getElementById(
        "perfil-publico-placeholder"
    );

const perfilPublicoNombre =
    document.getElementById(
        "perfil-publico-nombre"
    );

const perfilPublicoDescripcion =
    document.getElementById(
        "perfil-publico-descripcion"
    );

const perfilPublicoContador =
    document.getElementById(
        "perfil-publico-contador"
    );

const perfilPublicoEscritos =
    document.getElementById(
        "perfil-publico-escritos"
    );

const perfilPublicoVacio =
    document.getElementById(
        "perfil-publico-vacio"
    );

//variables globales

let escritoComentariosActual =
    null;

let escritoLikeLectura =
    null;

let escritosExplorar = [];

let modoEditor =
    "nuevo";


let escritoEditor =
    null;

let autorActualId = null;

let autorActualUsername = null;

// =================================
// BORRADOR DEL EDITOR
// =================================

const CLAVE_BORRADOR =
    "borradorNuevoEscrito";


let temporizadorBorrador =
    null;

//fin variables globales

const autorCompartido =
    document.querySelector(
        ".autor-compartido"
    );

const autorFoto =
    document.getElementById(
        "autor-foto"
    );

const autorFotoPlaceholder =
    document.getElementById(
        "autor-foto-placeholder"
    );

const autorNombre =
    document.getElementById(
        "autor-nombre"
    );

const autorDescripcion =
    document.getElementById(
        "autor-descripcion"
    );

const cuentaNombreAutor =
    document.getElementById(
        "cuenta-nombre-autor"
    );

const modalContrasena =
    document.getElementById(
        "modal-contrasena"
    );

const cerrarContrasena =
    document.getElementById(
        "cerrar-contrasena"
    );

const nuevaContrasena =
    document.getElementById(
        "nueva-contrasena"
    );

const confirmarContrasena =
    document.getElementById(
        "confirmar-contrasena"
    );

const mensajeContrasena =
    document.getElementById(
        "mensaje-contrasena"
    );

const btnGuardarContrasena =
    document.getElementById(
        "btn-guardar-contrasena"
    );

const btnMiCuenta =
    document.getElementById(
        "btn-mi-cuenta"
    );

const modalCuenta =
    document.getElementById(
        "modal-cuenta"
    );

const cerrarCuenta =
    document.getElementById(
        "cerrar-cuenta"
    );

const fotoPerfil =
    document.getElementById(
        "foto-perfil"
    );

const fotoPerfilPlaceholder =
    document.getElementById(
        "foto-perfil-placeholder"
    );

const inputFotoPerfil =
    document.getElementById(
        "input-foto-perfil"
    );

const cuentaCorreo =
    document.getElementById(
        "cuenta-correo"
    );

const cuentaFecha =
    document.getElementById(
        "cuenta-fecha"
    );

const cuentaCantidadEscritos =
    document.getElementById(
        "cuenta-cantidad-escritos"
    );

const cuentaDescripcion =
    document.getElementById(
        "cuenta-descripcion"
    );

const btnGuardarCuenta =
    document.getElementById(
        "btn-guardar-cuenta"
    );

const btnCambiarContrasena =
    document.getElementById(
        "btn-cambiar-contrasena"
    );

const dejarDeCompartir =
    document.getElementById(
        "dejar-de-compartir"
    );

const modalCompartir =
    document.getElementById(
        "modal-compartir"
    );

const cerrarCompartir =
    document.getElementById(
        "cerrar-compartir"
    );

const nombreCompartir =
    document.getElementById(
        "nombre-compartir"
    );

const opcionPublico =
    document.getElementById(
        "opcion-publico"
    );

const opcionPrivado =
    document.getElementById(
        "opcion-privado"
    );

const resultadoCompartir =
    document.getElementById(
        "resultado-compartir"
    );

const linkCompartir =
    document.getElementById(
        "link-compartir"
    );

const copiarLink =
    document.getElementById(
        "copiar-link"
    );

const estadoCompartir =
    document.getElementById(
        "estado-compartir"
    );



let escritoCompartiendo = null;

const pantallaLogin =
    document.getElementById(
        "pantalla-login"
    );

const pantallaPortafolio =
    document.getElementById(
        "pantalla-portafolio"
    );

const pantallaInicio =
    document.getElementById(
        "pantalla-inicio"
    );


const btnInicioLogin =
    document.getElementById(
        "btn-inicio-login"
    );


const btnInicioEscritorio =
    document.getElementById(
        "btn-inicio-escritorio"
    );


const btnInicioEmpezar =
    document.getElementById(
        "btn-inicio-empezar"
    );


const btnInicioExplorar =
    document.getElementById(
        "btn-inicio-explorar"
    );


const btnInicioVerExplorar =
    document.getElementById(
        "btn-inicio-ver-explorar"
    );



const btnSubir =
    document.getElementById(
        "btn-subir"
    );

const btnSubirVacio =
    document.getElementById(
        "btn-subir-vacio"
    );

const modalSubir =
    document.getElementById(
        "modal-subir"
    );

const cerrarModal =
    document.getElementById(
        "cerrar-modal"
    );

const archivo =
    document.getElementById(
        "archivo"
    );

const archivoSeleccionado =
    document.getElementById(
        "archivo-seleccionado"
    );

const descripcionSubida = document.getElementById("descripcion-subida");
const contadorDescripcionSubida = document.getElementById("contador-descripcion-subida");

const btnConfirmarSubida =
    document.getElementById(
        "btn-confirmar-subida"
    );

const listaEscritos =
    document.getElementById(
        "lista-escritos"
    );

const sinEscritos =
    document.getElementById(
        "sin-escritos"
    );

const contadorEscritos =
    document.getElementById(
        "contador-escritos"
    );

const buscador =
    document.getElementById(
        "buscador"
    );

const limpiarBuscador =
    document.getElementById(
        "limpiar-buscador"
    );

const modalLectura =
    document.getElementById(
        "modal-lectura"
    );

const cerrarLectura =
    document.getElementById(
        "cerrar-lectura"
    );

const tituloLectura =
    document.getElementById(
        "titulo-lectura"
    );

const fechaLectura =
    document.getElementById(
        "fecha-lectura"
    );


const seccionAutorLectura =
    document.getElementById(
        "seccion-autor-lectura"
    );

const descripcionLectura = document.getElementById("descripcion-lectura");

const textoLectura =
    document.getElementById(
        "texto-lectura"
    );

const modalEditar =
    document.getElementById(
        "modal-editar"
    );

const cerrarEditar =
    document.getElementById(
        "cerrar-editar"
    );

const tituloEditar =
    document.getElementById(
        "titulo-editar"
    );

const contenidoEditar =
    document.getElementById(
        "contenido-editar"
    );

const btnGuardarEdicion =
    document.getElementById(
        "btn-guardar-edicion"
    );


// =================================
// DATOS
// =================================

let escritos = [];

let archivoTemporal = null;

let escritoEditando = null;

let db;


// =================================
// ESTADO DEL ESCRITO COMPARTIDO
// =================================

let modoEscritoCompartido = false;

let shareIdPendiente = null;

let origenLecturaCompartida =
    "enlace";

//pop universal

// =================================
// POPUPS PERSONALIZADOS
// =================================

function prepararPopup(
    titulo,
    mensaje,
    icono
) {

    popupTitulo.textContent =
        titulo || "Aviso";


    popupMensaje.textContent =
        mensaje || "";


    popupIcono.textContent =
        icono || "ℹ️";


    popupCampoContenedor.style.display =
        "none";


    popupInput.value =
        "";


    popupAyudaInput.textContent =
        "";


    popupCancelar.style.display =
        "";


    popupConfirmar.disabled =
        false;


    modalPopup.style.display =
        "flex";

}


// =================================
// POPUP DE CONFIRMACIÓN
// =================================

function mostrarPopup(
    titulo,
    mensaje,
    textoConfirmar,
    textoCancelar,
    icono
) {

    return new Promise(
        function(resolve) {

            prepararPopup(
                titulo,
                mensaje,
                icono || "⚠️"
            );


            popupConfirmar.textContent =
                textoConfirmar ||
                "Confirmar";


            popupCancelar.textContent =
                textoCancelar ||
                "Cancelar";


            popupConfirmar.onclick =
                function() {

                    cerrarPopupPersonalizado();

                    resolve(
                        true
                    );

                };


            popupCancelar.onclick =
                function() {

                    cerrarPopupPersonalizado();

                    resolve(
                        false
                    );

                };


            modalPopup.onclick =
                function(event) {

                    if (
                        event.target ===
                        modalPopup
                    ) {

                        cerrarPopupPersonalizado();

                        resolve(
                            false
                        );

                    }

                };

        }
    );

}


// =================================
// POPUP INFORMATIVO
// =================================

function mostrarAviso(
    mensaje,
    titulo,
    icono,
    textoBoton
) {

    return new Promise(
        function(resolve) {

            prepararPopup(
                titulo || "Aviso",
                mensaje,
                icono || "ℹ️"
            );


            popupCancelar.style.display =
                "none";


            popupConfirmar.textContent =
                textoBoton ||
                "Entendido";


            popupConfirmar.onclick =
                function() {

                    cerrarPopupPersonalizado();

                    resolve(
                        true
                    );

                };


            modalPopup.onclick =
                function(event) {

                    if (
                        event.target ===
                        modalPopup
                    ) {

                        cerrarPopupPersonalizado();

                        resolve(
                            true
                        );

                    }

                };

        }
    );

}


// =================================
// POPUP CON CAMPO DE TEXTO
// =================================

function mostrarEntradaPopup(
    titulo,
    mensaje,
    placeholder,
    textoConfirmar,
    textoCancelar,
    icono,
    ayuda
) {

    return new Promise(
        function(resolve) {

            prepararPopup(
                titulo,
                mensaje,
                icono || "⚠️"
            );


            popupCampoContenedor.style.display =
                "block";


            popupInput.placeholder =
                placeholder || "";


            popupAyudaInput.textContent =
                ayuda || "";


            popupConfirmar.textContent =
                textoConfirmar ||
                "Confirmar";


            popupCancelar.textContent =
                textoCancelar ||
                "Cancelar";


            popupConfirmar.onclick =
                function() {

                    const valor =
                        popupInput.value;


                    cerrarPopupPersonalizado();


                    resolve(
                        valor
                    );

                };


            popupCancelar.onclick =
                function() {

                    cerrarPopupPersonalizado();

                    resolve(
                        null
                    );

                };


            modalPopup.onclick =
                function(event) {

                    if (
                        event.target ===
                        modalPopup
                    ) {

                        cerrarPopupPersonalizado();

                        resolve(
                            null
                        );

                    }

                };


            setTimeout(
                function() {

                    popupInput.focus();

                },
                80
            );

        }
    );

}


// =================================
// CERRAR POPUP UNIVERSAL
// =================================

function cerrarPopupPersonalizado() {

    modalPopup.style.display =
        "none";


    popupConfirmar.onclick =
        null;


    popupCancelar.onclick =
        null;


    modalPopup.onclick =
        null;


    popupInput.value =
        "";

}


//programar crear texto

// =================================
// EDITOR QUILL
// =================================

const editorQuill =
    new Quill(
        "#editor-nuevo-escrito",
        {

            theme:
                "snow",

            placeholder:
                "Empieza a escribir...",

            modules: {

                toolbar:
                    "#toolbar-nuevo-escrito",

                history: {

                    delay:
                        700,

                    maxStack:
                        100,

                    userOnly:
                        true

                }

            }

        }
    );

// =================================
// ABRIR NUEVO ESCRITO
// =================================

btnNuevoEscrito.addEventListener(
    "click",
    abrirNuevoEscrito
);


async function abrirNuevoEscrito() {

    btnEliminarBorrador.style.display =
        "";

    modoEditor =
    "nuevo";


    escritoEditor =
        null;


    btnGuardarNuevoEscrito.textContent =
        "Guardar escrito";

    const borradorGuardado =
        localStorage.getItem(
            CLAVE_BORRADOR
        );


    // =================================
    // HAY BORRADOR
    // =================================

    if (
        borradorGuardado
    ) {

        const borrador =
            JSON.parse(
                borradorGuardado
            );


        const recuperar =
            await mostrarPopup(
                "Recuperar borrador",
                "Tienes un borrador sin terminar. ¿Quieres recuperarlo o empezar un escrito nuevo?",
                "Recuperar",
                "Empezar de cero",
                "📝"
            );


        if (
            recuperar
        ) {

            nuevoEscritoTitulo.value =
                borrador.titulo || "";

            nuevoEscritoDescripcion.value = borrador.descripcion || "";
            actualizarContadorDescripcion();
            


            if (
                borrador.contenidoHTML
            ) {

                editorQuill.root.innerHTML =
                    borrador.contenidoHTML;

            }

            else {

                editorQuill.setText(
                    borrador.contenidoTexto || ""
                );

            }


            estadoEditor.textContent =
                "Borrador recuperado";


            actualizarContadoresEditor();


            modalNuevoEscrito.style.display =
                "flex";


            return;

        }


        else {

            localStorage.removeItem(
                CLAVE_BORRADOR
            );

        }

    }


    // =================================
    // EDITOR VACÍO
    // =================================

    nuevoEscritoTitulo.value =
        "";

    nuevoEscritoDescripcion.value = "";
    actualizarContadorDescripcion();

    ajustarAlturaTitulo();

    editorQuill.setText(
        ""
    );


    estadoEditor.textContent =
        "Sin guardar";


    actualizarContadoresEditor();


    modalNuevoEscrito.style.display =
        "flex";


    setTimeout(
        function() {

            ajustarAlturaTitulo();

            nuevoEscritoTitulo.focus();

        },
        100
    );

}


// =================================
// INTENTAR CERRAR EDITOR
// =================================

async function intentarCerrarNuevoEscrito() {

    const titulo =
        nuevoEscritoTitulo.value.trim();


    const texto =
        editorQuill
            .getText()
            .trim();

    const descripcion = nuevoEscritoDescripcion.value.trim();


    // =================================
    // MODO EDITAR
    // =================================

    if (
        modoEditor === "editar"
    ) {

        const confirmar =
            await mostrarPopup(
                "Salir de la edición",
                "Tienes cambios abiertos. ¿Quieres salir sin guardarlos?",
                "Salir",
                "Seguir editando",
                "✏️"
            );


        if (
            !confirmar
        ) {

            return;

        }


        cerrarEditorNuevoEscrito();


        modoEditor =
            "nuevo";


        escritoEditor =
            null;


        escritoEditando =
            null;


        return;

    }


    // =================================
    // MODO NUEVO - VACÍO
    // =================================

    if (
        titulo === "" &&
        texto === "" &&
        descripcion === ""
    ) {

        cerrarEditorNuevoEscrito();

        return;

    }


    // =================================
    // MODO NUEVO - CON CONTENIDO
    // =================================

    const confirmar =
        await mostrarPopup(
            "Cerrar editor",
            "Tu escrito se guardará como borrador para que puedas continuar después.",
            "Guardar y salir",
            "Seguir escribiendo",
            "📝"
        );


    if (
        !confirmar
    ) {

        return;

    }


    guardarBorradorEditor();


    cerrarEditorNuevoEscrito();

}

cerrarNuevoEscrito.addEventListener(
    "click",
    intentarCerrarNuevoEscrito
);


function cerrarEditorNuevoEscrito() {

    modalNuevoEscrito.style.display =
        "none";

}

// =================================
// CONTADORES DEL EDITOR
// =================================

editorQuill.on(
    "text-change",
    function() {

        estadoEditor.textContent =
            "Cambios sin guardar";


        actualizarContadoresEditor();

        programarAutoguardado();

    }
);


nuevoEscritoTitulo.addEventListener(
    "input",
    function() {

        ajustarAlturaTitulo();

        estadoEditor.textContent =
            "Cambios sin guardar";

        programarAutoguardado();

    }
);


nuevoEscritoDescripcion.addEventListener(
    "input",
    function() {
        actualizarContadorDescripcion();
        estadoEditor.textContent = "Cambios sin guardar";
        programarAutoguardado();
    }
);

function actualizarContadorDescripcion() {
    contadorDescripcion.textContent = nuevoEscritoDescripcion.value.length + " / 350";
}

function actualizarContadoresEditor() {

    const texto =
        editorQuill
            .getText()
            .trim();


    let palabras =
        0;


    if (
        texto !== ""
    ) {

        palabras =
            texto
                .split(
                    /\s+/
                )
                .length;

    }


    contadorPalabrasEditor.textContent =
        palabras === 1
            ? "1 palabra"
            : palabras +
              " palabras";


    contadorCaracteresEditor.textContent =
        texto.length === 1
            ? "1 carácter"
            : texto.length +
              " caracteres";

}

// =================================
// GUARDAR DESDE EL EDITOR
// =================================

btnGuardarNuevoEscrito.addEventListener(
    "click",
    async function() {

        const titulo =
            nuevoEscritoTitulo.value.trim();


        const contenido =
            editorQuill
                .getText()
                .trim();


        if (
            titulo === ""
        ) {

            mostrarAviso(
            "Escribe un título para el escrito."
        );


            nuevoEscritoTitulo.focus();


            return;

        }


        if (
            contenido === ""
        ) {

            mostrarAviso(
            "El escrito está vacío."
        );


            return;

        }


        // =================================
        // ESTAMOS EDITANDO
        // =================================

        if (
            modoEditor === "editar"
        ) {

            await guardarCambiosEditor();


            return;

        }


        // =================================
        // ES UN ESCRITO NUEVO
        // =================================

        modalFormatoGuardar.style.display =
            "flex";

    }
);

guardarComoTxt.addEventListener(
    "click",
    function() {

        guardarNuevoEscrito(
            "txt"
        );

    }
);


guardarComoDocx.addEventListener(
    "click",
    function() {

        guardarNuevoEscrito(
            "docx"
        );

    }
);

// =================================
// GUARDAR NUEVO ESCRITO
// =================================

async function guardarNuevoEscrito(
    tipo
) {

    const titulo =
        nuevoEscritoTitulo.value.trim();

    const descripcion = nuevoEscritoDescripcion.value.trim();


    const contenidoTexto =
        editorQuill
            .getText()
            .trim();


    const contenidoHTML =
        editorQuill.root.innerHTML;


    // =================================
    // USUARIO
    // =================================

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error ||
        !resultadoUsuario.data.user
    ) {

        mostrarAviso(
            "No se pudo identificar tu cuenta."
        );

        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;

        estadoEditor.textContent =
            "Guardando...";

        mostrarEstadoGuardando(
            tipo
        );


    // =================================
    // CREAR ARCHIVO
    // =================================

    let archivoGenerado;


    let nombreArchivo;


    if (
        tipo === "txt"
    ) {

        nombreArchivo =
            titulo +
            ".txt";


        archivoGenerado =
            crearArchivoTxt(
                contenidoTexto
            );

    }

    else {

        nombreArchivo =
            titulo +
            ".docx";


        archivoGenerado =
            await crearArchivoDocxBasico(
                titulo,
                contenidoHTML
            );

    }


    const nombreStorage =
        Date.now() +
        "_" +
        limpiarNombreArchivo(
            nombreArchivo
        );


    const rutaArchivo =
        usuarioActual.id +
        "/" +
        nombreStorage;


    // =================================
    // SUBIR A STORAGE
    // =================================

    const resultadoStorage =
        await clienteSupabase
            .storage
            .from("escritos")
            .upload(
                rutaArchivo,
                archivoGenerado,
                {

                    cacheControl:
                        "3600",

                    upsert:
                        false

                }
            );


    if (
        resultadoStorage.error
    ) {

mostrarAviso(
            "No se pudo guardar el archivo."
        );


        restaurarBotonesGuardar();

        return;

    }


    // =================================
    // POSICIÓN
    // =================================

    const nuevaPosicion =
        1;


    // =================================
    // INSERTAR REGISTRO
    // =================================

    const resultadoDB =
        await clienteSupabase
            .from("escritos")
            .insert({

                usuario_id:
                    usuarioActual.id,

                titulo:
                    titulo,

                descripcion:
                    descripcion,

                contenido:
                    contenidoTexto,

                contenido_html:
                    contenidoHTML,

                nombre_archivo:
                    nombreArchivo,

                tipo:
                    tipo,

                archivo_url:
                    rutaArchivo,

                privacidad:
                    "privado",

                posicion:
                    nuevaPosicion

            })
            .select()
            .single();


    if (
        resultadoDB.error
    ) {

await clienteSupabase
            .storage
            .from("escritos")
            .remove([
                rutaArchivo
            ]);


        mostrarAviso(
            "No se pudo guardar el escrito."
        );


        restaurarBotonesGuardar();

        return;

    }


    const guardado =
        resultadoDB.data;


    const escritoInterfaz = {

        id:
            guardado.id,

        usuario_id:
            guardado.usuario_id,

        titulo:
            guardado.titulo,

        descripcion:
            guardado.descripcion || "",

        contenido:
            guardado.contenido || "",

        contenidoHTML:
            guardado.contenido_html || "",

        nombreArchivo:
            guardado.nombre_archivo,

        tipo:
            guardado.tipo,

        fecha:
            guardado.fecha_creacion,

        posicion:
            guardado.posicion,

        shareId:
            guardado.share_id,

        privacidad:
            guardado.privacidad,

        archivoUrl:
            guardado.archivo_url

    };


    escritos.unshift(
        escritoInterfaz
    );


    await guardarOrdenEscritos();


    guardarEscritoDB(
        escritoInterfaz
    );


    mostrarEscritos();

    // =================================
    // BORRAR BORRADOR GUARDADO
    // =================================

    localStorage.removeItem(
        CLAVE_BORRADOR
    );


    estadoEditor.textContent =
        "✓ Guardado";


    modalFormatoGuardar.style.display =
        "none";


    restaurarBotonesGuardar();


    setTimeout(
        function() {

            cerrarEditorNuevoEscrito();

        },
        600
    );

}

function crearArchivoTxt(
    contenido
) {

    return new Blob(
        [
            contenido
        ],
        {
            type:
                "text/plain;charset=utf-8"
        }
    );

}

function limpiarNombreArchivo(
    nombre
) {

    return nombre
        .normalize(
            "NFD"
        )
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^a-zA-Z0-9._-]+/g,
            "_"
        )
        .replace(
            /_+/g,
            "_"
        )
        .replace(
            /^_+|_+$/g,
            ""
        );

}

//para el archivo docx

async function crearArchivoDocxBasico(
    titulo,
    contenidoHTML
) {

    const texto =
        editorQuill
            .getText()
            .trim();


    const lineas =
        texto.split(
            "\n"
        );


    const parrafos = [];


    parrafos.push(
        new docx.Paragraph({

            text:
                titulo,

            heading:
                docx.HeadingLevel.TITLE

        })
    );


    parrafos.push(
        new docx.Paragraph({

            text:
                ""

        })
    );


    lineas.forEach(
        function(linea) {

            parrafos.push(
                new docx.Paragraph({

                    text:
                        linea

                })
            );

        }
    );


    const documento =
        new docx.Document({

            sections: [

                {

                    children:
                        parrafos

                }

            ]

        });


    const blob =
        await docx.Packer.toBlob(
            documento
        );


    return blob;

}

btnDescargarEscrito.addEventListener(
    "click",
    function() {

        const contenido =
            editorQuill
                .getText()
                .trim();


        if (
            contenido === ""
        ) {

            mostrarAviso(
            "No hay nada para descargar."
        );

            return;

        }


        modalDescargarEscrito.style.display =
            "flex";

    }
);

descargarComoTxt.addEventListener(
    "click",
    function() {

        const titulo =
            obtenerTituloDescarga();


        const contenido =
            editorQuill
                .getText()
                .trim();


        const blob =
            crearArchivoTxt(
                contenido
            );


        descargarBlob(
            blob,
            titulo +
            ".txt"
        );


        modalDescargarEscrito.style.display =
            "none";

    }
);

descargarComoDocx.addEventListener(
    "click",
    async function() {

        const titulo =
            obtenerTituloDescarga();


        descargarComoDocx.disabled =
            true;


        descargarComoDocx.textContent =
            "Preparando...";


        const blob =
            await crearArchivoDocxBasico(
                titulo,
                editorQuill.root.innerHTML
            );


        descargarBlob(
            blob,
            titulo +
            ".docx"
        );


        descargarComoDocx.disabled =
            false;


        descargarComoDocx.innerHTML =
            `
                <span class="opcion-formato-icono">
                    📝
                </span>

                <div>
                    <strong>
                        Descargar DOCX
                    </strong>

                    <small>
                        Documento de Word.
                    </small>
                </div>
            `;


        modalDescargarEscrito.style.display =
            "none";

    }
);

function obtenerTituloDescarga() {

    const titulo =
        nuevoEscritoTitulo.value.trim();


    if (
        titulo === ""
    ) {

        return "Mi escrito";

    }


    return limpiarNombreArchivo(
        titulo
    );

}


function descargarBlob(
    blob,
    nombre
) {

    const url =
        URL.createObjectURL(
            blob
        );


    const enlace =
        document.createElement(
            "a"
        );


    enlace.href =
        url;


    enlace.download =
        nombre;


    document.body.appendChild(
        enlace
    );


    enlace.click();


    enlace.remove();


    setTimeout(
        function() {

            URL.revokeObjectURL(
                url
            );

        },
        1000
    );

}

cerrarFormatoGuardar.addEventListener(
    "click",
    function() {

        modalFormatoGuardar.style.display =
            "none";

    }
);


cerrarDescargarEscrito.addEventListener(
    "click",
    function() {

        modalDescargarEscrito.style.display =
            "none";

    }
);

//funcion para que los botones de guardar escrito hagan su trabajo interna y visualmente

function restaurarBotonesGuardar() {

    guardarComoTxt.disabled =
        false;


    guardarComoDocx.disabled =
        false;


    guardarComoTxt.innerHTML =
        `
            <span class="opcion-formato-icono">
                📄
            </span>

            <div>
                <strong>
                    TXT
                </strong>

                <small>
                    Archivo de texto simple.
                </small>
            </div>
        `;


    guardarComoDocx.innerHTML =
        `
            <span class="opcion-formato-icono">
                📝
            </span>

            <div>
                <strong>
                    DOCX
                </strong>

                <small>
                    Documento compatible con Word.
                </small>
            </div>
        `;

}

// =================================
// MOSTRAR ESTADO GUARDANDO
// =================================

function mostrarEstadoGuardando(
    tipo
) {

    guardarComoTxt.disabled =
        true;


    guardarComoDocx.disabled =
        true;


    if (
        tipo === "txt"
    ) {

        guardarComoTxt.innerHTML =
            `
                <span class="opcion-formato-icono">
                    ⏳
                </span>

                <div>
                    <strong>
                        Guardando...
                    </strong>

                    <small>
                        Espera un momento.
                    </small>
                </div>
            `;

    }


    if (
        tipo === "docx"
    ) {

        guardarComoDocx.innerHTML =
            `
                <span class="opcion-formato-icono">
                    ⏳
                </span>

                <div>
                    <strong>
                        Guardando...
                    </strong>

                    <small>
                        Espera un momento.
                    </small>
                </div>
            `;

    }

}

//borradores de texto

// =================================
// GUARDAR BORRADOR
// =================================

function guardarBorradorEditor() {

    if (
        modoEditor === "editar"
    ) {

        return;

    }

    const titulo =
        nuevoEscritoTitulo.value.trim();

    const descripcion = nuevoEscritoDescripcion.value.trim();


    const contenidoTexto =
        editorQuill
            .getText()
            .trim();


    const contenidoHTML =
        editorQuill.root.innerHTML;


    // =================================
    // NO GUARDAR SI ESTÁ VACÍO
    // =================================

    if (
        titulo === "" &&
        contenidoTexto === "" &&
        descripcion === ""
    ) {

        localStorage.removeItem(
            CLAVE_BORRADOR
        );


        estadoEditor.textContent =
            "Sin guardar";


        return;

    }


    const borrador = {

        titulo:
            titulo,

        descripcion:
            descripcion,

        contenidoTexto:
            contenidoTexto,

        contenidoHTML:
            contenidoHTML,

        fecha:
            new Date().toISOString()

    };


    localStorage.setItem(
        CLAVE_BORRADOR,
        JSON.stringify(
            borrador
        )
    );


    estadoEditor.textContent =
        "Borrador guardado";

}

// =================================
// PROGRAMAR AUTOGUARDADO
// =================================

function programarAutoguardado() {

    clearTimeout(
        temporizadorBorrador
    );


    temporizadorBorrador =
        setTimeout(
            function() {

                guardarBorradorEditor();

            },
            1500
        );

}

// =================================
// ELIMINAR BORRADOR
// =================================

btnEliminarBorrador.addEventListener(
    "click",
    eliminarBorradorActual
);


async function eliminarBorradorActual() {

    const titulo =
        nuevoEscritoTitulo.value.trim();


    const contenido =
        editorQuill
            .getText()
            .trim();


    // Si ya está completamente vacío
    if (
        titulo === "" &&
        contenido === ""
    ) {

        localStorage.removeItem(
            CLAVE_BORRADOR
        );


        estadoEditor.textContent =
            "Sin guardar";


        return;

    }


    const confirmar =
        await mostrarPopup(
            "Eliminar borrador",
            "¿Seguro que quieres eliminar este borrador? Esta acción no se puede deshacer.",
            "Eliminar",
            "Volver",
            "🗑"
        );


    if (
        !confirmar
    ) {

        return;

    }


    // =================================
    // BORRAR LOCALSTORAGE
    // =================================

    localStorage.removeItem(
        CLAVE_BORRADOR
    );


    // =================================
    // CANCELAR AUTOGUARDADO PENDIENTE
    // =================================

    clearTimeout(
        temporizadorBorrador
    );


    // =================================
    // LIMPIAR EDITOR
    // =================================

    nuevoEscritoTitulo.value =
        "";

    ajustarAlturaTitulo();


    editorQuill.setText(
        ""
    );


    actualizarContadoresEditor();


    estadoEditor.textContent =
        "Borrador eliminado";


    setTimeout(
        function() {

            estadoEditor.textContent =
                "Sin guardar";

        },
        1200
    );

}

// =================================
// REGENERAR ARCHIVO DEL ESCRITO
// =================================

async function regenerarArchivoEscrito(
    escrito,
    titulo,
    contenidoTexto,
    contenidoHTML
) {

    const tipo =
        escrito.tipo;


    const rutaArchivo =
        escrito.archivoUrl ||
        escrito.archivo_url;


    // =================================
    // NO HAY ARCHIVO EN STORAGE
    // =================================

    if (
        !rutaArchivo
    ) {

        return {

            correcto:
                true

        };

    }


    let archivoGenerado =
        null;


    // =================================
    // TXT
    // =================================

    if (
        tipo === "txt"
    ) {

        archivoGenerado =
            crearArchivoTxt(
                contenidoTexto
            );

    }


    // =================================
    // DOCX
    // =================================

    else if (
        tipo === "docx"
    ) {

        archivoGenerado =
            await crearArchivoDocxBasico(
                titulo,
                contenidoHTML
            );

    }


    // =================================
    // TIPO NO COMPATIBLE
    // =================================

    else {

return {

            correcto:
                false

        };

    }


    // =================================
    // REEMPLAZAR ARCHIVO EN STORAGE
    // =================================

    const resultadoStorage =
        await clienteSupabase
            .storage
            .from("escritos")
            .update(
                rutaArchivo,
                archivoGenerado,
                {

                    cacheControl:
                        "3600",

                    contentType:
                        tipo === "txt"
                            ? "text/plain;charset=utf-8"
                            : "application/vnd.openxmlformats-officedocument.wordprocessingml.document"

                }
            );


    if (
        resultadoStorage.error
    ) {

return {

            correcto:
                false,

            error:
                resultadoStorage.error

        };

    }


return {

        correcto:
            true

    };

}

// =================================
// GUARDAR CAMBIOS DESDE EDITOR
// =================================

async function guardarCambiosEditor() {

    if (
        !escritoEditor
    ) {

        return;

    }


    const titulo =
        nuevoEscritoTitulo.value.trim();

    const descripcion = nuevoEscritoDescripcion.value.trim();


    const contenidoTexto =
        editorQuill
            .getText()
            .trim();


    const contenidoHTML =
        editorQuill.root.innerHTML;


    // =================================
    // VALIDAR
    // =================================

    if (
        titulo === ""
    ) {

        mostrarAviso(
            "El escrito necesita un título."
        );


        return;

    }


    if (
        contenidoTexto === ""
    ) {

        mostrarAviso(
            "El escrito está vacío."
        );


        return;

    }


    // =================================
    // ESTADO VISUAL
    // =================================

    btnGuardarNuevoEscrito.disabled =
        true;


    btnGuardarNuevoEscrito.textContent =
        "Guardando...";


    estadoEditor.textContent =
        "Actualizando archivo...";


    // =================================
    // 1. ACTUALIZAR STORAGE
    // =================================

    const resultadoArchivo =
        await regenerarArchivoEscrito(

            escritoEditor,

            titulo,

            contenidoTexto,

            contenidoHTML

        );


    if (
        !resultadoArchivo.correcto
    ) {

        mostrarAviso(
            "No se pudo actualizar el archivo del escrito."
        );


        btnGuardarNuevoEscrito.disabled =
            false;


        btnGuardarNuevoEscrito.textContent =
            "Guardar cambios";


        estadoEditor.textContent =
            "No se pudieron guardar los cambios";


        return;

    }


    // =================================
    // 2. ACTUALIZAR BASE DE DATOS
    // =================================

    estadoEditor.textContent =
        "Guardando cambios...";


    const fechaActualizacion =
        new Date().toISOString();


    const resultado =
        await clienteSupabase
            .from("escritos")
            .update({

                titulo:
                    titulo,

                descripcion:
                    descripcion,

                contenido:
                    contenidoTexto,

                contenido_html:
                    contenidoHTML,

                fecha_actualizacion:
                    fechaActualizacion

            })
            .eq(
                "id",
                escritoEditor.id
            )
            .select()
            .single();


    // =================================
    // ERROR DE BASE DE DATOS
    // =================================

    if (
        resultado.error
    ) {

    console.error(
        "ERROR AL ACTUALIZAR ESCRITO:",
        resultado.error
);

    mostrarAviso(
        "El archivo fue actualizado, pero hubo un error al actualizar los datos del escrito."
        );


        btnGuardarNuevoEscrito.disabled =
            false;


        btnGuardarNuevoEscrito.textContent =
            "Guardar cambios";


        estadoEditor.textContent =
            "Error al guardar";


        return;

    }


    const actualizado =
        resultado.data;


    // =================================
    // 3. ACTUALIZAR OBJETO DEL EDITOR
    // =================================

    escritoEditor.titulo =
        actualizado.titulo;

    escritoEditor.descripcion = actualizado.descripcion || "";


    escritoEditor.contenido =
        actualizado.contenido;


    escritoEditor.contenidoHTML =
        actualizado.contenido_html ||
        "";


    escritoEditor.fecha =
        actualizado.fecha_actualizacion;


    // =================================
    // 4. ACTUALIZAR ARRAY PRINCIPAL
    // =================================

    const escritoLocal =
        escritos.find(
            function(item) {

                return (
                    item.id ===
                    escritoEditor.id
                );

            }
        );


    if (
        escritoLocal
    ) {

        escritoLocal.titulo =
            actualizado.titulo;

        escritoLocal.descripcion = actualizado.descripcion || "";


        escritoLocal.contenido =
            actualizado.contenido;


        escritoLocal.contenidoHTML =
            actualizado.contenido_html ||
            "";


        escritoLocal.fecha =
            actualizado.fecha_actualizacion;

    }


    // =================================
    // 5. INDEXEDDB
    // =================================

    guardarEscritoDB(
        escritoEditor
    );


    // =================================
    // 6. ACTUALIZAR INTERFAZ
    // =================================

    mostrarEscritos();


    // =================================
    // 7. LIMPIAR BORRADOR
    // =================================

    localStorage.removeItem(
        CLAVE_BORRADOR
    );


    clearTimeout(
        temporizadorBorrador
    );


    // =================================
    // ÉXITO
    // =================================

    estadoEditor.textContent =
        "✓ Cambios guardados";


    btnGuardarNuevoEscrito.textContent =
        "✓ Guardado";


    setTimeout(
        function() {

            btnGuardarNuevoEscrito.disabled =
                false;


            btnGuardarNuevoEscrito.textContent =
                "Guardar cambios";


            cerrarEditorNuevoEscrito();


            modoEditor =
                "nuevo";


            escritoEditor =
                null;


            escritoEditando =
                null;

        },
        700
    );

}



//fin crear texto




// =================================
// OBTENER ID DEL ESCRITO COMPARTIDO
// =================================

function obtenerShareIdDeURL() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    return parametros.get(
        "escrito"
    );

}


// =================================
// OBTENER ID DEL AUTOR DE LA URL
// =================================

function obtenerAutorIdDeURL() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    return parametros.get(
        "autor"
    );

}

async function mostrarInicioPublico() {

    pantallaInicio.style.display =
        "block";


    pantallaLogin.style.display =
        "none";


    pantallaPortafolio.style.display =
        "none";


    pantallaExplorar.style.display =
        "none";


    await actualizarCuentaInicio();

}


// =================================
// MOSTRAR SOLO EL LOGIN
// =================================

function mostrarLogin() {

    pantallaInicio.style.display =
        "none";

    pantallaLogin.style.display =
        "flex";

    pantallaPortafolio.style.display =
        "none";

    pantallaExplorar.style.display = 
        "none";

}


// =================================
// MOSTRAR PORTAFOLIO
// =================================

async function mostrarPortafolio() {

    pantallaInicio.style.display =
        "none";

    pantallaLogin.style.display =
        "none";

    pantallaPortafolio.style.display =
        "block";

    pantallaExplorar.style.display = 
        "none";

    await cargarEscritosSupabase();

    await cargarSaludoUsuario();

}

//mostrarExplorar

async function mostrarExplorar() {

    pantallaInicio.style.display =
        "none";


    pantallaLogin.style.display =
        "none";


    pantallaPortafolio.style.display =
        "none";


    pantallaExplorar.style.display =
        "block";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    await actualizarCuentaExplorar();

    await cargarExplorar();

}


// =================================
// INICIO BLOQUE CONFIGURACIÓN PERFIL
// =================================


// =================================
// ABRIR MI CUENTA
// =================================

btnMiCuenta.addEventListener(
    "click",
    abrirMiCuenta
);


async function abrirMiCuenta() {

    modalCuenta.style.display =
        "flex";


    cuentaCorreo.textContent =
        "Cargando...";

    cuentaFecha.textContent =
        "Cargando...";

    cuentaCantidadEscritos.textContent =
        "Cargando...";

    cuentaDescripcion.value =
        "";


    await cargarDatosCuenta();

}


// =================================
// CARGAR DATOS DE LA CUENTA
// =================================

async function cargarDatosCuenta() {

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error ||
        !resultadoUsuario.data.user
    ) {

return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    // =================================
    // CORREO
    // =================================

    cuentaCorreo.textContent =
        usuarioActual.email ||
        "Sin correo";


    // =================================
    // FECHA REAL DE CREACIÓN
    // =================================

    cuentaFecha.textContent =
        formatearFechaCuenta(
            usuarioActual.created_at
        );


    // =================================
    // CANTIDAD DE ESCRITOS
    // =================================

    const resultadoCantidad =
        await clienteSupabase
            .from("escritos")
            .select(
                "*",
                {
                    count:
                        "exact",

                    head:
                        true
                }
            )
            .eq(
                "usuario_id",
                usuarioActual.id
            );


    if (
        resultadoCantidad.error
    ) {

cuentaCantidadEscritos.textContent =
            "No disponible";

    }

    else {

        const cantidad =
            resultadoCantidad.count || 0;


        if (
            cantidad === 1
        ) {

            cuentaCantidadEscritos.textContent =
                "1 escrito";

        }

        else {

            cuentaCantidadEscritos.textContent =
                cantidad +
                " escritos";

        }

    }


    // =================================
    // PERFIL
    // =================================

    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select("*")
            .eq(
                "id",
                usuarioActual.id
            )
            .maybeSingle();


    if (
        resultadoPerfil.error
    ) {

return;

    }


    const perfil =
        resultadoPerfil.data;


    // =================================
    // COMPROBAR QUE EL PERFIL EXISTE
    // =================================

    if (
        !perfil
    ) {

cuentaNombreAutor.value =
            "";

        cuentaUsername.value =
            "";

        cuentaDescripcion.value =
            "";

        mostrarFotoPlaceholder();

        return;

    }


    // =================================
    // DATOS DEL PERFIL
    // =================================

    cuentaNombreAutor.value =
        perfil.nombre_autor || "";

    cuentaUsername.value =
        perfil.username || "";

    cuentaDescripcion.value =
        perfil.descripcion || "";


    // =================================
    // FOTO
    // =================================

    if (
        perfil.foto_url
    ) {

        await mostrarFotoPerfil(
            perfil.foto_url
        );

    }

    else {

        mostrarFotoPlaceholder();

    }

}


// =================================
// MOSTRAR FOTO DE PERFIL
// =================================

async function mostrarFotoPerfil(
    rutaFoto
) {

    const resultado =
        await clienteSupabase
            .storage
            .from("perfiles")
            .createSignedUrl(
                rutaFoto,
                3600
            );


    if (
        resultado.error
    ) {

mostrarFotoPlaceholder();

        return;

    }


    fotoPerfil.src =
        resultado.data.signedUrl;


    fotoPerfil.style.display =
        "block";


    fotoPerfilPlaceholder.style.display =
        "none";

}


// =================================
// MOSTRAR AVATAR PREDETERMINADO
// =================================

function mostrarFotoPlaceholder() {

    fotoPerfil.removeAttribute(
        "src"
    );


    fotoPerfil.style.display =
        "none";


    fotoPerfilPlaceholder.style.display =
        "flex";

}


// =================================
// GUARDAR DATOS DE CUENTA
// =================================

btnGuardarCuenta.addEventListener(
    "click",
    guardarDatosCuenta
);


async function guardarDatosCuenta() {

    // =================================
    // OBTENER USUARIO
    // =================================

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error
    ) {

mostrarAviso(
            "No se pudo obtener tu usuario."
        );


        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    if (
        !usuarioActual
    ) {

        mostrarAviso(
            "Debes iniciar sesión."
        );

        return;

    }


    // =================================
    // OBTENER DATOS
    // =================================

    const nombreAutor =
        cuentaNombreAutor.value.trim();


    const descripcion =
        cuentaDescripcion.value.trim();


    let username =
        limpiarUsername(
            cuentaUsername.value
        );


    // =================================
    // VALIDAR USERNAME
    // =================================

    if (
        username.length < 3
    ) {

        mostrarAviso(
            "El nombre de usuario debe tener al menos 3 caracteres."
        );

        return;

    }


    // Mostrar username ya limpio

    cuentaUsername.value =
        username;


    // =================================
    // GUARDANDO...
    // =================================

    btnGuardarCuenta.textContent =
        "Guardando...";


    // =================================
    // ACTUALIZAR PERFIL
    // =================================

    const resultado =
        await clienteSupabase
            .from("perfiles")
            .update({

                username:
                    username,

                nombre_autor:
                    nombreAutor,

                descripcion:
                    descripcion,

                fecha_actualizacion:
                    new Date().toISOString()

            })
            .eq(
                "id",
                usuarioActual.id
            );


    // =================================
    // ERROR
    // =================================

    if (
        resultado.error
    ) {

if (
            resultado.error.code ===
            "23505"
        ) {

            mostrarAviso(
            "Ese nombre de usuario ya está siendo utilizado."
        );

        }

        else {

            mostrarAviso(
            "No se pudieron guardar los cambios."
        );

        }


        btnGuardarCuenta.textContent =
            "Guardar cambios";


        return;

    }


    // =================================
    // GUARDADO CORRECTAMENTE
    // =================================

    btnGuardarCuenta.textContent =
        "✓ Cambios guardados";


    setTimeout(
        function() {

            btnGuardarCuenta.textContent =
                "Guardar cambios";

        },
        1500
    );

}


// =================================
// CAMBIAR FOTO DE PERFIL
// =================================

inputFotoPerfil.addEventListener(
    "change",
    subirFotoPerfil
);


async function subirFotoPerfil() {

    if (
        inputFotoPerfil.files.length === 0
    ) {

        return;

    }


    const nuevaFoto =
        inputFotoPerfil.files[0];


    // =================================
    // VALIDAR TIPO
    // =================================

    const tiposPermitidos = [

        "image/jpeg",
        "image/png",
        "image/webp"

    ];


    if (
        !tiposPermitidos.includes(
            nuevaFoto.type
        )
    ) {

        mostrarAviso(
            "Solo puedes usar imágenes JPG, PNG o WEBP."
        );


        inputFotoPerfil.value =
            "";


        return;

    }


    // =================================
    // VALIDAR TAMAÑO
    // =================================
    // Máximo 5 MB

    if (
        nuevaFoto.size >
        5 * 1024 * 1024
    ) {

        mostrarAviso(
            "La imagen no puede pesar más de 5 MB."
        );


        inputFotoPerfil.value =
            "";


        return;

    }


    // =================================
    // OBTENER USUARIO
    // =================================

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error ||
        !resultadoUsuario.data.user
    ) {

        mostrarAviso(
            "No se pudo identificar tu cuenta."
        );

        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    // =================================
    // RUTA FIJA
    // =================================

    const rutaFoto =
        usuarioActual.id +
        "/foto-perfil";


    // =================================
    // SUBIR / REEMPLAZAR
    // =================================

    const resultadoStorage =
        await clienteSupabase
            .storage
            .from("perfiles")
            .upload(
                rutaFoto,
                nuevaFoto,
                {

                    upsert:
                        true,

                    contentType:
                        nuevaFoto.type

                }
            );


    if (
        resultadoStorage.error
    ) {

mostrarAviso(
            "No se pudo subir la foto."
        );


        return;

    }


    // =================================
    // GUARDAR RUTA EN PERFILES
    // =================================

    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .update({

                foto_url:
                    rutaFoto,

                fecha_actualizacion:
                    new Date().toISOString()

            })
            .eq(
                "id",
                usuarioActual.id
            );


    if (
        resultadoPerfil.error
    ) {

mostrarAviso(
            "La foto se subió, pero no pudo vincularse al perfil."
        );


        return;

    }


    // =================================
    // MOSTRAR FOTO NUEVA
    // =================================

    await mostrarFotoPerfil(
        rutaFoto
    );


    inputFotoPerfil.value =
        "";


}


// =================================
// CERRAR MI CUENTA
// =================================

cerrarCuenta.addEventListener(
    "click",
    cerrarModalCuenta
);


function cerrarModalCuenta() {

    modalCuenta.style.display =
        "none";

}


// =================================
// FORMATEAR FECHA DE CUENTA
// =================================

function formatearFechaCuenta(
    fecha
) {

    return new Date(
        fecha
    ).toLocaleDateString(
        "es-DO",
        {

            day:
                "2-digit",

            month:
                "long",

            year:
                "numeric"

        }
    );

}


// =================================
// ABRIR CAMBIAR CONTRASEÑA
// =================================

btnCambiarContrasena.addEventListener(
    "click",
    function() {

        nuevaContrasena.value =
            "";

        confirmarContrasena.value =
            "";

        mensajeContrasena.textContent =
            "";

        modalContrasena.style.display =
            "flex";

    }
);


// =================================
// GUARDAR NUEVA CONTRASEÑA
// =================================

btnGuardarContrasena.addEventListener(
    "click",
    cambiarContrasenaUsuario
);


async function cambiarContrasenaUsuario() {

    const password =
        nuevaContrasena.value;


    const confirmacion =
        confirmarContrasena.value;


    // =================================
    // CAMPOS VACÍOS
    // =================================

    if (
        password === "" ||
        confirmacion === ""
    ) {

        mensajeContrasena.textContent =
            "Completa ambos campos.";

        return;

    }


    // =================================
    // CONTRASEÑAS DIFERENTES
    // =================================

    if (
        password !==
        confirmacion
    ) {

        mensajeContrasena.textContent =
            "Las contraseñas no coinciden.";

        return;

    }


    // =================================
    // LONGITUD
    // =================================

    if (
        password.length < 6
    ) {

        mensajeContrasena.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        return;

    }


    mensajeContrasena.textContent =
        "Cambiando contraseña...";


    // =================================
    // ACTUALIZAR CON SUPABASE AUTH
    // =================================

    const resultado =
        await clienteSupabase.auth.updateUser({

            password:
                password

        });


    if (
        resultado.error
    ) {

mensajeContrasena.textContent =
            "No se pudo cambiar la contraseña.";

        return;

    }


    // =================================
    // ÉXITO
    // =================================

    mensajeContrasena.textContent =
        "✓ Contraseña actualizada correctamente.";


    nuevaContrasena.value =
        "";

    confirmarContrasena.value =
        "";


    setTimeout(
        function() {

            cerrarModalContrasena();

        },
        1200
    );

}


// =================================
// CERRAR CAMBIAR CONTRASEÑA
// =================================

cerrarContrasena.addEventListener(
    "click",
    cerrarModalContrasena
);


function cerrarModalContrasena() {

    modalContrasena.style.display =
        "none";


    nuevaContrasena.value =
        "";


    confirmarContrasena.value =
        "";


    mensajeContrasena.textContent =
        "";

}


// =================================
// CARGAR AUTOR DEL ESCRITO
// =================================

async function cargarAutorEscrito(
    usuarioId
) {

    autorActualId =
        usuarioId;


    autorCompartido.style.display =
        "none";


    const resultado =
        await clienteSupabase
            .from("perfiles")
            .select(
                "username, nombre_autor, descripcion, foto_url"
            )
            .eq(
                "id",
                usuarioId
            )
            .maybeSingle();


    if (
        resultado.error ||
        !resultado.data
    ) {

return;

    }


    const perfil =
        resultado.data;


    autorNombre.textContent =
        perfil.nombre_autor ||
        "Autor";


    autorDescripcion.textContent =
        perfil.descripcion || "";


    autorFoto.style.display =
        "none";


    autorFotoPlaceholder.style.display =
        "flex";


    // =================================
    // FOTO
    // =================================

    if (
        perfil.foto_url
    ) {

        const resultadoFoto =
            await clienteSupabase
                .storage
                .from("perfiles")
                .createSignedUrl(
                    perfil.foto_url,
                    3600
                );


        if (
            !resultadoFoto.error
        ) {

            autorFoto.src =
                resultadoFoto.data.signedUrl;


            autorFoto.style.display =
                "block";


            autorFotoPlaceholder.style.display =
                "none";

        }

    }


    autorCompartido.style.display =
        "flex";

}


// =================================
// ABRIR PERFIL DESDE EL AUTOR
// =================================

autorCompartido.addEventListener(
    "click",
    function() {

        if (
            autorActualId
        ) {

            abrirPerfilPublico(
                autorActualId
            );

        }

    }
);


// =================================
// ABRIR PERFIL PÚBLICO
// =================================

async function abrirPerfilPublico(
    usuarioId
) {

    modalPerfilPublico.style.display =
        "flex";


    perfilPublicoNombre.textContent =
        "Cargando...";


    perfilPublicoDescripcion.textContent =
        "";


    perfilPublicoContador.textContent =
        "";


    perfilPublicoEscritos.innerHTML =
        "";


    perfilPublicoVacio.style.display =
        "none";


    // =================================
    // PERFIL DEL AUTOR
    // =================================

    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select(
                "username, nombre_autor, descripcion, foto_url"
            )
            .eq(
                "id",
                usuarioId
            )
            .maybeSingle();


    if (
        resultadoPerfil.error ||
        !resultadoPerfil.data
    ) {

perfilPublicoNombre.textContent =
            "Autor no disponible";


        return;

    }


    const perfil =
        resultadoPerfil.data;


    autorActualId =
        usuarioId;


    autorActualUsername =
        perfil.username;


    // =================================
    // CAMBIAR URL AL USERNAME
    // =================================

    if (
        perfil.username
    ) {

        const url =
            new URL(
                window.location.href
            );


        url.searchParams.delete(
            "escrito"
        );


        url.searchParams.set(
            "autor",
            perfil.username
        );


        window.history.pushState(
            {},
            "",
            url.pathname +
            url.search
        );

    }


    // =================================
    // INFORMACIÓN
    // =================================

    perfilPublicoNombre.textContent =
        perfil.nombre_autor ||
        perfil.username ||
        "Autor";


    perfilPublicoDescripcion.textContent =
        perfil.descripcion ||
        "Este autor todavía no ha escrito una descripción.";


    // =================================
    // FOTO
    // =================================

    perfilPublicoFoto.style.display =
        "none";


    perfilPublicoPlaceholder.style.display =
        "flex";


    if (
        perfil.foto_url
    ) {

        const resultadoFoto =
            await clienteSupabase
                .storage
                .from("perfiles")
                .createSignedUrl(
                    perfil.foto_url,
                    3600
                );


        if (
            !resultadoFoto.error
        ) {

            perfilPublicoFoto.src =
                resultadoFoto.data.signedUrl;


            perfilPublicoFoto.style.display =
                "block";


            perfilPublicoPlaceholder.style.display =
                "none";

        }

    }


    // =================================
    // ESCRITOS PÚBLICOS
    // =================================

    const resultadoEscritos =
        await clienteSupabase
            .from("escritos")
            .select(
                "id, titulo, fecha_creacion, share_id, tipo, descripcion"
            )
            .eq(
                "usuario_id",
                usuarioId
            )
            .eq(
                "privacidad",
                "publico"
            )
            .not(
                "share_id",
                "is",
                null
            )
            .order(
                "fecha_creacion",
                {
                    ascending:
                        false
                }
            );


    if (
        resultadoEscritos.error
    ) {

return;

    }


    const escritosPublicos =
        resultadoEscritos.data;


    // =================================
    // DESCRIPCIONES PARA EL PERFIL
    // =================================

    if (
        escritosPublicos.length > 0
    ) {

        const idsEscritos =
            escritosPublicos.map(
                function(escrito) {

                    return escrito.id;

                }
            );


        const resultadoDescripciones =
            await clienteSupabase
                .from("escritos")
                .select(
                    "id, descripcion"
                )
                .in(
                    "id",
                    idsEscritos
                );


        if (
            !resultadoDescripciones.error &&
            resultadoDescripciones.data
        ) {

            const descripcionesPorId =
                new Map(
                    resultadoDescripciones.data.map(
                        function(escrito) {

                            return [
                                escrito.id,
                                escrito.descripcion || ""
                            ];

                        }
                    )
                );


            escritosPublicos.forEach(
                function(escrito) {

                    escrito.descripcion =
                        descripcionesPorId.get(
                            escrito.id
                        ) || "";

                }
            );

        }

    }


    // =================================
    // CONTADOR
    // =================================

    if (
        escritosPublicos.length === 1
    ) {

        perfilPublicoContador.textContent =
            "1 escrito público";

    }

    else {

        perfilPublicoContador.textContent =
            escritosPublicos.length +
            " escritos públicos";

    }


    // =================================
    // SIN ESCRITOS
    // =================================

    if (
        escritosPublicos.length === 0
    ) {

        perfilPublicoVacio.style.display =
            "block";


        return;

    }


    // =================================
    // CREAR TARJETAS
    // =================================

    escritosPublicos.forEach(
        function(escrito) {

            crearTarjetaEscritoPublico(
                escrito
            );

        }
    );

}


// =================================
// TARJETA DE ESCRITO PÚBLICO
// =================================

function crearTarjetaEscritoPublico(
    escrito
) {

    const tarjeta =
        document.createElement(
            "article"
        );


    tarjeta.classList.add(
        "tarjeta-escrito-publico"
    );


    const contenidoTarjeta =
        document.createElement(
            "div"
        );


    contenidoTarjeta.classList.add(
        "contenido-tarjeta-publica"
    );


    const titulo =
        document.createElement(
            "h3"
        );


    titulo.classList.add(
        "titulo-tarjeta-publica"
    );


    titulo.textContent =
        escrito.titulo;


    const descripcion =
        document.createElement(
            "p"
        );


    descripcion.classList.add(
        "descripcion-tarjeta-publica"
    );


    descripcion.textContent =
        escrito.descripcion ||
        "Este escrito todavía no tiene descripción.";


    const fecha =
        document.createElement(
            "p"
        );


    fecha.classList.add(
        "fecha-tarjeta-publica"
    );


    fecha.textContent =
        formatearFecha(
            escrito.fecha_creacion
        );


    contenidoTarjeta.appendChild(
        titulo
    );


    contenidoTarjeta.appendChild(
        descripcion
    );


    tarjeta.appendChild(
        contenidoTarjeta
    );


    tarjeta.appendChild(
        fecha
    );


    tarjeta.addEventListener(
        "click",
        function() {

            abrirEscritoDesdePerfil(
                escrito.share_id
            );

        }
    );


    perfilPublicoEscritos.appendChild(
        tarjeta
    );

}


// =================================
// ABRIR ESCRITO DESDE PERFIL
// =================================

async function abrirEscritoDesdePerfil(
    shareId
) {

    modalPerfilPublico.style.display =
        "none";


    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "autor"
    );


    url.searchParams.set(
        "escrito",
        shareId
    );


    window.history.pushState(
        {},
        "",
        url.pathname +
        url.search
    );


    modoEscritoCompartido =
        true;


    shareIdPendiente =
        shareId;

    origenLecturaCompartida =
        "perfil";

    await comprobarEscritoCompartido();

}


// =================================
// CERRAR PERFIL PÚBLICO
// =================================

cerrarPerfilPublico.addEventListener(
    "click",
    cerrarModalPerfilPublico
);


function cerrarModalPerfilPublico() {

    modalPerfilPublico.style.display =
        "none";


    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "autor"
    );


    window.history.replaceState(
        {},
        "",
        url.pathname +
        url.search
    );

}


// =================================
// COPIAR PERFIL PÚBLICO
// =================================

copiarPerfilPublico.addEventListener(
    "click",
    function() {

        if (
            !autorActualUsername
        ) {

return;

        }


        const enlace =
            window.location.origin +
            window.location.pathname +
            "?autor=" +
            encodeURIComponent(
                autorActualUsername
            );


        navigator.clipboard
            .writeText(
                enlace
            )
            .then(
                function() {

                    copiarPerfilPublico.textContent =
                        "✓ Copiado";


                    setTimeout(
                        function() {

                            copiarPerfilPublico.textContent =
                                "🔗 Copiar perfil";

                        },
                        1500
                    );

                }
            )
            .catch(
                function(error) {

const campoTemporal =
                        document.createElement(
                            "textarea"
                        );


                    campoTemporal.value =
                        enlace;


                    document.body.appendChild(
                        campoTemporal
                    );


                    campoTemporal.select();


                    document.execCommand(
                        "copy"
                    );


                    campoTemporal.remove();


                    copiarPerfilPublico.textContent =
                        "✓ Copiado";


                    setTimeout(
                        function() {

                            copiarPerfilPublico.textContent =
                                "🔗 Copiar perfil";

                        },
                        1500
                    );

                }
            );

    }
);


// =================================
// LIMPIAR USERNAME
// =================================

function limpiarUsername(
    texto
) {

    return texto
        .toLowerCase()
        .trim()
        .normalize(
            "NFD"
        )
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^a-z0-9-]/g,
            "-"
        )
        .replace(
            /-+/g,
            "-"
        )
        .replace(
            /^-|-$/g,
            ""
        );

}


// =================================
// FIN PERFIL
// =================================

// bienvenida a la pagina personalizdo

async function cargarSaludoUsuario() {

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error ||
        !resultadoUsuario.data.user
    ) {

        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select(
                "nombre_autor, username, foto_url"
            )
            .eq(
                "id",
                usuarioActual.id
            )
            .maybeSingle();


    if (
        resultadoPerfil.error ||
        !resultadoPerfil.data
    ) {

        headerNombreAutor.textContent =
            "Autor";

        return;

    }


    const perfil =
        resultadoPerfil.data;


    // =================================
    // NOMBRE
    // =================================

    if (
        perfil.nombre_autor
    ) {

        headerNombreAutor.textContent =
            perfil.nombre_autor;

    }

    else if (
        perfil.username
    ) {

        headerNombreAutor.textContent =
            perfil.username;

    }

    else {

        headerNombreAutor.textContent =
            "Autor";

    }


    // =================================
    // FOTO
    // =================================

    headerFotoPerfil.style.display =
        "none";


    headerFotoPlaceholder.style.display =
        "flex";


    if (
        perfil.foto_url
    ) {

        const resultadoFoto =
            await clienteSupabase
                .storage
                .from("perfiles")
                .createSignedUrl(
                    perfil.foto_url,
                    3600
                );


        if (
            !resultadoFoto.error
        ) {

            headerFotoPerfil.src =
                resultadoFoto.data.signedUrl;


            headerFotoPerfil.style.display =
                "block";


            headerFotoPlaceholder.style.display =
                "none";

        }

    }

}

// =================================
// AGREGAR OTRA CUENTA
// =================================

btnAgregarCuenta.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.signOut();


        if (
            resultado.error
        ) {

            console.log(
                "Error al preparar cambio de cuenta:",
                resultado.error
            );


            return;

        }


        modalCuenta.style.display =
            "none";


        mostrarLogin();

    }
);


// =================================
// ELIMINAR CUENTA
// =================================

btnEliminarCuenta.addEventListener(
    "click",
    eliminarCuentaUsuario
);


async function eliminarCuentaUsuario() {

    // =================================
    // OBTENER USUARIO ANTES DE BORRAR
    // =================================

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error ||
        !resultadoUsuario.data.user
    ) {

        mostrarAviso(
            "No se pudo identificar tu cuenta."
        );

        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    const usuarioId =
        usuarioActual.id;


    // =================================
    // CONFIRMACIÓN
    // =================================

    const confirmacion =
        await mostrarEntradaPopup(
            "Eliminar cuenta",
            "Esta acción eliminará permanentemente tu cuenta, tus escritos, tu perfil y todos tus archivos.",
            "Escribe ELIMINAR",
            "Eliminar cuenta",
            "Cancelar",
            "⚠️",
            "Para confirmar, escribe ELIMINAR exactamente."
        );


    if (
        confirmacion === null
    ) {

        return;

    }


    if (
        confirmacion !== "ELIMINAR"
    ) {

        mostrarAviso(
            "Debes escribir ELIMINAR exactamente para borrar la cuenta.",
            "Confirmación incorrecta",
            "⚠️"
        );


        return;

    }


    btnEliminarCuenta.textContent =
        "Eliminando cuenta...";


    btnEliminarCuenta.disabled =
        true;


    // =================================
    // LLAMAR EDGE FUNCTION
    // =================================

    const resultado =
        await clienteSupabase
            .functions
            .invoke(
                "eliminar-cuenta"
            );


if (
        resultado.error
    ) {

mostrarAviso(
            "No se pudo eliminar la cuenta. Revisa la consola."
        );


        btnEliminarCuenta.textContent =
            "🗑 Eliminar cuenta";


        btnEliminarCuenta.disabled =
            false;


        return;

}


    // =================================
    // QUITAR DEL SELECTOR DE CUENTAS
    // =================================

    let cuentas =
        JSON.parse(
            localStorage.getItem(
                "cuentasRecordadas"
            )
        ) || [];


    cuentas =
        cuentas.filter(
            function(cuenta) {

                return (
                    cuenta.id !==
                    usuarioId
                );

            }
        );


    localStorage.setItem(
        "cuentasRecordadas",
        JSON.stringify(
            cuentas
        )
    );


    // =================================
    // LIMPIAR INDEXEDDB
    // =================================

    if (
        db
    ) {

        const transaccion =
            db.transaction(
                ["escritos"],
                "readwrite"
            );


        const almacen =
            transaccion.objectStore(
                "escritos"
            );


        almacen.clear();

    }


    // =================================
    // LIMPIAR SESIÓN LOCAL
    // =================================

    await clienteSupabase.auth.signOut();


    escritos =
        [];


    // =================================
    // VOLVER A LA PÁGINA NORMAL
    // =================================

    window.location.href =
        window.location.pathname;

}


// =================================
// RECORDAR CUENTA
// =================================

function recordarCuenta(
    id,
    email,
    nombre,
    fotoUrl
) {

    let cuentas =
        JSON.parse(
            localStorage.getItem(
                "cuentasRecordadas"
            )
        ) || [];


    const existe =
        cuentas.find(
            function(cuenta) {

                return (
                    cuenta.id === id
                );

            }
        );


    if (
        existe
    ) {

        existe.email =
            email;

        existe.nombre =
            nombre || email;

        existe.fotoUrl =
            fotoUrl || null;

    }

    else {

        cuentas.push({

            id:
                id,

            email:
                email,

            nombre:
                nombre || email,

            fotoUrl:
                fotoUrl || null

        });

    }


    localStorage.setItem(
        "cuentasRecordadas",
        JSON.stringify(
            cuentas
        )
    );

}


// =================================
// ABRIR SELECTOR DE CUENTAS
// =================================

async function abrirSelectorCuentas() {

    listaCuentas.innerHTML =
        "";


    const cuentas =
        JSON.parse(
            localStorage.getItem(
                "cuentasRecordadas"
            )
        ) || [];


    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    let usuarioActualId =
        null;


    if (
        sesion
    ) {

        usuarioActualId =
            sesion.user.id;

    }


    // =================================
    // RECORRER CUENTAS
    // =================================

    for (
        let i = 0;
        i < cuentas.length;
        i++
    ) {

        const cuenta =
            cuentas[i];


        const tarjeta =
            document.createElement(
                "button"
            );


        tarjeta.type =
            "button";


        tarjeta.classList.add(
            "cuenta-guardada"
        );


        // =================================
        // ICONO / FOTO
        // =================================

        const icono =
            document.createElement(
                "div"
            );


        icono.classList.add(
            "cuenta-guardada-icono"
        );


        if (
            cuenta.fotoUrl
        ) {

            const resultadoFoto =
                await clienteSupabase
                    .storage
                    .from("perfiles")
                    .createSignedUrl(
                        cuenta.fotoUrl,
                        3600
                    );


            if (
                !resultadoFoto.error &&
                resultadoFoto.data
            ) {

                const imagen =
                    document.createElement(
                        "img"
                    );


                imagen.classList.add(
                    "cuenta-guardada-foto"
                );


                imagen.src =
                    resultadoFoto.data.signedUrl;


                imagen.alt =
                    "Foto de perfil";


                icono.appendChild(
                    imagen
                );

            }

            else {

                icono.textContent =
                    "👤";

            }

        }

        else {

            icono.textContent =
                "👤";

        }


        // =================================
        // INFORMACIÓN
        // =================================

        const info =
            document.createElement(
                "div"
            );


        info.classList.add(
            "cuenta-guardada-info"
        );


        const nombre =
            document.createElement(
                "strong"
            );


        nombre.classList.add(
            "cuenta-guardada-nombre"
        );


        nombre.textContent =
            cuenta.nombre;


        const correo =
            document.createElement(
                "span"
            );


        correo.classList.add(
            "cuenta-guardada-correo"
        );


        correo.textContent =
            cuenta.email;


        info.appendChild(
            nombre
        );


        info.appendChild(
            correo
        );


        tarjeta.appendChild(
            icono
        );


        tarjeta.appendChild(
            info
        );


        // =================================
        // CUENTA ACTUAL
        // =================================

        if (
            cuenta.id ===
            usuarioActualId
        ) {

            const actual =
                document.createElement(
                    "span"
                );


            actual.classList.add(
                "cuenta-actual-texto"
            );


            actual.textContent =
                "Actual";


            tarjeta.appendChild(
                actual
            );

        }


        // =================================
        // ELEGIR CUENTA
        // =================================

        tarjeta.addEventListener(
            "click",
            function() {

                elegirCuenta(
                    cuenta
                );

            }
        );


        listaCuentas.appendChild(
            tarjeta
        );

    }


    modalElegirCuenta.style.display =
        "flex";

}


// =================================
// ELEGIR CUENTA
// =================================

async function elegirCuenta(
    cuenta
) {

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    // =================================
    // YA ESTÁ USANDO ESA CUENTA
    // =================================

    if (
        sesion &&
        sesion.user.id === cuenta.id
    ) {

        cerrarModalElegirCuenta();

        return;

    }


    // =================================
    // CERRAR SESIÓN ACTUAL
    // =================================

    

    const resultadoCerrar =
        await clienteSupabase.auth.signOut();


    if (
        resultadoCerrar.error
    ) {

return;

    }


    cerrarModalElegirCuenta();


    cerrarModalCuenta();


    // =================================
    // MOSTRAR LOGIN
    // =================================

    mostrarLogin();


    formRegistro.style.display =
        "none";


    formLogin.style.display =
        "block";


    registroLogin.style.display =
        "block";


    usuario.value =
        cuenta.email;


    contrasena.value =
        "";


    contrasena.focus();


    mensajeLogin.textContent =
        "Escribe la contraseña para entrar a esta cuenta.";

}


// =================================
// AGREGAR NUEVA CUENTA DESDE SELECTOR
// =================================

btnNuevaCuenta.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.signOut();


        if (
            resultado.error
        ) {

return;

        }


        cerrarModalElegirCuenta();


        cerrarModalCuenta();


        mostrarLogin();


        usuario.value =
            "";


        contrasena.value =
            "";


        mensajeLogin.textContent =
            "";


        formLogin.style.display =
            "block";


        registroLogin.style.display =
            "block";


        formRegistro.style.display =
            "none";

    }
);


// =================================
// CERRAR SELECTOR DE CUENTAS
// =================================

cerrarElegirCuenta.addEventListener(
    "click",
    cerrarModalElegirCuenta
);


function cerrarModalElegirCuenta() {

    modalElegirCuenta.style.display =
        "none";

}


// =================================
// COMPROBAR ESCRITO COMPARTIDO
// =================================

async function comprobarEscritoCompartido() {

    const shareId =
        obtenerShareIdDeURL();


    // =================================
    // NO HAY ENLACE COMPARTIDO
    // =================================

    if (
        !shareId
    ) {

        modoEscritoCompartido =
            false;


        shareIdPendiente =
            null;


        return false;
    }


    modoEscritoCompartido =
        true;


    shareIdPendiente =
        shareId;


    // =================================
    // COMPROBAR SESIÓN
    // =================================

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    // =================================
    // BUSCAR MEDIANTE FUNCIÓN SEGURA
    // =================================

    const resultado =
        await clienteSupabase
            .rpc(
                "obtener_escrito_compartido",
                {
                    p_share_id:
                        shareId
                }
            )
            .maybeSingle();


    if (
        resultado.error
    ) {

        console.log(
            "Error al cargar escrito compartido:",
            resultado.error
        );


        mostrarLogin();


        mensajeLogin.textContent =
            "No se pudo cargar el escrito.";


        return true;
    }


    // =================================
    // ESCRITO ENCONTRADO
    // =================================

    if (
        resultado.data
    ) {

        mostrarEscritoCompartido(
            convertirEscritoCompartido(
                resultado.data
            )
        );


        return true;
    }


    // =================================
    // SIN SESIÓN
    // PUEDE SER PRIVADO
    // =================================

    if (
        !sesion
    ) {

        mostrarLogin();


        mensajeLogin.textContent =
            "Inicia sesión para ver este escrito.";


        return true;
    }


    // =================================
    // CON SESIÓN PERO NO EXISTE
    // =================================

    mostrarLogin();


    mensajeLogin.textContent =
        "Este escrito no existe, ya no está compartido o fue eliminado.";


    return true;

}


// =================================
// CONVERTIR ESCRITO
// =================================

function convertirEscritoCompartido(
    escrito
) {

    return {

        id:
            escrito.id,

        usuario_id:
            escrito.usuario_id,

        titulo:
            escrito.titulo,

        descripcion:
            escrito.descripcion || "",

        contenido:
            escrito.contenido || "",

        contenidoHTML:
            escrito.contenido_html || "",

        descripcion:
            escrito.descripcion || "",

        nombreArchivo:
            escrito.nombre_archivo || "",

        tipo:
            escrito.tipo || "",

        fecha:
            escrito.fecha_creacion,

        shareId:
            escrito.share_id,

        privacidad:
            escrito.privacidad,

        archivoUrl:
            escrito.archivo_url

    };

}


// =================================
// MOSTRAR ESCRITO COMPARTIDO
// =================================

function mostrarEscritoCompartido(
    escrito
) {

    pantallaLogin.style.display =
        "none";


    pantallaPortafolio.style.display =
        "block";


    // =================================
    // TÍTULO Y FECHA
    // =================================

    tituloLectura.textContent =
        escrito.titulo;


    fechaLectura.textContent =
        formatearFecha(
            escrito.fecha
        );


    // =================================
    // AUTOR
    // =================================

    seccionAutorLectura.style.display =
        "block";


    cargarAutorEscrito(
        escrito.usuario_id
    );


    // =================================
    // DESCRIPCIÓN
    // =================================

    descripcionLectura.textContent =
        escrito.descripcion ||
        "Este escrito todavía no tiene descripción.";


    // =================================
    // CONTENIDO
    // =================================

    if (
        escrito.contenidoHTML &&
        escrito.contenidoHTML !== ""
    ) {

        textoLectura.innerHTML =
            escrito.contenidoHTML;

    }

    else if (
        escrito.contenido &&
        escrito.contenido !== ""
    ) {

        textoLectura.textContent =
            escrito.contenido;

    }

    else {

        textoLectura.textContent =
            "Este escrito no tiene contenido.";

    }

    cargarLikeLectura(
        escrito
);

    cargarComentarios(
        escrito
    );


    modalLectura.style.display =
        "flex";

    

}

// =================================
// COMPROBAR URL AL ABRIR
// =================================

async function iniciarAplicacion() {

    const shareId =
        obtenerShareIdDeURL();


    const autorId =
        obtenerAutorIdDeURL();


    // =================================
    // PRIORIDAD 1: ESCRITO
    // =================================

    if (
        shareId
    ) {

        await comprobarEscritoCompartido();

        return;

    }


    // =================================
    // PRIORIDAD 2: AUTOR
    // =================================

    if (
        autorId
    ) {

        modoEscritoCompartido =
            false;


        shareIdPendiente =
            null;


        pantallaLogin.style.display =
            "none";


        pantallaPortafolio.style.display =
            "block";


        await abrirPerfilPublicoDesdeURL(
            autorId
        );


        return;

    }


    // =================================
    // PÁGINA NORMAL
    // =================================

    await comprobarSesion();

}


// =================================
// ABRIR PERFIL DESDE USERNAME
// =================================

async function abrirPerfilPublicoDesdeURL(
    username
) {

    modalPerfilPublico.style.display =
        "flex";


    perfilPublicoNombre.textContent =
        "Cargando...";


    perfilPublicoDescripcion.textContent =
        "";


    perfilPublicoContador.textContent =
        "";


    perfilPublicoEscritos.innerHTML =
        "";


    perfilPublicoVacio.style.display =
        "none";


    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select(
                "id, username, nombre_autor, descripcion, foto_url"
            )
            .eq(
                "username",
                username
            )
            .maybeSingle();


    if (
        resultadoPerfil.error
    ) {

perfilPublicoNombre.textContent =
            "No se pudo cargar el perfil";


        return;

    }


    if (
        !resultadoPerfil.data
    ) {

        perfilPublicoNombre.textContent =
            "Perfil no encontrado";


        perfilPublicoDescripcion.textContent =
            "Este perfil no existe.";


        return;

    }


    const perfil =
        resultadoPerfil.data;


    autorActualUsername =
        perfil.username;


    const usuarioId =
        perfil.id;


    autorActualId =
        usuarioId;


    // =================================
    // INFORMACIÓN
    // =================================

    perfilPublicoNombre.textContent =
        perfil.nombre_autor ||
        perfil.username;


    perfilPublicoDescripcion.textContent =
        perfil.descripcion ||
        "Este autor todavía no ha escrito una descripción.";


    // =================================
    // FOTO
    // =================================

    perfilPublicoFoto.style.display =
        "none";


    perfilPublicoPlaceholder.style.display =
        "flex";


    if (
        perfil.foto_url
    ) {

        const resultadoFoto =
            await clienteSupabase
                .storage
                .from("perfiles")
                .createSignedUrl(
                    perfil.foto_url,
                    3600
                );


        if (
            !resultadoFoto.error
        ) {

            perfilPublicoFoto.src =
                resultadoFoto.data.signedUrl;


            perfilPublicoFoto.style.display =
                "block";


            perfilPublicoPlaceholder.style.display =
                "none";

        }

    }


    // =================================
    // ESCRITOS PÚBLICOS
    // =================================

    const resultadoEscritos =
        await clienteSupabase
            .from("escritos")
            .select(
                "id, titulo, fecha_creacion, share_id, tipo, descripcion"
            )
            .eq(
                "usuario_id",
                usuarioId
            )
            .eq(
                "privacidad",
                "publico"
            )
            .not(
                "share_id",
                "is",
                null
            )
            .order(
                "fecha_creacion",
                {
                    ascending:
                        false
                }
            );


    if (
        resultadoEscritos.error
    ) {

return;

    }


    const escritosPublicos =
        resultadoEscritos.data;


    // =================================
    // DESCRIPCIONES PARA EL PERFIL
    // =================================

    if (
        escritosPublicos.length > 0
    ) {

        const idsEscritos =
            escritosPublicos.map(
                function(escrito) {

                    return escrito.id;

                }
            );


        const resultadoDescripciones =
            await clienteSupabase
                .from("escritos")
                .select(
                    "id, descripcion"
                )
                .in(
                    "id",
                    idsEscritos
                );


        if (
            !resultadoDescripciones.error &&
            resultadoDescripciones.data
        ) {

            const descripcionesPorId =
                new Map(
                    resultadoDescripciones.data.map(
                        function(escrito) {

                            return [
                                escrito.id,
                                escrito.descripcion || ""
                            ];

                        }
                    )
                );


            escritosPublicos.forEach(
                function(escrito) {

                    escrito.descripcion =
                        descripcionesPorId.get(
                            escrito.id
                        ) || "";

                }
            );

        }

    }


    if (
        escritosPublicos.length === 1
    ) {

        perfilPublicoContador.textContent =
            "1 escrito público";

    }

    else {

        perfilPublicoContador.textContent =
            escritosPublicos.length +
            " escritos públicos";

    }


    if (
        escritosPublicos.length === 0
    ) {

        perfilPublicoVacio.style.display =
            "block";


        return;

    }


    escritosPublicos.forEach(
        function(escrito) {

            crearTarjetaEscritoPublico(
                escrito
            );

        }
    );

}


// =================================
// INICIAR APLICACIÓN
// =================================

iniciarAplicacion();


// =================================
// COMPROBAR SESIÓN NORMAL
// =================================

async function comprobarSesion() {

    const resultado =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultado.data.session;


    if (
        modoEscritoCompartido
    ) {

        return;

    }


    if (
        sesion
    ) {

        await mostrarPortafolio();

    }

    else {

        mostrarInicioPublico();

    }

}


// =================================
// CAMBIOS DE SESIÓN
// =================================

clienteSupabase.auth.onAuthStateChange(
    async function(evento, sesion) {

    // =================================
    // ESCRITO COMPARTIDO
    // =================================

    if (
        modoEscritoCompartido
    ) {

        if (
            sesion &&
            shareIdPendiente
        ) {

            await comprobarEscritoCompartido();

        }


        return;
    }


        // =================================
        // PÁGINA NORMAL
        // =================================
        // No cambiamos de vista por TOKEN_REFRESHED,
        // INITIAL_SESSION o al volver a la pestaña.
        // Así Explorar permanece abierto.

        if (
            evento === "SIGNED_OUT"
        ) {

            await mostrarInicioPublico();

        }

    }
);


// =================================
// INDEXEDDB
// =================================

const solicitudDB =
    indexedDB.open(
        "MisEscritosDB",
        1
    );


solicitudDB.addEventListener(
    "upgradeneeded",
    function(event) {

        db =
            event.target.result;


        if (
            !db.objectStoreNames.contains(
                "escritos"
            )
        ) {

            db.createObjectStore(
                "escritos",
                {
                    keyPath:
                        "id"
                }
            );

        }

    }
);


solicitudDB.addEventListener(
    "success",
    function(event) {

        db =
            event.target.result;


cargarEscritos();

    }
);


solicitudDB.addEventListener(
    "error",
    function() {

}
);


// =================================
// GUARDAR EN INDEXEDDB
// =================================

function guardarEscritoDB(
    escrito
) {

    if (
        !db
    ) {

return;

    }


    const transaccion =
        db.transaction(
            ["escritos"],
            "readwrite"
        );


    const almacen =
        transaccion.objectStore(
            "escritos"
        );


    almacen.put(
        escrito
    );


    transaccion.addEventListener(
        "complete",
        function() {

}
    );


    transaccion.addEventListener(
        "error",
        function() {

}
    );

}


// =================================
// CARGAR ESCRITOS
// =================================

function cargarEscritos() {

    if (
        !db
    ) {

        return;

    }


    const transaccion =
        db.transaction(
            ["escritos"],
            "readonly"
        );


    const almacen =
        transaccion.objectStore(
            "escritos"
        );


    const solicitud =
        almacen.getAll();


    solicitud.addEventListener(
        "success",
        function(event) {

            escritos =
                event.target.result;


            ordenarEscritos();

            mostrarEscritos();


}
    );

}


// =================================
// ELIMINAR DE INDEXEDDB
// =================================

function eliminarEscritoDB(
    id
) {

    if (
        !db
    ) {

return;

    }


    const transaccion =
        db.transaction(
            ["escritos"],
            "readwrite"
        );


    const almacen =
        transaccion.objectStore(
            "escritos"
        );


    almacen.delete(
        id
    );


    transaccion.addEventListener(
        "complete",
        function() {

}
    );

}


// =================================
// LOGIN
// =================================




// =================================
// REGISTRO
// =================================




// =================================
// MOSTRAR REGISTRO
// =================================



// =================================
// VOLVER AL LOGIN
// =================================




// =================================
// CERRAR SESIÓN
// =================================

async function cerrarSesion() {

    const resultado =
        await clienteSupabase.auth.signOut();


    if (
        resultado.error
    ) {

        console.log(
            "Error al cerrar sesión:",
            resultado.error
        );


        return;

    }


    await mostrarInicioPublico();

}


btnInicioEscritorio.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.getSession();


        const sesion =
            resultado.data.session;


        if (
            sesion
        ) {

            await mostrarPortafolio();

        }

        else {

            mostrarLogin();

        }

    }
);


btnInicioEmpezar.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.getSession();


        const sesion =
            resultado.data.session;


        if (
            sesion
        ) {

            await mostrarPortafolio();


        }

        else {

            mostrarLogin();

        }

    }
);

//FUNCION PARA IR A EXPLORAR

btnInicioExplorar.addEventListener(
    "click",
    async function() {

        await mostrarExplorar();

    }
);


btnInicioVerExplorar.addEventListener(
    "click",
    async function() {

        await mostrarExplorar();

    }
);

// Navegacion de explorar

btnExplorarInicio.addEventListener(
    "click",
    function() {

        mostrarInicioPublico();

    }
);


btnExplorarEscritorio.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.getSession();


        const sesion =
            resultado.data.session;


        if (
            sesion
        ) {

            await mostrarPortafolio();

        }

        else {

            mostrarLogin();

        }

    }
);


btnExplorarLogin.addEventListener(
    "click",
    function() {

        mostrarLogin();

    }
);

//FUNCION IMPORTANTE DE CARGAR ESCRITOS PUBLICOS

async function cargarExplorar() {

    explorarCargando.style.display =
        "block";


    explorarVacio.style.display =
        "none";


    listaExplorar.innerHTML =
        "";


    // =================================
    // CARGAR ESCRITOS PÚBLICOS
    // =================================

    const resultadoEscritos =
        await clienteSupabase
            .from("escritos")
            .select(
                "id, usuario_id, titulo, descripcion, fecha_creacion, share_id, tipo"
            )
            .eq(
                "privacidad",
                "publico"
            )
            .not(
                "share_id",
                "is",
                null
            )
            .order(
                "fecha_creacion",
                {
                    ascending:
                        false
                }
            );


    if (
        resultadoEscritos.error
    ) {

        console.log(
            "Error al cargar Explorar:",
            resultadoEscritos.error
        );


        explorarCargando.textContent =
            "No se pudieron cargar los escritos.";


        return;
    }


    const escritosPublicos =
        resultadoEscritos.data || [];


    // =================================
    // NO HAY ESCRITOS
    // =================================

    if (
        escritosPublicos.length === 0
    ) {

        escritosExplorar =
            [];


        explorarCargando.style.display =
            "none";


        explorarVacio.style.display =
            "block";


        return;
    }

    // =================================
    // CARGAR LIKES
    // =================================

    const idsEscritos =
        escritosPublicos.map(
            function(escrito) {

                return escrito.id;

            }
        );


    const resultadoLikes =
        await clienteSupabase
            .from("likes")
            .select(
                "escrito_id, usuario_id"
            )
            .in(
                "escrito_id",
                idsEscritos
            );


    if (
        resultadoLikes.error
    ) {

        console.log(
            "Error al cargar likes:",
            resultadoLikes.error
        );

    }


    const likes =
        resultadoLikes.data || [];

    
    // =================================
    // CARGAR COMENTARIOS
    // =================================

    const resultadoComentarios =
        await clienteSupabase
            .from("comentarios")
            .select(
                "escrito_id"
            )
            .in(
                "escrito_id",
                idsEscritos
            );


    if (
        resultadoComentarios.error
    ) {

        console.log(
            "Error al cargar comentarios de Explorar:",
            resultadoComentarios.error
        );

    }


    const comentarios =
        resultadoComentarios.data || [];


    // =================================
    // CONTAR COMENTARIOS POR ESCRITO
    // =================================

    const comentariosPorEscrito =
        new Map();


    comentarios.forEach(
        function(comentario) {

            const cantidadActual =
                comentariosPorEscrito.get(
                    comentario.escrito_id
                ) || 0;


            comentariosPorEscrito.set(
                comentario.escrito_id,
                cantidadActual + 1
            );

        }
);


    // =================================
    // CONTAR LIKES POR ESCRITO
    // =================================

    const likesPorEscrito =
        new Map();


    likes.forEach(
        function(like) {

            const cantidadActual =
                likesPorEscrito.get(
                    like.escrito_id
                ) || 0;


            likesPorEscrito.set(
                like.escrito_id,
                cantidadActual + 1
            );

        }
);


    // =================================
    // OBTENER AUTORES
    // =================================

    const idsAutores =
        [
            ...new Set(
                escritosPublicos.map(
                    function(escrito) {

                        return escrito.usuario_id;

                    }
                )
            )
        ];


    const resultadoAutores =
        await clienteSupabase
            .from("perfiles")
            .select(
                "id, username, nombre_autor, foto_url"
            )
            .in(
                "id",
                idsAutores
            );


    if (
        resultadoAutores.error
    ) {

        console.log(
            "Error al cargar autores:",
            resultadoAutores.error
        );

    }


    const autores =
        resultadoAutores.data || [];


    const autoresPorId =
        new Map();


    autores.forEach(
        function(autor) {

            autoresPorId.set(
                autor.id,
                autor
            );

        }
    );


    // =================================
    // UNIR ESCRITOS + AUTOR
    // =================================

    escritosExplorar =
        escritosPublicos.map(
            function(escrito) {

                const autor =
                    autoresPorId.get(
                        escrito.usuario_id
                    );


                return {

                    id:
                        escrito.id,

                    usuario_id:
                        escrito.usuario_id,

                    titulo:
                        escrito.titulo,

                    descripcion:
                        escrito.descripcion || "",

                    fecha_creacion:
                        escrito.fecha_creacion,

                    share_id:
                        escrito.share_id,

                    tipo:
                        escrito.tipo,

                    cantidad_likes:
                        likesPorEscrito.get(
                            escrito.id
                        ) || 0,

                    cantidad_comentarios:
                        comentariosPorEscrito.get(
                            escrito.id
                        ) || 0,

                    nombre_autor:
                        autor
                            ? (
                                autor.nombre_autor ||
                                autor.username ||
                                "Autor"
                            )
                            : "Autor",

                    username:
                        autor
                            ? autor.username
                            : ""

                };

            }
        );


    explorarCargando.style.display =
        "none";


    mostrarEscritosExplorar(
        escritosExplorar
    );

}

//CREAR TARJETAS REALES 

function mostrarEscritosExplorar(
    lista
) {

    listaExplorar.innerHTML =
        "";


    if (
        lista.length === 0
    ) {

        explorarVacio.style.display =
            "block";


        return;
    }


    explorarVacio.style.display =
        "none";


    lista.forEach(
        function(escrito) {

            crearTarjetaExplorar(
                escrito
            );

        }
    );

}

//BLOQUE 2 DE CREAR TARJETAS REALES

function crearTarjetaExplorar(
    escrito
) {

    const tarjeta =
        document.createElement(
            "article"
        );


    tarjeta.classList.add(
        "tarjeta-explorar"
    );


    // =================================
    // AUTOR
    // =================================

    const autor =
        document.createElement(
            "button"
        );


    autor.classList.add(
        "explorar-autor"
    );


    autor.textContent =
        escrito.nombre_autor;

    autor.type =
        "button";


    autor.addEventListener(
        "click",
        async function(event) {

            event.stopPropagation();


            if (
                !escrito.username
            ) {

                return;
            }


            await abrirPerfilDesdeExplorar(
                escrito.username
            );

        }
);


    // =================================
    // TÍTULO
    // =================================

    const titulo =
        document.createElement(
            "h3"
        );


    titulo.textContent =
        escrito.titulo;


    // =================================
    // DESCRIPCIÓN
    // =================================

    const descripcion =
        document.createElement(
            "p"
        );


    descripcion.classList.add(
        "explorar-descripcion"
    );


    descripcion.textContent =
        escrito.descripcion ||
        "Este escrito todavía no tiene descripción.";


    // =================================
    // PIE
    // =================================

    const pie =
        document.createElement(
            "div"
        );


    pie.classList.add(
        "explorar-pie"
    );


    const fecha =
        document.createElement(
            "span"
        );


    fecha.textContent =
        formatearFecha(
            escrito.fecha_creacion
        );


    const interacciones =
        document.createElement(
            "div"
        );


    interacciones.classList.add(
        "explorar-interacciones"
    );


    const like =
        document.createElement(
            "button"
        );


    like.type =
        "button";


    like.classList.add(
        "btn-like-explorar"
    );


    like.innerHTML =
    `
        <span>
            ${escrito.me_gusta ? "♥" : "♡"}
        </span>

        <strong>
            ${escrito.cantidad_likes}
        </strong>
    `;


    if (
        escrito.me_gusta
    ) {

        like.classList.add(
            "activo"
        );

    }


    // =================================
    // DAR / QUITAR LIKE
    // =================================

    like.addEventListener(
        "click",
        async function(event) {

            event.stopPropagation();


            await alternarLike(
                escrito,
                like
            );

        }
    );


    interacciones.appendChild(
        like
    );

    const comentariosInfo =
        document.createElement(
            "span"
        );


    comentariosInfo.classList.add(
        "comentarios-info-explorar"
    );


    comentariosInfo.innerHTML =
        `
            <span>
                💬
            </span>

            <strong>
                ${escrito.cantidad_comentarios}
            </strong>
        `;


    interacciones.appendChild(
        comentariosInfo
);

        pie.appendChild(
            fecha
        );


        pie.appendChild(
            interacciones
    );


    // =================================
    // ARMAR TARJETA
    // =================================

    tarjeta.appendChild(
        autor
    );


    tarjeta.appendChild(
        titulo
    );


    tarjeta.appendChild(
        descripcion
    );


    tarjeta.appendChild(
        pie
    );


    // =================================
    // ABRIR ESCRITO
    // =================================

    tarjeta.addEventListener(
        "click",
        async function() {

            await abrirEscritoDesdeExplorar(
                escrito.share_id
            );

        }
    );


    listaExplorar.appendChild(
        tarjeta
    );

}

//alternar like

async function alternarLike(
    escrito,
    boton
) {

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    if (
        !sesion
    ) {

        mostrarLogin();

        return;
    }


    const usuario =
        sesion.user;


    boton.disabled =
        true;


    // =================================
    // QUITAR LIKE
    // =================================

    if (
        escrito.me_gusta
    ) {

        const resultado =
            await clienteSupabase
                .from("likes")
                .delete()
                .eq(
                    "escrito_id",
                    escrito.id
                )
                .eq(
                    "usuario_id",
                    usuario.id
                );


        if (
            resultado.error
        ) {

            console.log(
                "Error al quitar like:",
                resultado.error
            );


            boton.disabled =
                false;


            return;
        }


        escrito.me_gusta =
            false;


        escrito.cantidad_likes =
            Math.max(
                0,
                escrito.cantidad_likes - 1
            );

    }


    // =================================
    // DAR LIKE
    // =================================

    else {

        const resultado =
            await clienteSupabase
                .from("likes")
                .insert({
                    escrito_id:
                        escrito.id,

                    usuario_id:
                        usuario.id
                });


        if (
            resultado.error
        ) {

            console.log(
                "Error al dar like:",
                resultado.error
            );


            boton.disabled =
                false;


            return;
        }


        escrito.me_gusta =
            true;


        escrito.cantidad_likes =
            escrito.cantidad_likes + 1;

    }


    actualizarBotonLike(
        boton,
        escrito
    );


    boton.disabled =
        false;

}

//actualizar boton like

function actualizarBotonLike(
    boton,
    escrito
) {

    boton.innerHTML =
        `
            <span>
                ${escrito.me_gusta ? "♥" : "♡"}
            </span>

            <strong>
                ${escrito.cantidad_likes}
            </strong>
        `;


    if (
        escrito.me_gusta
    ) {

        boton.classList.add(
            "activo"
        );

    }

    else {

        boton.classList.remove(
            "activo"
        );

    }

}

//cargar like lectura

async function cargarLikeLectura(
    escrito
) {

    escritoLikeLectura =
        escrito;


    seccionInteraccionesLectura.style.display =
        "flex";


    const resultadoLikes =
        await clienteSupabase
            .from("likes")
            .select(
                "usuario_id"
            )
            .eq(
                "escrito_id",
                escrito.id
            );


    if (
        resultadoLikes.error
    ) {

        console.log(
            "Error al cargar likes del lector:",
            resultadoLikes.error
        );


        return;
    }


    const likes =
        resultadoLikes.data || [];


    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    const usuario =
        sesion
            ? sesion.user
            : null;


    escrito.cantidad_likes =
        likes.length;


    escrito.me_gusta =
        usuario
            ? likes.some(
                function(like) {

                    return (
                        like.usuario_id ===
                        usuario.id
                    );

                }
            )
            : false;


    actualizarLikeLectura(
        escrito
    );

}

//actualizar like lectura

function actualizarLikeLectura(
    escrito
) {

    iconoLikeLectura.textContent =
        escrito.me_gusta
            ? "♥"
            : "♡";


    contadorLikeLectura.textContent =
        escrito.cantidad_likes || 0;


    if (
        escrito.me_gusta
    ) {

        btnLikeLectura.classList.add(
            "activo"
        );

    }

    else {

        btnLikeLectura.classList.remove(
            "activo"
        );

    }

}

btnLikeLectura.addEventListener(
    "click",
    async function() {

        if (
            !escritoLikeLectura
        ) {

            return;
        }


        await alternarLike(
            escritoLikeLectura,
            btnLikeLectura
        );


        actualizarLikeLectura(
            escritoLikeLectura
        );

    }
);


//ABRIR ESCRITO DESDE EXPLORAR

async function abrirEscritoDesdeExplorar(
    shareId
) {

    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "autor"
    );


    url.searchParams.set(
        "escrito",
        shareId
    );


    window.history.pushState(
        {},
        "",
        url.pathname +
        url.search
    );


    modoEscritoCompartido =
        true;


    shareIdPendiente =
        shareId;

    
    origenLecturaCompartida =
        "explorar";

    await comprobarEscritoCompartido();

}

//BUSCADOR EN LA PESTAÑA DE EXPLORAR

buscadorExplorar.addEventListener(
    "input",
    function() {

        const termino =
            buscadorExplorar
                .value
                .trim()
                .toLowerCase();


        if (
            termino === ""
        ) {

            mostrarEscritosExplorar(
                escritosExplorar
            );


            return;
        }


        const filtrados =
            escritosExplorar.filter(
                function(escrito) {

                    const titulo =
                        (
                            escrito.titulo ||
                            ""
                        )
                        .toLowerCase();


                    const autor =
                        (
                            escrito.nombre_autor ||
                            ""
                        )
                        .toLowerCase();


                    const username =
                        (
                            escrito.username ||
                            ""
                        )
                        .toLowerCase();


                    return (
                        titulo.includes(
                            termino
                        ) ||
                        autor.includes(
                            termino
                        ) ||
                        username.includes(
                            termino
                        )
                    );

                }
            );


        mostrarEscritosExplorar(
            filtrados
        );

    }
);


function actualizarXBuscadorExplorar() {

    limpiarBuscadorExplorar.style.display =
        buscadorExplorar.value.length > 0
            ? "flex"
            : "none";

}


buscadorExplorar.addEventListener(
    "input",
    actualizarXBuscadorExplorar
);


limpiarBuscadorExplorar.addEventListener(
    "click",
    function() {

        buscadorExplorar.value =
            "";


        actualizarXBuscadorExplorar();


        mostrarEscritosExplorar(
            escritosExplorar
        );


        buscadorExplorar.focus();

    }
);


//abrir perfil desde explorar

async function abrirPerfilDesdeExplorar(
    username
) {

    if (
        !username
    ) {

        return;
    }


    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "escrito"
    );


    url.searchParams.set(
        "autor",
        username
    );


    window.history.pushState(
        {},
        "",
        url.pathname +
        url.search
    );


    await abrirPerfilPublicoDesdeURL(
        username
    );

}

//COMENTARIOS TODO

//contador 0 a 300

inputComentario.addEventListener(
    "input",
    function() {

        contadorCaracteresComentario.textContent =
            inputComentario.value.length +
            " / 300";

    }
);

//cargar comentarios del escrito

async function cargarComentarios(
    escrito
) {

    inputComentario.value =
        "";


    contadorCaracteresComentario.textContent =
        "0 / 300";

    escritoComentariosActual =
        escrito;


    seccionComentarios.style.display =
        "block";


    listaComentarios.innerHTML =
        "";


    sinComentarios.style.display =
        "none";


    inputComentario.value =
        "";


    contadorCaracteresComentario.textContent =
        "0 / 300";


    // =================================
    // TRAER COMENTARIOS
    // =================================

    const resultadoComentarios =
        await clienteSupabase
            .from("comentarios")
            .select(
                "id, usuario_id, contenido, created_at"
            )
            .eq(
                "escrito_id",
                escrito.id
            )
            .order(
                "created_at",
                {
                    ascending:
                        true
                }
            );


    if (
        resultadoComentarios.error
    ) {

        console.log(
            "Error al cargar comentarios:",
            resultadoComentarios.error
        );


        sinComentarios.style.display =
            "block";


        sinComentarios.textContent =
            "No se pudieron cargar los comentarios.";


        return;
    }


    const comentarios =
        resultadoComentarios.data || [];


    // =================================
    // CONTADOR
    // =================================

    if (
        comentarios.length === 1
    ) {

        contadorComentarios.textContent =
            "1 comentario";

    }

    else {

        contadorComentarios.textContent =
            comentarios.length +
            " comentarios";

    }


    if (
        comentarios.length === 0
    ) {

        sinComentarios.style.display =
            "block";


        sinComentarios.textContent =
            "Todavía no hay comentarios.";


        return;
    }


    // =================================
    // CARGAR AUTORES
    // =================================

    const idsUsuarios =
        [
            ...new Set(
                comentarios.map(
                    function(comentario) {

                        return comentario.usuario_id;

                    }
                )
            )
        ];


    const resultadoPerfiles =
        await clienteSupabase
            .from("perfiles")
            .select(
                "id, nombre_autor, username"
            )
            .in(
                "id",
                idsUsuarios
            );


    const perfiles =
        resultadoPerfiles.data || [];


    const perfilesPorId =
        new Map();


    perfiles.forEach(
        function(perfil) {

            perfilesPorId.set(
                perfil.id,
                perfil
            );

        }
    );

    const resultadoSesion =
    await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    const usuarioActual =
        sesion
            ? sesion.user
            : null;


    // =================================
    // MOSTRAR
    // =================================

    comentarios.forEach(
        function(comentario) {

            const perfil =
                perfilesPorId.get(
                    comentario.usuario_id
                );


            crearComentarioVisual(
                comentario,
                perfil,
                usuarioActual
            );

        }
    );

}

//crear cada comentario visualmente

function crearComentarioVisual(
    comentario,
    perfil,
    usuarioActual
) {

    const item =
        document.createElement(
            "article"
        );


    item.classList.add(
        "comentario-item"
    );


    const cabecera =
        document.createElement(
            "div"
        );


    cabecera.classList.add(
        "comentario-item-cabecera"
    );


    const autor =
        document.createElement(
            "span"
        );


    autor.classList.add(
        "comentario-autor"
    );


    autor.textContent =
        perfil
            ? (
                perfil.nombre_autor ||
                perfil.username ||
                "Usuario"
            )
            : "Usuario";


    cabecera.appendChild(
        autor
    );


    // =================================
    // ELIMINAR SOLO SI ES TUYO
    // =================================

    if (
        usuarioActual &&
        usuarioActual.id ===
            comentario.usuario_id
    ) {

        const btnEliminar =
            document.createElement(
                "button"
            );


        btnEliminar.type =
            "button";


        btnEliminar.classList.add(
            "btn-eliminar-comentario"
        );


        btnEliminar.textContent =
            "Eliminar";


        btnEliminar.addEventListener(
            "click",
            async function() {

                await eliminarComentario(
                    comentario.id
                );

            }
        );


        cabecera.appendChild(
            btnEliminar
        );

    }


    const texto =
        document.createElement(
            "p"
        );


    texto.classList.add(
        "comentario-texto"
    );


    texto.textContent =
        comentario.contenido;


    const fecha =
        document.createElement(
            "span"
        );


    fecha.classList.add(
        "comentario-fecha"
    );


    fecha.textContent =
        formatearFecha(
            comentario.created_at
        );


    item.appendChild(
        cabecera
    );


    item.appendChild(
        texto
    );


    item.appendChild(
        fecha
    );


    listaComentarios.appendChild(
        item
    );

}



//primer listener de comentario

//publicar comentario

btnPublicarComentario.addEventListener(
    "click",
    async function() {

        await publicarComentario();

    }
);

//funcion para publicar comentario

async function publicarComentario() {

    

    // =================================
    // COMPROBAR ESCRITO
    // =================================

    if (
        !escritoComentariosActual
    ) {

        return;
    }


    const contenido =
        inputComentario.value.trim();


    // =================================
    // COMENTARIO VACÍO
    // =================================

    if (
        contenido === ""
    ) {

        return;
    }


    // =================================
    // COMPROBAR SESIÓN
    // =================================

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;



    if (
        !sesion
    ) {

        mostrarLogin();

        return;
    }


    const usuario =
        sesion.user;


    // =================================
    // EVITAR DOBLE CLIC
    // =================================

    btnPublicarComentario.disabled =
        true;


    btnPublicarComentario.textContent =
        "Publicando...";


    // =================================
    // GUARDAR EN SUPABASE
    // =================================

    

    const resultado =
        await clienteSupabase
            .from("comentarios")
            .insert({

                escrito_id:
                    escritoComentariosActual.id,

                usuario_id:
                    usuario.id,

                contenido:
                    contenido

            });

    


    if (
        resultado.error
    ) {

        console.log(
            "Error al publicar comentario:",
            resultado.error
        );


        btnPublicarComentario.disabled =
            false;


        btnPublicarComentario.textContent =
            "Publicar";


        return;
    }


    // =================================
    // LIMPIAR
    // =================================

    


    btnPublicarComentario.disabled =
        false;


    btnPublicarComentario.textContent =
        "Publicar";


    // =================================
    // RECARGAR COMENTARIOS
    // =================================

    

    await cargarComentarios(
        escritoComentariosActual
    );

    

}

//funcion que borra tu comentario

async function eliminarComentario(
    comentarioId
) {

    const confirmar =
        await mostrarPopup(
            "Eliminar comentario",
            "¿Seguro que quieres eliminar este comentario?",
            "Eliminar",
            "Cancelar",
            "🗑"
        );


    if (
        !confirmar
    ) {

        return;
    }


    const resultado =
        await clienteSupabase
            .from("comentarios")
            .delete()
            .eq(
                "id",
                comentarioId
            );


    if (
        resultado.error
    ) {

        console.log(
            "Error al eliminar comentario:",
            resultado.error
        );


        await mostrarAviso(
            "No se pudo eliminar el comentario.",
            "Error",
            "⚠️"
        );


        return;
    }


    await cargarComentarios(
        escritoComentariosActual
    );

}


// =================================
// ABRIR MODAL DE SUBIR
// =================================

btnSubir.addEventListener(
    "click",
    abrirModalSubir
);


btnSubirVacio.addEventListener(
    "click",
    abrirModalSubir
);


function abrirModalSubir() {

    modalSubir.style.display =
        "flex";

}


// =================================
// CERRAR MODAL DE SUBIR
// =================================

cerrarModal.addEventListener(
    "click",
    cerrarModalSubir
);


function cerrarModalSubir() {

    modalSubir.style.display =
        "none";


    archivo.value =
        "";


    archivoSeleccionado.textContent =
        "Ningún archivo seleccionado";


    archivoTemporal =
        null;

    descripcionSubida.value = "";
    contadorDescripcionSubida.textContent = "0 / 350";

}


descripcionSubida.addEventListener(
    "input",
    function() {
        contadorDescripcionSubida.textContent = descripcionSubida.value.length + " / 350";
    }
);

// =================================
// SELECCIONAR ARCHIVO
// =================================

archivo.addEventListener(
    "change",
    function() {

        if (
            archivo.files.length === 0
        ) {

            archivoTemporal =
                null;


            archivoSeleccionado.textContent =
                "Ningún archivo seleccionado";


            return;

        }


        const archivoElegido =
            archivo.files[0];


        const nombre =
            archivoElegido.name;


        const extension =
            nombre
                .split(".")
                .pop()
                .toLowerCase();


        if (
            extension !== "txt" &&
            extension !== "docx"
        ) {

            archivoSeleccionado.textContent =
                "Formato no permitido.";


            archivo.value =
                "";


            archivoTemporal =
                null;


            return;

        }


        archivoTemporal =
            archivoElegido;


        archivoSeleccionado.textContent =
            "Archivo seleccionado: " +
            nombre;

    }
);


// =================================
// SUBIR ESCRITO
// =================================

btnConfirmarSubida.addEventListener(
    "click",
    subirEscrito
);


async function subirEscrito() {

    if (
        archivoTemporal === null
    ) {

        archivoSeleccionado.textContent =
            "Selecciona un archivo primero.";


        return;

    }


    // =================================
    // OBTENER USUARIO
    // =================================

    const resultadoUsuario =
        await clienteSupabase.auth.getUser();


    if (
        resultadoUsuario.error
    ) {

archivoSeleccionado.textContent =
            "No se pudo obtener tu usuario.";


        return;

    }


    const usuarioActual =
        resultadoUsuario.data.user;


    if (
        !usuarioActual
    ) {

        archivoSeleccionado.textContent =
            "Debes iniciar sesión.";


        return;

    }


    // =================================
    // INFORMACIÓN ARCHIVO
    // =================================

    const nombreOriginal =
        archivoTemporal.name;


    const titulo =
        obtenerNombreSinExtension(
            nombreOriginal
        );

    const descripcion = descripcionSubida.value.trim();


    const tipo =
        nombreOriginal
            .split(".")
            .pop()
            .toLowerCase();


    archivoSeleccionado.textContent =
        "Preparando archivo...";


    let contenido =
        "";


    // =================================
    // TXT
    // =================================

    if (
        tipo === "txt"
    ) {

        contenido =
            await archivoTemporal.text();

    }


    // =================================
    // DOCX
    // =================================

    else if (
        tipo === "docx"
    ) {

        try {

            const arrayBuffer =
                await archivoTemporal.arrayBuffer();


            const resultadoMammoth =
                await mammoth.extractRawText(
                    {
                        arrayBuffer:
                            arrayBuffer
                    }
                );


            contenido =
                resultadoMammoth.value;

        }

        catch (
            error
        ) {

archivoSeleccionado.textContent =
                "No se pudo leer el documento Word.";


            return;

        }

    }


    else {

        archivoSeleccionado.textContent =
            "Formato no permitido.";


        return;

    }


    // =================================
    // RUTA STORAGE
    // =================================

    const nombreArchivoStorage =
        Date.now() +
        "_" +
        limpiarNombreArchivo(
            nombreOriginal
        );


    const rutaArchivo =
        usuarioActual.id +
        "/" +
        nombreArchivoStorage;


    // =================================
    // SUBIR STORAGE
    // =================================

    archivoSeleccionado.textContent =
        "Subiendo archivo...";


    const resultadoStorage =
        await clienteSupabase.storage
            .from("escritos")
            .upload(
                rutaArchivo,
                archivoTemporal,
                {
                    cacheControl:
                        "3600",

                    upsert:
                        false
                }
            );


    if (
        resultadoStorage.error
    ) {

archivoSeleccionado.textContent =
            "No se pudo subir el archivo.";


        return;

    }


    // =================================
    // GUARDAR SUPABASE
    // =================================

    const nuevoEscritoSupabase = {

        usuario_id:
            usuarioActual.id,

        titulo:
            titulo,

        descripcion:
            descripcion,

        contenido:
            contenido,

        nombre_archivo:
            nombreOriginal,

        tipo:
            tipo,

        archivo_url:
            rutaArchivo,

        privacidad:
            "privado",

        posicion:
            1
    };


    const resultadoDB =
        await clienteSupabase
            .from("escritos")
            .insert(
                nuevoEscritoSupabase
            )
            .select()
            .single();


    if (
        resultadoDB.error
    ) {

await clienteSupabase.storage
            .from("escritos")
            .remove(
                [
                    rutaArchivo
                ]
            );


        archivoSeleccionado.textContent =
            "No se pudo guardar el escrito.";


        return;

    }


    const escritoGuardado =
        resultadoDB.data;


    const escritoInterfaz = {

        id:
            escritoGuardado.id,

        usuario_id:
            escritoGuardado.usuario_id,

        titulo:
            escritoGuardado.titulo,

        descripcion:
            escritoGuardado.descripcion || "",

        nombreArchivo:
            escritoGuardado.nombre_archivo,

        contenido:
            escritoGuardado.contenido,

        fecha:
            escritoGuardado.fecha_creacion,

        tipo:
            escritoGuardado.tipo,

        archivo_url:
            escritoGuardado.archivo_url,

        share_id:
            escritoGuardado.share_id,

        privacidad:
            escritoGuardado.privacidad,

        posicion:
            escritoGuardado.posicion

    };


    escritos.unshift(
        escritoInterfaz
    );


    guardarEscritoDB(
        escritoInterfaz
    );

    await guardarOrdenEscritos();


    ordenarEscritos();

    mostrarEscritos();


    archivoSeleccionado.textContent =
        "✓ Escrito subido correctamente.";


    setTimeout(
        function() {

            cerrarModalSubir();

        },
        700
    );

}


// =================================
// CARGAR ESCRITOS DESDE SUPABASE
// =================================

async function cargarEscritosSupabase() {

    try {

        const resultadoUsuario =
            await clienteSupabase.auth.getUser();


        if (
            resultadoUsuario.error
        ) {

return;

        }


        const usuarioActual =
            resultadoUsuario.data.user;


        if (
            !usuarioActual
        ) {

return;

        }


        const resultado =
            await clienteSupabase
                .from("escritos")
                .select("*")
                .eq(
                    "usuario_id",
                    usuarioActual.id
                )
                .order(
                    "fecha_creacion",
                    {
                        ascending:
                            true
                    }
                );


        if (
            resultado.error
        ) {

return;

        }


        escritos =
            resultado.data.map(
                function(escrito) {

                    return {

                        id:
                            escrito.id,

                        usuario_id:
                            escrito.usuario_id,

                        posicion:
                            escrito.posicion,

                        contenido:
                            escrito.contenido ||
                            "",

                        contenidoHTML:
                            escrito.contenido_html || "",

                        descripcion:
                            escrito.descripcion || "",

                        titulo:
                            escrito.titulo,

                        descripcion:
                            escrito.descripcion || "",

                        nombreArchivo:
                            escrito.nombre_archivo ||
                            "",

                        tipo:
                            escrito.tipo ||
                            "",

                        fecha:
                            escrito.fecha_creacion,

                        shareId:
                            escrito.share_id,

                        privacidad:
                            escrito.privacidad,

                        archivoUrl:
                            escrito.archivo_url

                    };

                }
            );


        ordenarEscritos();

        mostrarEscritos();


}

    catch (
        error
    ) {

}

}

// =================================
// ORDENAR ESCRITOS POR POSICIÓN
// =================================

function ordenarEscritos() {

    escritos.sort(
        function(a, b) {

            const posicionA =
                a.posicion || 999999;

            const posicionB =
                b.posicion || 999999;


            return (
                posicionA -
                posicionB
            );

        }
    );

}

// =================================
// GUARDAR ORDEN DE ESCRITOS
// =================================

async function guardarOrdenEscritos() {

    for (
        let i = 0;
        i < escritos.length;
        i++
    ) {

        const nuevaPosicion =
            i + 1;


        escritos[i].posicion =
            nuevaPosicion;


        const resultado =
            await clienteSupabase
                .from("escritos")
                .update({

                    posicion:
                        nuevaPosicion

                })
                .eq(
                    "id",
                    escritos[i].id
                );


        if (
            resultado.error
        ) {

}


        guardarEscritoDB(
            escritos[i]
        );

    }


}

// =================================
// MOSTRAR ESCRITOS
// =================================

function mostrarEscritos() {

    listaEscritos.innerHTML =
        "";


    const textoBusqueda =
        buscador.value
            .toLowerCase()
            .trim();


    const escritosFiltrados =
        escritos.filter(
            function(escrito) {

                return escrito.titulo
                    .toLowerCase()
                    .includes(
                        textoBusqueda
                    );

            }
        );


    if (
        escritosFiltrados.length === 0
    ) {

        sinEscritos.style.display =
            "block";

    }

    else {

        sinEscritos.style.display =
            "none";

    }


    escritosFiltrados.forEach(
        function(escrito) {

            const tarjeta =
                crearTarjeta(
                    escrito
                );


            listaEscritos.appendChild(
                tarjeta
            );

        }
    );


    actualizarContador();

}


// =================================
// CREAR TARJETA
// =================================

function crearTarjeta(
    escrito
) {

    const tarjeta =
        document.createElement(
            "article"
        );


    tarjeta.classList.add(
        "tarjeta-escrito"
    );

    // =================================
    // HACER TARJETA ARRASTRABLE
    // =================================

    tarjeta.draggable =
        buscador.value.trim() === "";


    tarjeta.dataset.id =
        escrito.id;


    const icono =
        document.createElement(
            "div"
        );


    icono.classList.add(
        "tarjeta-icono"
    );


    if (
        escrito.tipo === "txt"
    ) {

        icono.textContent =
            "📄";

    }

    else {

        icono.textContent =
            "📝";

    }


    const titulo =
        document.createElement(
            "h3"
        );


    titulo.textContent =
        escrito.titulo;



    const fecha =
        document.createElement(
            "p"
        );


    fecha.classList.add(
        "tarjeta-fecha"
    );


    fecha.textContent =
        formatearFecha(
            escrito.fecha
        );

    const estadoPrivacidad =
        document.createElement(
            "span"
        );

    estadoPrivacidad.classList.add(
        "estado-privacidad"
    );

    if (
        escrito.privacidad === "publico"
    ) {

        estadoPrivacidad.classList.add(
            "estado-publico"
        );

        estadoPrivacidad.textContent =
            "🌎 Público";

    }

    else {

        estadoPrivacidad.classList.add(
            "estado-privado"
        );

        estadoPrivacidad.textContent =
            "🔒 Privado";

    }


    const acciones =
        document.createElement(
            "div"
        );

    


    acciones.classList.add(
        "tarjeta-acciones"
    );

    // =================================
    // CONTROL PARA MOVER
    // =================================

    const mover =
        document.createElement(
            "div"
        );


    mover.classList.add(
        "mover-escrito"
    );


    mover.textContent =
        "↕";


    mover.title =
        "Arrastra para cambiar la posición";


    // =================================
    // LEER
    // =================================

    const btnLeer =
        document.createElement(
            "button"
        );


    btnLeer.textContent =
        "👁 Leer";


    btnLeer.addEventListener(
        "click",
        function() {

            leerEscrito(
                escrito
            );

        }
    );


    // =================================
    // EDITAR
    // =================================

    const btnEditar =
        document.createElement(
            "button"
        );


    btnEditar.textContent =
        "✏️ Editar";


    btnEditar.addEventListener(
        "click",
        function() {

            abrirEditor(
                escrito
            );

        }
    );


    // =================================
    // COMPARTIR
    // =================================

    const btnCompartir =
        document.createElement(
            "button"
        );


    btnCompartir.textContent =
        "↗ Compartir";


    btnCompartir.addEventListener(
        "click",
        function() {

            abrirCompartir(
                escrito
            );

        }
    );


    // =================================
    // ELIMINAR
    // =================================

    const btnEliminar =
        document.createElement(
            "button"
        );


    btnEliminar.textContent =
        "🗑";


    btnEliminar.classList.add(
        "btn-eliminar"
    );


    btnEliminar.addEventListener(
        "click",
        function() {

            eliminarEscrito(
                escrito.id
            );

        }
    );


    acciones.appendChild(
        btnLeer
    );


    acciones.appendChild(
        btnEditar
    );


    acciones.appendChild(
        btnCompartir
    );


    acciones.appendChild(
        btnEliminar
    );

    tarjeta.appendChild(
        mover
    );


    tarjeta.appendChild(
        icono
    );


    tarjeta.appendChild(
        titulo
    );


    tarjeta.appendChild(
        fecha
    );

    tarjeta.appendChild(
        estadoPrivacidad
    );


    tarjeta.appendChild(
        acciones
    );

    // =================================
    // DRAG START
    // =================================

    tarjeta.addEventListener(
        "dragstart",
        function(event) {

            if (
                buscador.value.trim() !== ""
            ) {

                event.preventDefault();

                return;

            }


            event.dataTransfer.setData(
                "text/plain",
                escrito.id
            );


            tarjeta.classList.add(
                "tarjeta-arrastrando"
            );

        }
    );


    // =================================
    // DRAG END
    // =================================

    tarjeta.addEventListener(
        "dragend",
        function() {

            tarjeta.classList.remove(
                "tarjeta-arrastrando"
            );


            const tarjetas =
                document.querySelectorAll(
                    ".tarjeta-escrito"
                );


            tarjetas.forEach(
                function(item) {

                    item.classList.remove(
                        "tarjeta-destino"
                    );

                }
            );

        }
    );


    // =================================
    // PASAR POR ENCIMA
    // =================================

    tarjeta.addEventListener(
        "dragover",
        function(event) {

            event.preventDefault();


            tarjeta.classList.add(
                "tarjeta-destino"
            );

        }
    );


    // =================================
    // SALIR DE TARJETA
    // =================================

    tarjeta.addEventListener(
        "dragleave",
        function() {

            tarjeta.classList.remove(
                "tarjeta-destino"
            );

        }
    );


    // =================================
    // SOLTAR
    // =================================

    tarjeta.addEventListener(
        "drop",
        async function(event) {

            event.preventDefault();


            tarjeta.classList.remove(
                "tarjeta-destino"
            );


        const idArrastrado =
            Number(
                event.dataTransfer.getData(
                    "text/plain"
                )
            );


        const idDestino =
            escrito.id;


        if (
            idArrastrado ===
            idDestino
        ) {

            return;

        }


        const indiceArrastrado =
            escritos.findIndex(
                function(item) {

                    return (
                        item.id ===
                        idArrastrado
                    );

                }
            );


        const indiceDestino =
            escritos.findIndex(
                function(item) {

                    return (
                        item.id ===
                        idDestino
                    );

                }
            );


        if (
            indiceArrastrado === -1 ||
            indiceDestino === -1
        ) {

            return;

        }


        // =================================
        // SACAR EL ESCRITO
        // =================================

        const escritoMovido =
            escritos.splice(
                indiceArrastrado,
                1
            )[0];


        // =================================
        // BUSCAR NUEVA POSICIÓN DESTINO
        // =================================

        const nuevoIndiceDestino =
            escritos.findIndex(
                function(item) {

                    return (
                        item.id ===
                        idDestino
                    );

                }
            );


        // =================================
        // INSERTAR EN NUEVA POSICIÓN
        // =================================

        escritos.splice(
            nuevoIndiceDestino,
            0,
            escritoMovido
        );


        // =================================
        // ACTUALIZAR INTERFAZ
        // =================================

        mostrarEscritos();


        // =================================
        // GUARDAR SUPABASE
        // =================================

        await guardarOrdenEscritos();

    }
);


    return tarjeta;

}


// =================================
// LEER ESCRITO
// =================================

function leerEscrito(
    escrito
) {


    // =================================
    // LECTURA PERSONAL
    // =================================

    seccionComentarios.style.display =
        "none";


    escritoComentariosActual =
        null;

    seccionAutorLectura.style.display =
        "none";

    escritoLikeLectura =
        "null";


    autorCompartido.style.display =
        "none";


    // =================================
    // TÍTULO Y FECHA
    // =================================

    tituloLectura.textContent =
        escrito.titulo;


    fechaLectura.textContent =
        formatearFecha(
            escrito.fecha
        );


    // =================================
    // DESCRIPCIÓN
    // =================================

    descripcionLectura.textContent =
        escrito.descripcion ||
        "Este escrito todavía no tiene descripción.";


    // =================================
    // CONTENIDO
    // =================================

    if (
        escrito.contenidoHTML &&
        escrito.contenidoHTML !== ""
    ) {

        textoLectura.innerHTML =
            escrito.contenidoHTML;

    }

    else {

        textoLectura.textContent =
            escrito.contenido ||
            "Este escrito no tiene contenido todavía.";

    }


    modalLectura.style.display =
        "flex";

}


// =================================
// ABRIR ESCRITO EN EDITOR COMPLETO
// =================================

function abrirEditor(
    escrito
) {

    btnEliminarBorrador.style.display =
        "none";

    modoEditor =
        "editar";


    escritoEditor =
        escrito;


    escritoEditando =
        escrito;


    // =================================
    // TÍTULO
    // =================================

    nuevoEscritoTitulo.value =
        escrito.titulo || "";

    nuevoEscritoDescripcion.value = escrito.descripcion || "";
    actualizarContadorDescripcion();

    


    // =================================
    // CONTENIDO CON FORMATO
    // =================================

    if (
        escrito.contenidoHTML &&
        escrito.contenidoHTML !== ""
    ) {

        editorQuill.root.innerHTML =
            escrito.contenidoHTML;

    }

    else if (
        escrito.contenido &&
        escrito.contenido !== ""
    ) {

        editorQuill.setText(
            escrito.contenido
        );

    }

    else {

        editorQuill.setText(
            ""
        );

    }


    // =================================
    // CONFIGURAR INTERFAZ
    // =================================

    btnGuardarNuevoEscrito.textContent =
        "Guardar cambios";


    estadoEditor.textContent =
        "Editando escrito";


    actualizarContadoresEditor();


    modalNuevoEscrito.style.display =
        "flex";


    setTimeout(
        function() {

            ajustarAlturaTitulo();

            editorQuill.focus();

        },
        100
    );

}




// =================================
// GUARDAR EDICIÓN
// =================================

btnGuardarEdicion.addEventListener(
    "click",
    guardarEdicion
);


async function guardarEdicion() {

    if (
        escritoEditando === null
    ) {

        return;

    }


    const nuevoTitulo =
        tituloEditar.value.trim();


    const nuevoContenido =
        contenidoEditar.value;


    if (
        nuevoTitulo === ""
    ) {

        mostrarAviso(
            "El escrito necesita un título."
        );


        return;

    }


    const fechaActualizacion =
        new Date().toISOString();


    const resultado =
        await clienteSupabase
            .from("escritos")
            .update({

                titulo:
                    nuevoTitulo,

                contenido:
                    nuevoContenido,

                fecha_actualizacion:
                    fechaActualizacion

            })
            .eq(
                "id",
                escritoEditando.id
            )
            .select()
            .single();


    if (
        resultado.error
    ) {

mostrarAviso(
            "No se pudieron guardar los cambios."
        );


        return;

    }


    const escritoActualizado =
        resultado.data;


    escritoEditando.titulo =
        escritoActualizado.titulo;


    escritoEditando.contenido =
        escritoActualizado.contenido;


    escritoEditando.fecha =
        escritoActualizado.fecha_actualizacion;


    guardarEscritoDB(
        escritoEditando
    );


    ordenarEscritos();

    mostrarEscritos();


    modalEditar.style.display =
        "none";


    escritoEditando =
        null;


}


// =================================
// CERRAR EDITOR
// =================================

cerrarEditar.addEventListener(
    "click",
    function() {

        modalEditar.style.display =
            "none";


        escritoEditando =
            null;

    }
);


function ajustarAlturaTitulo() {

    nuevoEscritoTitulo.style.height =
        "auto";

    nuevoEscritoTitulo.style.height =
        (
            nuevoEscritoTitulo.scrollHeight +
            15
        ) +
        "px";

}


// =================================
// ELIMINAR ESCRITO
// =================================

async function eliminarEscrito(
    id
) {

    const confirmar =
        await mostrarPopup(
            "Eliminar escrito",
            "¿Seguro que quieres eliminar este escrito? Esta acción no se puede deshacer.",
            "Eliminar",
            "Cancelar",
            "🗑"
        );


    if (
        !confirmar
    ) {

        return;

    }


    const escrito =
        escritos.find(
            function(item) {

                return (
                    item.id === id
                );

            }
        );


    if (
        !escrito
    ) {

        mostrarAviso(
            "No se encontró el escrito."
        );


        return;

    }


    try {

        // =================================
        // RUTA DEL STORAGE
        // =================================

        const rutaArchivo =
            escrito.archivoUrl ||
            escrito.archivo_url;


        // =================================
        // ELIMINAR STORAGE
        // =================================

        if (
            rutaArchivo
        ) {

const resultadoStorage =
                await clienteSupabase
                    .storage
                    .from("escritos")
                    .remove([
                        rutaArchivo
                    ]);


            if (
                resultadoStorage.error
            ) {

mostrarAviso(
            "No se pudo eliminar el archivo del Storage."
        );


                return;

            }


}


        // =================================
        // ELIMINAR REGISTRO
        // =================================

        const resultadoDB =
            await clienteSupabase
                .from("escritos")
                .delete()
                .eq(
                    "id",
                    id
                );


        if (
            resultadoDB.error
        ) {

mostrarAviso(
            "No se pudo eliminar el escrito de la base de datos."
        );


            return;

        }


        // =================================
        // INDEXEDDB
        // =================================

        eliminarEscritoDB(
            id
        );


        escritos =
            escritos.filter(
                function(item) {

                    return (
                        item.id !== id
                    );

                }
            );


        mostrarEscritos();


}

    catch (
        error
    ) {

mostrarAviso(
            "Ocurrió un error al eliminar el escrito."
        );

    }

}


// =================================
// CONTADOR
// =================================

function actualizarContador() {

    const cantidad =
        escritos.length;


    if (
        cantidad === 1
    ) {

        contadorEscritos.textContent =
            "1 escrito";

    }

    else {

        contadorEscritos.textContent =
            cantidad +
            " escritos";

    }

}


// =================================
// BUSCADOR
// =================================

buscador.addEventListener(
    "input",
    function() {

        mostrarEscritos();


        limpiarBuscador.style.display =
            buscador.value.length > 0
                ? "flex"
                : "none";

    }
);


limpiarBuscador.addEventListener(
    "click",
    function() {

        buscador.value =
            "";


        limpiarBuscador.style.display =
            "none";


        mostrarEscritos();


        buscador.focus();

    }
);


// =================================
// FORMATEAR FECHA
// =================================

function formatearFecha(
    fecha
) {

    return new Date(
        fecha
    ).toLocaleDateString(
        "es-DO",
        {

            day:
                "2-digit",

            month:
                "short",

            year:
                "numeric"

        }
    );

}


// =================================
// NOMBRE SIN EXTENSIÓN
// =================================

function obtenerNombreSinExtension(
    nombre
) {

    const posicion =
        nombre.lastIndexOf(
            "."
        );


    if (
        posicion === -1
    ) {

        return nombre;

    }


    return nombre.substring(
        0,
        posicion
    );

}


// =================================
// CERRAR MODAL DE LECTURA
// =================================

cerrarLectura.addEventListener(
    "click",
    cerrarModalLectura
);


async function cerrarModalLectura() {

    modalLectura.style.display =
        "none";


    // =================================
    // NO ES COMPARTIDO
    // =================================

    if (
        !modoEscritoCompartido
    ) {

        return;
    }


    const origenAnterior =
        origenLecturaCompartida;


    const url =
        new URL(
            window.location.href
        );


    url.searchParams.delete(
        "escrito"
    );


    window.history.replaceState(
        {},
        "",
        url.pathname +
        url.search +
        url.hash
    );


    modoEscritoCompartido =
        false;


    shareIdPendiente =
        null;


    // =================================
    // VENÍA DE EXPLORAR
    // =================================

    if (
        origenAnterior ===
        "explorar"
    ) {

        origenLecturaCompartida =
            "enlace";


        await mostrarExplorar();


        return;
    }


    // =================================
    // VENÍA DE UN PERFIL
    // =================================

    if (
        origenAnterior ===
        "perfil"
    ) {

        origenLecturaCompartida =
            "enlace";


        if (
            autorActualUsername
        ) {

            url.searchParams.set(
                "autor",
                autorActualUsername
            );


            window.history.replaceState(
                {},
                "",
                url.pathname +
                url.search
            );


            await abrirPerfilPublicoDesdeURL(
                autorActualUsername
            );

        }


        return;
    }


    // =================================
    // VENÍA DE UN LINK DIRECTO
    // =================================

    origenLecturaCompartida =
        "enlace";


    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    if (
        sesion
    ) {

        await mostrarPortafolio();

    }

    else {

        mostrarInicioPublico();

    }

}


// =================================
// COMPARTIR ESCRITO
// =================================

function abrirCompartir(
    escrito
) {

    escritoCompartiendo =
        escrito;

    opcionPublico.classList.remove(
        "activa"
    );

    opcionPrivado.classList.remove(
        "activa"
    );


    if (
        escrito.privacidad ===
        "publico"
    ) {

        opcionPublico.classList.add(
            "activa"
        );

    }

    else {

        opcionPrivado.classList.add(
            "activa"
        );

}

    nombreCompartir.textContent =
        escrito.titulo;


    linkCompartir.value =
        "";


    estadoCompartir.textContent =
        "";


    // =================================
    // NORMALIZAR SHARE ID
    // =================================

    if (
        !escritoCompartiendo.shareId &&
        escritoCompartiendo.share_id
    ) {

        escritoCompartiendo.shareId =
            escritoCompartiendo.share_id;

    }


    // =================================
    // YA ESTÁ COMPARTIDO
    // =================================

    if (
        escritoCompartiendo.shareId
    ) {

        const enlace =
            window.location.origin +
            window.location.pathname +
            "?escrito=" +
            escritoCompartiendo.shareId;


        linkCompartir.value =
            enlace;


        resultadoCompartir.style.display =
            "block";


        if (
            escritoCompartiendo.privacidad ===
            "publico"
        ) {

            estadoCompartir.textContent =
                "🌎 Este enlace está configurado como público.";

        }

        else {

            estadoCompartir.textContent =
                "🔒 Este enlace está configurado como privado.";

        }

    }

    else {

        resultadoCompartir.style.display =
            "none";

    }


    modalCompartir.style.display =
        "flex";

}


// =================================
// GENERAR IDENTIFICADOR
// =================================

function generarIdentificador() {

    const caracteres =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


    let identificador =
        "";


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        const posicion =
            Math.floor(
                Math.random() *
                caracteres.length
            );


        identificador +=
            caracteres[posicion];

    }


    return identificador;

}


// =================================
// GENERAR ENLACE
// =================================

async function generarEnlaceCompartir(
    privacidad
) {

    if (
        escritoCompartiendo === null
    ) {

        return;

    }


    estadoCompartir.textContent =
        "Generando enlace...";


    // =================================
    // NORMALIZAR SHARE ID
    // =================================

    if (
        !escritoCompartiendo.shareId &&
        escritoCompartiendo.share_id
    ) {

        escritoCompartiendo.shareId =
            escritoCompartiendo.share_id;

    }


    // =================================
    // CREAR SHARE ID
    // =================================

    if (
        !escritoCompartiendo.shareId
    ) {

        escritoCompartiendo.shareId =
            generarIdentificador();

    }


    // =================================
    // GUARDAR SUPABASE
    // =================================

    const resultado =
        await clienteSupabase
            .from("escritos")
            .update({

                share_id:
                    escritoCompartiendo.shareId,

                privacidad:
                    privacidad

            })
            .eq(
                "id",
                escritoCompartiendo.id
            );


    if (
        resultado.error
    ) {

estadoCompartir.textContent =
            "No se pudo generar el enlace.";


        return;

    }


    // =================================
    // ACTUALIZAR LOCAL
    // =================================

    escritoCompartiendo.privacidad =
        privacidad;


    escritoCompartiendo.share_id =
        escritoCompartiendo.shareId;


    const escritoLocal =
        escritos.find(
            function(item) {

                return (
                    item.id ===
                    escritoCompartiendo.id
                );

            }
        );


    if (
        escritoLocal
    ) {

        escritoLocal.shareId =
            escritoCompartiendo.shareId;


        escritoLocal.share_id =
            escritoCompartiendo.shareId;


        escritoLocal.privacidad =
            privacidad;

    }

    mostrarEscritos();

    opcionPublico.classList.remove(
        "activa"
    );

    opcionPrivado.classList.remove(
        "activa"
    );


    if (
        privacidad ===
        "publico"
    ) {

        opcionPublico.classList.add(
            "activa"
        );

    }

    else {

        opcionPrivado.classList.add(
            "activa"
        );

}


    // =================================
    // CREAR ENLACE
    // =================================

    const enlace =
        window.location.origin +
        window.location.pathname +
        "?escrito=" +
        escritoCompartiendo.shareId;


    linkCompartir.value =
        enlace;


    resultadoCompartir.style.display =
        "block";


    if (
        privacidad === "publico"
    ) {

        estadoCompartir.textContent =
            "🌎 Este enlace está configurado como público.";

    }

    else {

        estadoCompartir.textContent =
            "🔒 Este enlace está configurado como privado.";

    }


    guardarEscritoDB(
        escritoCompartiendo
    );


}


// =================================
// DEJAR DE COMPARTIR
// =================================

async function ejecutarDejarDeCompartir(
    escrito
) {

    if (
        !escrito
    ) {

        return;

    }


    const confirmar =
        await mostrarPopup(
            "Dejar de compartir",
            "El enlace dejará de funcionar y el escrito volverá a quedar privado.",
            "Dejar de compartir",
            "Cancelar",
            "🔒"
        );


    if (
        !confirmar
    ) {

        return;

    }


    estadoCompartir.textContent =
        "Dejando de compartir...";


    // =================================
    // ACTUALIZAR SUPABASE
    // =================================

    const resultado =
        await clienteSupabase
            .from("escritos")
            .update({

                share_id:
                    null,

                privacidad:
                    "privado"

            })
            .eq(
                "id",
                escrito.id
            );


    if (
        resultado.error
    ) {

estadoCompartir.textContent =
            "No se pudo dejar de compartir.";


        return;

    }


    // =================================
    // ACTUALIZAR OBJETO
    // =================================

    escrito.shareId =
        null;


    escrito.share_id =
        null;


    escrito.privacidad =
        "privado";


    guardarEscritoDB(
        escrito
    );

    mostrarEscritos();


    const escritoLocal =
        escritos.find(
            function(item) {

                return (
                    item.id ===
                    escrito.id
                );

            }
        );


    if (
        escritoLocal
    ) {

        escritoLocal.shareId =
            null;


        escritoLocal.share_id =
            null;


        escritoLocal.privacidad =
            "privado";

    }


    linkCompartir.value =
        "";


    resultadoCompartir.style.display =
        "none";


    estadoCompartir.textContent =
        "✓ El escrito ya no está compartido.";


}


// =================================
// BOTÓN PÚBLICO
// =================================

opcionPublico.addEventListener(
    "click",
    function() {

        generarEnlaceCompartir(
            "publico"
        );

    }
);


// =================================
// BOTÓN PRIVADO
// =================================

opcionPrivado.addEventListener(
    "click",
    function() {

        generarEnlaceCompartir(
            "privado"
        );

    }
);


// =================================
// BOTÓN DEJAR DE COMPARTIR
// =================================

dejarDeCompartir.addEventListener(
    "click",
    function() {

        ejecutarDejarDeCompartir(
            escritoCompartiendo
        );

    }
);


// =================================
// CERRAR COMPARTIR
// =================================

cerrarCompartir.addEventListener(
    "click",
    cerrarModalCompartir
);


function cerrarModalCompartir() {

    modalCompartir.style.display =
        "none";


    escritoCompartiendo =
        null;


    nombreCompartir.textContent =
        "Nombre del escrito";


    linkCompartir.value =
        "";


    resultadoCompartir.style.display =
        "none";


    estadoCompartir.textContent =
        "";

}


// =================================
// CERRAR MODALES AL HACER CLICK AFUERA
// =================================

window.addEventListener(
    "click",
    function(event) {

        // =================================
        // SUBIR
        // =================================

        if (
            event.target ===
            modalSubir
        ) {

            cerrarModalSubir();

        }

        if (
            event.target ===
            modalFormatoGuardar
        ) {

            modalFormatoGuardar.style.display =
                "none";

        }


        if (
            event.target ===
            modalDescargarEscrito
        ) {

            modalDescargarEscrito.style.display =
                "none";

        }


        // =================================
        // ELEGIR CUENTA
        // =================================

        if (
            event.target ===
            modalElegirCuenta
        ) {

            cerrarModalElegirCuenta();

        }


        // =================================
        // PERFIL PÚBLICO
        // =================================

        if (
            event.target ===
            modalPerfilPublico
        ) {

            cerrarModalPerfilPublico();

        }


        // =================================
        // CONTRASEÑA
        // =================================

        if (
            event.target ===
            modalContrasena
        ) {

            cerrarModalContrasena();

        }


        // =================================
        // MI CUENTA
        // =================================

        if (
            event.target ===
            modalCuenta
        ) {

            cerrarModalCuenta();

        }


        // =================================
        // COMPARTIR
        // =================================

        if (
            event.target ===
            modalCompartir
        ) {

            cerrarModalCompartir();

        }


        // =================================
        // LECTURA
        // =================================

        if (
            event.target ===
            modalLectura
        ) {

            cerrarModalLectura();

        }


        // =================================
        // EDITAR
        // =================================

        if (
            event.target ===
            modalEditar
        ) {

            modalEditar.style.display =
                "none";


            escritoEditando =
                null;

        }

    }
);

//segundo ventana event listener por si cierra la pestaña mientras hace un texto

// =================================
// GUARDAR ANTES DE CERRAR PÁGINA
// =================================

window.addEventListener(
    "beforeunload",
    function() {

        const titulo =
            nuevoEscritoTitulo.value.trim();


        const contenido =
            editorQuill
                .getText()
                .trim();


        if (
            titulo !== "" ||
            contenido !== ""
        ) {

            guardarBorradorEditor();

        }

    }
);

// =================================
// COPIAR ENLACE
// =================================

copiarLink.addEventListener(
    "click",
    function() {

        if (
            linkCompartir.value === ""
        ) {

            return;

        }


        navigator.clipboard
            .writeText(
                linkCompartir.value
            )
            .then(
                function() {

                    copiarLink.textContent =
                        "✓ Copiado";


                    estadoCompartir.textContent =
                        "Enlace copiado correctamente.";


                    setTimeout(
                        function() {

                            copiarLink.textContent =
                                "Copiar";

                        },
                        1500
                    );

                }
            )
            .catch(
                function() {

                    linkCompartir.select();


                    document.execCommand(
                        "copy"
                    );


                    copiarLink.textContent =
                        "✓ Copiado";


                    estadoCompartir.textContent =
                        "Enlace copiado correctamente.";


                    setTimeout(
                        function() {

                            copiarLink.textContent =
                                "Copiar";

                        },
                        1500
                    );

                }
            );

    }
);


//boton ver perfil

btnVerMiPerfil.addEventListener(
    "click",
    async function() {

        const resultadoUsuario =
            await clienteSupabase.auth.getUser();


        if (
            resultadoUsuario.error ||
            !resultadoUsuario.data.user
        ) {

            mostrarAviso(
                "No se pudo identificar tu cuenta."
            );

            return;
        }


        const usuarioActual =
            resultadoUsuario.data.user;


        const resultadoPerfil =
            await clienteSupabase
                .from("perfiles")
                .select(
                    "username"
                )
                .eq(
                    "id",
                    usuarioActual.id
                )
                .maybeSingle();


        if (
            resultadoPerfil.error ||
            !resultadoPerfil.data ||
            !resultadoPerfil.data.username
        ) {

            mostrarAviso(
                "Primero debes guardar un nombre de usuario."
            );

            return;
        }


        const username =
            resultadoPerfil.data.username;


        cerrarModalCuenta();


        const url =
            new URL(
                window.location.href
            );


        url.searchParams.delete(
            "escrito"
        );


        url.searchParams.set(
            "autor",
            username
        );


        window.history.pushState(
            {},
            "",
            url.pathname +
            url.search
        );


        await abrirPerfilPublicoDesdeURL(
            username
        );

    }
);

// copiar enlace

btnCopiarMiPerfil.addEventListener(
    "click",
    async function() {

        const resultadoUsuario =
            await clienteSupabase.auth.getUser();


        if (
            resultadoUsuario.error ||
            !resultadoUsuario.data.user
        ) {

            mostrarAviso(
                "No se pudo identificar tu cuenta."
            );

            return;
        }


        const usuarioActual =
            resultadoUsuario.data.user;


        const resultadoPerfil =
            await clienteSupabase
                .from("perfiles")
                .select(
                    "username"
                )
                .eq(
                    "id",
                    usuarioActual.id
                )
                .maybeSingle();


        if (
            resultadoPerfil.error ||
            !resultadoPerfil.data ||
            !resultadoPerfil.data.username
        ) {

            mostrarAviso(
                "Primero debes guardar un nombre de usuario."
            );

            return;
        }


        const enlace =
            window.location.origin +
            window.location.pathname +
            "?autor=" +
            encodeURIComponent(
                resultadoPerfil.data.username
            );


        await navigator.clipboard.writeText(
            enlace
        );


        btnCopiarMiPerfil.textContent =
            "✓ Enlace copiado";


        setTimeout(
            function() {

                btnCopiarMiPerfil.textContent =
                    "🔗 Copiar enlace de mi perfil";

            },
            1500
        );

    }
);

async function actualizarCuentaInicio() {

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    // =================================
    // SIN SESIÓN
    // =================================

    if (
        !sesion
    ) {

        btnInicioLogin.style.display =
            "block";


        cuentaInicio.style.display =
            "none";


        return;
    }


    // =================================
    // CON SESIÓN
    // =================================

    btnInicioLogin.style.display =
        "none";


    cuentaInicio.style.display =
        "block";


    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select(
                "nombre_autor, username"
            )
            .eq(
                "id",
                sesion.user.id
            )
            .maybeSingle();


    const perfil =
        resultadoPerfil.data;


    let nombre =
        "Usuario";


    if (
        perfil
    ) {

        nombre =
            perfil.nombre_autor ||
            perfil.username ||
            "Usuario";

    }


    nombreCuentaInicio.textContent =
        "Hola, " + nombre;

}

btnCuentaInicio.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        cuentaInicio.classList.toggle(
            "abierto"
        );

    }
);


document.addEventListener(
    "click",
    function() {

        cuentaInicio.classList.remove(
            "abierto"
        );

        cuentaExplorar.classList.remove(
            "abierto"
        );

    }
);

btnMenuMiCuenta.addEventListener(
    "click",
    async function() {

        cuentaInicio.classList.remove(
            "abierto"
        );


        await mostrarPortafolio();


        btnMiCuenta.click();

    }
);

btnMenuCerrarSesion.addEventListener(
    "click",
    function() {

        cuentaInicio.classList.remove(
            "abierto"
        );


        cerrarSesion();

    }
);

async function obtenerNombreUsuarioActual() {

    const resultadoSesion =
        await clienteSupabase.auth.getSession();


    const sesion =
        resultadoSesion.data.session;


    if (
        !sesion
    ) {

        return null;
    }


    const resultadoPerfil =
        await clienteSupabase
            .from("perfiles")
            .select(
                "nombre_autor, username"
            )
            .eq(
                "id",
                sesion.user.id
            )
            .maybeSingle();


    const perfil =
        resultadoPerfil.data;


    if (
        perfil
    ) {

        return (
            perfil.nombre_autor ||
            perfil.username ||
            "Usuario"
        );

    }


    return "Usuario";

}

async function actualizarCuentaExplorar() {

    const nombre =
        await obtenerNombreUsuarioActual();


    if (
        !nombre
    ) {

        btnExplorarLogin.style.display =
            "block";


        cuentaExplorar.style.display =
            "none";


        return;
    }


    btnExplorarLogin.style.display =
        "none";


    cuentaExplorar.style.display =
        "block";


    nombreCuentaExplorar.textContent =
        "Hola, " + nombre;

}


btnCuentaExplorar.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();


        cuentaExplorar.classList.toggle(
            "abierto"
        );

    }
);

btnMenuMiCuentaExplorar.addEventListener(
    "click",
    async function() {

        cuentaExplorar.classList.remove(
            "abierto"
        );


        await mostrarPortafolio();


        btnMiCuenta.click();

    }
);

btnMenuCerrarSesionExplorar.addEventListener(
    "click",
    async function() {

        cuentaExplorar.classList.remove(
            "abierto"
        );


        await cerrarSesion();

    }
);

btnIrExplorar.addEventListener(
    "click",
    async function() {

        await mostrarExplorar();

    }
);

btnCerrarSesionCuenta.addEventListener(
    "click",
    async function() {

        modalCuenta.style.display =
            "none";


        await cerrarSesion();

    }
);

btnExplorarVolverInicio.addEventListener(
    "click",
    async function() {

        await mostrarInicioPublico();

    }
);

btnLoginVolverInicio.addEventListener(
    "click",
    function() {

        mostrarInicioPublico();

    }
);

btnLoginGoogle.addEventListener(
    "click",
    async function() {

        const resultado =
            await clienteSupabase.auth.signInWithOAuth({
                provider:
                    "google",

                options: {

                    redirectTo:
                        "https://alegaelg.github.io/VersoLibre/",

                    queryParams: {
                        prompt:
                            "select_account"
                    }

                }
            });


        if (
            resultado.error
        ) {

            console.log(
                "Error al iniciar con Google:",
                resultado.error
            );

        }

    }
);

btnInicioLogin.addEventListener(
    "click",
    function() {

        mostrarLogin();

    }
);
