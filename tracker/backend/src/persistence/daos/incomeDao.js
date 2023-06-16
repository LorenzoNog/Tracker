import {incomeModel} from '../mongoDB/models/incomeModel.js'
import BasicMongo from './BasicMongo.js';

class IncomeMongo extends BasicMongo {
  constructor(model) {
    super(model)
  }
}

export default new IncomeMongo(incomeModel);
