import LineChart from "../../chart/chart";
import { UseGlobalContext } from "../../context/globalContext";
import History from "../history/history";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    totalIncome,
    totalExpense,
    totalBalance,
    getIncomes,
    getExpenses,
    incomes,
    expenses,
  } = UseGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="flex flex-col p-5">
        <h1 className="text-3xl text-purple-400 font-bold mb-5">
          All transactions
        </h1>
        <div className="flex flex-col gap-3">
          <div className="bg-[#FCF6F9] border-2 shadow-xl p-2 rounded-xl h-[100%]">
            <LineChart />
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <div className="bg-[#FCF6F9] p-3 border-2 col-span-2">
              <h2 className="font-bold text-xl text-gray-500">Total Income:</h2>
              <span className="font-bold text-green-500 text-4xl">
                $ {totalIncome()}
              </span>
            </div>
            <div className="bg-[#FCF6F9] p-3 border-2 col-span-2">
              <h2 className="font-bold text-xl text-gray-500">
                Total Expense:
              </h2>
              <span className="font-bold text-green-500 text-4xl">
                $ {totalExpense()}
              </span>
            </div>
            <div className="bg-[#FCF6F9] flex flex-col p-3 border-2 justify-center place-items-center col-span-4">
              <h2 className="font-bold text-xl text-gray-500">
                Total Balance:
              </h2>
              {totalBalance() < 0 && (
                <span className="font-bold text-red-500 text-4xl">
                  $ {totalBalance()}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <History />
        <div className="mt-5">
          <div className="px-1 text-xl text-purple-400 font-bold place-items-center flex flex-row justify-between mb-3">
            <span>Min.</span>
            <h2 className="text-3xl text-purple-800 font-bold ">Incomes</h2>
            <span>Max.</span>
          </div>
          <div className="flex flex-row justify-between bg-[#FCF6F9] border-2 p-1 rounded-xl">
            <span className="font-bold text-xl text-gray-500">
              $ {Math.min(...incomes.map((income) => income.amount))}
            </span>
            <span className="font-bold text-xl text-gray-500">
              $ {Math.max(...incomes.map((income) => income.amount))}
            </span>
          </div>
        </div>
        <div className="mt-5">
          <div className="px-1 text-xl text-purple-400 font-bold flex flex-row justify-between place-items-center mb-3">
            <span>Min.</span>
            <h2 className="text-3xl text-purple-800 font-bold">
              Expenses
            </h2>
            <span>Max.</span>
          </div>
          <div className="flex flex-row justify-between bg-[#FCF6F9] border-2 p-1 rounded-xl">
            <span className="font-bold text-xl text-gray-500">
              $ {Math.min(...expenses.map((income) => income.amount))}
            </span>
            <span className="font-bold text-xl text-gray-500">
              $ {Math.max(...expenses.map((income) => income.amount))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
