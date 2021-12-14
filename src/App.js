import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/bar";
import PageContainer from "./components/pageContainer";

// pages 
import Home from "./pages/home";
import Contact from "./pages/contact";


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/contact" element={<PageContainer><Contact/></PageContainer>}/>
                
            </Routes>
        </Router>
    );
}

export default App;
