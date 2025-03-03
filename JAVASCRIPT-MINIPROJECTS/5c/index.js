// Import the User class from the login module
const User = require('./login');

// Create a user instance with username and password
const user = new User("exampleUser", "password123");

// Validate user credentials
console.log(user.validate("exampleUser", "password123")); // Should output: "Login Successful"
console.log(user.validate("exampleUser", "wrongPassword")); // Should output: "UnAuthorized Access"
