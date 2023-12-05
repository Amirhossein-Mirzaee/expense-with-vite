import { AddTransaction } from "../features/AddTransaction";
import { Balance } from "../features/Balance";
import { Header } from "../features/Header";
import { IncomeExpenses } from "../features/IncomeExpenses";
import { TranactionList } from "../features/TranactionList";

const Layout = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-black/40 max-w-[700px] mx-auto mt-40 rounded-xl">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Balance />
        <IncomeExpenses />
        <TranactionList />
        <AddTransaction />
      </div>
    </div>
  );
};

export default Layout;
