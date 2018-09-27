const Model = require('./model.js')(`organizations`);
const knex = require('../db/knex');
const TagsModel = require('./tags.model')


class OrganizationsModel extends Model {
	constructor(){
		super()
	};

	static indexOrgUsers(organization_id) {
		return knex('users_organizations')
			.where({ organization_id })
			.returning('website_url')
			.join('users', 'user_id', 'users.id')
			.then(users => {
				let promises = users.map(user => {
					delete user.hashed_password;
					return TagsModel.showUserTags(user.user_id)
						.then(tags => {
							user.tags = tags;
							return user;
						})	

				});
				return Promise.all(promises);
			})
	};

	static showOrgUser(user_id, organization_id) {
		return knex('users_organizations')
			.where({ user_id, organization_id })
			.join('users', 'user_id', 'users.id')
			.first()
			.then(user => {
				if (!user) throw new Error('nonOrgUser');
				delete user.hashed_password;
				return user;
			})
	};

	static getOrgUser(user_id, organization_id) {
		return knex('users_organizations')
			.where({ user_id, organization_id })
			.first()
	};

	static addOrgUser(body) {
		return knex('users_organizations')
			.insert(body)
			.returning('*')
			.then(([res]) => {
				if (!res) throw new Error('nonOrgUser');
				return res;
			})
	};

	static updateOrgUser(user_id, organization_id, body){
		return knex('users_organizations')
			.update(body)
			.where({ user_id, organization_id })
			.returning('*')
			.then(([res]) => {
				if (!res) throw new Error('nonOrgUser');
				return res;
			});
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

	static removeOrgUser(user_id, organization_id) {
		return knex('users_organizations')
			.where({ user_id, organization_id })
			.del()
			.returning('*')
			.then(([res]) => {
				if (!res) throw new Error('nonOrgUser');
				return res;
			});
	};

};


module.exports = OrganizationsModel;