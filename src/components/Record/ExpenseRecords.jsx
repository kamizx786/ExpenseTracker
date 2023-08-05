import React from "react";
import { BsTrashFill } from "react-icons/bs";

const ExpenseRecords = ({ expenseRecords, onDelete }) => {
  const totalExpense = expenseRecords.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <>
      <div className="p-2 border-2 border-red-500 bg-[#c02425]">
        <div className="flex justify-between text-white md:flex-row flex-col items-center">
          <h2 className="font-semibold my-2 font-clash  md:text-xl">
            Expense Records:
          </h2>
          <h2 className="font-clash">Total Expense: {totalExpense}</h2>
        </div>
        {/* LISTS */}
        <div className="md:max-h-40 max-h-24 overflow-y-auto no-scrollbar ">
          <ul>
            {expenseRecords.map((expense, index) => (
              <li
                key={index}
                className="flex items-center font-clash text-sm md:text-base bg-red-200 p-1 shadow-xl rounded-md mb-2"
              >
                <span>{expense.amount}</span>
                {expense.description && (
                  <span className="font-semibold text-[#c02425] ml-1">
                    - {expense.description}
                  </span>
                )}
                {/* DELETE */}
                <div className="flex-grow" />
                <BsTrashFill
                  size={20}
                  color="red"
                  onClick={() => handleDelete(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ExpenseRecords;
