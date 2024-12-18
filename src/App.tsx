import { Route, Routes} from "react-router-dom";
import Header from "./components/Layouts/Header";
import { Fragment } from "react/jsx-runtime";
import Home from "./pages/Home";
import ScrollToSection from "./components/Layouts/ScrollToSection";
// import classes from './App.module.css'
import Footer from "./components/Layouts/Footer";

const App = () => {

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
        <Route path="/skills" element={<Home />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
