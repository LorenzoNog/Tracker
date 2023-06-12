"use client";
import Navbar from './components/navigation/navbar'
import { useState } from "react";
import Dashboard from "./components/dashboard/dashboard";
import Incomes from "./components/incomes/incomes";
import Expenses from "./components/expenses/expenses";
import { UseGlobalContext } from "./context/globalContext"; 

export default function App() {
  const [active, setActive] = useState(1);

  const global = UseGlobalContext()

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-row gap-5 p-5 h-[100vh] bg-[#16113A]">
      <Navbar active={active} setActive={setActive} />
      <main className="bg-gray-100 flex flex-col rounded-xl w-[100vw] h-[100vh]">
        {displayData()}
      </main>
    </div>
  );
}

