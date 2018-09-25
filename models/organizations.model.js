const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');


class OrganizationsModel extends Model {
	constructor(){
		super()
	};

	static indexOrgUsers(organization_id) {
		return knex('users_organizations')
			.where({ organization_id })
			.join('users', 'user_id', 'users.id')
	};

	static showOrgUser(user_id, organization_id) {
		return knex('users_organizations')
			.where({ user_id, organization_id })
			.join('users', 'user_id', 'users.id')
			.first()
			.then(user => {
				if (!user) throw new Error('nonOrgUser')
				return user
			})
	};

	static getOrgByName(name) {
		return knex('organizations')
			.where({ name })
			.first()
	};

	static getOrgOwnerID(id) {
		return knex('organizations')
			.where({ id })
			.first()
			.returning('organizer_id')
	};

};


module.exports = OrganizationsModel;