import "./App.scss";
// eslint-disable-next-line no-unused-vars
import { HomePage, TimelinePage } from "./pages/index";
import allData from "./pages/timeline/mock-data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require('axios').default;

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/contexts")
    .then((res) => {
      setFetchedData(res.data);
    })
    .catch((error) => {
    console.log(error);
  })
  }, []);

  useEffect(() => {
    console.log("fetchedData ",fetchedData)
  }, [fetchedData]);

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
              🌐 DATA
            </Link>
            {/* <li>
              <Link to="/users">Users</Link>
            </li> */}
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <HomePage allData={fetchedData} />
            </Route>
            <Route path="/calendar">
              <TimelinePage allData={fetchedData} setFetchedData={setFetchedData}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
