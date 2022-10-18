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
import BSIS1 from './BSIS/BSIS1';
import BSIS2 from './BSIS/BSIS2';
import BSIS3 from './BSIS/BSIS3';
import BSIS4 from './BSIS/BSIS4';
import BSCS1 from './BSCS/BSCS1';
import BSCS2 from './BSCS/BSCS2';
import BSCS3 from './BSCS/BSCS3';
import BSCS4 from './BSCS/BSCS4';
import StudentTopNav from './StudentComponents/StudentTopNav';
import PersonalBG from './StudentComponents/PersonalBG';
import MyTest from './Test/MyTest';
import EducationalBG from './StudentComponents/EducationalBG';
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
        <Route path="bsis1" element={<BSIS1 />}/>
        <Route path="bsis2" element={<BSIS2 />}/>
        <Route path="bsis3" element={<BSIS3 />}/>
        <Route path="bsis4" element={<BSIS4 />}/>
        <Route path="bscs1" element={<BSCS1 />} />
        <Route path="bscs2" element={<BSCS2 />} />
        <Route path="bscs3" element={<BSCS3 />} />
        <Route path="bscs4" element={<BSCS4 />} />
        <Route path="studentTopNav" element={<StudentTopNav />} />
        <Route path="personalBG" element={<PersonalBG />} />
        <Route path="educationalBG" element={<EducationalBG />} />
        <Route path="test12" element={<MyTest />} />
      </Routes>
    </Router>
  );
}
export default App;
