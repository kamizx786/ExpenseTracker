import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex w-full justify-center flex-row p-4 shadow-xl bg-gradient-to-r from-[#c02425] to-[#f0cb35]">
        <h1 className="font-chill text-white sm:text-5xl text-center text-2xl flex font-bold items-center justify-center">
         Expense Tracker
        </h1>
      </header>
    </>
  );
};

export default Header;
