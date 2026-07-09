        //  PANEEEEEEL
        const botonAbrir = document.querySelector('.hamburguesa');
        const botonCerrar = document.querySelector('.btn-cerrar-panel');
        const panel = document.getElementById('paneloculto');

        // presionar el boton y el panel seabre ,llama a mi funcion
        botonAbrir.addEventListener('click', () => {
            panel.classList.add('panel-abierto');
        });

        // se cierra el panel aca
        botonCerrar.addEventListener('click', () => {
            panel.classList.remove('panel-abierto');
        });
    
    //  LÓGICA DEL CARRUUUSEEEEEL
    const slides = document.querySelectorAll('.foto-slide');
    const puntos = document.querySelectorAll('.punto');
    const btnNext = document.querySelector('.flecha.next');
    const btnPrev = document.querySelector('.flecha.prev');
    
    let indexActual = 0;

    function mostrarSlide(index) {
        // aca se mueve las imagenes
        slides.forEach(slide => slide.classList.remove('active'));
        puntos.forEach(punto => punto.classList.remove('active'));

        // inicia la foto cuando llega en el ultimo foto
        if (index >= slides.length) indexActual = 0;
        if (index < 0) indexActual = slides.length - 1;

        // siguente elemento se activa
        slides[indexActual].classList.add('active');
        puntos[indexActual].classList.add('active');
    }
    // Avanza foto
    function proximaFoto() {
        indexActual++;
        mostrarSlide(indexActual);
    }
    // Retrocede foto
    function fotoAnterior() {
        indexActual--;
        mostrarSlide(indexActual);
    }
    // Eventos de los botoncitos
    btnNext.addEventListener('click', () => {
        proximaFoto();
    });
    btnPrev.addEventListener('click', () => {
        fotoAnterior();
    });
    // Eventos para los puntitos inferiores
    puntos.forEach((punto, i) => {
        punto.addEventListener('click', () => {
            indexActual = i;
            mostrarSlide(indexActual);
        });
    });

   // --- VENTANAAA MODAAAAAAL
const modal = document.getElementById('modalLibro');
const btnCerrarModal = document.querySelector('.modal-cerrar');
const botonesVerMas = document.querySelectorAll('.btn-vermas');
// elementos del modal que son internos
const modalImg = document.getElementById('modalImagen');
const modalCat = document.getElementById('modalCategoria');
const modalTit = document.getElementById('modalTitulo');
const modalDesc = document.getElementById('modalSintesis');
const modalPrec = document.getElementById('modalPrecio');
const modalAutor = document.getElementById('modalAutorText');
const modalFecha = document.getElementById('modalFechaText');
// informacion aca
const datosLibrosFaro = {
    "El Principito": { 
        autor: "Antoine de Saint-Exupéry", 
        fecha: "1943",
        sintesis: "Una obra maestra de la literatura universal que, a través de los ojos de un pequeño príncipe, explora de forma poética y filosófica temas tan profundos como el amor, la amistad, la soledad y la pérdida de los valores esenciales de los adultos frente a la pureza de la infancia."
    },
    "El Señor de los anillos": { 
        autor: "J.R.R. Tolkien", 
        fecha: "1954",
        sintesis: "La gran epopeya de la fantasía épica moderna. En la Tierra Media, un modesto hobbit es encomendado con la colosal y terrible tarea de destruir el Anillo Único en las entrañas del Monte del Destino para derrotar para siempre las fuerzas oscuras del Señor Oscuro Sauron."
    },
    "Don Quijote de la Mancha": { 
        autor: "Miguel de Cervantes", 
        fecha: "1605",
        sintesis: "La parodia definitiva de las novelas de caballería que revolucionó la literatura universal. Sigue las andanzas de un hidalgo idealista y de su fiel escudero, Sancho Panza, batallando contra molinos de viento en un mundo que prefiere la cruda realidad antes que los nobles ideales medievales."
    },
    "El niño con piyama a rayas": { 
        autor: "John Boyne", 
        fecha: "2006",
        sintesis: "Una conmovedora e impactante crónica ambientada en el Holocausto. A través de la mirada inocente de Bruno, el hijo de un comandante nazi, se retrata el contraste de la amistad prohibida con Shmuel, un niño judío cautivo al otro lado de la cerca de púas."
    },
    "Noches Blancas": { 
        autor: "Fiódor Dostoyevski", 
        fecha: "1848",
        sintesis: "Un viaje sentimental por la melancolía de San Petersburgo. Durante las mágicas noches de verano donde el sol nunca se oculta por completo, un joven soñador comparte confidencias y anhelos con Nástenka, tejiendo un romance tan efímero como dolorosamente inolvidable."
    },
    "El Mago de Oz": { 
        autor: "L. Frank Baum", 
        fecha: "1900",
        sintesis: "El clásico cuento fantástico norteamericano. Tras ser arrastrada por un tornado desde Kansas, la pequeña Dorothy debe seguir el camino de baldosas amarillas en una travesía llena de magia para encontrar al misterioso Mago, acompañada por aliados memorables en busca de corazón, cerebro y valor."
    }
};
// Eventos
botonesVerMas.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const tarjeta = e.target.closest('.tarjeta-producto');
        
        // seestira la informacion del html
        const titulo = tarjeta.querySelector('h3').textContent.trim();
        const categoria = tarjeta.querySelector('.producto-categoria').textContent.trim();
        const imagenSrc = tarjeta.querySelector('.producto-imagen img').src;
        const precio = tarjeta.querySelector('.producto-precio').textContent.trim();
        // ponemos la inforacion en la ventana modal
        modalImg.src = imagenSrc;
        modalCat.textContent = categoria;
        modalTit.textContent = titulo;
        modalPrec.textContent = precio;
        // se agrega los datos de  la base de datos chikitito
        if (datosLibrosFaro[titulo]) {
            modalAutor.textContent = datosLibrosFaro[titulo].autor;
            modalFecha.textContent = datosLibrosFaro[titulo].fecha;
            modalDesc.textContent = datosLibrosFaro[titulo].sintesis;
        } else {
            modalDesc.textContent = tarjeta.querySelector('.producto-descripcion').textContent;
            modalAutor.textContent = "Anónimo";
            modalFecha.textContent = "Desconocida";
        }
        modal.classList.add('mostrar');
    });
});
btnCerrarModal.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

// CONTADOR CARRITOOOOO
document.addEventListener('DOMContentLoaded', () => {
    let cantidadProductos = parseInt(localStorage.getItem('carritoContador')) || 0;
    
    const contador = document.getElementById('contadorCarrito');
    
    if (contador) {
        contador.textContent = cantidadProductos;
    }

    document.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'BUTTON' && e.target.innerText.includes('Añadir al Carrito')) {
            
            cantidadProductos++; 
            
            localStorage.setItem('carritoContador', cantidadProductos);
            
            if (contador) {
                contador.textContent = cantidadProductos;
            }
        }
    });
});

