# MEAN_Lab5: Client for the Capstone Project - Hip to be Square!
Client (Angular) for Capstone 

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
http://localhost:4200/
- Login Page
http://localhost:4200/login
- Register Page
http://localhost:4200/register
- Manager Page (Update User Email - cannot access unless logged in)
http://localhost:4200/manager
- Teams Page (Landing Page - cannot access unless logged in)
http://localhost:4200/teams
- Admin Page (Details non-admin users - cannot access unless logged in and user is an admin)
http://localhost:4200/admin
- Patterns Page
http://localhost:4200/patterns

## Technologies
- HTML5/CSS3/Bootstrap4
- Angular
- Node.js

# Steps to create
+ In the Terminal, in the client dir, execute the following:
```
$ ng new client
...
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
CREATE client/angular.json (3409 bytes)
CREATE client/package.json (1277 bytes)
...
Project 'client' successfully created.
$ 
```

## Load App
```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/

## Modify App 
+ In the Terminal, in the client dir, execute the following to install Bootstrap:
```
npm install bootstrap --save
+ bootstrap@4.3.1
added 1 package from 2 contributors and audited 17092 packages in 18.593s
found 0 vulnerabilities
```

+ Open .angular.json and modify the "styles" property to the following

```
  "styles": [
          "./node_modules/bootstrap/dist/css/bootstrap.min.css",
          "styles.css"
        ]
```

+ Reload the page to confirm Bootstrap has been applied.

# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
