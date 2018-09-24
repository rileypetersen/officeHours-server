const Model = require('./model.js')(`users`);
const knex = require('../db/knex');
const bcrypt = require('bcryptjs');


class UsersModel extends Model {
	constructor(){
		super()
	};

	static create(body) {
		body.hashed_password = bcrypt.hashSync(body.password);
		delete body.password;
		return knex('users')
			.insert(body)
			.returning('*')
			.then(([res]) => res)
	};

	static getUserByUserEmail(email) {
		return knex('users')
			.where({ email })
			.first()
	};

	static verifyUserId(id) {
		return knex('users')
			.where({ id })
			.first()
			.then(user => {
				if (!user) throw new Error('userUnauthorized');
				return user;
			})
	};

};


module.exports = UsersModel;