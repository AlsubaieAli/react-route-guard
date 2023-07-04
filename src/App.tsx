import { BrowserRouter } from "react-router-dom"
import Navigation from "./layouts/Navigation"
import Router from "./routes/Router"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Navigation/>
        <div className="container">
            <Router />
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
