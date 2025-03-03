class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validate(username, password) {
        if (this.username === username && this.password === password) {
            return "Login Successful";
        } else {
            return "UnAuthorized Access";
        }
    }
}

// Export the User class
module.exports = User;
