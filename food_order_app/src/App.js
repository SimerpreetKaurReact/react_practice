import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import { AmountContextProvider } from "./Components/store/AmountContext";

function App() {
  return (
    <>
      <AmountContextProvider>
        <Header />
        <main>
          <Meals />
        </main>
      </AmountContextProvider>
    </>
  );
}

export default App;
