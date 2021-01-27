const db = require("../config/mySQL");

module.exports = {
    postAddress: (req, user_id) => {
        return new Promise((resolve, reject) => {
            const queryString = "INSERT INTO alamat SET ?";
            db.query(queryString, [req, user_id], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    },

    updateAddress: (update, idUser) => {
        return new Promise((resolve, reject) => {
            const queryString = "UPDATE alamat SET ? WHERE ?"
            db.query(queryString, [update, idUser], (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },

    getAddressByUserId: (user_id) => {
        
        return new Promise((resolve, reject) => {
            const queryString = "SELECT a.id, a.address, u.id, u.full_name FROM alamat AS a JOIN users AS u ON u.id = a.user_id"
            db.query(queryString, user_id, (err, data) => {
                if(!err) {
                    resolve(data);
                } else {
                    reject(err);
                }
            })
        })
    },
};