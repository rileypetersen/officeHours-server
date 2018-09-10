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
	
	static showUserTags(req, res, next) {
		UsersModel.show(req.params.id)
			.then(() => TagsModel.showUserTags(req.params.id))
			.then(data => res.status(200).json({ data }))
			.catch(err => next(err));
	};

	static addOrRemoveTag(req, res, next) {
		UsersModel.show(req.params.id)		
			.then(() => TagsModel.addOrRemoveTag(req.params.id, req.body.tag_id))
			.then(() => TagsModel.showUserTags(req.params.id))
			.then(data => res.status(200).json({ data }))
		  	.catch(err => next(err));
	};

};


module.exports = TagsController;
