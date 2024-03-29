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
import AccademicStaffLogin from './Pages/AccademicStaffLogin';
import Gym from './Pages/Gym';
import ScienceLibrary from './Pages/ScienceLibrary';
import Accommodation from './Pages/Accommodation';
import AccountRenew from './Pages/AccountRenew';
import PasswordChange from './Pages/PasswordChange';
import IssueForm from './Pages/IssueForm';
import SlipManagement from './Pages/SlipManagement';
import ComplainView from './Pages/ComplainView';
import ClearanceView from "./Pages/ClearanceView";
import PaymentView from "./Pages/PaymentView";


function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
       <div>

        <Routes>
        <Route exact path='/Home' element={<Home/>} />
        <Route exact path='/Dashboard' element={<Dashboard/>} />
        <Route exact path='/RequestAccount' element={<RequestAccount/>}/>

        <Route  path='/Login'          element={<Login/>} />
        <Route exact path='/Signup' element={<Signup/>} />
        <Route exact path='/AccademiStaffSignup' element={<AccademiStaffSignup/>} />
        <Route exact path='/NonAccademiStaffSignup' element={<NonAccademiStaffSignup/>} />
        <Route exact path='/ClearanceReport' element={<ProtectRoute to={"/Login"}><ClearanceReport/></ProtectRoute>} />
        <Route exact path='/StaffDashBoard' element={ <ProtectRoute to={"/AccademicStaffLogin"}><StaffDashBoard/> </ProtectRoute>} />
        <Route exact path='/ADDClearance' element={<AddClearance/>} />
        <Route exact path='/Complain' element={<Complain/>} />
        <Route exact path='/AccademicStaffLogin' element={ <AccademicStaffLogin/>} />
        <Route exact path='/Gym' element={ <Gym/>} />
        <Route exact path='/ScienceLibrary' element={ <ScienceLibrary/>} />
        <Route exact path='/Accommodation' element={ <Accommodation/>} />
        <Route exact path='/AccountRenew' element={ <AccountRenew/>} />
        <Route exact path='/PasswordChange' element={ <PasswordChange/>} />
        <Route exact path='/IssueForm' element={ <IssueForm/>} />
        <Route exact path='/SlipManagement' element={ <SlipManagement/>} />
        <Route exact path='/ComplainView' element={ <ComplainView/>} />
        <Route exact path='/ClearanceView' element={ <ClearanceView/>} />
        <Route exact path='/PaymentView' element={ <PaymentView/>} />
        
        
        
        </Routes>
      </div>
    </Router>
  );
}
export default App;
