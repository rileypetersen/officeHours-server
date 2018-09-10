const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');


class OrganizationsModel extends Model {
	constructor(){
		super()
	};

	// static showOrgUsers(org_id) {
	// 	return knex('organizations_users')
	// 		.where({ org_id })
	// 		.join('users', 'id', 'user_id')
	// 		.then(data => {
	// 			console.log('wow: ', data);
	// 			return data;
	// 		})
	// };

	static getOrgByName(name) {
		return knex('organizations')
			.where({ name })
			.first()
	};

};


module.exports = OrganizationsModel;