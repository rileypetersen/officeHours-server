const Controller = require('./Controller.js')(`Meetings`);
const { UsersModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');


class MeetingsController extends Controller {
  constructor(){
    super()
  };

  static show(req, res, next) {
    OrganizationsModel.show(req.params.id)
      .then(() => SessionsModel.show(req.params.sid))
      .then(() => MeetingsModel.show(req.params.mid))
      .then(data => res.status(201).json({ data }))
      .catch(err => next(err))
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
