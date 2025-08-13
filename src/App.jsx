import { Route, Routes } from "react-router-dom";
import OnboardPage from "./pages/OnboardPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
            <Routes>
                <Route path="/" element={<OnboardPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
                <Route path="/signUpPage" element={<SignUpPage />} />
            </Routes>
    );
}

export default App;
