import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Forgot from './pages/Forgot';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<Forgot />} />
        
      </Routes>
    </div>
  );
}

export default App;
