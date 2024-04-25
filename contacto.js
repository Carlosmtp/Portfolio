document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    document.getElementById('spinner').style.display = 'block';
    document.body.classList.add("body-back");
    event.preventDefault();
    var formData = new URLSearchParams(new FormData(this));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/enviar-correo', true);
    xhr.onload = function() {
        document.getElementById('spinner').style.display = 'none';
        if (xhr.status === 200) {
            document.getElementById('respuesta').innerHTML = xhr.responseText;
            document.getElementById('respuesta-modal').style.top = '50%'
        } else {
            document.getElementById('respuesta').innerHTML = 'Error al enviar el mensaje.';
            document.getElementById('respuesta-modal').style.top = '50%'
        }
    };
    xhr.onerror = function() {
        document.getElementById('spinner').style.display = 'none'
        document.getElementById('respuesta').innerHTML = 'Error al enviar el mensaje.';
        document.getElementById('respuesta-modal').style.top = '50%'
    };
    xhr.send(formData);
});

document.getElementById('cerrar-modal').addEventListener('click', function(event) {
    document.body.classList.remove("body-back");
    document.getElementById('respuesta-modal').style.top = '-100%'
});
