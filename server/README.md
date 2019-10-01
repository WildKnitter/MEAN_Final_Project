# MEAN_Lab5: Server for the Capstone Project - Hip to be Square!
Server for Capstone - Node/Express/PostgreSQL/Sequelize

## Site Author
* **Pamela W Belknap** - HartCode Academy 2019

## Data Rendered:

- **Users Data from ProsgreSQL file users**

- GET users listing for non-admins ({ where: { is_admin: "0" }).
GET: http://localhost:3000/users/

- POST for Login. */
POST http://localhost:3000/users/login

- POST for Register.
POST http://localhost:3000/users/register

- PUT users for editing user email.
PUT http://localhost:3000/users/edituserprofile/:ID

- DELETE user.
DELETE http://localhost:3000/users/edituserprofile/:ID

- **Leagues Data from JSON file leagues**

- GET leagues data.
GET http://localhost:3000/leagues/data

- **Teams Data from JSON file teams**

- GET Teams data.
GET http://localhost:3000/teams/data

- GET teams data by team id.
GET http://localhost:3000/teams/data/:id 

- GET Teams data by league.
GET http://localhost:3000/teams/data/byleague/:id

- GET Teams data by TeamType (Craft).
GET http://localhost:3000/teams/data/byteamtype/:id

- DELETE a team.
DELETE http://localhost:3000/teams/data/:id 

## Technologies
- HTML5/CSS3/Bootstrap4
- JavaScript
- jQuery
- Node.js
- ProgreSQL

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA


## Server and app setup and start
This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

- In the command prompt:

```
$ cd server
$ npm install 
```
This will install the npm packages from package.json.

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Test
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
+ Test using Postman Collection:
    + MEAN_Final_Project.postman_collection

### Input and Outputs for Testing:
**POST Login**
POST http://localhost:3000/users/login
Input:
```
username: req.body.username
password: req.body.password
```
Output (Positive):
```
{
    "ID": 3,
    "username": "pbelknap",
    "email": "pbelknap@cox.net",
    "password": "password",
    "is_admin": "1",
    "createdAt": "2019-09-29T23:58:19.711Z",
    "updatedAt": "2019-09-29T23:58:19.711Z"
}
```

Output (Negative):
```
{
    "error": "Posting Users error"
}
```

**POST Register**
POST http://localhost:3000/users/register
Input:
```
username: req.body.username
email: req.body.email
password: req.body.password
```
Output (Positive):
```
{
    "is_admin": "0",
    "ID": 24,
    "username": "bizbaz",
    "email": "bizbaz@test.com",
    "password": "password",
    "updatedAt": "2019-09-30T17:58:23.160Z",
    "createdAt": "2019-09-30T17:58:23.160Z"
}
```
Output (Negative):
```
{
    "error": "User not created"
}
```

**EDIT user**
PUT http://localhost:3000/users/edituserprofile/7
Input:
```
email: req.body.email
```
Output (Positive):
```
[
    1
]
```
Output (Negative):
```
[
    0
]
```

**DELETE user**
DELETE http://localhost:3000/users/edituserprofile/7
Output (Positive):
```
1
```
Output (Negative):
```
0
```

**GET User Data**
GET http://localhost:3000/users/

Output (Positive):
```
 {
        "ID": 1,
        "username": "foobar",
        "email": "foobar@test.com",
        "password": "password",
        "is_admin": "0",
        "createdAt": "2019-09-29T23:58:19.711Z",
        "updatedAt": "2019-09-29T23:58:19.711Z"
    },
    {
        "ID": 2,
        "username": "finkyfoo",
        "email": "finkyfoo@test.com",
        "password": "password",
        "is_admin": "0",
        "createdAt": "2019-09-29T23:58:19.711Z",
        "updatedAt": "2019-09-29T23:58:19.711Z"
    },

Etc.
```
Output (Negative):
```
No Users found
```

**GET Leagues Data**
GET http://localhost:3000/leagues/data
Output (Positive):
```
[{
        "Name": "Granby Senior Center",
        "Code": "SeniorCenter",
        "Description": "This charity league consists of teams that will create blankets for the Granby Senior Center members"
    },
    {
        "Name": "Little Tykes Day Care",
        "Code": "DayCare",
        "Description": "This charity league consists of teams that will create blankets for the Little Tykes Day Care"
    },
    {
        "Name": "South Park Inn",
        "Code": "Shelter",
        "Description": "This league consists of teams that will create blankets for the South Park Inn Shelter"
    },
    {
        "Name": "CT Humane Society in Newington",
        "Code": "AnimalShelter",
        "Description": "This league consists of teams that will create blankets for the CT Humane Society in Newington"
    },
    {
        "Name": "East Granby Senior Center",
        "Code": "EGSeniorCenter",
        "Description": "This league consists of teams that will create blankets for the East Granby Senior Center members"
    }
]
```
Output (Negative):
```
[]
```

**GET Teams Data**
GET http://localhost:3000/teams/data
Output (Positive):
```
[{
        "TeamId": 1,
        "TeamName": "KnittingChicksWithSticks",
        "League": "SeniorCenter",
        "TeamType": "Knitting",
        "ManagerName": "Pamela Belknap",
        "ManagerPhone": "860-555-6041",
        "ManagerEmail": "pbelknap@cox.net",
        "MaxTeamMembers": 5,
        "MinMemberAge": 15,
        "MaxMemberAge": 95,
        "TeamGender": "Any",
        "Members": [{
            "MemberId": 1,
                "Email": "pbelknap@cox.net",
                "MemberName": "Pam Belknap",
                "ContactName": "",
                "Age": 55,
                "Gender": "Female",
                "Phone": "860-555-6041"
            },
Etc.
```
Output (Negative):
```
[]
```

**Team Data by League**
GET http://localhost:3000/teams/data/byleague/SeniorCenter
Output (Positive):
```
[{"TeamId":1,"TeamName":"KnittingChicksWithSticks","League":"SeniorCenter","TeamType":"Knitting","ManagerName":"Pamela Belknap","ManagerPhone":"860-555-6041","ManagerEmail":"pbelknap@cox.net","MaxTeamMembers":5,"MinMemberAge":15,"MaxMemberAge":95,"TeamGender":"Any","Members":[{"MemberId":1,"Email":"pbelknap@cox.net","MemberName":"Pam Belknap","ContactName":"","Age":55,"Gender":"Female","Phone":"860-555-6041"},{"MemberId":2,"Email":"angusk@gmail.com","MemberName":"Sheila Kars","ContactName":"Sheila Kars","Age":73,"Gender":"Female","Phone":"860-555-3952"},

Etc.
```
Output (Negative):
```
[]
```

**GET Teams Data by Team Id**
GET http://localhost:3000/teams/data/1
Output (Positive):
```
{"TeamId":1,"TeamName":"KnittingChicksWithSticks","League":"SeniorCenter","TeamType":"Knitting","ManagerName":"Pamela Belknap","ManagerPhone":"860-555-6041","ManagerEmail":"pbelknap@cox.net","MaxTeamMembers":5,"MinMemberAge":15,"MaxMemberAge":95,"TeamGender":"Any","Members":[{"MemberId":1,"Email":"pbelknap@cox.net","MemberName":"Pam Belknap","ContactName":"","Age":55,"Gender":"Female","Phone":"860-555-6041"},{"MemberId":2,"Email":"angusk@gmail.com","MemberName":"Sheila Kars","ContactName":"Sheila Kars","Age":73,"Gender":"Female","Phone":"860-555-3952"},{"MemberId":107,"Email":"jgaucher@cox.net","MemberName":"Joanna Gaucher","ContactName":"Joanna","Age":51,"Gender":"Female","Phone":"860-555-6363"},{"MemberId":124,"Email":"johnsmith@yahoo.com","MemberName":"John Smith","ContactName":"","Age":35,"Gender":"Male","Phone":"860-555-3333"}]}
```
Output (Negative):
```
Not Found
```

**DELETE Teams Data by Team Id**
DELETE http://localhost:3000/teams/data/109
Output (Positive):
```
1
```
Output (Negative):
```
0
```

**GET Teams Data by TeamType**
GET http://localhost:3000/teams/data/byteamtype/Knitting
Output (Positive):
```
[{"TeamId":1,"TeamName":"KnittingChicksWithSticks","League":"SeniorCenter","TeamType":"Knitting","ManagerName":"Pamela Belknap","ManagerPhone":"860-555-6041","ManagerEmail":"pbelknap@cox.net","MaxTeamMembers":5,"MinMemberAge":15,"MaxMemberAge":95,"TeamGender":"Any","Members":[{"MemberId":1,"Email":"pbelknap@cox.net","MemberName":"Pam Belknap","ContactName":"","Age":55,"Gender":"Female","Phone":"860-555-6041"},{"MemberId":2,"Email":"angusk@gmail.com","MemberName":"Sheila Kars","ContactName":"Sheila Kars","Age":73,"Gender":"Female","Phone":"860-555-3952"},{"MemberId":107,"Email":"jgaucher@cox.net","MemberName":"Joanna Gaucher","ContactName":"Joanna","Age":51,"Gender":"Female","Phone":"860-555-6363"},{"MemberId":124,"Email":"johnsmith@yahoo.com","MemberName":"John Smith","ContactName":"","Age":35,"Gender":"Male","Phone":"860-555-3333"}]},
Etc.
```
Output (Negative):
```
[]
```




