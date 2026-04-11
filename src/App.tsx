import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ESCheckerDetail from "./pages/ESCheckerDetail";
import DesignSystemDetail from "./pages/DesignSystemDetail";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/es-checker" element={<ESCheckerDetail />} />
                <Route path="/works/design-system" element={<DesignSystemDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
