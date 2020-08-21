const { io } = require('../server');

//informe de quien se ha conectado
io.on('connection', (client) => {
    console.log(`Usuario conectado`);

    //envia al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admintrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => { console.log(`Usuario desconectado`); });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*if (mensaje.usuario) {
            callback({ resp: 'Todo salio bien' });
        } else {
            callback({ resp: 'TODO SALDIO MAAAAL' });
        }*/

    });
});