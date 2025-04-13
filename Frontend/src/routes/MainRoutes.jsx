import { Route, Routes, useLocation } from "react-router-dom";
import { DisplayedComponent } from "../components/DisplayedComponent";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminLayout } from "../Layout/AdminLayout";
import { Dashboard } from "../components/Admin/Dashboard";
import { Adverts } from "../components/Admin/Adverts";
import { AdminEvents } from "../components/Admin/Events";
import { AdminSponsors } from "../components/Admin/Sponsors";
import { AdminResources } from "../components/Admin/Resources";
import { SignIn } from "../pages/SignIn";

export const AppWrapper = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
  
    return (
      <div className="h-max overflow-x-hidden">
        {!isAdminRoute && <DisplayedComponent />}
  
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="" element={<Dashboard />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="sponsors" element={<AdminSponsors />} />
            <Route path="resources" element={<AdminResources />} />
            <Route path="adverts" element={<Adverts />} />
            <Route path="*" element={<SignIn />} />
          </Route>
            <Route path="/admin/signIn" element={<SignIn />} />
        </Routes>
      </div>
    );
  }