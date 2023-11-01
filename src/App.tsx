import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bar';
//import PageContainer from './components/pageContainer';
import Footer from './components/footer';
import { useState } from 'react';

// pages 
import Home from './pages/home';


const App = () => {
    
    const [isUnmounting, setUnmount] = useState<boolean>(false);

    //<Route path="/contact" element={<PageContainer um={isUnmounting}><Contact/></PageContainer>}/>
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/portfolio-react" element={<Home um={isUnmounting}/>}/>
                <Route path="*" element={<Home />}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
