import { Provider } from "react-redux";
import "./App.css";
import Product from "./components/product/Product";
import Shoping from "./components/shoping/Shoping";
import store from "./Store";
import Discount from "./components/discount/Discount";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Discount />
        <Product />
        <Shoping />
      </div>
    </Provider>
  );
}

export default App;
