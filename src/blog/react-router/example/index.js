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
      component: child.props.children,
    };

    if (child.props.children) {
      const childRoutes = routesFromChildren(child.props.children);
      if (childRoutes.length) {
        route.children = childRoutes;
      }
    }

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

function matchRoutes(routes, location) {
  const matches = [];

  routes.forEach((route) => {
    const { regex, keys } = compilePath(route.path);

    const match = location.match(regex);

    if (match) {
      const params = match.slice(2);
      matches.push({
        route,
        pathname: match[0],
        params: keys.reduce((collection, param, index) => {
          collection[param] = params[index];
          return collection;
        }, {}),
      });
    }
  });

  return matches;
}

const RouteContext = React.createContext({
  params: {},
  pathname: "",
  outlet: null,
});

function Routes({ children }) {
  const routes = routesFromChildren(children);
  const { location } = useContext(RouterContext);
  const matches = useMemo(() => matchRoutes(routes, location), [
    routes,
    location,
  ]);

  // if no routes matched then render null
  if (!matches.length) return null;

  const element = matches.reduceRight((outlet, { params, pathname, route }) => {
    return (
      <RouteContext.Provider
        value={{
          route,
          outlet,
          params,
          pathname,
        }}
      >
        {route.component}
      </RouteContext.Provider>
    );
  }, null);

  return element;
}

function useParams() {
  return useContext(RouteContext).params;
}

function Outlet() {
  const route = useContext(RouteContext);
  return route.outlet;
}

function Route() {
  return <Outlet />;
}

function Post() {
  const { id } = useParams();
  return <div>Post with id {id}</div>;
}

export default function App() {
  return (
    <Router>
      <Link to="/posts/1234">Post With ID</Link>
      <Link to="/two">Two</Link>
      <Routes>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/two">
          <div>You are on path two</div>
        </Route>
      </Routes>
    </Router>
  );
}
