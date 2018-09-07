const Controller = require('./Controller.js')(`Meetings`);
const { UsersModel, OrganizationsModel, SessionsModel, MeetingsModel } = require('../models');
const validate = require('../middleware/validations');


class MeetingsController extends Controller {
  constructor(){
    super()
  };

  static index(req, res, next) {
    OrganizationsModel.show(req.params.id)
      .then(() => SessionsModel.show(req.params.id, req.params.sid))
      .then(() => MeetingsModel.index(req.params.id, req.params.sid))
      .then(data => res.status(201).json({ data }))
      .catch(err => next(err));
  };

  static show(req, res, next) {
    OrganizationsModel.show(req.params.id)
      .then(() => SessionsModel.show(req.params.id, req.params.sid))
      .then(() => MeetingsModel.show(req.params.mid))
      .then(data => res.status(201).json({ data }))
      .catch(err => next(err));
  };

  static isValidMeetingCreate(req, res, next) {
    // validate.MeetingCreate(req.body)

    //   .catch(err => next(err));
  };

  static isValidMeetingPatch(req, res, next) {
    // validate.meetingUpdate(req.body)

    //   .catch(err => next(err));
  };

};


module.exports = MeetingsController;
