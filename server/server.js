const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(require('../routes/routes'));

app.listen(port, () => {
    console.log('Iniciando servidor en el puerto', port);
})
