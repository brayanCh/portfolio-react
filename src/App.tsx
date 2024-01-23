import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bar';

// pages 
import Home from './pages/Home';


const App = () => {
    
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/portfolio-react" element={<Home />}/>
        <Route path="*" element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;
