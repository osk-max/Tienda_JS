// VARIABLES
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();

function cargarEventListeners() {
  // Cuando se agrega un curso presionando btn "Agregar al Carrito"
  listaCursos.addEventListener('click', agregarCurso);

};

// FUNCIONES
function agregarCurso(e) {
  e.preventDefault();
  if( e.target.classList.contains( 'agregar-carrito' ) ) {
    console.log( 'Si tiene la clase agregar-carrito' );
  } else {
    console.log('No tiene la clase agregar-carrito');
  }  
}

