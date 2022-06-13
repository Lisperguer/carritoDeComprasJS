// Compras que ya fueron seleccionadas y hay que agregarlas al carrito
const carrito = document.querySelector('#carrito');
// La tabla donde se van a ir agregando las cosas del carrito 
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
  // Cuando agregar un curso presionando "Agregar al carrito"
  listaCursos.addEventListener('click', agregarCurso)
}

//Funciones
function agregarCurso(e){
  e.preventDefault();
  // revisamos las clases que tiene, para así apuntar el click allí. e.targe es para ver qué hay dd hacemos click y classList para ver sus listas}
  if  (e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
}
//Ahora extraeremos la información al hacer click para agregarla al carrito

function leerDatosCurso(curso){
  // console.log(curso)

  //creat un objeto con todo el curso
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  console.log(infoCurso)

  //Agregar elemento a la lista con spread operator
  articulosCarrito = [...articulosCarrito, infoCurso];
  console.log(articulosCarrito);
  carritoHTML();
}

//Muestra el carrito de compras en el HTML

function carritoHTML(){
  limpiarHTML();
  articulosCarrito.forEach( (curso) =>{
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
      <img src="${curso.imagen}" width="100">
    </td>
    <td>
      ${curso.titulo}
    </td>
    <td>
    ${curso.precio}
  </td>
  <td>
  ${curso.cantidad}
</td>
    `;

    //Agrega el HTML del carrito en el tbody

    contenedorCarrito.appendChild(row);
  })
}

function limpiarHTML(){
  contenedorCarrito.innerHTML = '';
}