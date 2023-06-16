import usersDao from "../persistence/daos/usersDao.js";


class UsersService{
    constructor(dao){
        this.dao = dao
    }

    createUser = async (user) => {
        const newUser = await usersDao.createUser(user)
        return newUser
    };

    getAll = async () => {
        const getAll = await usersDao.getAll()
        return getAll
    };

    deleteOne = async (id) => {
        const deleteOne = await usersDao.deleteById(id)
        return deleteOne
    }

    loginUser = async(user) => {
        const loginUser = await usersDao.loginUser(user)
        return loginUser
    };
}

export default new UsersService(usersDao)