import React from "react"

const Hello = React.memo(function Hello() {
  console.log("Hello rendered")
  return <p>Hello World</p>
})

function App() {
  console.log("App rendered")
  const [count, setCount] = React.useState(1)

  return (
    <>
      <h3>Count {count}</h3>
      <Hello />
      <button onClick={() => setCount(count + 1)}>Trigger App render</button>
    </>
  )
}

export default App
