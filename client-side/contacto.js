document.getElementById('formulario-contacto').addEventListener('submit', function(event) {
    document.getElementById('spinner').style.display = 'block';
    document.getElementById('spinner-container').style.display = 'block';
    document.body.classList.add("body-back");
    event.preventDefault();
    var formData = new URLSearchParams(new FormData(this));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://portfolio-y4ke.onrender.com/enviar-correo', true);
    xhr.onload = function() {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('spinner-container').style.display = 'none';

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
        document.getElementById('spinner-container').style.display = 'none';
        document.getElementById('respuesta').innerHTML = 'Error al enviar el mensaje.';
        document.getElementById('respuesta-modal').style.top = '50%'
    };
    xhr.send(formData);
});

document.getElementById('cerrar-modal').addEventListener('click', function(event) {
    var respuesta = document.getElementById('respuesta').innerHTML;
    if(respuesta == 'Correo electrónico enviado correctamente'){
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    }
    document.body.classList.remove("body-back");
    document.getElementById('respuesta-modal').style.top = '-100%';
});
