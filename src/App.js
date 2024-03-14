import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
<<<<<<< HEAD
import Home from './Components/Home';
import Navbar from './Components/Navbar';
=======
import End from "./Components/End";
import FaceScanComponent from "./Components/FaceScanComponent";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import PersonalInfo from "./Components/PersonalInfo";
import Scancard from "./Components/Scancard";
import Welcomepage from "./Components/Welcomepage";


>>>>>>> 5542d4bb3dec233764788825746cc26fa07c9b23


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
<<<<<<< HEAD
          <Route  path="/" element={<Home />} />
=======
          <Route  path="/scan" element={<FaceScanComponent />} />
          <Route  path="/home" element={<Home />} />
          <Route  path="/" element={<Welcomepage />} />
          <Route  path="/form" element={<PersonalInfo />} />
          <Route  path="/end" element={<End />} />
          <Route  path="/scancard" element={<Scancard />} />



>>>>>>> 5542d4bb3dec233764788825746cc26fa07c9b23
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
