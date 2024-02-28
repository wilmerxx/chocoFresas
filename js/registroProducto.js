const images = [
    "imagen/caja-con-fresas-chocolate-1.jpg",
    "imagen/caja-con-fresas-chocolate-2.jpg",
    "imagen/caja-con-fresas-chocolate-3.jpg",
    "imagen/caja-con-fresas-chocolate-4.jpg",
    "imagen/pincho-chocolate.jpg",
    "imagen/pincho-chocolate-blanco.jpg",
    "imagen/pincho-mixto.jpg",
];

const contenido = [
    "<h2>Caja cafe con Frutillas bañada en chocolate</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate</p> <p><b>Precio:</b> $12.25</p>",
    "<h2>Caja vehis y lazo con Frutillas y aderezo mixto</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate</p> <p><b>Precio:</b> $12.25</p>",
    "<h2>Caja rosada con Frutillas y aderezo mixto</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate</p> <p><b>Precio:</b> $12.25</p>",
    "<h2>Brochetas de Frutillas con aderezo mixto</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate una unidad</p> <p><b>Precio:</b> $0.25</p>",
    "<h2>Brochetas de Frutillas con aderezo de Chocholate</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate</p> <p><b>Precio:</b> $0.70</p>",
    "<h2>Brochetas de Frutillas con chocolate blanco</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate</p> <p><b>Precio:</b> $0.75</p>",
    "<h2>Brochetas de Frutillas mixto</h2> <p>Sobar a chocolate y frutillas y el toque de adereso de chocolate en cada brocheta vienen 4 frutillas</p> <p><b>Precio:</b> $1.25</p>",
]


const swiperWrapper = document.getElementById('swiper-wrapper');

// Generarar el slides dinamico
images.forEach((image, index) => {
    swiperWrapper.innerHTML += `
    <div class="swiper-slide text-center">
        <div class="swiper-slide-content">
            <div class="swiper-slide-image">
                <img class="producImg" src="${image}" alt="fresas" onclick="aumentarImagen3();">
            </div>
            <div class="swiper-slide-description">
                <p>${contenido[index]}</p>
            </div>
            <button type="button" class="btn" onclick="enviarPedido('${contenido[index]}','${image}');">🛒 Comprar</button>
        </div>
    </div>
`;
});

function enviarPedido(contenido,image){

   //enviar pedido por enlace de whatssap con la imagen y texto
    var mensaje = contenido;
     //colocar en negrita la etiqueta h2 al inicio y final
    mensaje = mensaje.replace(/<h2>/gi, "*");
    mensaje = mensaje.replace(/<\/h2>/gi, "*");
    //salto de linea en  el whatsaap %0A
    mensaje = mensaje.replace(/<p>/gi, "%0A");

    //borrar las etiquetas html del contenido 
    mensaje = mensaje.replace(/(<([^>]+)>)/gi, "");
   //agregar la imgaen con la siguiente ruta http://127.0.0.1:5500/imagen/logo.jpg
    image = "https://chocofresas.atwebpages.com/"+image;
    console.log(image);
    mensaje =  image  + "%0A"+ mensaje ;
    var url = "https://api.whatsapp.com/send?phone=593979941013&text=" + mensaje;
    window.open(url);
}

// Inicializar Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function aumentarImagen3() {
  // Obtener el elemento de la clase imagen
 const imagen = document.querySelectorAll('.producImg');

 imagen.forEach((imgen,index) => {
    imgen.addEventListener('click', () => {
        // Obtener el elemento de la clase imagen
        const imagen = document.querySelectorAll('.producImg');
        // Obtener el elemento de la clase imagen
        const classes = imagen[index].classList;
        //obtener el ancho del estilo
        const ancho = imagen[index].clientWidth;
        console.log(ancho)

        //disminuir la imagen cuando este el 100%
      
            if (ancho < 700) {
                //cambia el ancho
                imagen[index].style.width = "100%";
                //cambia la altura
                imagen[index].style.height = "100%";

            }else{
                //cambia el ancho
                imagen[index].style.width = "50%";
                //cambia la altura
                imagen[index].style.height = "50%";
            }

            //si tiene el tamaño movil 
            if (ancho > 148 && ancho < 300 ) {
                //cambia el ancho
                imagen[index].style.width = "50%";
                //cambia la altura
                imagen[index].style.height = "50%";
            }
    })
 })
}


function hacerPedido(){
    var mensaje = document.getElementById('subscription_phone').value;
     //colocar en negrita la etiqueta h2 al inicio y final
    mensaje = mensaje.replace(/<h2>/gi, "*");
    mensaje = mensaje.replace(/<\/h2>/gi, "*");
    //salto de linea en  el whatsaap %0A
    mensaje = mensaje.replace(/<p>/gi, "%0A");

    //borrar las etiquetas html del contenido 
    mensaje = mensaje.replace(/(<([^>]+)>)/gi, "");

    //agregar texto al mensaje
    mensaje = "Hola 🙋‍♂️, " + mensaje + "%0A" + "Como te podemos ayudar";


    var url = "https://api.whatsapp.com/send?phone=593979941013&text=" + mensaje;
    window.open(url);
}