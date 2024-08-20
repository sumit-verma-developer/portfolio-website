import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import About from "./Screens/About";
import Services from "./Screens/Services";
import Portfolio from "./Screens/Portfolio";
import Contact from "./Screens/Contact";
import Blog from "./Screens/Blog";
import BlogItem from "./Screens/BlogItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogItem" element={<BlogItem />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
