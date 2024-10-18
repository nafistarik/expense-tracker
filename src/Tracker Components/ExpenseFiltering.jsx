/* eslint-disable react/prop-types */
import { useState } from "react";
export default function ExpenseFiltering({
  onExpenseCategoryFilter,
  selectedExpenseCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    selectedExpenseCategory || []
  );

  const handleExpenseFilterToggle = () => setIsOpen(!isOpen);

  const handleCategoryChange = (category) => {
    let updatedCategories;

    if (selectedCategories.includes(category)) {
      // Remove the category if it's already selected
      updatedCategories = selectedCategories.filter((cat) => cat !== category);
    } else {
      // Add the category if it's not selected
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);
    onExpenseCategoryFilter(updatedCategories); // Notify parent of the selected categories
    console.log(updatedCategories);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={handleExpenseFilterToggle}
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="filter-button-2"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8h4v4h-4z" />
            <path d="M6 4l0 4" />
            <path d="M6 12l0 8" />
            <path d="M10 14h4v4h-4z" />
            <path d="M12 4l0 10" />
            <path d="M12 18l0 2" />
            <path d="M16 5h4v4h-4z" />
            <path d="M18 4l0 1" />
            <path d="M18 9l0 11" />
          </svg>
        </button>
      </div>

      {isOpen ? (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="filter-button-2"
          tabIndex="-1"
          id="filter-dropdown2"
        >
          <div className="py-1" role="none">
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Education")}
                onChange={() => handleCategoryChange("Education")}
              />
              <span className="ml-2">Education</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Food")}
                onChange={() => handleCategoryChange("Food")}
              />
              <span className="ml-2">Food</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Health")}
                onChange={() => handleCategoryChange("Health")}
              />
              <span className="ml-2">Health</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Bill")}
                onChange={() => handleCategoryChange("Bill")}
              />
              <span className="ml-2">Bill</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Insurance")}
                onChange={() => handleCategoryChange("Insurance")}
              />
              <span className="ml-2">Insurance</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Tax")}
                onChange={() => handleCategoryChange("Tax")}
              />
              <span className="ml-2">Tax</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Transport")}
                onChange={() => handleCategoryChange("Transport")}
              />
              <span className="ml-2">Transport</span>
            </label>
            <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                checked={selectedCategories.includes("Telephone")}
                onChange={() => handleCategoryChange("Telephone")}
              />
              <span className="ml-2">Telephone</span>
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
}
