import './CSS/App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPass from './Pages/ForgotPass';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import NotFoundError from './Pages/NotFoundError';
import Groups from './Pages/Groups';
import GroupsPage from './Pages/GroupsPage';
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
            <div>
                <Routes >
                    <Route exact path="/" element={ <Register /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/forget-password" element={ <ForgetPass /> } />
                    { (sessionStorage.getItem('userID') && sessionStorage.getItem('userID').length>0) &&
                      <Route path="/home" element={ <Home /> } />}
                    { (sessionStorage.getItem('userID') && sessionStorage.getItem('userID').length>0) &&
                      <Route path="/profile" element={<Profile/>}/>}
                    <Route path="/404" element={<NotFoundError/>} />
                    <Route path="*" element={<Navigate to ="/404" />}/>
                    <Route path="/groups" element={<Groups/>}/>
                    <Route path="/groupsPage" element={<GroupsPage/>}/>
                </Routes >
            </div>
        </Router>
    </div>
  );
}

export default App;
