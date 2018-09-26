const Controller = require('./Controller.js')(`Meetings`);
const { UsersModel, OrganizationsModel, SessionsModel, MeetingsModel } = require('../models');
const validate = require('../middleware/validations');


class MeetingsController extends Controller {
	constructor(){
		super()
	};

	static index(req, res, next) {
		OrganizationsModel.show(req.query.org_id)
			.then(() => MeetingsModel.getAllOrgMeetings(req.query.org_id))
			.then(data => res.status(201).json({ data }))
			.catch(err => next(err));
	};

	static show(req, res, next) {
		OrganizationsModel.show(req.query.org_id)
			.then(() => MeetingsModel.show(req.query.org_id, req.params.id))
			.then(data => res.status(201).json({ data }))
			.catch(err => next(err));
	};

	static isValidMeetingCreate(req, res, next) {
		validate.meetingCreate(req.body, parseInt(req.query.org_id))
			.then(() => OrganizationsModel.show(req.body.organization_id))
			.then(() => SessionsModel.show(req.query.org_id, req.body.session_id))
			.then(() => next())
			.catch(err => next(err));
	};

	static isValidMeetingPatch(req, res, next) {
		validate.meetingUpdate(req.body)
			.then(() => OrganizationsModel.show(req.query.org_id))
			.then(() => MeetingsModel.show(req.query.org_id, req.params.id))
			.then(() => next())
		  .catch(err => next(err));
	};

	static addMember(req, res, next) {
		OrganizationsModel.show(req.body.organization_id)
			.then(() => MeetingsModel.show(req.body.organization_id, req.params.id))
			.then(() => MeetingsModel.update(req.params.id, req.body))
			.then(data => res.status(201).json({ data }))
			.catch(err => next(err));
	};

	static removeMember(req, res, next) {
		OrganizationsModel.show(req.query.org_id)
			.then(() => MeetingsModel.show(req.query.org_id, req.params.id))
			.then(() => MeetingsModel.removeMember(req.params.id, req.params.memid))
			.then(data => res.status(201).json({ data }))
			.catch(err => next(err));
	}

};


module.exports = MeetingsController;
