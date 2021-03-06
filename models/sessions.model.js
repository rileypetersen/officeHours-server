const Model = require('./model.js')(`sessions`);
const knex = require('../db/knex');


class SessionsModel extends Model {
	constructor(){
		super()
	};

	static index(organization_id) {
		return knex('sessions')
			.where({ organization_id })
			.then(sessions => {
				let promises = sessions.map(session => {
					return knex('users')
						.where({ id: session.host_id })
						.first()
						.then(host => {
							session.host = host || {}
							if (session.host.hashed_password !== undefined) delete session.host.hashed_password
							return session
						})
				})
				return Promise.all(promises)
			})
	};

	static show(organization_id, id) {
		return knex('sessions')
			.where({ organization_id, id })
			.first()
			.then(res => {
				if (!res) throw new Error(`sessionsNotFound`);
				return res;
			})
	};

	static removeHost(id, host_id) {
		return knex('sessions')
			.where({ id, host_id })
			.update({ host_id: null })
			.returning('*')
			.then(([res]) => {
				if (!res) throw new Error('sessionsNotFound')
				return res
			})
	};

	static getSessionWithMeetings(id) {
		return knex('sessions')
			.where({ id })
			.first()
			.then((session) => {
				return knex('meetings')
					.where({ session_id: id })
					.then(meetings => {
						session.meetings = meetings
						return session
					})
			})
	}

};


module.exports = SessionsModel;
