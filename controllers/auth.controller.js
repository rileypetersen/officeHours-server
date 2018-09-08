const { UsersModel } = require('../models');
const Token = require('../middleware/token');
const jwt = require('jsonwebtoken');


class Auth {
		
	static isOwnerOfUser(req, res, next) {
		const userId = req.params.id;
		Token.verifyAndExtractHeaderToken(req.headers)
			.catch(err => { throw new Error('invalidToken') })
			.then(token => UsersModel.verifyUserId(token.sub.id))
			.then(user => {
				if (user.id != userId) throw new Error('unauthorizedUser');
				next();
			})
			.catch(err => next(err));
	};

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
	 
	// methods still needed:
		// authorize owner of org for patch/delete
		// authorise user type/status can create sessions
		// authorise user type/status can create meetings
		
		// authorise user type/status can "view" sessions		
		// authorise user type/status can "join" sessions
		// authorise user type/status can "alter" sessions		
		// authorise user type/status can "leave" sessions

		// authorise user type/status can "view" meetings				
		// authorise user type/status can "join" meetings
		// authorise user type/status can "alter" meetings		
		// authorise user type/status can "leave" meetings	
};


module.exports = Auth;