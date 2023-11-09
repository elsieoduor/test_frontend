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
import Users from './Components/Admin/Users'
import UserList from './Components/Admin/UserList'
import UserForm from './Components/Admin/UserForm'
import HomesAdmin from './Components/Admin/Homes'
import HomesList from './Components/Admin/HomesList'
import HomesForm from './Components/Admin/HomesForm'
import Analytics from './Components/Admin/Analytics'

function App() {
  const homesData = [
    { id: 1, name: "Sunnydale Home", visits: 120, donations: 2000, totalDonationsNeeded: 7000 },
    { id: 2, name: "Rivendell Shelter", visits: 75, donations: 3000, totalDonationsNeeded: 8000 },
    { id: 3, name: "Hogwarts Orphanage", visits: 180, donations: 1000, totalDonationsNeeded: 5000 }
  ];
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

          {/* admin */}
          <Route  path="/admin"  element={<Dashboard/>}/>
          <Route  path="/admin/users"  element={<Users />}/>
          <Route  path="/admin/user_list"  element={<UserList />}/>
          <Route  path="/admin/add_user"  element={< UserForm />}/>
          <Route  path="/admin/homes"  element={<HomesAdmin />}/>
          <Route  path="/admin/homes_list"  element={<HomesList />}/>
          <Route  path="/admin/add_home"  element={< HomesForm />}/>
          <Route  path="/admin/analytics"  element={< Analytics homes={homesData}/>}/>

        </Routes>
        <Footer />
      </div>
     </Router>
  );
}

export default App;