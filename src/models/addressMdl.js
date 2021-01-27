const db = require("../config/mySQL");

module.exports = {
    newAddress: (req, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO address_customer SET ?";
            db.query(queryString, [req, user_id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },
    
    updateAddress: (req, id, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE address_customer SET ? WHERE id_address = " + id
            db.query(queryString, [req, user_id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },


    getAddressByUser: (user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "SELECT a.id_address, a.fullname, a.address, a.city, a.zip_code, a.country, u.id FROM address_customer AS a JOIN users AS u on u.id = a.user_id WHERE user_id = " + user_id;
            db.query(queryString, user_id, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            })
        })
    }
}