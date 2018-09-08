const Controller = require('./Controller.js')(`Tags`);
const { UsersModel, OrganizationsModel } = require('../models');
const validate = require('../middleware/validations');


class TagsController extends Controller {
	constructor(){
		super()
	};

	static isValidTagCreate(req, res, next) {
		// validate.tagCreate(req.body)
		
		//   .catch(err => next(err));
	};

	static isValidTagPatch(req, res, next) {
		// validate.orgUpdate(req.body)
		
		//   .catch(err => next(err));
	};

};


module.exports = TagsController;
