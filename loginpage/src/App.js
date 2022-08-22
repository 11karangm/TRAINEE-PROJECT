import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Forgot from './pages/Forgot';
import Login from './pages/Login';
import Home from './pages/Home';
import AddNew from './pages/LandingSub/LandingSubComponents/AddNew'
import Messages from './pages/LandingSub/LandingSubComponents/Messages';
import Account from './pages/LandingSub/LandingSubComponents/Account';
import Dashboard from './pages/LandingSub/Dashboards/Dashboard';



import Big from './big';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-reset" element={<Forgot />} />
        <Route path= "/landing/AddNew" element={<AddNew />} />
        <Route path="/landing/Dashboard/:pageNo" element={<Dashboard />} />
        <Route path="/landing/Messages" element={<Messages />} />
        <Route path="/landing/Account" element={<Account />} />
        

        
        
       
        
      </Routes>
    </div>
  );
}

export default App;
