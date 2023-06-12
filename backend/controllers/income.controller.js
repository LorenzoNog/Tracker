import incomeService from "../services/income.service.js";

class IncomeController {
  addIncome = async (req, res) => {
    const { title, amount, date, category, description } = req.body;
    try {
      if (title.length === 0 || amount.length === 0  || !date || !category || description.length === 0) {
        return res.status(400).json({ message: "Faltan completar datos." });
      } else {
        const Income = await incomeService.create({
          title,
          amount,
    
          date,
          category,
          description,
        });
        res
          .status(200)
          .json({ message: "Ingreso agregado correctamente.", Income });
      }
    } catch (error) {
      res.status(500).json({ message: "Error en el add income" });
    }
  };

  getIncomes = async (req, res) => {
    try {
      const Incomes = await incomeService.getAll()
      res.status(200).json(Incomes);
    } catch (error) {
      res.status(500).json({ message: "Error en el get incomes" });
    }
  };

  deleteIncome = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteIncome = await incomeService.deleteOne(id);
      res.status(200).json({ message: "Borrado con exito", deleteIncome });
    } catch (error) {
      res.status(500).json({ message: "Error en el delete income" });
    }
  };
}

export default new IncomeController();
