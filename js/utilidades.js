function pagarPrenda() {
    alert("¡Pago Exitoso!");
}

function comprarPrenda() {
    alert("¡Gracias por su compra!");
}

function agregarCarrito(){
    alert("¡Se agrego exitosamente!")
}


function agregarImagen(url, nombre, callback) {
    const img = new Image();
    img.src = url;
    img.alt = nombre;
    imagen.style.marginRight = "auto";
    


    img.onload = function() {
        console.log(`La imagen ${nombre} se cargó correctamente`);
        if (callback) callback();
    };

    img.onerror = function() {
        console.error(`Hubo un error al cargar la imagen ${nombre}`);
        if (callback) callback();
    };

    document.body.appendChild(img);
}




