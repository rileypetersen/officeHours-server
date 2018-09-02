const Controller = require('./Controller.js')(`Sessions`);
const { SessionsModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');


class SessionsController extends Controller {
    constructor(){
        super()
    };

    static show(req, res, next) {
        OrganizationsModel.show(req.params.id)
            .then(() => SessionsModel.show(req.params.sid))
            .then(data => res.status(201).json({ data }))
            .catch(err => next(err))
    };

    static isValidSessionCreate(req, res, next) {
    // validate.sessionCreate(req.body)
    //   .then(() =>  UsersModel.show(req.body.user_id))
    //   .then(() => OrganizationsModel.getOrgByName(req.params.id))
    //   .then(org => {
    //     if (org !== undefined) throw new Error('alreadyOrg')
    //     next()
    //   })
    //   .catch(err => next(err));
    };

    static isValidSessionPatch(req, res, next) {
    // validate.orgUpdate(req.body)
    //   .then(() => OrganizationsModel.show(req.params.id))
    //   .then(() => OrganizationsModel.update(req.params.id, req.body))
    //   .then(data => res.status(201).json({ data }))
    //   .catch(err => next(err));
    };

};


module.exports = SessionsController;
