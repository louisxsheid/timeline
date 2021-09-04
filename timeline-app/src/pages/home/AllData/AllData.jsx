import Collapsible from "react-collapsible";

const AllData = ({ allData }) => {
  return (
    <div>
      {allData.map((item) => {
        return (
          <Collapsible
            transitionTime={50}
            trigger={item.name}
            className={"collapsible-close"}
            openedClassName={"collapsible-open"}
            triggerStyle={{ fontSize: "2rem", cursor: "pointer" }}
          >
            <pre key={item.events}>{JSON.stringify(item.events, null, 2)}</pre>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default AllData;
