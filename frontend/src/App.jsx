import './CSS/App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPass from './Pages/ForgotPass';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import NotFoundError from './Pages/NotFoundError';
import Dashboard from './Pages/Dashboard'
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
                    <Route exact path="/login" element={ <Login /> } />
                    <Route exact path="/register" element={ <Register /> } />
                    <Route exact path="/forget-password" element={ <ForgetPass /> } />
                    <Route exact path="/dashboard" element={ <Dashboard /> } />
                    { (sessionStorage.getItem('userID') && sessionStorage.getItem('userID').length>0) &&
                      <Route exact path="/home" element={ <Home /> } />}
                    { (sessionStorage.getItem('userID') && sessionStorage.getItem('userID').length>0) &&
                      <Route exact path="/profile" element={<Profile/>}/>}
                    <Route exact path="/groups" element={<Groups/>}/>
                    <Route exact path="/groupsPage" element={<GroupsPage/>}/>
                    <Route exact path="*" element={<NotFoundError/>} />
                    {/*
                    <Route exact path="/404" element={<NotFoundError/>} />
                    <Route path="*" element={<Navigate to ="/404" />}/>
                    */}
                </Routes >
            </div>
        </Router>
    </div>
  );
}

export default App;
