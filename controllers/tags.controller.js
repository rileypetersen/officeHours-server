const Controller = require('./Controller.js')(`Tags`);
const { UsersModel, OrganizationsModel, TagsModel } = require('../models');
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

	static addOrRemoveTag(req, res, next) {
		TagsModel.addOrRemoveTag(req.body)
			.then(() => TagsModel.getUserTags(req.body.user_id))
			.then(data => res.status(200).json({ data }))
		  	.catch(err => next(err));
	};

};


module.exports = TagsController;
