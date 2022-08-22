import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Banner,
  Footer,
  Home,
  Login,
  Navbar,
  ProductDetail,
  Signup,
} from "../features";

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Banner />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
