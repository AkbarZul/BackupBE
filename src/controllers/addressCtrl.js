const addressCustModel = require("../models/addressMdl");
const form = require("../helpers/form");

module.exports = {
    newAddress: (req, res) => {
        const { body } = req;
        const user_id = req.decodedToken.id;
        const insertBody = {
            ...body,
            user_id: user_id,
        };
        addressCustModel.newAddress(insertBody, user_id).then((data) => {
            const newResObj = {
                id: data.insertId,
                ...insertBody,
            };
            form.success(res, newResObj);
        })
        .catch((err) => {
            form.error(res, err);
        })
    },

    updateAddress: (req, res) => {
        const { body } = req;
        const { id } = req.params;
        const user_id = req.decodedToken.id;
        const insertBody = {
            ...body,
        };
        addressCustModel.updateAddress(insertBody, id, res, user_id).then((data) => {
            if (data.affectedRows === 0) {
                res.status(404).json({
                    msg: "data not found",
                    status: 404,
                });
            } else {
                const newResObj = {
                    id: user_id,
                    ...insertBody,
                };
                form.success(res, newResObj);
            }
        })
        .catch((err) => {
            form.error(res, err);
        })
    },

    getAddressByUser: (req, res) => {
        const user_id = req.decodedToken.id;
        addressCustModel.getAddressByUser(user_id).then((data) => {
            form.success(res, data);
        }).catch((err) => {
            form.error(res, err);
        })
    }
}