import "./HomePage.scss";
import Collapsible from "react-collapsible";

const HomePage = ({ allData }) => {
  console.log(allData);
  return (
    <div className="homepage-wrapper">
      <div style={{ fontSize: "3rem" }}>
        Welcome back, Louis. What did you do today?
      </div>
        <div style={{ fontSize: "2rem" }}>ALL DATA</div>
      <div className="all-data">
        {allData.map((item) => {
          return (
            <Collapsible
              transitionTime={50}
              trigger={item.context}
              className={"collapsible-close"}
              openedClassName={"collapsible-open"}
              triggerStyle={{ fontSize: "2rem", cursor: "pointer"}}
            >
              <pre key={item.data}>{JSON.stringify(item.data, null, 2)}</pre>
            </Collapsible>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
