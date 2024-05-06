const banner = document.querySelector('.banner')
const bannerItems = document.querySelectorAll('.banner-item')
let currentItemIndex = 0

function changeItem() {
  bannerItems[currentItemIndex].style.display = 'none'
  currentItemIndex = (currentItemIndex + 1) % bannerItems.length
  bannerItems[currentItemIndex].style.display = 'block'
}
setInterval(changeItem, 3000)

const scrollableSection = document.getElementById('scrollable-section')
const tituloMarcas = document.getElementById('tituloMarcas')
const subtituloMarcas = document.getElementById('subtituloMarcas')

const contenidoTitulo = 'Las marcas más populares'
const contenidoSubtitulo = 'Distribuidores oficiales de las marcas'

tituloMarcas.textContent = contenidoTitulo
subtituloMarcas.textContent = contenidoSubtitulo
const marcas = [
  './assets/marcas1.webp',
  './assets/marcas2.webp',
  './assets/marcas3.webp',
  './assets/marcas4.webp',
  './assets/marcas5.webp',
  './assets/marcas6.webp',
  './assets/marcas7.webp',
  './assets/marcas8.webp',
  './assets/marcas9.webp',
  './assets/marcas10.webp',
  './assets/marcas12.webp',
  './assets/marcas1.webp',
  './assets/marcas2.webp',
  './assets/marcas3.webp',
  './assets/marcas4.webp',
  './assets/marcas7.webp'
]

function agregarMarcas() {
  const marcasContainer = document.getElementById('marcasContainer')

  marcas.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
    marcasContainer.appendChild(img)
  })
}
window.onload = function () {
  agregarMarcas()
}
const seccion = document.getElementById('miSeccion')
const titulo = document.createElement('h2')
titulo.textContent = 'Gafas graduadas'

seccion.appendChild(titulo)

const gafasrx = [
  {
    id: 1,
    codigo: 'Gafa Emporio Armani',
    precio: 150,
    material: 'metal',
    estilo: 'rx',
    genero: 'Mujer',
    color: ['black', 'silver'],
    nombre: 'Emporio Armani',
    img: './assets/gafaemporiomujer.png'
  },

  {
    id: 2,
    codigo: 'Gafas Prada',
    precio: 200,
    material: 'metal',
    estilo: 'rx',
    genero: 'mujer',
    color: ['black', 'silver'],
    nombre: 'Prada',
    img: './assets/pradamujerrx.png'
  },
  {
    id: 3,
    codigo: 'Gafa Dolce & Gabbana',
    precio: 280,
    material: 'acetato',
    estilo: 'rx',
    genero: 'mujer',
    color: ['brown', 'gold'],
    nombre: 'Dolce & Gabbana',
    img: './assets/dolce graduado.png'
  },
  {
    id: 4,
    codigo: 'Gafa Prada',
    precio: 225,
    material: 'acetato',
    estilo: 'rx',
    genero: 'hombre',
    color: ['blue', 'red'],
    nombre: 'Prada',
    img: './assets/pradahombrerx.png'
  },
  {
    id: 5,
    codigo: 'Gafa Timberland',
    precio: 170,
    material: 'acetato',
    estilo: 'rx',
    genero: 'hombre',
    color: ['black', 'brown'],
    nombre: 'Timberland',
    img: './assets/hombrerx.webp'
  },
  {
    id: 6,
    codigo: 'Gafa Rayban Round',
    precio: 140,
    material: 'metal',
    estilo: 'rx',
    genero: 'unisex',
    color: ['black', 'silver'],
    nombre: 'Rayban',
    img: './assets/round.png'
  },
  {
    id: 7,
    codigo: 'Gafa Emporio Armani',
    precio: 150,
    material: 'metal',
    estilo: 'rx',
    genero: 'Mujer',
    color: ['black', 'silver'],
    nombre: 'Emporio Armani',
    img: './assets/gafaemporiomujer.png'
  },

  {
    id: 8,
    codigo: 'Gafas Prada',
    precio: 200,
    material: 'metal',
    estilo: 'rx',
    genero: 'mujer',
    color: ['black', 'silver'],
    nombre: 'Prada',
    img: './assets/pradamujerrx.png'
  },
  {
    id: 9,
    codigo: 'Gafa Dolce & Gabbana',
    precio: 280,
    material: 'acetato',
    estilo: 'rx',
    genero: 'mujer',
    color: ['brown', 'gold'],
    nombre: 'Dolce & Gabbana',
    img: './assets/dolce graduado.png'
  },
  {
    id: 10,
    codigo: 'Gafa Prada',
    precio: 225,
    material: 'acetato',
    estilo: 'rx',
    genero: 'hombre',
    color: ['blue', 'red'],
    nombre: 'Prada',
    img: './assets/pradahombrerx.png'
  },
  {
    id: 11,
    codigo: 'Gafa Timberland',
    precio: 170,
    material: 'acetato',
    estilo: 'rx',
    genero: 'hombre',
    color: ['black', 'brown'],
    nombre: 'Timberland',
    img: './assets/hombrerx.webp'
  },
  {
    id: 12,
    codigo: 'Gafa Rayban Round',
    precio: 140,
    material: 'metal',
    estilo: 'rx',
    genero: 'unisex',
    color: ['black', 'silver'],
    nombre: 'Rayban',
    img: './assets/round.png'
  },
  {
    id: 13,
    codigo: 'Gafa Gucci',
    precio: 325,
    material: 'acetato',
    estilo: 'sol',
    genero: 'mujer',
    color: ['red', 'gols'],
    nombre: 'Gucci',
    img: './assets/versace-roja1.png'
  },
  {
    id: 14,
    codigo: 'Gafa Gucci',
    precio: 260,
    material: 'acetato',
    estilo: 'rx',
    genero: 'Unisex',
    color: ['black', 'brown'],
    nombre: 'Gucci',
    img: './assets/pradasolmujer.webp'
  },
  {
    id: 15,
    codigo: 'Gafa Ray Ban Hexagonal',
    precio: 119,
    material: 'metal',
    estilo: 'sol',
    genero: 'Unisex',
    color: ['gold', 'green'],
    nombre: 'Rayban',
    img: './assets/144718104.png'
  },
  {
    id: 16,
    codigo: 'Gafa Rayban State Street',
    precio: 145,
    material: 'acetato',
    estilo: 'sol',
    genero: 'mujer',
    color: ['black', 'brown'],
    nombre: 'Rayban',
    img: './assets/state.png'
  },
  {
    id: 17,
    codigo: 'Gafas Rayban Aviador',
    precio: 130,
    material: 'metal',
    estilo: 'sol',
    genero: 'Unisex',
    color: ['black', 'gray'],
    nombre: 'Rayban',
    img: './assets/aviador.png'
  },
  {
    id: 18,
    codigo: 'Gafas Gucci',
    precio: 360,
    material: 'acetato',
    estilo: 'sol',
    genero: 'hombre',
    color: ['black', 'white'],
    nombre: 'Gucci',
    img: './assets/gucci.png'
  },
  {
    id: 19,
    codigo: 'Gafa Gucci',
    precio: 325,
    material: 'acetato',
    estilo: 'sol',
    genero: 'mujer',
    color: ['red', 'gols'],
    nombre: 'Gucci',
    img: './assets/versace-roja1.png'
  },
  {
    id: 20,
    codigo: 'Gafa Gucci',
    precio: 260,
    material: 'acetato',
    estilo: 'rx',
    genero: 'Unisex',
    color: ['black', 'brown'],
    nombre: 'Gucci',
    img: './assets/pradasolmujer.webp'
  },
  {
    id: 21,
    codigo: 'Gafa Ray Ban Hexagonal',
    precio: 119,
    material: 'metal',
    estilo: 'sol',
    genero: 'Unisex',
    color: ['gold', 'green'],
    nombre: 'Rayban',
    img: './assets/144718104.png'
  },
  {
    id: 22,
    codigo: 'Gafa Rayban State Street',
    precio: 145,
    material: 'acetato',
    estilo: 'sol',
    genero: 'mujer',
    color: ['black', 'brown'],
    nombre: 'Rayban',
    img: './assets/state.png'
  },
  {
    id: 23,
    codigo: 'Gafas Rayban Aviador',
    precio: 130,
    material: 'metal',
    estilo: 'sol',
    genero: 'Unisex',
    color: ['black', 'gray'],
    nombre: 'Rayban',
    img: './assets/aviador.png'
  },
  {
    id: 24,
    codigo: 'Gafas Gucci',
    precio: 360,
    material: 'acetato',
    estilo: 'sol',
    genero: 'hombre',
    color: ['black', 'white'],
    nombre: 'Gucci',
    img: './assets/gucci.png'
  }
]

const sectionFiltros = document.querySelector('#filtros')
const sectionGafas = document.querySelector('#gafasrx')

const showVoidMessage = () => {
  sectionGafas.innerHTML = ''
  const voidMessage = document.createElement('h3')
  voidMessage.textContent = 'No hay resultados para esta búsqueda'
  sectionGafas.appendChild(voidMessage)
}

const filtro = () => {
  const selectNombreValue = document.querySelector('#nombre').value
  const precioValue = document.querySelector('#precio').value

  const gafasFiltradas = gafasrx.filter((gafa) => {
    const nombreMatch =
      selectNombreValue === '0' || gafa.nombre.includes(selectNombreValue)
    const precioMatch =
      precioValue === '' || gafa.precio <= parseFloat(precioValue)
    return nombreMatch && precioMatch
  })

  sectionGafas.innerHTML = ''

  if (gafasFiltradas.length > 0) {
    printGafas(gafasFiltradas)
  } else {
    showVoidMessage()
  }
}

const fillNombres = () => {
  const nombres = gafasrx.map((gafa) => gafa.nombre)
  return nombres.filter((nombre, index) => nombres.indexOf(nombre) === index)
}

const createSelect = (nombres) => {
  const inputLabel = document.createElement('label')
  inputLabel.textContent = 'Nombre'

  let selectNombre = document.createElement('select')
  selectNombre.setAttribute('id', 'nombre')
  selectNombre.className = 'form-control'

  const firstOption = document.createElement('option')
  firstOption.setAttribute('value', '0')
  firstOption.textContent = 'Todos'

  selectNombre.appendChild(firstOption)

  for (const nombre of nombres) {
    const option = document.createElement('option')
    option.setAttribute('value', nombre)
    option.textContent = nombre
    selectNombre.appendChild(option)
  }

  sectionFiltros.appendChild(inputLabel)
  sectionFiltros.appendChild(selectNombre)
}

const createInput = () => {
  const inputLabel = document.createElement('label')
  inputLabel.textContent = 'Filtrar por precio'

  const input = document.createElement('input')
  input.placeholder = 'Introduce un precio'
  input.setAttribute('id', 'precio')
  input.className = 'form-control'

  const button = document.createElement('button')
  button.textContent = 'Filtrar'
  button.className = 'form-control'

  sectionFiltros.appendChild(inputLabel)
  sectionFiltros.appendChild(input)
  sectionFiltros.appendChild(button)

  button.addEventListener('click', () => {
    filtro()
  })
}

const createCleanInput = () => {
  const button = document.createElement('button')
  button.textContent = 'Limpiar Filtros'
  button.className = 'form-control'

  sectionFiltros.appendChild(button)

  button.addEventListener('click', () => {
    document.querySelector('#nombre').value = '0'
    document.querySelector('#precio').value = ''
    sectionGafas.innerHTML = ''
    printGafas(gafasrx)
  })
}

const printGafas = (gafas) => {
  for (const gafa of gafas) {
    const divGafa = document.createElement('div')
    const divImg = document.createElement('div')
    const img = document.createElement('img')
    const nombre = document.createElement('h3')
    const precio = document.createElement('p')
    const material = document.createElement('p')

    nombre.textContent = gafa.nombre
    img.src = gafa.img
    precio.textContent = `${gafa.precio} €`
    material.textContent = gafa.material

    divGafa.appendChild(nombre)
    divGafa.appendChild(divImg)
    divImg.appendChild(img)
    divGafa.appendChild(precio)
    divGafa.appendChild(material)
    sectionGafas.appendChild(divGafa)
  }
}

createSelect(fillNombres())
createInput()
createCleanInput()
printGafas(gafasrx)

document
  .getElementById('cita-form')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('telefono').value
    let fecha = document.getElementById('fecha').value
    let mensaje = document.getElementById('mensaje').value

    console.log('Nombre: ' + nombre)
    console.log('Email: ' + email)
    console.log('Teléfono: ' + telefono)
    console.log('Fecha: ' + fecha)
    console.log('Mensaje: ' + mensaje)

    alert(
      'Cita solicitada con éxito. Nos pondremos en contacto contigo pronto.'
    )
  })
document
  .getElementById('newsletter')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    let email = document.getElementById('email').value

    console.log('Email: ' + email)

    alert('Gracias por suscribirte a nuestro boletín.')
  })

function suscribirse() {
  let email = document.getElementById('email').value
  let politicaPrivacidad = document.getElementById(
    'politica_privacidad'
  ).checked

  if (!politicaPrivacidad) {
    alert('Debes aceptar la política de privacidad para suscribirte.')
    return
  }

  alert(
    'Gracias por suscribirte a nuestra newsletter. Te mantendremos informado de nuestras novedades.'
  )
}
