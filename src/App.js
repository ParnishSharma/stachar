import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route  path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
