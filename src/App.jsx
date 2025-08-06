import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Coupons from './pages/Coupons';
import Gift from './pages/Gift';
import Crossword from './pages/Crossword';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coupons" element={<Coupons />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/crossword" element={<Crossword />} />
            </Routes>
        </Router>
    );
}

export default App;
