# OfficeHours-server

## Database Structure

![](./images/officeHours-ERD.png)

## Setup
1. Fork and clone this repository
1. `createdb officehours`
1. `npm run setup`

## Routes

### ----- UserRoutes --------------------------------------------------------------------------

**GET /api/users**
- Get all users

**GET /api/users/:id**
- Get a user via ID

**POST /api/users/register**
- Create a new user
    - required fields in req.body:
```
{
    user_type,              // STRING
    first_name,             // STRING
    last_name,              // STRING
    user_name,              // STRING
    email,                  // STRING    
    profile_img_url,        // STRING
    title,                  // STRING
    short_description,      // STRING
    long_description,       // STRING
    linkedin_url,           // STRING
    website_url,            // STRING
    can_create_session      // BOOLEAN
}
```

**POST /api/users/login**
- Login existing user
    - required fields in req.body:
```
{
    user_name,              // STRING
    password,               // STRING
}
```

**PATCH /api/users/:id**
- Update user info via ID
    - at least one(1) of the following fields in body is required:
```
{
    first_name,             // STRING
    last_name,              // STRING
    user_name,              // STRING
    email,                  // STRING    
    password,               // STRING
    profile_img_url,        // STRING
    title,                  // STRING
    short_description,      // STRING
    long_description,       // STRING
    linkedin_url,           // STRING
    website_url,            // STRING
    can_create_session      // BOOLEAN
}
```

**DELETE /api/users/:id**
- Delete a user by ID


### ----- OrganizationsRoutes --------------------------------------------------------------------------

**GET /api/organizations**
- Get all organizations

**GET /api/organizations/:id**
- Get an organization via ID

**POST /api/organizations**
- Create an organization
    - required fields in req.body:
```
{
    user_id,                    // INTEGER
    name,                       // STRING
    short_description,          // STRING
    long_description,           // STRING
    logo_img_url,               // STRING
    website_url,                // STRING
    hosts_can_create_sessions   // BOOLEAN
}
```

**PATCH /api/organizations/:id**
- Update an organization's info via ID
    - at least one(1) of the following fields in body is required:
```
{
    user_id,                    // INTEGER
    name,                       // STRING
    short_description,          // STRING
    long_description,           // STRING
    logo_img_url,               // STRING
    website_url,                // STRING
    hosts_can_create_sessions   // BOOLEAN
}
```

**DELETE /api/organizations/:id**
- Delete an organization via ID


### ----- SessionsRoutes --------------------------------------------------------------------------

**GET /api/organizations/:id/sessions**
- Get all sessions

**GET /api/organizations/:id/sessions/:sid**
- Get a session via ID

**POST /api/organizations/:id/sessions**
- Create a session
    - required fields in req.body:
```
{
    user_id,            // INTEGER
    organization_id,    // INTEGER
    date,               // STRING
    start_time,         // STRING
    location,           // STRING
    duration,           // STRING
    delay               // STRING
}
```

**PATCH /api/organizations/:id/sessions/:sid**
- Update a session's info
    - at least one(1) of the following fields in body is required:
```
{
    user_id,            // INTEGER
    organization_id,    // INTEGER
    date,               // STRING
    start_time,         // STRING
    location,           // STRING
    duration,           // STRING
    delay               // STRING
}
```

**DELETE /api/organizations/:id/sessions/:sid**
- Delete a session via ID 


### ----- MeetingsRoutes --------------------------------------------------------------------------

**GET /api/organizations/:id/sessions/:sid/meetings**
- Get all meetings

**GET /api/organizations/:id/sessions/:sid/meetings/:mid**
- Get an meetings via ID

**POST /api/organizations/:id/sessions/:sid/meetings**
- Create a meeting
    - required fields in req.body:
```
{

}
```

**PATCH /api/organizations/:id/sessions/:sid/meetings/:mid**
- Update a meeting's info
    - at least one(1) of the following fields in body is required:
```
{

}
```

**DELETE /api/organizations/:id/sessions/:sid/meetings/:mid**
- Delete a meeting via ID
