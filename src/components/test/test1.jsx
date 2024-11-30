import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Navbar() {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active-link">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active-link">
        Contact
      </NavLink>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
