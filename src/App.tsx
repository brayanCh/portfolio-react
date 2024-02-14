import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages 
import Home from './pages/Home';
import TeralArticle from './pages/TeralArticle';
import GraphQlArticle from './pages/GraphQlArticle';
import FlutterMusicArticle from './pages/FlutterMusic';


const App = () => {
    
  return (
    <Router>
      <Routes>
        <Route path="/portfolio-react" element={<Home />}/>
        <Route path="/portfolio-react/project-teral" element={<TeralArticle />}/>
        <Route path="/portfolio-react/graphql-rust" element={<GraphQlArticle />}/>
        <Route path="/portfolio-react/flutter-music-player" element={<FlutterMusicArticle />}/>
      </Routes>
    </Router>
  );
};

export default App;
