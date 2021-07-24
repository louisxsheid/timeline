import "./App.scss";
// eslint-disable-next-line no-unused-vars
import { HomePage, TimelinePage } from "./pages/index";
import allData from "./pages/timeline/mock-data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <SideBar /> */}
      <Router>
        <div>
          <nav className="nav-wrapper">
            <div className="main-title">TIMELINE</div>
            <Link className="link-style" to="/">
              🏠 HOME
            </Link>
            <Link className="link-style" to="/calendar">
              📅 CALENDAR
            </Link>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <HomePage allData={allData} />
            </Route>
            <Route path="/calendar">
              <TimelinePage allData={allData} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
