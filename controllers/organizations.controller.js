const Controller = require('./Controller.js')(`Organizations`);
const { UsersModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');
const Token = require('../middleware/token');
const bcrypt = require('bcryptjs');


class OrganizationsController extends Controller {
	constructor(){
		super()
	};

	static isValidOrgCreate(req, res, next) {
		validate.organizationCreate(req.body)
			.then(() =>  UsersModel.show(req.body.user_id))
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
