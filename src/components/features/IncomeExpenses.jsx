import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className="flex items-center justify-center gap-7">
      <div className="flex flex-col items-center justify-center gap-5">
        <h4>Income</h4>
        <p id="money-plus" className="money-plus">
          ${income}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h4>Expense</h4>
        <p id="money-minus" className="money-minus">
          ${expense}
        </p>
      </div>
    </div>
  );
};
