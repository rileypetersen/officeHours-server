const Controller = require('./Controller.js')(`Sessions`);
const { UsersModel, OrganizationsModel, SessionsModel } = require('../models');
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
        console.log("ctrl")
        // check for all required info 
        validate.sessionCreate(req.body)
            
            // ensure org exsits
            .then(() => OrganizationsModel.show(req.params.id))

            .then(() =>  UsersModel.show(req.body.user_id))
            .then(user => {
                // check if requesting user can create session
                console.log('this far???!!!')
            })

            // if we make it here, good to create new session
            .then(() => next())
            .catch(err => next(err));
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
