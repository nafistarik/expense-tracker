/* eslint-disable react/prop-types */
import IncomeFiltering from "./IncomeFiltering";
import IncomeItem from "./IncomeItem";
import IncomeLogo from "./IncomeLogo";
import IncomeSorting from "./IncomeSorting";

export default function IncomeList({
  incomeItems,
  onIncomeDelete,
  onIncomeEdit,
  onSortIncomeLowToHigh,
  onSortIncomeHighToLow,
  selectedIncomeCategory,
  onIncomeCategoryFilter,
}) {
  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <IncomeLogo />
          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          <IncomeSorting
            onSortIncomeLowToHigh={onSortIncomeLowToHigh}
            onSortIncomeHighToLow={onSortIncomeHighToLow}
          />
          <IncomeFiltering
            selectedIncomeCategory={selectedIncomeCategory}
            onIncomeCategoryFilter={onIncomeCategoryFilter}
          />
        </div>
      </div>

      <div className="p-4 divide-y">
        {incomeItems.map((incomeItem) => (
          <IncomeItem
            key={incomeItem.id}
            incomeItem={incomeItem}
            onIncomeDelete={onIncomeDelete}
            onIncomeEdit={onIncomeEdit}
          />
        ))}
        {/* <IncomeItem /> */}
      </div>
    </div>
  );
}
