# MEAN_Final_Project Repository for the Capstone Project - Hip to be Square!

![IndexPage](client/src/assets/img/sitescreenshot.jpg?raw=true "IndexPage")

## Site Author
* **Pamela W Belknap** - HartCode Academy 2019

## Purpose and goals of this site
- To display the leagues and teams for a charity knitting and crocheting drive.
- To register, edit, and delete site users. 

## Audience
- Prospective and current team managers
- Prospective and current knitting and crocheting team members  

- ### What do they want from my site?
- To view the leagues and teams for a charity knitting and crocheting drive.
- To be able to register, edit, and unregister users.
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

# NOTE
This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

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
+ Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
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


## HartCode Academy Acknowledgments

* Dana Wyatt (for her fantastic instruction on JavaScript, jQuery, and all things coding!)
* Rob Frenette (for his instruction on HTML, CSS, Angular, Typescript, Node.js, MySQL; and for his instance on standards of excellence.)
* Denise Fraser (for checking in with us, arranging for visitors, and being a great manager!)
* Renisa Sizer (for checking in with us, and arranging for visitors)
* Franca Lewis (for supporting us and arranging for visitors)
* Joe Rybczyk (for paving the way for me to go to HartCode Academy!)
* To ALL my fellow students - it's been an exhausting, but fun adventure!




