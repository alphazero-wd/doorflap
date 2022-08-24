import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Banner,
  Cart,
  Footer,
  Home,
  Login,
  Navbar,
  NotFound,
  ProductDetail,
  ProductsPage,
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
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
