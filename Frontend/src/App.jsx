import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/Nav"
import { AnimatedRoutes } from "./routes/AnimatedRoute"

function App() {

  return (
    <BrowserRouter>
    <div className="flex w-full h-max flex-col relative">
        <NavBar/>
        <AnimatedRoutes/>
    </div>
    </BrowserRouter>
  )
}

export default App
