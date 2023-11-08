import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';
import Dashboard from './Components/Admin/Dashboard';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Donations from './Components/User/Donations';
import About from './Components/User/About';
import Homes from './Components/User/Homes';
import Visit from './Components/User/Visit';
import DonationForm from './Components/User/DonationForm';
import VisitForm from './Components/User/VisitForm';
import OneHome from './Components/User/OneHome';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route  path="/"  element={<LandingPage/>}/>
          <Route  path="/login"  element={<Login/>}/>
          <Route  path="/register"  element={<Register/>}/>
          <Route  path="/about"  element={<About/>}/>
          <Route  path="/donations"  element={<Donations/>}/>
          <Route  path="/children_homes"  element={<Homes/>}/>
          <Route  path="/visits"  element={<Visit/>}/>
          <Route  path="/donate"  element={<DonationForm/>}/>
          <Route  path="/home/:id"  element={<OneHome/>}/>
          <Route  path="/schedule_visit"  element={<VisitForm/>}/>
          <Route  path="/admin"  element={<Dashboard/>}/>

        </Routes>
        <Footer />
      </div>
     </Router>
  );
}

export default App;
