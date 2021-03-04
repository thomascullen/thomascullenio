import React, {
  useState,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from "react";

const RouterContext = React.createContext({
  location: "",
  push: () => {},
});

function Router({ children }) {
  const [location, setLocation] = useState(window.location.pathname);

  const handlePush = useCallback(
    (newLocation) => {
      window.history.pushState({}, "", newLocation);
      setLocation(newLocation);
    },
    [setLocation]
  );

  const handleHashChange = useCallback(() => {
    setLocation(window.location.pathname);
  }, [setLocation]);

  useEffect(() => {
    window.addEventListener("popstate", handleHashChange);
    return () => window.removeEventListener("popstate", handleHashChange);
  }, [handleHashChange]);

  return (
    <RouterContext.Provider value={{ location, push: handlePush }}>
      {children}
    </RouterContext.Provider>
  );
}

function Link({ to, children }) {
  const { push } = useContext(RouterContext);

  function handleClick(e) {
    e.preventDefault();
    push(to);
  }

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

// ---

// Function to collect routes into an array
function routesFromChildren(children) {
  const routes = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    const route = {
      path: child.props.path || "/",
      component: child,
    };

    routes.push(route);
  });

  return routes;
}

// Takes a path pattern and converts it into a regular expression.
// e.g /posts/:id => /^(/posts/([^\/]+))/i
function compilePath(path) {
  const keys = [];

  path = path.replace(/:(\w+)/g, (_, key) => {
    keys.push(key);
    return "([^\\/]+)";
  });

  const source = `^(${path})`;

  const regex = new RegExp(source, "i");
  return { regex, keys };
}

function matchRoutes(children, location) {
  const matches = [];

  React.Children.forEach(children, (route) => {
    const { regex, keys } = compilePath(route.props.path);
    const match = location.match(regex);

    if (match) {
      const params = match.slice(2);
      matches.push({
        route: route.props.children,
        params: keys.reduce((collection, param, index) => {
          collection[param] = params[index];
          return collection;
        }, {}),
      });
    }
  });

  return matches[0];
}

const RouteContext = React.createContext({
  params: {},
});

function Routes({ children }) {
  const { location } = useContext(RouterContext);
  const match = useMemo(() => matchRoutes(children, location), [
    children,
    location,
  ]);

  // if no routes matched then render null
  if (!match) return null;

  return (
    <RouteContext.Provider value={{ params: match.params }}>
      {match.route}
    </RouteContext.Provider>
  );
}

function useParams() {
  return useContext(RouteContext).params;
}

function Route({ children }) {
  return children;
}

function Products() {
  return (
    <>
      <h4>Example Products</h4>
      <ul>
        <li>
          <Link to="/products/1">Product One</Link>
        </li>
        <li>
          <Link to="/products/2">Product Two</Link>
        </li>
      </ul>
    </>
  );
}

function Product() {
  const { id } = useParams();
  return (
    <>
      <h4>Viewing product {id}</h4>
      <Link to="/">Back to all products</Link>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/">
          <Products />
        </Route>
      </Routes>
    </Router>
  );
}
