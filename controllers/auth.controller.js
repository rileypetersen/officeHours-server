const jwt = require('jsonwebtoken')


class Auth {

	static isAuthorized(req, res, next) {
		if (!req.headers.authorization) throw new Error('userUnauthorized')
		const [ scheme, credentials ] = req.headers.authorization.split(' ')
		jwt.verify(credentials, process.env.SECRET, (err, payload) => {
			if (err) throw new Error('userUnauthorized')
			req.claim = payload
			next()
		})
	};

	static isSelf(req, res, next) {
		if (parseInt(req.params.id) !== req.claim.id) throw new Error('userUnauthorized')
		next()
	};

};


module.exports = Auth;
