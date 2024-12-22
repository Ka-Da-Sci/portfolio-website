import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Layouts/Header";
import { Fragment } from "react/jsx-runtime";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import ScrollToSection from "./components/Layouts/ScrollToSection";
// import classes from './App.module.css'
import Footer from "./components/Layouts/Footer";

const App = () => {
  const location = useLocation();

  return (
    <Fragment>
      <ScrollToSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolios" element={<Home />} />
        <Route path="/about-me" element={<Home />} />
        <Route path="/testimonials" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/error404" element={<Error404 />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      {location.pathname !== "/error404" && <Footer />}
    </Fragment>
  );
};

export default App;
