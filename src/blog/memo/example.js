import React from "react"

let renderCount = 0

const Test = React.memo(function Test() {
  renderCount++
  return <div>Test render count: {renderCount}</div>
})

function App() {
  const [count, setCount] = React.useState(1)

  return (
    <div>
      Application render count: {count}
      <Test />
      <button onClick={() => setCount(count + 1)}>Trigger Render</button>
    </div>
  )
}

export default App
