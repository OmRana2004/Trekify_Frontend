import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TrekDetail from "../pages/TrekDetail";
import Contact from "../pages/Contact";
import About from "../pages/About";
import ExploreTreks from "../components/ExploreTreks"; 
import AllTreks from "../pages/AllTreks"; // Import the AllTreks page
import TrekPackages from "../pages/TrekPackages"; // Import the TrekPackages page
import FAQ from "../pages/FAQ"; // Import the FAQ page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<ExploreTreks />} />
      <Route path="/trek/:id" element={<TrekDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/treks" element={<AllTreks />} /> {/* All Treks page */}
      <Route path="/trek-packages" element={<TrekPackages />} /> {/* Trek Packages page */}
      <Route path="/faq" element={<FAQ />} /> {/* FAQ page */}
      {/* Add other routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
