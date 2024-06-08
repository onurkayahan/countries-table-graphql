import CountriesPage from "./pages/CountriesPage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/country/:code" element={<CountryDetailsPage />} />
        <Route path="/" element={<Navigate replace to="/countries" />} />
      </Routes>
    </Router>
  );
}
