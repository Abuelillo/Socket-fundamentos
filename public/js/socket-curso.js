var socket = io();

//escuchar sucesos --ON
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//para enviar informacion --EMIT
socket.emit('enviarMensaje', {
    usuario: 'juan',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server :' + resp.resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje.mensaje);
});