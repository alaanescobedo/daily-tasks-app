export const TaskCard = () => {
  return (
    <div>
      <div style={{ height: "110px", backgroundColor: "#BDE7FF1a", border: "2px solid #BDE7FF", borderRadius: "10px", padding: "10px", display: "grid", placeContent: "center", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", justifyItems: "center", alignContent: "center", color: "#6A6A6A" }}>
        <ul style={{ gridRow: "1/3", gridColumn: "1/2", lineHeight: "1.1", margin: "0", padding: "0 10px", listStyle: "none", justifyItems: "center", fontWeight: "500" }}>
          <li>&gt; Practicar Figma</li>
          <li>&gt; Continuar con el repositorio de java</li>
          <li>&gt; Aprender un algoritmo</li>
        </ul>
        <div style={{ backgroundColor: "#B0EFA51A", border: "2px solid #B0EFA5", gridColumn: "2/3", gridRow: "2/3", width: "80%", height: "70%", borderRadius: "10px", fontWeight: "bold", alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ margin: "0" }}>Today</p>
        </div>
      </div>
    </div >
  )
}