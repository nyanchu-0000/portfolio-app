import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ESCheckerDetail from "./pages/ESCheckerDetail";
import DesignSystemDetail from "./pages/DesignSystemDetail";
import MinutesAppDetail from "./pages/MinutesAppDetail";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/works/es-checker" element={<ESCheckerDetail />} />
                <Route path="/works/design-system" element={<DesignSystemDetail />} />
                <Route path="/works/minutes-app" element={<MinutesAppDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
