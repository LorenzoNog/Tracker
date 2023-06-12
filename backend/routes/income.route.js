import { Router } from "express";
import incomeController from "../controllers/income.controller.js";

const IncomeRouter = Router();

IncomeRouter.get('/get-income', incomeController.getIncomes);
IncomeRouter.post('/add-income', incomeController.addIncome);
IncomeRouter.delete('/delete-income/:id', incomeController.deleteIncome);

export default IncomeRouter;
