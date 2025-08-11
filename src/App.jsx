import { Route, Routes } from "react-router-dom";
import OnboardPage from "./pages/OnboardPage";

function App() {
    return (
            <Routes>
                <Route path="/" element={<OnboardPage />} />
            </Routes>
    );
}

export default App;
