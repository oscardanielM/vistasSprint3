const UserService = require("./../../app/services/UserService")
const UserView = require("../../app/views/Userview")

describe("Prueba de clase UserService", () => {
    test("Preba 1", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        expect(user.username).toBe("oscarmtz")
        expect(user.name).toBe("Oscar")
        expect(user.id).toBe(1)
        expect(user.username).not.toBeUndefined();
    });

    test("Preba 2", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("oscarmtz")
        expect(userInfoInList[2]).toBe("Oscar")
        expect(userInfoInList[3]).toBe("Sin bio")
    });

    test("Preba 3", () => {
        const user = UserService.create(1, "oscarmtz", "Oscar")
        UserService.updateUserUsername(user, "oscarmtzglez")
        expect(user.username).toBe("oscarmtzglez")
    });

    test("Preba 4", () => {
        const user1 = UserService.create(1, "oscarmtz1", "Oscar")
        const user2 = UserService.create(1, "oscarmtz2", "Oscar")
        const user3 = UserService.create(1, "oscarmtz3", "Oscar")
        const usernames = UserService.getAllUsernames([user1,user2,user3])
        expect(usernames).toContain("oscarmtz1")
        expect(usernames).toContain("oscarmtz2")
        expect(usernames).toContain("oscarmtz3")
    });
})

describe("prueba de clase UserView", () => {
    test("Prueba 1", () => {
        const payload = null;
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });

    test("Prueba 2", () => {
        const payload = {username: null, name: 12, id: "id"};
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    });

    test("Prueba 3", () => {
        const payload = {username: "Username"};
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor válido/)
    })

    test("Prueba 4", () => {
        const payload = {username: "oscarmtz", id:1, name: "Oscar"};
        const result = UserView.createUser(payload)
        expect(result.name).toBe("Oscar")
        expect(result.username).toBe("oscarmtz")
        expect(result.id).toBe(1)
    })
})