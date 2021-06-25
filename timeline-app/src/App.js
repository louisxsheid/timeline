import "./App.scss";
// eslint-disable-next-line no-unused-vars
import { TimelinePage, DataShowCase } from "./pages/index";
import allData from "./pages/timeline/mock-data";
const App = () => {
  return (
    <div>
      <TimelinePage allData={allData} />
    </div>
  );
};

export default App;
