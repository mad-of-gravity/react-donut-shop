import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuScreen from "./components/pages/Menu/MenuScreen";
import PaymentScreen from "./components/pages/Payment/PaymentScreen";
import PreparationScreen from "./components/pages/Preparation/PreparationScreen";
import ReadyScreen from "./components/pages/Ready/ReadyScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MenuScreen/>} />
        <Route path="/payment" element={<PaymentScreen/>} />
        <Route path="/preparation" element={<PreparationScreen/>} />
        <Route path="/ready" element={<ReadyScreen/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
