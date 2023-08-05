import React from "react";
import { BsTrashFill } from "react-icons/bs";

const IncomeRecords = ({ incomeRecords, onDelete }) => {
  const totalIncome = incomeRecords.reduce(
    (total, income) => total + income.amount,
    0
  );

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <>
      <div className="p-2 border-2 border-yellow-500 bg-[#f0cb35]">
        <div className="flex text-white justify-between md:flex-row flex-col items-center">
          <h2 className="font-bold my-2 font-clash  md:text-xl">
            Income Records:
          </h2>
          <h2 className="font-clash">Total Income: {totalIncome}</h2>
        </div>
        {/* LISTS */}
        <div className="md:max-h-40 max-h-24 overflow-y-auto no-scrollbar ">
          <ul>
            {incomeRecords.map((income, index) => (
              <li
                key={index}
                className="flex items-center font-clash text-sm md:text-base bg-yellow-200 p-1 shadow-xl rounded-md mb-2"
              >
                <span>{income.amount}</span>
                {income.description && (
                  <span className="font-bold text-[#f0cb35] ml-1">
                    - {income.description}
                  </span>
                )}
                {/* DELETE */}
                <div className="flex-grow" />
                <BsTrashFill
                  size={20}
                  color="gold"
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

export default IncomeRecords;
