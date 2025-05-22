import { BrowserRouter} from "react-router-dom";
import { NavContextProvider } from "./context/NavContext";
import { AuthProvider } from "./context/AuthProvider";
import { AppWrapper } from "./routes/MainRoutes";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Wrapping the App with NavContextProvider and AuthProvider */}
      <NavContextProvider>
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
      </NavContextProvider>
    </BrowserRouter>
  );
}

export default App;
