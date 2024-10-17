import { useState } from "react";
import ExpenseList from "./Tracker Components/ExpenseList";
import IncomeList from "./Tracker Components/IncomeList";
import TrackExpense from "./Tracker Components/TrackExpense";
import TrackIncome from "./Tracker Components/TrackIncome";
import TrackSummary from "./Tracker Components/TrackSummary";

export default function Tracker() {
  const [isExpense, setIsExpense] = useState(true);
  const [expenseItems, setExpenseItems] = useState([]);
  const [incomeItems, setIncomeItems] = useState([]);
  const [expenseItemToUpdate, setExpenseItemToUpdate] = useState(null);
  const [incomeItemToUpdate, setIncomeItemToUpdate] = useState(null);

  const toggleToIncome = () => setIsExpense(false);
  const toggleToExpense = () => setIsExpense(true);

  const handleExpenseItems = (newExpense, isUpdate = false) => {
    if (isUpdate) {
      setExpenseItems((items) =>
        items.map((item) => (item.id === newExpense.id ? newExpense : item))
      );
      setExpenseItemToUpdate(null); // Reset here
    } else {
      setExpenseItems([...expenseItems, newExpense]);
    }
  };

  const handleDeleteExpenseItem = (expenseItemToDelete) => {
    setExpenseItems((items) => {
      return items.filter((item) => item.id !== expenseItemToDelete.id);
    });
    console.log(expenseItemToDelete);
  };

  const handleEditExpenseItem = (incomeItemToEdit) => {
    setExpenseItemToUpdate(incomeItemToEdit);
  };

  const handleIncomeItems = (newIncome, isUpdate = false) => {
    if (isUpdate) {
      setIncomeItems((items) =>
        items.map((item) => (item.id === newIncome.id ? newIncome : item))
      );
      setIncomeItemToUpdate(null); // Reset here
    } else {
      setIncomeItems([...incomeItems, newIncome]);
    }
  };

  const handleDeleteIncomeItem = (incomeItemToDelete) => {
    setIncomeItems((items) => {
      return items.filter((item) => item.id !== incomeItemToDelete.id);
    });
    console.log(incomeItemToDelete);
  };

  const handleEditIncomeItem = (expenseItemToEdit) => {
    setIncomeItemToUpdate(expenseItemToEdit);
  };

  let totalExpense = 0;
  expenseItems.map((i) => (totalExpense = Number(i.amount) + totalExpense));

  let totalIncome = 0;
  incomeItems.map((i) => (totalIncome = Number(i.amount) + totalIncome));

  let balance = totalIncome - totalExpense;

  return (
    <main className="relative mx-auto mt-10 w-full max-w-7xl">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isExpense ? (
          <TrackExpense
            onToggleForm={toggleToIncome}
            handleExpenseItems={handleExpenseItems}
            expenseItemToUpdate={expenseItemToUpdate}
            setExpenseItemToUpdate={setExpenseItemToUpdate}
          />
        ) : (
          <TrackIncome
            onToggleForm={toggleToExpense}
            handleIncomeItems={handleIncomeItems}
            incomeItemToUpdate={incomeItemToUpdate}
            setIncomeItemToUpdate={setIncomeItemToUpdate}
          />
        )}

        <div className="lg:col-span-2">
          <TrackSummary
            totalExpense={totalExpense}
            totalIncome={totalIncome}
            balance={balance}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <IncomeList
              incomeItems={incomeItems}
              onIncomeDelete={handleDeleteIncomeItem}
              onIncomeEdit={handleEditIncomeItem}
            />

            <ExpenseList
              expenseItems={expenseItems}
              onExpenseDelete={handleDeleteExpenseItem}
              onExpenseEdit={handleEditExpenseItem}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
