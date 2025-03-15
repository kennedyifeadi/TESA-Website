import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/Nav"
import { AnimatedRoutes } from "./routes/AnimatedRoute"
import { NavContextProvider } from "./context/NavContext"

function App() {

  return (
    <BrowserRouter>
    <NavContextProvider>
    <div className="flex w-full h-max flex-col relative">
        <NavBar/>
        <AnimatedRoutes/>
    </div>
    </NavContextProvider>
    </BrowserRouter>
  )
}

export default App
