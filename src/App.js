import logo from "./logo.svg";
import "./App.css";
import SubHeader from "./components/Layout/SubHeader";
import Product from "./components/product";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SubHeader></SubHeader>
      <Product></Product>
    </div>
  );
}

export default App;
