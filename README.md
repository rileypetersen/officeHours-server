# OfficeHours-server
The goal of DayWorker is to create a bridge between day laborers and those looking to hire a helping hand. DayWorker is designed to connect job seekers to a variety of different work, whether that be simple yard work, retiling a shower, or even building a deck; DayWorker will bring it's users together so that eager to work helping hands can find those that need them.

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
- Get a user by ID

**POST /api/users/register**
- Create a new user
    - required fields in req.body.create:
```
{
    name,           // STRING
    username,       // STRING
    email,          // STRING
    password,       // STRING
    zipcode,        // INTEGER
    phone           // STRING
}
```

**POST /api/users/login**
- Login existing user
    - required fields in req.body:
```
{
    email,          // STRING
    password,       // STRING
}
```

**PATCH /api/users/:id**
- Update current user info
    - at least one(1) of the following fields in body is required:
```
{
    name,           // STRING
    username,       // STRING
    email,          // STRING
    password,       // STRING
    zipcode,        // INTEGER
    phone           // STRING
}
```

**DELETE /api/users/:id**
- Delete a user by ID


### ----- OrganizationsRoutes --------------------------------------------------------------------------

**GET /api/organizations**
- Get all organizations

**GET /api/organizations/:oid**
- Get an organization via ID

**POST /api/organizations**
- Create an organization

**PATCH /api/organizations/:oid**
- Update an organization's info

**DELETE /api/organizations/:oid**
- Delete an organization via ID


### ----- SessionsRoutes --------------------------------------------------------------------------

**GET /api/organizations/:oid/sessions**
- Get all sessions

**GET /api/organizations/:oid/sessions/:sid**
- Get a session via ID

**POST /api/organizations/:oid/sessions**
- Create a session

**PATCH /api/organizations/:oid/sessions/:sid**
- Update a session's info

**DELETE /api/organizations/:oid/sessions/:sid**
- Delete a session via ID 


### ----- MeetingsRoutes --------------------------------------------------------------------------

**GET /api/organizations/:oid/sessions/:sid/meetings**
- Get all meetings

**GET /api/organizations/:oid/sessions/:sid/meetings/:mid**
- Get an meetings via ID

**POST /api/organizations/:oid/sessions/:sid/meetings**
- Create a meeting

**PATCH /api/organizations/:oid/sessions/:sid/meetings/:mid**
- Update a meeting's info

**DELETE /api/organizations/:oid/sessions/:sid/meetings/:mid**
- Delete a meeting via ID
