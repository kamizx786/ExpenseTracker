import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex justify-between flex-col">
        <div className="mx-2 py-2 text-center justify-center items-center flex flex-col">
          <h1 className="md:text-4xl text-2xl font-chill font-bold mb-4 text-white animate-fade-in-left">
            Your Financial Journey Begins Here
          </h1>
          <p className="md:text-xl text-sm font-lb md:w-1/2 text-white animate-fade-in-right">
            Unleash the potential of your finances with our state-of-the-art
            Expense Tracker. Embrace the art of budgeting and tracking expenses
            to attain complete financial serenity.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
