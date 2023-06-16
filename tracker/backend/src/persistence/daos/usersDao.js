import { usersModel } from "../mongoDB/models/usersModel.js";
import BasicMongo from "./BasicMongo.js";
import { hashPassword, comparePassword } from '../../utils.js';

class UsersMongo extends BasicMongo {
  constructor(model) {
    super(model);
  }
  async createUser(user) {
    const { firstname, lastname, email, password } = user;
    try {
      const existUser = await this.model.find({ email });
      if (existUser.length === 0) {
        const newUser = {
          firstname,
          lastname,
          email,
          password: await hashPassword(password),
        };
        await this.model.create(newUser);
        console.log(`Nuevo usuario creado con exito ${newUser.email}`)
        return newUser;
      } else {
        console.log("error");
      }
    } catch (error) {
      return error;
    }
  }
  async loginUser(user) {
    const { email, password } = user;
    if (email.length === 0 || password.length === 0) {
      console.log('No ingreso los datos necesarios');
    } else {
      const user = await this.model.findOne({ email });
      if (user) {
        const compare = await comparePassword(password, user.password)
        if(compare){
          console.log(`Usuario logueado ${user.email}`)
          return user
        }else{
          console.log('Error en el compare user')
        }
      } else {
        console.log("No existe ningun usuario registrado con ese email");
      }
    }
  }
}

export default new UsersMongo(usersModel);
