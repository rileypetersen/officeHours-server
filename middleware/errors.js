function processErrorMessage(err) {
  
    if (err.message) {
      switch (err.message) {
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
        case 'userNotFound' : return { status: 404, message: 'User not found' }
        case 'invalidUserName' : return { status: 400, message: 'A valid "user_name" is required to login' }
        case 'invalidPassword' : return { status: 400, message: 'A valid "password" is required to login' }

        default:
          return { status: 500, message: 'An internal server error has occurred.' }
      }
    }
  }
  
  module.exports = processErrorMessage
  