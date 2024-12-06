import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Report } from "./pages/Report";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/report/:id" element={<Report />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
