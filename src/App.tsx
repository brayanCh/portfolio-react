import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bar';
import Footer from './components/footer';

// pages 
import Home from './pages/home';


const App = () => {
    
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/portfolio-react" element={<Home />}/>
                <Route path="*" element={<Home />}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
