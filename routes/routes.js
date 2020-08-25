const express = require('express');

const MySQL = require('../mysql/mysql');

let conn = new MySQL();

const app = express();

app.get('/usuarios', (req, res) => {

    let query = `SELECT * FROM usuarios`

    conn.ejecutarQuery(query, (err, usuariosDB) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuariosDB
        })


    })

})

module.exports = app;