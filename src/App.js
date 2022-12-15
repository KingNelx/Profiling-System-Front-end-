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
import AdminProfile from './AdminComponents/AdminProfile';
import FacultyLogin from './FacultyComponents/FacultyLogin';
import FacultyTopNav from './FacultyComponents/FacultyTopNav';
import FinancialStatus from './Reports/FinancialStatus';
import Scholarship from './Reports/Scholarship';
import MedicalConditions from './Reports/MedicalConditions';
import LactatingWomen from './Reports/LactatingWomen';
import FinancialReports from './ReportsTable/FinancialReports';
import LactatingReports from './ReportsTable/LactatingReports';
import MedicalReports from './ReportsTable/MedicalReports';
import ScholarReports from './ReportsTable/ScholarshipReports';
import FamilyBG from './StudentComponents/FamilyBG';
import AllBSIT from './FacultyComponents/AllBSIT';
import AllBSIS from './FacultyComponents/AllBSIS';
import AllBSCS from './FacultyComponents/AllBSCS';
import StudentsByCourse from './NewReports/StudentsByCourse';
import StudentsByMunicipality from './NewReports/StudentsByMunicipality';
import StudentsBySchoolar from './NewReports/StudentsBySchoolar';
import StudentsBySex from './NewReports/StudentsBySex';
import StudentsByYearLvl from './NewReports/StudentsByYearLvl';
import StudentsWithGadgets from './NewReports/StudentsWithGadgets';
import BSITReports from './ByReports/BSITReports';
import BSISReports from './ByReports/BSISReports';
import UpdateStudent from './AddComponents/UpdateStudent';
import BSCSReports from './ByReports/BSCReports';
import ViewStudents from './AddComponents/ViewStudents';
import ViewStudent2 from './AddComponents/ViewStudent2';
import ByYearLevel from './OtherData/ByYearLevel';
import SexList from './OtherData/SexList';
import MunicipalList from './OtherData/MunicipalList';

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
        <Route path="bsis1" element={<BSIS1 />} />
        <Route path="bsis2" element={<BSIS2 />} />
        <Route path="bsis3" element={<BSIS3 />} />
        <Route path="bsis4" element={<BSIS4 />} />
        <Route path="bscs1" element={<BSCS1 />} />
        <Route path="bscs2" element={<BSCS2 />} />
        <Route path="bscs3" element={<BSCS3 />} />
        <Route path="bscs4" element={<BSCS4 />} />
        <Route path="studentTopNav" element={<StudentTopNav />} />
        <Route path="personalBG" element={<PersonalBG />} />
        <Route path="educationalBG" element={<EducationalBG />} />
        <Route path="adminProfile" element={<AdminProfile />} />
        <Route path="facultyLogin" element={<FacultyLogin />} />
        <Route path="faultyTopnav" element={<FacultyTopNav />} />
        <Route path="financialStatus" element={<FinancialStatus />} />
        <Route path="studentScholarship" element={<Scholarship />} />
        <Route path="medicalConditions" element={<MedicalConditions />} />
        <Route path="lactatingWomen" element={<LactatingWomen />} />
        <Route path="test12" element={<MyTest />} />
        <Route path="financialR" element={<FinancialReports />} />
        <Route path="lactatingR" element={<LactatingReports />} />
        <Route path="medicalR" element={<MedicalReports />} />
        <Route path="scholarR" element={<ScholarReports />} />
        <Route path="familyBG" element={<FamilyBG />} />
        <Route path="allBSIT" element={<AllBSIT />} />
        <Route path="allBSIS" element={<AllBSIS />} />
        <Route path="allBSCS" element={<AllBSCS />} />
        <Route path="byCourse" element={<StudentsByCourse />} />
        <Route path="byMunicipality" element={<StudentsByMunicipality />} />
        <Route path="bySchoolar" element={<StudentsBySchoolar />} />
        <Route path="bySex" element={<StudentsBySex />} />
        <Route path="byYearLvl" element={<StudentsByYearLvl />} />
        <Route path="withGadgets" element={<StudentsWithGadgets />} />
        <Route path="byReportsBSIT" element={<BSITReports />} />
        <Route path="byReportsBSIS" element={<BSISReports />} />
        <Route path="byReportsBSCS" element={<BSCSReports />} />
        <Route path="editBG/:id" element={<UpdateStudent />} />
        <Route path="viewStudent/:id" element={<ViewStudents />} />
        <Route path="viewStudents" element={<ViewStudent2 />} />
        <Route path="yearLevel" element={<ByYearLevel />} />
        <Route path="sexList" element={<SexList />} />
        <Route path="municipalList" element={<MunicipalList />} />
      </Routes>
    </Router>
  );
}
export default App;
