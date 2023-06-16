
export default class BasicMongo {
    constructor(model) {
      this.model = model;
    }
  
    async create(obj) {
      try {
        const response = await this.model.create(obj);
        return response;
      } catch (error) {
        return error;
      }
    }
  
    async getAll() {
      try {
        const response = await this.model.find();
        return response;
      } catch (error) {
        return error;
      }
    }
  
    async deleteById(id) {
      try {
        const response = await this.model.findByIdAndDelete(id);
        return response;
      } catch (error) {
        return error;
      }
    }
  }