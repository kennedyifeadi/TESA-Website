import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { LandingPage } from "../pages/LandingPage";
import { Scholarships } from "../pages/Scholarships";
import { Resources } from "../pages/Resources";
import { Payments } from "../pages/Payments";
import { Contact } from "../pages/Contact";
import { PageNotFound } from "../pages/PageNotFound";

export const AnimatedRoutes = () => {
    const location = useLocation();
      return (
          <div className="sm:h-full sm:w-full">
          <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<LandingPage/>} exact />
                  <Route path="/scholarships" element={<Scholarships/>} />
                  <Route path="/resources" element={<Resources/>} />
                  <Route path="/payments" element={<Payments/>} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="*" element={<PageNotFound/>} /> 
              </Routes>
        </AnimatePresence>
        </div>
      )
}