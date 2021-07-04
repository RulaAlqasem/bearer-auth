# basic-auth

# basic-auth

## LAB -06 Authentication

- <a href=https://rrr5643.herokuapp.com/ class=""><span      class="label">go to heroku app </span></a>

- <a href=https://github.com/RulaAlqasem/basic-auth class=""><span class="label">go to gitHub </span></a>

- <a href=https://github.com/RulaAlqasem/basic-auth/pull/1 class=""><span class="label"> pull request </span></a>

## Over-view

- Authentication System Phase 1: Deploy an Express server that implements Basic Authentication, with signup and signin capabilities, using a Mongo database for storage.

### As a user, I want to create a new account(signup) so that I may later login

- Using a tool such as httpie, postman, or a web form:
- Make a POST request to the/signup route with username and password
- Your server should support both JSON and FORM data as input
- On a successful account creation, return a 201 status with the user object in the body
- On any error, trigger your error handler with an appropriate error.

### As a user, I want to login to my account so that I may access protected information

- Using a tool such as httpie, postman, or a web form:
- Make a POST request to the /signin route
- Send a basic authentication header with a properly encoded username and password combination
- On a successful account login, return a 200 status with the user object in the body
- On any error, trigger your error handler with the message “Invalid Login”

### Testing

### You should manually test your routes using httpie from the command line or an application such as Postman or Insomnia. Additionally, you are required to write automated tests as well:

- POST to /signup to create a new user
- POST to /signin to login as a user (use basic auth)
- Need tests for auth middleware and the routes
  Does the middleware function (send it a basic header)

  Do the routes assert the requirements (signup/signin)

- This is going to require more “end to end” testing that you’ve done in the past

  To test signin, your tests actually need to create a user first, then try and login, so there’s a dependency built in

- Ensure that you use supergoose to test your routes and your database

### Documentation

- Compose a UML or Process/Data Flow Diagram for every application

![WhiteBoard](./lab6uml.png)
