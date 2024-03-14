import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import Navbar from './Components/Navbar';
import End from "./Components/End";
import FaceScanComponent from "./Components/FaceScanComponent";
import Home from './Components/Home';
=======
import "./App.css";
import End from "./Components/End";
import FaceScanComponent from "./Components/FaceScanComponent";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
>>>>>>> 5fd33205559d96c04ac69eb54a2905abc2f77911
import PersonalInfo from "./Components/PersonalInfo";
import Scancard from "./Components/Scancard";
import Welcomepage from "./Components/Welcomepage";

<<<<<<< HEAD



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/" element={<Welcomepage />} />
          <Route  path="/scan" element={<FaceScanComponent />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/" element={<Welcomepage />} />
          <Route  path="/form" element={<PersonalInfo />} />
          <Route  path="/end" element={<End />} />
          <Route  path="/scancard" element={<Scancard />} />



      </Routes>
    </BrowserRouter>

=======
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/scan" element={<FaceScanComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Welcomepage />} />
          <Route path="/form" element={<PersonalInfo />} />
          <Route path="/end" element={<End />} />
          <Route path="/scancard" element={<Scancard />} />
        </Routes>
      </BrowserRouter>
>>>>>>> 5fd33205559d96c04ac69eb54a2905abc2f77911
    </div>
  );
}

export default App;
