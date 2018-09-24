const Model = require('./model.js')(`meetings`);
const knex = require('../db/knex');


class MeetingsModel extends Model {
	constructor(){
		super()
	};

	static show(session_id, id) {
		return knex('meetings')
			.where({ session_id, id })
			.first()
			.then(res => {
				if (!res) throw new Error('meetingsNotFound');
				return res;
			})
	}

	static getAllOrgMeetings(organization_id) {
		return knex('meetings')
			.where({ organization_id })
	}

	static index(organization_id, session_id) {
		return knex('meetings')
			.where({ organization_id, session_id })
	};

};


module.exports = MeetingsModel;
