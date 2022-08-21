import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Banner, Home, Navbar } from "../features";

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Banner />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
