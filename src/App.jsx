import { Route, Routes } from "react-router-dom";
import OnboardPage from "./pages/OnboardPage";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
            <Routes>
                <Route path="/" element={<OnboardPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
            </Routes>
    );
}

export default App;
