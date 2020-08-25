const mysql = require('mysql');

class MySQL {

    constructor() {
        this.cnn = mysql.createConnection({
            host     : 'b0fwnfszakvs762zm5uc-mysql.services.clever-cloud.com',
            user     : 'uvj5yvnqvndgtxpg',
            password : 'o3RpUda6dgZmZC5QcUH5',
            database : 'b0fwnfszakvs762zm5uc'
            
        })

        this.conectarDB();
    }

    conectarDB() {
        this.cnn.connect(err => {
            if (err) {
                console.log(err.message);
                return;
            }

            console.log('Conexión exitosa!!!');
        })
    }

    ejecutarQuery(query, callback) {
        this.cnn.query(query, (err, results, fields) => {
            if(err) {
                console.log("Error: ", err);
                return callback(err)
            }

            if (results.length === 0) {
                callback('El registro solicitado no existe');
            } else {
                callback(null, results)
            }
        })

    }

}

module.exports = MySQL;