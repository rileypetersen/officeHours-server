function processErrorMessage(err) {
	if (err.message) {
		switch (err.message) {

		// USER ERRORS
		case 'badUserType' : return { status: 400, message: 'User "user_type" must: be a String and is required' };
		case 'badFirstName' : return { status: 400, message: 'User "first_name" must: be a String and is required' };
		case 'badLastName' : return { status: 400, message: 'User "last_name" must: be a String and is required' };
		case 'badEmail' : return { status: 400, message: 'User "email" must: be a String and is required' };
		case 'badPassword' : return { status: 400, message: 'User "password" must: be a String and is required'};
		case 'badProfileImg' : return { status: 400, message: 'User "profile_img_url" must: be a String and is required' };
		case 'badTitle' : return { status: 400, message: 'User "title" must: be a String and is required' };
		case 'badShortDescription' : return { status: 400, message: 'User "short_description" must: be a String and is required' };
		case 'badLongDescription' : return { status: 400, message: 'User "long_description" must: be a String and is required' };
		case 'badLinkedinURL' : return { status: 400, message: 'User "linkedin_url" must: be a String and is required' };
		case 'badWebsiteURL' : return { status: 400, message: 'User "website_url" must: be a String and is required' };
		case 'badCanCreateSession' : return { status: 400, message: 'User "can_create_sessions" must: be a Boolean and is required' };
		case 'aFieldRequired' : return { status: 400, message: 'At least one(1) of the following fields is required: "user_type", "first_name", "last_name", "email", "profile_img_url", "title", "short_description", "long_description", "linkedin_url", "website_url", "can_create_session" ' };
		case 'userEmailTaken' : return { status: 400, message: 'Entered "email" is already in use' };
		case 'usersNotFound' : return { status: 404, message: 'User not found' };
		case 'invalidUserEmail' : return { status: 400, message: 'A valid "email" is required to login' };
		case 'invalidPassword' : return { status: 400, message: 'A valid "password" is required to login' };
		case 'anOrgRequiredUserOrg' : return { status: 400, message: 'An "organization_id" must: be a Number and is required' }
		case 'userUnauthorized' : return { status: 401, message: 'User is not authorized to access this resource' };

		// ORGANIZATION ERRORS
		case 'badOrgUserId' : return { status: 400, message: 'Organization "user_id" must: be an Integer and is required' };
		case 'badOrgName' : return { status: 400, message: 'Organization "name" must: be a String and is required' };
		case 'badOrgShortDescription' : return { status: 400, message: 'Organization "short_description" must: be a String and is required' };
		case 'badOrgLongDescription' : return { status: 400, message: 'Organization "long_description" must: be a String and is required' };
		case 'badOrgLogoImgUrl' : return { status: 400, message: 'Organization "logo_img_url" must: be a String and is required' };
		case 'badOrgWebsiteUrl' : return { status: 400, message: 'Organization "website_url" must: be a String and is required' };
		case 'badOrgHostsCanCreateSessions' : return { status: 400, message: 'Organization "hosts_can_create_sessions" must: be a Boolean and is required' };
		case 'organizationsNotFound' : return { status: 404, message: 'Organization not found' };
		case 'alreadyOrg' : return { status: 400, message: 'Entered Organization name is already in use' };
		case 'aFieldRequiredOrg' : return { status: 400, message: 'At least one(1) of the following fields is required: "user_id", "name", "short_description", "long_description", "logo_img_url", "website_url", "hosts_can_create_sessions" ' };
		case 'nonOrgUser' : return { status: 404, message: 'Requested User not affiliated with Organization' }
		case 'userOrgRelationExists' : return { status: 400, message: 'User affiliation with Organization already exists' }
		case 'badUserId' : return { status: 400, message: 'Entered "user_id" must: be an Integer and is required' }
		case 'badOrgId' : return { status: 400, message: 'Entered "organization_id" must: be an Integer and is required' }
		case 'badUserType' : return { status: 400, message: 'Entered "user_type" must: be a String and is required' }
		case 'badParamsBodyMatch' : return { status: 400, message: 'Requested Organization in params must match Requested Organization in body' }
		case 'unrecognizedUserType' : return { status: 400, message: 'Entered "user_type" must be one of the following: "organizer", "host", "member" ' }

		// SESSION ERRORS
		case 'sessionsNotFound' : return { status: 404, message: 'Session not found' };
		case 'badSessionUserId' : return { status: 400, message: 'Session "user_id" must: be an Integer and is required' };
		case 'badSessionOrganizationId' : return { status: 400, message: 'Session "organization_id" must: be an Integer, match params.id, and is required' };
		case 'badSessionDate' : return { status: 400, message: 'Session "date" must: be a String, be validated by moment.js, and is required' };
		case 'badSessionStartTime' : return { status: 400, message: 'Session "start_time" must: be a String, be validated by moment.js, and is required' };
		case 'badSessionLocation' : return { status: 400, message: 'Session "location" must: be a String and is required' };
		case 'badSessionDuration' : return { status: 400, message: 'Session "duration" must: be a String and is required' };
		case 'badSessionDelay' : return { status: 400, message: 'Session "delay" must: be a String and is required' };
		case 'userCanNotCreateSession' : return { status: 400, message: 'User not allowed to create sessions' };
		case 'aFieldRequiredSession' : return { status: 400, message: 'At least one(1) of the following fields is required: "user_id", "organization_id", "date", "start_time", "location", "duration", "delay" ' };

		// MEETING ERRORS
		// PLEASE WRITE ERROR MESSAGES BELOW!!!
		case 'meetingsNotFound' : return { status: 404, message: 'Meeting not found' };
		case 'badOrganizationId' : return { status: 400, message: 'body.organization_id must: be an Integer, match query.org_id and is required' };
		case 'badSessionId' : return { status: 400, message: 'Session "id" must: be an Integer and is required' };
		case 'badMeetingLocation' : return { status: 400, message: 'Meeting "location" must: be a String and is required' };
		case 'badMeetingDuration' : return { status: 400, message: 'Meeting "duration" must: be a String and is required' };
		case 'badMeetingDelay' : return { status: 400, message: 'Meeting "delay" must: be a String and is required' };
		case 'aFieldRequiredMeeting' : return { status: 400, message: 'At least one(1) of the following fields is required: "location", "duration", "delay" ' };
		case 'badLocation' : return { status: 400, message: 'Meeting "location" must: be a String' };
		case 'badDuration' : return { status: 400, message: 'Meeting "duration" must: be a String' };
		case 'badDelay' : return { status: 400, message: 'Meeting "delay" must: be a String' };

		// TAG ERRORS

		default:
			return { status: 500, message: 'An internal server error has occurred.' };
		};
	};
};


module.exports = processErrorMessage
