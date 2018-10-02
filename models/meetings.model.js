const Model = require('./model.js')(`meetings`);
const knex = require('../db/knex');


class MeetingsModel extends Model {
	constructor(){
		super()
	};

	static getMeetingsBySessionId(session_id) {
		return knex('meetings')
			.where({ session_id })
	};

	static show(organization_id, id) {
		return knex('meetings')
			.where({ organization_id, id })
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

	static removeMember(id, member_id) {
		return knex('meetings')
			.where({ id, member_id })
			.update({
			  member_id: null,
			  topic_1: '...',
			  topic_2: '...',
			  topic_3: '...',
			})
			.returning('*')
			.then(([res]) => {
				if (!res) throw new Error(`meetingsNotFound`);
				return res;
			});
	};

};


module.exports = MeetingsModel;
