import "./App.scss";
// eslint-disable-next-line no-unused-vars
import { SideBar, TimelinePage } from "./pages/index";
import allData from "./pages/timeline/mock-data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <div className="app-wrapper">
      {/* <SideBar /> */}
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/timeline">Home</Link>
            </li>
            {/* <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/timeline">
            <TimelinePage allData={allData} />
          </Route>
        </Switch>
        
      </div>
    </Router>
    </div>
  );
};

export default App;
