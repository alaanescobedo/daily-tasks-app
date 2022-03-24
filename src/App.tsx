import { MainCard, TaskCard } from "./components/Card"

function App() {

  return (
    <div style={{ width: "90%", margin: "10% auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <MainCard />
      <TaskCard />

    </div>
  )
}

export default App
