import { BrowserRouter} from "react-router-dom";
import { NavContextProvider } from "./context/NavContext";
import { AuthProvider } from "./context/AuthProvider";
import { AppWrapper } from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <NavContextProvider>
        <AuthProvider>
          <AppWrapper />
        </AuthProvider>
      </NavContextProvider>
    </BrowserRouter>
  );
}

export default App;
