import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bar';

// pages 
import Home from './pages/Home';
import TeralArticle from './pages/TeralArticle';


const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-react" element={<Home />}/>
        <Route path="/portfolio-react/project-teral" element={<TeralArticle />}/>
      </Routes>
    </Router>
  );
};

export default App;
