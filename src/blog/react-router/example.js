//https://github.com/ReactTraining/react-router/blob/dev/packages/react-router/index.tsx
import React from "react"

const RouterContext = React.createContext({
  location: "",
  push: () => {},
})

function Router({ children }) {
  const [location, setLocation] = React.useState(window.location.pathname)

  const handlePush = newLocation => {
    window.history.pushState({}, "", newLocation)
    setLocation(newLocation)
  }

  return (
    <RouterContext.Provider value={{ location, push: handlePush }}>
      {children}
    </RouterContext.Provider>
  )
}

function Link({ to, children }) {
  const { push } = React.useContext(RouterContext)

  function handleClick(e) {
    e.preventDefault()
    push(to)
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  )
}

function Routes({ children }) {
  const { location } = React.useContext(RouterContext)
  const routes = createRoutesFromChildren(children)

  const matches = React.useMemo(() => matchRoutes(routes, location), [
    routes,
    location,
  ])

  return <>routes</>
}

function createRoutesFromChildren(children) {
  const routes = []

  React.Children.forEach(children, child => {
    routes.push({
      element: child,
      path: child.props.path,
    })
  })

  return routes
}

function matchRoutes(routes, location) {
  let matches = null

  for (let i = 0; matches == null && i < routes.length; ++i) {
    console.log(routes[i])
    matches = matchRoute(routes[i].path, location)
  }

  return matches
}

function matchRoute(path, location) {
  const [matcher, paramNames] = compilePath(path)
  const match = path.match(matcher)
  if (!match) return null

  const matchedPath = match[0]
  const values = match.slice(2)
  console.log(values)
}

function compilePath(path) {
  let keys = []
  let source =
    "^(" +
    path
      .replace(/^\/*/, "/") // Make sure it has a leading /
      .replace(/\/?\*?$/, "") // Ignore trailing / and /*, we'll handle it below
      .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
      .replace(/:(\w+)/g, (_, key) => {
        keys.push(key)
        return "([^\\/]+)"
      }) +
    ")"
  const matchers = new RegExp(source, "i")
  return [matchers, keys]
}

function Route() {
  return <>route</>
}

function App() {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <Link to="/posts">Posts</Link>
      <Routes>
        <Route path="/">Home</Route>
        <Route path="/posts">Posts</Route>
        <Route path="/posts/:id">Specific post</Route>
      </Routes>
    </Router>
  )
}

export default App
