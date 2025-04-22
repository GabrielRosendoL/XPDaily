import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MainArea from './pages/MainArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainArea" element={<MainArea />} />
      </Routes>
    </Router>
  );
}

export default App;