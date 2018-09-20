const Controller = require('./Controller.js')(`Organizations`);
const { UsersModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const bcrypt = require('bcryptjs');


class OrganizationsController extends Controller {
	constructor(){
		super()
	};

	// static showOrgUsers(req, res, next) {
	// 	OrganizationsModel.showOrgUsers(req.params.id)
	// 		.then(data => res.status(201).json({ data }))
	// 		.catch(err => next(err));
	// }

	static show(req, res, next) {
		let organization;
		OrganizationsModel.show(req.params.id)
			.then(org => {
				organization = org
				return OrganizationsModel.indexOrgUsers(org.id)
			})
			.then((users) => {
				organization.users = users
				res.status(201).json({ data: organization })
			})
			.catch(err => next(err));
	};

	static isValidOrgCreate(req, res, next) {
		validate.organizationCreate(req.body)
			.then(() =>  UsersModel.show(req.body.organizer_id))
			.then(() => OrganizationsModel.getOrgByName(req.body.name))
			.then(org => {
				if (org !== undefined) throw new Error('alreadyOrg')
				next()
			})
			.catch(err => next(err));
	};

	static isValidOrgPatch(req, res, next) {
		validate.orgUpdate(req.body)
			.then(() => OrganizationsModel.show(req.params.id))
			.then(() => OrganizationsModel.update(req.params.id, req.body))
			.then(data => res.status(201).json({ data }))
			.catch(err => next(err));
	};

	

};


module.exports = OrganizationsController;
