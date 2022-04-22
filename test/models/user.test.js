const User = require("../../app/models/user")

describe("Test para clase User", () => {
    test('Prueba 1', () => { 
        //Aqui se coloca el codigo a testear
        const user = new User(1, "oscarmtz", "Oscar Daniel", "Bio");

        //Aqi validamos los resultados del codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.username).toBe("oscarmtz")
        expect(user.name).toBe("Oscar Daniel")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
     });

     test('Prueba 2 add getters', () => { 
        //Aqui se coloca el codigo a testear
        const user = new User(1, "oscarmtz", "Oscar Daniel", "Bio");

        //Aqi validamos los resultados del codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.id).toBe(1)
        expect(user.getUsername).toBe("oscarmtz")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
     })

     test('Prueba 3 add setters', () => { 
        //Aqui se coloca el codigo a testear
        const user = new User(1, "oscarmtz", "Oscar Daniel", "Bio");

        //Aqi validamos los resultados del codigo
        // Esta es una comparacion que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        user.setUsername = "OscarExplorer"
        expect(user.getUsername).toBe("OscarExplorer")

        user.setBio = "New bio"
        expect(user.getBio).toBe("New bio")
     })
})