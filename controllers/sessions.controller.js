const Controller = require('./Controller.js')(`Sessions`);
const { UsersModel, OrganizationsModel, SessionsModel, MeetingsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const moment = require('moment');
const dateFormat = 'MM-DD-YYYY';
const timeFormat = '+-HH:mm a';


class SessionsController extends Controller {
    constructor(){
        super()
    };

    static index(req, res, next) {
        OrganizationsModel.show(req.query.org_id)
            .then(() => SessionsModel.index(req.query.org_id))
            .then(sessions => {
                let promises = sessions.map((session) => {
                    return MeetingsModel.index(req.query.org_id, session.id)
                        .then((meetings) => {
                            session.meetings = meetings
                            return session
                        })
                })
                return Promise.all(promises)
            })
            .then(data => res.status(201).json({ data }))
            .catch(err => next(err));
    };

    static show(req, res, next) {
        OrganizationsModel.show(req.query.org_id)
            .then(() => SessionsModel.show(req.query.org_id, req.params.id))
            .then(data => res.status(201).json({ data }))
            .catch(err => next(err))
    };

    static isValidSessionCreate(req, res, next) {
        // !!!!!!!!! temp use of moment on: DATE && START_TIME for route testing !!!!!!!!!
        req.body.date = moment(req.body.date, dateFormat).format();
        req.body.start_time = moment(req.body.start_time, timeFormat).format();

        validate.sessionCreate(req.body, parseInt(req.query.org_id))
            .then(() =>  OrganizationsModel.showOrgUser(req.body.user_id, req.query.org_id))
            .then(user => {
                if (user.can_create_sessions !== true) throw new Error('userCanNotCreateSession');
                req.body.organizer_id = req.body.user_id
                delete req.body.user_id
                next();
            })
            .catch(err => next(err));
    };

    static isValidSessionPatch(req, res, next) {
        validate.sessionUpdate(req.body)
            .then(() => OrganizationsModel.show(req.query.org_id))
            .then(() => SessionsModel.show(req.query.org_id, req.params.id))
            .then(() => SessionsModel.update(req.params.id, req.body))
            .then(data => res.status(201).json({ data }))
            .catch(err => next(err));
    };

    static destroy(req, res, next) {
        SessionsModel.show(req.query.org_id, req.params.id)
            .then(() => SessionsModel.destroy(req.params.id))
            .then(data => res.status(201).json({ data }))
            .catch(err => next(err));
    };

};


module.exports = SessionsController;
