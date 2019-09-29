# MEAN_Final_Project Repository for the Capstone Project - Hip to be Square!

![IndexPage](client/src/assets/img/sitescreenshot.jpg?raw=true "IndexPage")

## Site Author
* **Pamela W Belknap** - HartCode Academy 2019

## Purpose and goals of this site
- To display the leagues, teams, and members for a charity knitting and crocheting drive.
- To sign up teams and members for the drive.
- To register, edit, and delete site users. 

## Audience
- Prospective and current team managers
- Prospective and current knitting and crocheting team members  

- ### What do they want from my site?
- To view the leagues, teams, and members for a charity knitting and crocheting drive.
- To sign up teams and members for the drive.
- To edit team and member information.
- To be able to unregister members and delete a team.
- To access some simple knitting and crocheting patterns to get started with their squares.

## Site Pages:
- Home Page
- Login Page
- Register Page
- Edit User Profile Page
- Teams Page (Landing Page)
- Admin Page (For an Admin.  Details non-admin users)
- Patterns Page

## Server for Capstone - Node/Express/PostgreSQL/Sequelize

### Data Rendered:

- Users Data from ProsgreSQL file users
http://localhost:3000/users

- Leagues Data from JSON file leagues
http://localhost:3000/leagues

- Teams Data from JSON file teams
http://localhost:3000/teams

### Technologies
- HTML5/CSS3/Bootstrap4
- JavaScript
- jQuery
- Node.js
- ProgreSQL

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

## Server start
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server

```
$ cd server
$ npm run dev 
```

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named demo in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Client start

```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/



