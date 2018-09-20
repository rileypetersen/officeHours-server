const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');


class OrganizationsModel extends Model {
	constructor(){
		super()
	};

	static indexOrgUsers(organization_id) {
		return knex('users_organizations')
			.where({ organization_id })
	};

	static showOrgUser(user_id, organization_id) {
		return knex('users_organizations')
			.where({ user_id, organization_id })
			.first()
			.then(user => {
				if (!user) throw new Error('userUnauthorized')
				return user
			})
	};

	static getOrgByName(name) {
		return knex('organizations')
			.where({ name })
			.first()
	};

};


module.exports = OrganizationsModel;