import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Servise";
import Projects from "./Components/Projects";
// import Services from "./Components/Services";
// import Projects from "./Components/Projects";
// import About from "./Components/About";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;