/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
export default function TrackIncome({
  onToggleForm,
  handleIncomeItems,
  incomeItemToUpdate,
  setIncomeItemToUpdate,
}) {
  const [newIncome, setNewIncome] = useState({
    category: "Salary",
    amount: 0,
    date: "",
  });

  const handleCategoryChange = (e) => {
    setNewIncome({ ...newIncome, category: e.target.value });
  };

  const handleAmountChange = (e) => {
    setNewIncome({ ...newIncome, amount: Number(e.target.value) });
  };

  const handleDateChange = (e) => {
    setNewIncome({ ...newIncome, date: e.target.value });
  };

  const handleIncomeForm = (e) => {
    e.preventDefault();
    if (newIncome.id) {
      // If there's an id, we're updating an existing item
      handleIncomeItems(newIncome, true); // Pass true to indicate it's an update
    } else {
      // Otherwise, it's a new item, so we add an id and treat it as new
      const incomeWithId = {
        ...newIncome,
        id: crypto.randomUUID(),
      };
      handleIncomeItems(incomeWithId);
    }

    // Reset form for new entries
    setNewIncome({
      category: "Salary",
      amount: 0,
      date: "",
    });
  };

  useEffect(() => {
    if (incomeItemToUpdate) {
      setNewIncome({
        category: incomeItemToUpdate.category,
        amount: incomeItemToUpdate.amount,
        date: incomeItemToUpdate.date,
        id: incomeItemToUpdate.id,
      });
    }
  }, [incomeItemToUpdate]);

  return (
    <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
      <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
        {incomeItemToUpdate ? "Edit Income" : "Income Tracker"}
      </h2>

      <form>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <button
            onClick={onToggleForm}
            className="cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 active"
          >
            Expense
          </button>
          <div className="cursor-pointer text-center flex-1 px-4 py-2 bg-teal-600  text-white">
            Income
          </div>
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
              value={newIncome.category}
              onChange={handleCategoryChange}
              autoComplete="category-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            >
              <option>Salary</option>
              <option>Outsourcing</option>
              <option>Bond</option>
              <option>Dividend</option>
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
              value={newIncome.amount}
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
              value={newIncome.date}
              onChange={handleDateChange}
              autoComplete="off"
              placeholder="12931"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <button
          onClick={handleIncomeForm}
          type="submit"
          className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        >
          {incomeItemToUpdate ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
