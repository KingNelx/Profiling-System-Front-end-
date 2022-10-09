import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Start from './Components/Start';
import CreateAccount from './Admin/CreateAccount';
import Login from './Admin/Login';
import CreateStudent from './Student/CreateStudent';
import LoginStudent from './Student/LoginStudent';
import AdminTopNav from './Admin/AdminTopNav';
import BSIT from './AdminComponents/BSIT';
import BSIS from './AdminComponents/BSIS';
import BSCS from './AdminComponents/BSCS';
import BSITYR from './Components/BSITYR';
import BSISYR from './Components/BSISYR';
import BSCSYR from './Components/BSCSYR';
import Home from './Admin/Home';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/AdminCreate" element={<CreateAccount />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreateStudent" element={<CreateStudent />} />
          <Route path="/LoginStudent" element={<LoginStudent />} />
          <Route path="/AdminTopNav" element={<AdminTopNav />} />
          <Route path="/bsit" element={<BSIT />} />
          <Route path="/bsis" element={<BSIS />} />
          <Route path="/bscs" element={<BSCS />} />
          <Route path="/bsityr" element={<BSITYR />} />
          <Route path="/bsisyr" element={<BSISYR />} />
          <Route path="/bscsyr" element={<BSCSYR />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
