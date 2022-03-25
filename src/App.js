import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
 
  AOS.init();

  return (
   <>
 
   <Router> 
     <Navbar/>
      <Routes>
            <Route path='/' exact element={<Home />} />  
      </Routes>
  </Router>
   </>
  );
}

export default App;
