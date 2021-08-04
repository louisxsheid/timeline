import "./HomePage.scss";
import Progress from "../Progress/Progress";
import AllData from "../AllData/AllData";

const HomePage = ({ allData }) => {
  return (
    <div className="homepage-wrapper">
      <div style={{ fontSize: "3rem" }}>
        Welcome back, Louis. What did you do today?
      </div>
      <div style={{ fontSize: "2rem" }}>ALL DATA</div>
      <div className="all-data">
        <AllData allData={allData} />
      </div>
      <div className="progress">
        <Progress allData={allData} />
      </div>
    </div>
  );
};

export default HomePage;
