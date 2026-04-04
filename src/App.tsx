import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ESCheckerDetail from "./pages/ESCheckerDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/es-checker" element={<ESCheckerDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
