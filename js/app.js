// Variables
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Ejecucion eventos
cargarEventListener();

// Eventos
function cargarEventListener() {
  listaCursos.addEventListener('click', agregarCarrito);
}

// Funciones
function agregarCarrito(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}

// Extrae informacion del curso
function leerDatosCurso(curso) {

  // Objeto con contenido clase actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').innerText,
    precio: curso.querySelector('.precio span').innerText,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  };

  // Valiadar si articulo ya esta en el carrito
   

  // Agrega elementos al arreglo carrito
  articulosCarrito = [...articulosCarrito, infoCurso];
  carritoHtml();
}

// Muestra los articulos de compras en el html
function carritoHtml() {
  // Limpiar el HTML
  limpiarHTML();

  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach(curso => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100">
      </td>
      <td>${titulo}</td>  
      <td>${precio}</td>     
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>     
    `;
    // Agrega el html del carrito en el tbody
    contenedorCarrito.appendChild(row);
  })
}

// Elimina los cursos del tbody
function limpiarHTML() {
  // Si el contenedorCarrito tiene al menos un elemento dentro este codigo se sigue ejecutando y una vez que es limpiado todo el HTML dentro de ese contenedor ya no se ejecuta
  while(contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}

