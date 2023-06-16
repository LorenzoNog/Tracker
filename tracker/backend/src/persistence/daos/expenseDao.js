import {expenseModel} from '../mongoDB/models/expenseModel.js'
import BasicMongo from "./BasicMongo.js";

class ExpenseMongo extends BasicMongo{
  constructor(model){
    super(model)
  }

}

export default new ExpenseMongo(expenseModel);
