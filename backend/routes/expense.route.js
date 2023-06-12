import { Router } from "express";
import expenseController from "../controllers/expense.controller.js";

const ExpenseRouter = Router();

ExpenseRouter.get('/get-expense', expenseController.getExpenses);
ExpenseRouter.post('/add-expense', expenseController.addExpense);
ExpenseRouter.delete('/delete-expense/:id', expenseController.deleteExpense);

export default ExpenseRouter;
