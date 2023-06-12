import expenseService from "../services/expense.service.js";

class ExpenseController {
  addExpense = async (req, res) => {
    const { title, amount, date, category, description } = req.body;
    try {
      if (!title || !amount || !date || !category || !description) {
        return res.status(400).json({ message: "Faltan completar datos." });
      } else {
        const Expense = await expenseService.create({
          title,
          amount,
          date,
          category,
          description,
        });
        res
          .status(200)
          .json({ message: "Expensa agregada correctamente.", Expense });
      }
    } catch (error) {
      res.status(500).json({ message: "Error en el add Expense" });
    }
  };

  getExpenses = async (req, res) => {
    try {
      const Expenses = await expenseService.getAll()
      res.status(200).json(Expenses);
    } catch (error) {
      res.status(500).json({ message: "Error en el get Expenses" });
    }
  };

  deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteExpense = await expenseService.deleteOne(id);
      res.status(200).json({ message: "Borrado con exito", deleteExpense });
    } catch (error) {
      res.status(500).json({ message: "Error en el delete Expense" });
    }
  };
}

export default new ExpenseController();
