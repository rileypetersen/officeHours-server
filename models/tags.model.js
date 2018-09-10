const Model = require('./model.js')(`tags`);
const knex = require('../db/knex');


class TagsModel extends Model {
	constructor(){
		super()
	};

	static addOrRemoveTag({ user_id, tag_id }) {
		return knex('users_tags')
			.where({ user_id, tag_id })
			.first()
			.then(result => {
				if (!result) {
				return knex('users_tags')
					.insert({ user_id, tag_id })
				} else {
				return knex('users_tags')
					.where({ user_id, tag_id })
					.del()
				}
			})
	};

	static getUserTags(user_id) {
		return knex('users_tags')
			.where({ user_id })
	};

};


module.exports = TagsModel;