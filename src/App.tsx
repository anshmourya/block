import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import NavBar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
