import ExpenseMongo from '../persistence/daos/expenseDao.js'

class ExpenseService{
    constructor(dao){
        this.dao = dao
    }

    create = async (obj) => {
        const CreateOne = await ExpenseMongo.create(obj)
        return CreateOne
    };

    getAll = async () => {
        const getAll = await ExpenseMongo.getAll()
        return getAll
    };

    deleteOne = async (id) => {
        const deleteOne = await ExpenseMongo.deleteById(id)
        return deleteOne
    }
}

export default new ExpenseService(ExpenseMongo)