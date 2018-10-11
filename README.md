_This project is currently under construction._

# OfficeHours-server

## Database Structure

![](./images/OfficeHoursERD.png)

## Setup
1. Fork and clone this repository
1. `cd officeHours-server/`
1. `createdb officehours`
1. `npm run setup`

## Routes
*[PostMan Collection Link](https://www.getpostman.com/collections/efc0f91f028e29340458)*

### ----- UserRoutes --------------------------------------------------------------------------

**GET /api/users**
- Get all users

**GET /api/users/:id**
- Get a user via ID
- Returning data structure:
```
{
    id,                                         // INTEGER
    first_name,                                 // STRING
    last_name,                                  // STRING
    email,                                      // STRING
    profile_img_url,                            // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    linkedin_url,                               // STRING
    website_url                                 // STRING
    organizations: [
        {
                    // USER INFORMATION
            user_id,                            // INTEGER
            user_type,                          // STRING
            user_title,                         // STRING
            can_create_sessions,                // BOOLEAN
                    // ORGANIZATION INFORMATION
            id,                                 // INTEGER
            organization_id,                    // INTEGER
            organizer_id,                       // INTEGER
            hosts_can_create_sessions,          // BOOLEAN
            name,                               // STRING
            short_description,                  // STRING
            long_description,                   // STRING
            logo_img_url,                       // STRING
            website_url,                        // STRING
            sessions: [
                {
                    id,                         // INTEGER
                    organization_id,            // INTEGER
                    organizer_id,               // INTEGER
                    host_id,                    // INTEGER
                    date,                       // STRING
                    location,                   // STRING
                    start_time,                 // STRING
                    duration,                   // STRING
                    delay,                      // STRING
                    meetings: [
                        {
                            id,                 // INTEGER
                            organization_id,    // INTEGER
                            session_id,         // INTEGER
                            host_id,            // INTEGER
                            member_id,          // INTEGER
                            location,           // STRING
                            duration,           // STRING
                            delay,              // STRING
                            topic_1,            // STRING
                            topic_2,            // STRING
                            topic_3             // STRING
                        }
                    ]
                }
            ]
        }
    ]
}
```

**POST /api/users/register**
- Create a new user
    - Fields in req.body:
```
{
                        // REQUIRED 
    first_name,                                     // STRING
    last_name,                                      // STRING
    email,                                          // STRING
    password,                                       // STRING

                        // NOT REQUIRED
    profile_img_url,                                // STRING
    short_description,                              // STRING
    long_description,                               // STRING
    linkedin_url,                                   // STRING
    website_url                                     // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    first_name,                                 // STRING
    last_name,                                  // STRING
    email,                                      // STRING
    profile_img_url,                            // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    linkedin_url,                               // STRING
    website_url                                 // STRING
}
```

**POST /api/users/login**
- Login existing user
    - Required fields in req.body:
```
{
    email,                                          // STRING
    password,                                       // STRING
}
```
- Returning data structure:
```
{
    data                                           // INTEGER
}
```
- Returning in headers:
```
{
    Auth Bearer:                                    // STRING
}
```

**PATCH /api/users/:id**
- Update user info via ID
    - Valid TOKEN required in req.headers.Authorization
    - At least one(1) of the following fields in body is required:
```
{
    first_name,                                     // STRING
    last_name,                                      // STRING
    email,                                          // STRING
    password,                                       // STRING
    profile_img_url,                                // STRING
    short_description,                              // STRING
    long_description,                               // STRING
    linkedin_url,                                   // STRING
    website_url,                                    // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    first_name,                                 // STRING
    last_name,                                  // STRING
    email,                                      // STRING
    profile_img_url,                            // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    linkedin_url,                               // STRING
    website_url                                 // STRING
}
```

**DELETE /api/users/:id**
- Delete a user by ID


### ----- OrganizationsRoutes --------------------------------------------------------------------------

**GET /api/organizations**
- Get all organizations
- Returning data structure:
```
[
    {
        id,                                     // INTEGER
        organizer_id,                           // INTEGER
        name,                                   // STRING
        short_description,                      // STRING
        long_description,                       // STRING
        logo_img_url,                           // STRING
        website_url,                            // STRING
        hosts_can_create_sessions               // BOOLEAN
    }
]
```

**GET /api/organizations/:id**
- Get an organization via ID
- Returning data structure:
```
{
    id,                                         // INTEGER
    organizer_id,                               // INTEGER
    name,                                       // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    logo_img_url,                               // STRING
    website_url,                                // STRING
    hosts_can_create_sessions                   // BOOLEAN
    users: [
        {
            id:,                                // INTEGER
            user_id,                            // INTEGER
            organization_id,                    // INTEGER
            user_type,                          // STRING
            user_title,                         // STRING
            can_create_sessions                 // BOOLEAN
        }
    ]
}
```

**POST /api/organizations**
- Create an organization
    - Required fields in req.body:
```
{
    organizer_id,                                   // INTEGER
    name,                                           // STRING
    short_description,                              // STRING
    long_description,                               // STRING
    logo_img_url,                                   // STRING
    website_url,                                    // STRING
    hosts_can_create_sessions                       // BOOLEAN
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organizer_id,                               // INTEGER
    name,                                       // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    website_url,                                // STRING
    logo_img_url,                               // STRING
    hosts_can_create_sessions                   // BOOLEAN   
}
```

**PATCH /api/organizations/:id**
- Update an organization's info via ID
    - At least one(1) of the following fields in body is required:
```
{
    organizer_id,                                   // INTEGER
    name,                                           // STRING
    short_description,                              // STRING
    long_description,                               // STRING
    logo_img_url,                                   // STRING
    website_url,                                    // STRING
    hosts_can_create_sessions                       // BOOLEAN
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organizer_id,                               // INTEGER
    name,                                       // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    website_url,                                // STRING
    logo_img_url,                               // STRING
    hosts_can_create_sessions                   // BOOLEAN   
}
```

**DELETE /api/organizations/:id**
- Delete an organization via ID
- Returning data structure:
```
{
        id,                                         // INTEGER
        organizer_id,                               // INTEGER
        name,                                       // STRING
        short_description,                          // STRING
        long_description,                           // STRING
        website_url,                                // STRING
        logo_img_url,                               // STRING
        hosts_can_create_sessions                   // BOOLEAN   
    }
}
```


### ----- OrganizationsUsersRoutes ---------------------------------------------------------------------

**GET /api/organizations/:id/users**
- Get all organization's users
- Returning data structure:
```
[
    {
        id,                                     // INTEGER
        user_id,                                // INTEGER
        organization_id,                        // INTEGER
        user_type,                              // STRING
        user_title,                             // STRING
        can_create_sessions,                    // BOOLEAN
        first_name,                             // STRING
        last_name,                              // STRING
        email,                                  // STRING
        profile_img_url,                        // STRING
        short_description,                      // STRING
        long_description,                       // STRING
        linkedin_url,                           // STRING
        website_url,                            // STRING
        tags: [
            {
                id,                             // INTEGER
                user_id,                        // INTEGER
                tag_id,                         // INTEGER
                tag_name:                       // STRING
            }
        ]
    }
]
```

**GET /api/organizations/:id/users/:uid**
- Get an organization's user via ID
- Returning data structure:
```
{
    id,                                         // INTEGER
    user_id,                                    // INTEGER
    organization_id,                            // INTEGER
    user_type,                                  // STRING
    user_title,                                 // STRING
    can_create_sessions,                        // BOOLEAN
    first_name,                                 // STRING
    last_name,                                  // STRING
    email,                                      // STRING
    profile_img_url,                            // STRING
    short_description,                          // STRING
    long_description,                           // STRING
    linkedin_url,                               // STRING
    website_url,                                // STRING
    tags: [
        {
            id,                                 // INTEGER
            user_id,                            // INTEGER
            tag_id,                             // INTEGER
            tag_name:                           // STRING
        }
    ]
}
```

**POST /api/organizations/:id/users**
- Create a user for an organization
    - Required: 
    - "user_type" must be an all lowercase String of: "organizer", "host", or "member"
```
{
    user_id,                                        // INTEGER
    organization_id,                                // INTEGER
    user_type,                                      // STRING
    user_title,                                     // STRING
    can_create_sessions                             // BOOLEAN
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER        
    user_id,                                    // INTEGER
    organization_id,                            // INTEGER
    user_type,                                  // STRING
    user_title,                                 // STRING
    can_create_sessions                         // BOOLEAN
}
```

**PATCH /api/organizations/:id/users/:uid**
- Update a user for an organization
    - At least one(1) of the following fields in body is required:
    - "user_type" must be an all lowercase String of: "organizer", "host", or "member"
```
{
    user_id,                                        // INTEGER
    organization_id,                                // INTEGER
    user_type,                                      // STRING
    user_title,                                     // STRING
    can_create_sessions                             // BOOLEAN
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER        
    user_id,                                    // INTEGER
    organization_id,                            // INTEGER
    user_type,                                  // STRING
    user_title,                                 // STRING
    can_create_sessions                         // BOOLEAN
}
```

**DELETE /api/organizations/:id/users/:uid**
- Delete an organization's user via ID
- Returning data structure:
```
{
    id,                                         // INTEGER        
    user_id,                                    // INTEGER
    organization_id,                            // INTEGER
    user_type,                                  // STRING
    user_title,                                 // STRING
    can_create_sessions                         // BOOLEAN
}
```


### ----- SessionsRoutes --------------------------------------------------------------------------

**GET /api/sessions/?org_id=##**
- Get all sessions with attached meetings
- Returning data structure:
```
[
    {
        id,                                     // INTEGER
        organization_id,                        // INTEGER
        organizer_id,                           // INTEGER
        host_id,                                // INTEGER
        date,                                   // STRING
        location,                               // STRING
        start_time,                             // STRING
        duration,                               // STRING
        delay,                                  // STRING
        meetings: [  
            {
                id,                             // INTEGER
                organization_id,                // INTEGER
                session_id,                     // INTEGER
                host_id,                        // INTEGER
                member_id,                      // INTEGER
                location,                       // STRING
                duration,                       // STRING
                delay,                          // STRING
                topic_1,                        // STRING
                topic_2,                        // STRING
                topic_3                         // STRING
            }
        ]
    }
]
```

**GET /api/sessions/:id?org_id=##**
- Get a session via ID with attached meetings
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    meetings: [  
        {
            id,                                 // INTEGER
            organization_id,                    // INTEGER
            session_id,                         // INTEGER
            host_id,                            // INTEGER
            member_id,                          // INTEGER
            location,                           // STRING
            duration,                           // STRING
            delay,                              // STRING
            topic_1,                            // STRING
            topic_2,                            // STRING
            topic_3                             // STRING
        }
    ]
}
```

**POST /api/sessions/?org_id=##**
- Create a session
    - Required fields in req.body:
```
{
    user_id,                                        // INTEGER
    organization_id,                                // INTEGER
    date,                                           // STRING
    start_time,                                     // STRING
    location,                                       // STRING
    duration,                                       // STRING
    delay                                           // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```

**POST /api/sessions/:sid/host?org_id=##**
- Assign a host to a session
    - Required fields in req.body:
```
{
    host_id                                         // INTEGER
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```

**PATCH /api/sessions/:id?org_id=##**
- Update a session's info
    - At least one(1) of the following fields in body is required:
```
{
    user_id,                                        // INTEGER
    organization_id,                                // INTEGER
    date,                                           // STRING
    start_time,                                     // STRING
    location,                                       // STRING
    duration,                                       // STRING
    delay                                           // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```

**DELETE /api/sessions/:id?org_id=##**
- Delete a session via ID 
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```

**DELETE /api/sessions/:sid/host/:hid?org_id=##**
- Remove host from a session via ID 
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    organizer_id,                               // INTEGER
    host_id,                                    // INTEGER
    date,                                       // STRING
    location,                                   // STRING
    start_time,                                 // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```


### ----- MeetingsRoutes --------------------------------------------------------------------------

**GET /api/meetings?org_id=##**
- Get all meetings
- Returning data structure:
```
[  
    {
        id,                                     // INTEGER
        organization_id,                        // INTEGER
        session_id,                             // INTEGER
        host_id,                                // INTEGER
        member_id,                              // INTEGER
        location,                               // STRING
        duration,                               // STRING
        delay,                                  // STRING
        topic_1,                                // STRING
        topic_2,                                // STRING
        topic_3                                 // STRING
    }
]
```

**GET /api/meetings/:id?org_id=##**
- Get an meetings via ID
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```

**POST /api/meetings?org_id=##**
- Create a meeting
    - Required fields in req.body:
```
{
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```

**POST /api/meetings/:id/member?org_id=##**
- Assign a meetings/:mid/members to a session
    - Required fields in req.body:
```
{
    organization_id,                                // INTEGER
    member_id                                       // INTEGER
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```

**PATCH /api/meetings/:id?org_id=##**
- Update a meeting's info
    - At least one(1) of the following fields in body is required:
```
{
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay                                       // STRING
}
```
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```

**DELETE /api/meetings/:id?org_id=##**
- Delete a meeting via ID
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```

**DELETE /api/meetings/:id/members/:memid?org_id=##**
- Remove member from a meeting via ID 
- Returning data structure:
```
{
    id,                                         // INTEGER
    organization_id,                            // INTEGER
    session_id,                                 // INTEGER
    host_id,                                    // INTEGER
    member_id,                                  // INTEGER
    location,                                   // STRING
    duration,                                   // STRING
    delay,                                      // STRING
    topic_1,                                    // STRING
    topic_2,                                    // STRING
    topic_3                                     // STRING
}
```


### ----- TagsRoutes ------------------------------------------------------------------------------

**GET /api/tags**
- Get all tags
- Returning data structure:
```
[
    {
        id,                                     // INTEGER
        tag_name                                // STRING
    }
]
```