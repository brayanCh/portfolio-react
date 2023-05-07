import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/bar';
//import PageContainer from './components/pageContainer';
import Footer from './components/footer';
import { useCallback, useState } from 'react';

// pages 
import Home from './pages/home';


const App = () => {
    
    const [isUnmounting, setUnmount] = useState<boolean>(false);

    // function used to create a navigation animation
    const unmount = useCallback(() : void => {
        setUnmount(true); 
        setTimeout(() => setUnmount(false), 500);
    }, []);

    //<Route path="/contact" element={<PageContainer um={isUnmounting}><Contact/></PageContainer>}/>
    return (
        <Router>
            <Navbar method={unmount}/>
            <Routes>
                <Route path="/portfolio-react" element={<Home um={isUnmounting}/>}/>
                <Route path="*" element={<Home />}/>
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
