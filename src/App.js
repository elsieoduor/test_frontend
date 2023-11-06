import './App.css';
// import Dashboard from './Components/Admin/Dashboard';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import LandingPage from './Pages/LandingPage';


function App() {
  return (
    // <Router>
      <div className="App">
        <NavBar />
        {/* <Routes> */}
          {/* <Route exact path="/home" component={LandingPage} /> */}
          <LandingPage />
        {/* </Routes> */}
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
