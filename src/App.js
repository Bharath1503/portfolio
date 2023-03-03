
import "./App.css";
import Header from "./pages/header";
import Navigation from "./pages/navigation";
import Home from "./pages/home";
import Project from "./pages/project";
import Education from "./pages/education";
import Contact from "./pages/contact";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div style={{ height: "100vh" }}>
      <div style={{ backgroundColor: "#0F1111", height: "20%" }}><Header/>  </div>
      <div style={{ backgroundColor: "rgba(32, 32, 167, 0.712)", height: "10%" }}><Navigation/>
     
      
      </div>
      <div style={{ backgroundColor: "#fff", height: "70%" }}>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home"element={<Home/>}></Route>
          <Route path="/project" element={<Project/>}></Route>
          <Route path="/education" element={<Education/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
