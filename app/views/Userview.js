const UserServices = require("./../services/UserService")

class UserView{

    static createUser(payload){
        return UserServices.create2(payload)
    }
}

module.exports = UserView;