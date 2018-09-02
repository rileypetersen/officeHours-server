const Controller = require('./Controller.js')(`Meetings`);
const { UsersModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');


class MeetingsController extends Controller {
  constructor(){
    super()
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
