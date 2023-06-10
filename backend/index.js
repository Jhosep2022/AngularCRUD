require('./Config/conexion.js')

const express = require('express');
const port = process.env.PORT || 8080;
const app = express();

//admitir
app.use(express.json())

//configurar
app.set('port',port)


//rutas
app.use('/api', require('./router'))


//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})