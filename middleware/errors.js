function processErrorMessage(err) {
    if (err.message) {
      switch (err.message) {
        
        // USER ERRORS
        case 'badUserType' : return { status: 400, message: 'User "user_type" must be a String and is required' }
        case 'badFirstName' : return { status: 400, message: 'User "first_name" must be a String and is required' }
        case 'badLastName' : return { status: 400, message: 'User "last_name" must be a String and is required' }
        case 'badUserName' : return { status: 400, message: 'User "user_name" must be a String and is required' }
        case 'badProfileImg' : return { status: 400, message: 'User "profile_img_url" must be a String and is required' }
        case 'badTitle' : return { status: 400, message: 'User "title" must be a String and is required' }
        case 'badShortDescription' : return { status: 400, message: 'User "short_description" must be a String and is required' }
        case 'badLongDescription' : return { status: 400, message: 'User "long_description" must be a String and is required' }
        case 'badLinkedinURL' : return { status: 400, message: 'User "linkedin_url" must be a String and is required' }
        case 'badWebsiteURL' : return { status: 400, message: 'User "website_url" must be a String and is required' }
        case 'badCanCreateSession' : return { status: 400, message: 'User "can_create_session" must be a String and is required' }
        case 'aFieldRequired' : return { status: 400, message: 'At lease one(1) of the following fields is required: "user_type", "first_name", "last_name", "user_name", "profile_img_url", "title", "short_description", "long_description", "linkedin_url", "website_url", "can_create_session" ' }
        case 'userNameTaken' : return { status: 400, message: 'Entered "user_name" is already in use' }
        case 'usersNotFound' : return { status: 404, message: 'User not found' }
        case 'invalidUserName' : return { status: 400, message: 'A valid "user_name" is required to login' }
        case 'invalidPassword' : return { status: 400, message: 'A valid "password" is required to login' }

        // ORGANIZATION ERRORS
        case 'badOrgUserId' : return { status: 400, message: 'Organization "user_id" must be an Integer and is required' }
        case 'badOrgName' : return { status: 400, message: 'Organization "name" must be a String and is required' }
        case 'badOrgShortDescription' : return { status: 400, message: 'Organization "short_description" must be a String and is required' }
        case 'badOrgLongDescription' : return { status: 400, message: 'Organization "long_description" must be a String and is required' }
        case 'badOrgLogoImgUrl' : return { status: 400, message: 'Organization "logo_img_url" must be a String and is required' }
        case 'badOrgWebsiteUrl' : return { status: 400, message: 'Organization "website_url" must be a String and is required' }
        case 'badOrgHostsCanCreateSessions' : return { status: 400, message: 'Organization "hosts_can_create_sessions" must be a Boolean and is required' }
        case 'organizationsNotFound' : return { status: 404, message: 'Organization not found' }
        case 'alreadyOrg' : return { status: 400, message: 'Entered Organization name is already in use' }
        case 'aFieldRequiredOrg' : return { status: 400, message: 'At lease one(1) of the following fields is required: "user_id", "name", "short_description", "long_description", "logo_img_url", "website_url", "hosts_can_create_sessions" ' }

        // SESSION ERRORS
        case 'sessionsNotFound' : return { status: 404, message: 'Session not found' }
        case 'badSessionUserId' : return { status: 400, message: 'Session "user_id" must be an Integer and is required' }
        case 'badSessionOrganizationId' : return { status: 400, message: 'Session "organization_id" must be an Integer and is required' }
        case 'badSessionDate' : return { status: 400, message: 'Session "date" must be a String and is required' }
        case 'badSessionStartTime' : return { status: 400, message: 'Session "start_time" must be a String and is required' }
        case 'badSessionLocation' : return { status: 400, message: 'Session "location" must be a String and is required' }
        case 'badSessionDuration' : return { status: 400, message: 'Session "duration" must be a String and is required' }
        case 'badSessionDelay' : return { status: 400, message: 'Session "delay" must be a String and is required' }

        // MEETING ERRORS

        // TAG ERRORS

        default:
          return { status: 500, message: 'An internal server error has occurred.' }
      }
    }
  }

  module.exports = processErrorMessage
