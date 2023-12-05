import { GlobalProvider } from "./components/context/GlobalState";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <GlobalProvider>
      <Layout />
    </GlobalProvider>
  );
};

export default App;
