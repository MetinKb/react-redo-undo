import { useState } from "react"

function App() {

  const [points, setPoints] = useState([])
  const [data, setData] = useState([])

  const clickHandle = e => {
    setPoints(points => [...points, {
      x: e.clientX,
      y: e.clientY
    }])

    setData([])
  }

  const redoHandle = e => {
    e.stopPropagation()
    const data = [...points]
    const item = data.pop()
    setData(data => [...data, item])
    setPoints(data)
  }

  const undoHandle = e => {
    e.stopPropagation()
    const d = [...data]
    const item = d.pop()
    setData(d)
    setPoints(points => [...points, item])
  }

  return (
    <div
      className="screen"
      onClick={clickHandle}
    >

      <header className="header">
        <button disabled={points.length === 0} onClick={redoHandle}>Redo</button>
        <button disabled={data.length === 0} onClick={undoHandle}>Undo</button>
      </header>

      {points.map((point, i) => (
        <div
          key={i}
          className="point"
          style={{ left: point.x, top: point.y }}
        ></div>
      ))}

    </div>
  )
}

export default App
