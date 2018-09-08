module.exports = name => {

    const Model = require(`../models/${ name }.model.js`);
    
    class Controller {
        
        static index(req, res, next) {
            Model.index();
                .then(data => res.status(201).json({ data }));
                .catch(err => next(err));
        };

        static show(req, res, next) {
            Model.show(req.params.id);
                .then(data => res.status(201).json({ data }));
                .catch(err => next(err));
        };

        static create(req, res, next) {
            Model.create(req.body);
                .then(data => res.status(201).json({ data }));
                .catch(err => next(err));
        };

        static update(req, res, next) {
            Model.update(req.params.id, req.body);
                .then(data => res.status(200).json({ data }));
                .catch(err => next(err));
        };

        static destroy(req, res, next) {
            Model.destroy(req.params.id);
                .then(data => res.status(202).json({ data }));
                .catch(err => next(err));
        };

    };

    return Controller;

};