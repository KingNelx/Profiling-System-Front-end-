import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeLogin from './Components/HomeLogin';
import AdminLogin from './AdminComponents/AdminLogin'
import AdminReg from './AdminComponents/AdminReg'
import AdminTopNav from './AdminComponents/AdminTopNav'
import StudentLogin from './StudentComponents/StudentLogin';
import StudentReg from './StudentComponents/StudentReg';
import BSITDashB from './BSIT/BSITDashB';
import BSISDashB from './BSIS/BSISDashB';
import BSCSDashB from './BSCS/BSCSDashB';
import BSIT1 from './BSIT/BSIT1';
import BSIT2 from './BSIT/BSIT2';
import BSIT3 from './BSIT/BSIT3';
import BSIT4 from './BSIT/BSIT4';
import StudentTopNav from './StudentComponents/StudentTopNav';
import PersonalBG from './StudentComponents/PersonalBG';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="adminReg" element={<AdminReg />} />
        <Route path="studentLogin" element={<StudentLogin />} />
        <Route path="studentReg" element={<StudentReg />} />
        <Route path="admintopNav" element={<AdminTopNav />} />
        <Route path="bsitDashB" element={<BSITDashB />} />
        <Route path="bsisDashB" element={<BSISDashB />} />
        <Route path="bscsDashB" element={<BSCSDashB />} /> 
        <Route path="bsit1" element={<BSIT1 />} />
        <Route path="bsit2" element={<BSIT2 />} />
        <Route path="bsit3" element={<BSIT3 />} />
        <Route path="bsit4" element={<BSIT4 />} />
        <Route path="studentTopNav" element={<StudentTopNav />} />
        <Route path="personalBG" element={<PersonalBG />} />
      </Routes>
    </Router>
  );
}
export default App;
