import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/bar";
import PageContainer from "./components/pageContainer";
import Footer from "./components/footer";
import { useState } from "react";

// pages 
import Home from "./pages/home";
import Contact from "./pages/contact";


const App = () => {
    
    const [isUnmounting, setUnmount] = useState(false);

    const unmount = () => {
        setUnmount(true); 
        setTimeout(() => setUnmount(false), 500);
    }

    return (
        <Router>
            <Navbar method={unmount}/>
            <Routes>
                <Route exact path="/" element={<Home um={isUnmounting}/>}/>
                <Route exact path="/contact" element={<PageContainer um={isUnmounting}><Contact/></PageContainer>}/>
                <Route exact path="*" element={<Home />}/>
                
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
