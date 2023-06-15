import usersService from "../services/users.service.js";
import { generateToken } from "../utils.js";

class UsersController {
  createUser = async (req, res) => {
    const user = req.body;
    try {
      const newUser = await usersService.createUser(user);
      res.json({ message: "Usuario creado", newUser });
    } catch (error) {
      res.json({ message: "Error en el users controller CREATE" });
    }
  };

  getAll = async (req, res) => {
    try {
      const getAll = await usersService.getAll();
      res.send({ message: "usuarios encontrados:", getAll });
    } catch (error) {
      res.json({ message: "Error en el users controller find all" });
    }
  };

  deleteById = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteById = await usersService.deleteOne(id);
      res.json({ message: "usuario eliminado con exito", deleteById });
    } catch (error) {
      res.json({ message: "Error en el users controller  delete one" });
    }
  };

  loginUser = async (req, res) => {
    const obj = req.body;
    try {
      const user = await usersService.loginUser(obj);
      if (user) {
        const token = generateToken(user);
        res.cookie("cookieLogin", token);
        res.status(200).json(user);
      } else {
        res
          .status(400)
          .send(
            "Los datos ingresados no coinciden con los de un usuario registrado"
          );
      }
    } catch (error) {
      res.status(400).send("Error");
    }
  };
}

export default new UsersController();
