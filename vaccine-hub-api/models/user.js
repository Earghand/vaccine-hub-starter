const { unauthorized } = require('../utils/errors')

class User{
    static async login(credentials) {
        // user should submit their email and password
        //if those fields are missing, throw an error
        //lookup teh user in the db by email
        //if a user is found, compare the submitted password
        //if there is a match, return the user
        //if any of this goes wrong, throw an error
        throw new UnauthorizedError("Invalid email/password combo")
    }
    static async register(credentials) {
        

    }
}

module.exports = user