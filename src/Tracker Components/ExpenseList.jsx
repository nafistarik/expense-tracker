/* eslint-disable react/prop-types */
import ExpenseFiltering from "./ExpenseFiltering";
import ExpenseItem from "./ExpenseItem";
import ExpenseLogo from "./ExpenseLogo";
import ExpenseSorting from "./ExpenseSorting";

export default function ExpenseList({
  expenseItems,
  onExpenseDelete,
  onExpenseEdit,
  onSortExpenseHighToLow,
  onSortExpenseLowToHigh,
  selectedExpenseCategory,
  onExpenseCategoryFilter,
}) {
  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <ExpenseLogo />
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div>
          <ExpenseSorting
            onSortExpenseHighToLow={onSortExpenseHighToLow}
            onSortExpenseLowToHigh={onSortExpenseLowToHigh}
          />
          <ExpenseFiltering
            onExpenseCategoryFilter={onExpenseCategoryFilter}
            selectedExpenseCategory={selectedExpenseCategory}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {expenseItems.map((expenseItem) => {
          return (
            <ExpenseItem
              key={expenseItem.id}
              expenseItem={expenseItem}
              onExpenseDelete={onExpenseDelete}
              onExpenseEdit={onExpenseEdit}
            />
          ); // Using 'key' prop for React's efficient rendering optimization.  // 'expense' prop is passed down from ExpenseList to ExpenseItem component.  // 'item.id' is used as the unique identifier for each expense item.  // ExpenseItem component renders each expense item's data.  // Additional expense items are added in the return statement for demonstration purposes.  // In a real-world application, these would be fetched from a backend API.  // The 'expenseItems' prop is passed down from the parent component (App) to ExpenseList.  // The 'expenseItems' prop is an array of objects, each representing an expense item with properties like 'id', 'title', 'amount', and 'date'.  // The 'expenseItems' prop is passed down from the parent component (App) to ExpenseList.  // The 'expenseItems
        })}
        {/* <ExpenseItem /> */}
      </div>
    </div>
  );
}
