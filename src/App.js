import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingCar from "./pages/BookingCar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/bookingcar" element={<BookingCar/>}/> 
     </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
