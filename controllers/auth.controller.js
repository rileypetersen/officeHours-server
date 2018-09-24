const { UsersModel } = require('../models');
const Token = require('../middleware/token');
const jwt = require('jsonwebtoken');


class Auth {

	static getAuthStatus(req, res, next) {
		res.status(200).send({ ...req.claim })
	};

	static isAuthenticated(req, res, next) {
		Token.verifyAndExtractHeaderToken(req.headers)
			.catch(err => { throw new Error('invalidToken') })
			.then(token => {
				req.claim = token;
				next();
			})
			.catch(err => next(err));
	};
		
	static isOwnerOfUser(req, res, next) {
		const userId = req.params.id;
		Token.verifyAndExtractHeaderToken(req.headers)
			.catch(err => { throw new Error('invalidToken') })
			.then(token => UsersModel.verifyUserId(token.sub.id))
			.then(user => {
				if (user.id != userId) throw new Error('userUnauthorized');
				next();
			})
			.catch(err => next(err));
	};

	// authorize owner of org for:
		// patch/delete on org
		// get/post/patch/delete sessions
	static isOrganizerOfOrg(req, res, next){
		const orgId = req.params.id;
		let userId;
		Token.verifyAndExtractHeaderToken(req.headers)
			.catch(err => { throw new Error('invalidToken') })
			.then(token => UsersModel.verifyUserId(token.sub.id))
			.then(user => {
				if (user.id != userId) throw new Error('userUnauthorized');
				next();
			})
			.catch(err => next(err));
	};

	// authorize host of org for:
		// signup/remove self from sessions
		// get/post/patch/delete meetings
	static isHostOfOrg(req, res, next) {

	};

	// authorize member of org for:
		// signup/remove self from meetings
		// get/post/patch/delete meetings topics
	static isMemberOfOrg(req, res, next) {

	};

};


module.exports = Auth;