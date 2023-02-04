import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuScreen from "./components/pages/Menu/MenuScreen";
import PaymentScreen from "./components/pages/Payment/PaymentScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuScreen/>} />
        <Route path="/payment" element={<PaymentScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
