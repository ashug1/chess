import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ChessGamePage from '../ChessGamePage/ChessGamePage';
const PageRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}> </Route>
            </Routes>
            <Routes>
                <Route path="/game" element={<ChessGamePage />}> </Route>
            </Routes>
        </Router>
    );
};

export { PageRouter };
