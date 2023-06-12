import { UseGlobalContext } from "../../context/globalContext";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlinePlus } from "react-icons/ai";

const ExpenseForm = () => {
  const { addExpense } = UseGlobalContext();

  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: " ",
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(inputState);
    setInputState({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col gap-5">
        <div>
          <input
            type="text"
            value={title}
            name={"title"}
            placeholder="Expense title"
            onChange={handleInput("title")}
            className="p-2 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md"
          />
        </div>
        <div>
          <input
            type="text"
            value={amount}
            name={"amount"}
            placeholder="Expense amount"
            onChange={handleInput("amount")}
            className="p-2 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md "
          />
        </div>
        <div>
          <DatePicker
            id="date"
            placeholderText="Enter a date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
            className="p-2 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md "
          />
        </div>
        <div>
          <textarea
            value={description}
            name="description"
            placeholder="Expense description"
            rows={3}
            onChange={handleInput("description")}
            className="p-2 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md w-[300px]"
          />
        </div>
      </div>
      <div className="w-[100%] flex justify-end">
        <select
          required
          value={category}
          name="category"
          id="category"
          onChange={handleInput("category")}
          className="p-2 rounded-xl border-2 border-white focus:outline-none bg-transparent shadow-md"
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="salary">Salary</option>
          <option value="freelancing">Freelancing</option>
          <option value="investments">Investiments</option>
          <option value="bank">Bank transfer</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="bg-red-200 flex flex-row place-items-center gap-2 border-2 rounded-3xl p-2 font-bold shadow-md hover:bg-emerald-100"
        >
          <AiOutlinePlus /> Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm

