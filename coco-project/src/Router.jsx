import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminSignUpPage from "./pages/AdminSignUpPage";
import SignUpStartPage from "./pages/SignUpStartPage";
import StudentSignUpPage from "./pages/StudentSignUpPage";
import LoginPage from "./pages/LoginPage";
import { GuestMainPage } from "./pages/GuestMainPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/AdminSignUp" element={<AdminSignUpPage />} />
        <Route path="/SignUpStart" element={<SignUpStartPage />} />
        <Route path="/StudentSignUp" element={<StudentSignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/main" element={<GuestMainPage />} />
      </Routes>
    </Router>
  );
};
