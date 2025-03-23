import { BrowserRouter } from "react-router-dom"
import { NavContextProvider } from "./context/NavContext"
import { DisplayedComponent } from "./components/DisplayedComponent"


function App() {
  return (
    <BrowserRouter>
    <NavContextProvider>
      <div className=" h-max overflow-x-hidden">
        <DisplayedComponent/>
      </div>   
    </NavContextProvider>
    </BrowserRouter>
  )
}

export default App
