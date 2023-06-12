import IncomeMongo from '../persistence/daos/incomeDao.js'

class IncomeService{
    constructor(dao){
        this.dao = dao
    }

    create = async (obj) => {
        const CreateOne = await IncomeMongo.create(obj)
        return CreateOne
    };

    getAll = async () => {
        const getAll = await IncomeMongo.getAll()
        return getAll
    };

    deleteOne = async (id) => {
        const deleteOne = await IncomeMongo.deleteById(id)
        return deleteOne
    }
}

export default new IncomeService(IncomeMongo)