const User = require("./../models/user")

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(User){
        const Array = [];
        Array.push(User.id, User.username, User.name, User.bio, User.dateCreated, User.lastUpdate)
        return Array;
    }

    static updateUserUsername(User, username){
        User.username = username;
        return User;
    }

    static getAllUsernames(Datos){
        return Datos.map( (user) => user.username )
    }

    static create2(newUser){
        if(newUser != null){
            if(newUser.username == null || newUser.name == null || newUser.id == null){
                return {error : "necesitan tener un valor válido"};
            }else{
                return new User(newUser.id, newUser.username, newUser.name, "Sin bio");
            }
        }else{
            return {error : "payload no existe"};
        }
    }
}

module.exports = UserService;