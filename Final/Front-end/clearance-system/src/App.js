import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Dashboard from './Pages/Dashboard';
import RequestAccount from './Pages/RequestAccount';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AccademiStaffSignup from './Pages/AccademiStaffSignup';
import NonAccademiStaffSignup from './Pages/NonAccademiStaffSignup';
import ClearanceReport from './Pages/ClearanceReport';
import StaffDashBoard from './Pages/StaffDashBoard';
import AddClearance from './Pages/ADDClearance';
import Complain from './Pages/Complain';
import {useState} from 'react';
import ProtectRoute from './components/protectedRoute';

function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
       <div>

        <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Dashboard' element={<Dashboard/>} />
        <Route exact path='/RequestAccount' element={<RequestAccount/>}/>

        <Route  path='/Login'
         element={<Login/>} />
        <Route exact path='/Signup' element={<Signup/>} />
        <Route exact path='/AccademiStaffSignup' element={<AccademiStaffSignup/>} />
        <Route exact path='/NonAccademiStaffSignup' element={<NonAccademiStaffSignup/>} />
        <Route exact path='/ClearanceReport' element={<ProtectRoute><ClearanceReport/></ProtectRoute>} />
        <Route exact path='/StaffDashBoard' element={<StaffDashBoard/>} />
        <Route exact path='/ADDClearance' element={<AddClearance/>} />
        <Route exact path='/Complain' element={<Complain/>} />
        
        </Routes>
      </div>
    </Router>
  );
}
export default App;
