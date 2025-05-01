import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import LoginPage from "./Pages/Auth/LoginPage";
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import ErrorPage from "./Pages/Error/ErrorPage";
import UsersPage from "./Pages/Dashboard/UsersPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          {/* DashBoard Route */}
          <Route path="/dashboard" element={<DashboardPage />}>
            <Route index element={<UsersPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
