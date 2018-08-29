module.exports = name => {
    const Model = require(`../models/${ name }.models.js`)
    
    class Controller {
        
        static index(req, res, next) {
            Model.index()
                .then(response => res.status(201).json({ [name]: response }))
        }

        static show(req, res, next) {
            Model.show(req.params.id)
                .then(response => res.status(201).json({ [name]: response }))
        }

        static create(req, res, next) {
            Model.create(req.body)
                .then(response => res.status(201).json({ [name]: response }))
        }

        static update(req, res, next) {
            Model.update(req.params.id, req.body)
                .then(response => res.status(200).json({ [name]: response }))
        }

        static destroy(req, res, next) {
            Model.destroy(req.params.id)
                .then(response => res.status(202).json({ [name]: response }))
        }

    }

    return Controller
};