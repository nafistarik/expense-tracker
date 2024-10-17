/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function TrackExpense({
  onToggleForm,
  handleExpenseItems,
  expenseItemToUpdate,
  setExpenseItemToUpdate,
}) {
  const handleCategoryChange = (e) => {
    setNewExpense({ ...newExpense, category: e.target.value });
  };
  const handleAmountChange = (e) => {
    setNewExpense({ ...newExpense, amount: e.target.value });
  };
  const handleDateChange = (e) => {
    setNewExpense({ ...newExpense, date: e.target.value });
  };

  const [newExpense, setNewExpense] = useState({
    category: "Education",
    amount: 0,
    date: "",
  });

  const handleExpenseForm = (e) => {
    e.preventDefault();
    if (newExpense.id) {
      handleExpenseItems(newExpense, true);
    } else {
      const expenseWithId = {
        ...newExpense,
        id: crypto.randomUUID(),
      };

      handleExpenseItems(expenseWithId);
    }

    setNewExpense({
      category: "Education",
      amount: 0,
      date: "",
    });
    setExpenseItemToUpdate(null);
  };

  console.log(expenseItemToUpdate);

  useEffect(() => {
    if (expenseItemToUpdate) {
      setNewExpense({
        category: expenseItemToUpdate.category,
        amount: expenseItemToUpdate.amount,
        date: expenseItemToUpdate.date,
        id: expenseItemToUpdate.id,
      });
    }
  }, [expenseItemToUpdate]);

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        {expenseItemToUpdate ? "Edit Expense" : "Expense Tracker"}
      </h2>

      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div className="cursor-pointer text-center flex-1 px-4 py-2 bg-teal-600  text-white  active">
            Expense
          </div>
          <button
            onClick={onToggleForm}
            className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900"
          >
            Income
          </button>
        </div>

        <div className="mt-3">
          <label
            htmlFor="category"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Category
          </label>
          <div className="mt-2">
            <select
              id="category"
              name="category"
              value={newExpense.category}
              onChange={handleCategoryChange}
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              <option>Education</option>
              <option>Food</option>
              <option>Health</option>
              <option>Bill</option>
              <option>Insurance</option>
              <option>Tax</option>
              <option>Transport</option>
              <option>Telephone</option>
            </select>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="amount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Amount
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="amount"
              id="amount"
              value={newExpense.amount}
              onChange={handleAmountChange}
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="date"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Date
          </label>
          <div className="mt-2">
            <input
              type="date"
              name="date"
              id="date"
              value={newExpense.date}
              onChange={handleDateChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          onClick={handleExpenseForm}
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          {expenseItemToUpdate ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
