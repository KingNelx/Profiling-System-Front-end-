import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeLogin from './Components/HomeLogin';
import AdminLogin from './AdminComponents/AdminLogin'
import AdminReg from './AdminComponents/AdminReg'
import StudentLogin from './StudentComponents/StudentLogin';
import StudentReg from './StudentComponents/StudentReg';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="adminLogin" element={<AdminLogin />} />
        <Route path="adminReg" element={<AdminReg />} />
        <Route path="studentLogin" element={<StudentLogin />} />
        <Route path="studentReg" element={<StudentReg />} />
      </Routes>
    </Router>
  );
}
export default App;
