import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="flex flex-col justify-center items-center bg-red-200">
      <h1>Your Balance</h1>
      <h4 id="balance">${total}</h4>
    </div>
  );
};
