const Controller = require('./Controller.js')(`Sessions`);
const { UsersModel, OrganizationsModel, SessionsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const moment = require('moment')
const dateFormat = 'MM-DD-YYYY'
const timeFormat = '+-HH:mm a'


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
        // !!!!!!!!! temp use of moment on: DATE && START_TIME for route testing !!!!!!!!!
        req.body.date = moment(req.body.date, dateFormat).format()
        req.body.start_time = moment(req.body.start_time, timeFormat).format()
        
        validate.sessionCreate(req.body, parseInt(req.params.id))
            .then(() => OrganizationsModel.show(req.params.id))
            .then(() =>  UsersModel.show(req.body.user_id))
            .then(user => {
                if (user.can_create_session !== true) throw new Error('userCanNotCreateSession')
            })
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
