import Cards from "./components/Cards"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="Cards" style={{display:"flex"}}>
        <Cards  title="card1" description="card 1 desc" />
        <Cards  title="card1" description="card 1 desc" />
        <Cards  title="card1" description="card 1 desc" />
        <Cards  title="card1" description="card 1 desc" />
      </div>
    </>
  )
}

export default App
