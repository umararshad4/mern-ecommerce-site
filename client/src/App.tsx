import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App;