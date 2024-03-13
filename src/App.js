import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import FaceScanComponent from "./Components/FaceScanComponent";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import PersonalInfo from "./Components/PersonalInfo";
import Welcomepage from "./Components/Welcomepage";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/scan" element={<FaceScanComponent />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/" element={<Welcomepage />} />
          <Route  path="/form" element={<PersonalInfo />} />


      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
