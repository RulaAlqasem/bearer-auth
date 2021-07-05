# bearer-auth

## LAB -07 Bearer Authorization

- <a href=https://rulaalqasem-server-deploy-dev.herokuapp.com class=""><span      class="label">go to heroku app </span></a>

- <a href=https://github.com/RulaAlqasem/bearer-auth class=""><span class="label">go to gitHub </span></a>

- <a href=https://github.com/RulaAlqasem/bearer-auth/pull/1 class=""><span class="label"> pull request </span></a>

## Over-view

- auth-server is able to allow a user to create an account as well as to handle Basic Authentication (user provides a username + password). When a “good” login happens, the user is considered to be “authenticated” and our auth-server generates a JWT signed “Token” which is returned to the application

### Requirements

In this phase, the new requirement is that any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate … using a “token”

### As a user, I want to use my token to access routes that require a valid user

- Using httpie or postman, send a request to a “protected” route, such as /secretstuff
- Your request must send an “Authorization” header, with the value of Bearer TOKEN
- TOKEN is the token that you would have returned to the user after their signin step (above)
- If the TOKEN is valid (i.e. if it represents an actual user)
- The route should function as it normally would (sending a response)
  -If not Send the user an error message stating “Invalid Login”

#### ask 1: Fix The Bugs

- You will notice, by both attempting to start the server, as well as to run the tests … this server is a bit bug-ridden. Before you can tackle the task of securing the tokens, you must first get the server running.

- Tests have been written for you. When they are all passing, you’re mostly there
- Perform a manual validation of the server as well, so that you can be assured that you can interact with it as required

### Task 2: Secure the JWT Tokens

- Implement any 2 of these security measures, or any other measure that you can think of or have researched. Use a configuration option for these (i.e. an env setting) so that your system can handle multiple authorization schemes and easily turn them off/on

**Some ideas**:
Add support for the creation and usage of time sensitive (valid for 15 minutes) JWTs
Add support for the creation and usage of ‘single-use’ JWTs
With every authenticated access, re-send a new JWT token as a cookie or header
Disable those that you’ve already authenticated
Implement Sessions
Rather than store a user’s information in the token, create a “session” with an “id”
On the server, store lookup information in a session model using that ID
Sessions should timeout or be invalidated in some automated fashion
Add an additional layer of encryption

### Documentation

- Compose a UML or Process/Data Flow Diagram for every application

![WhiteBoard](lab7uml.png)
