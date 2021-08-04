import Collapsible from "react-collapsible";

const AllData = ({ allData }) => {
  console.log(allData);
  return (
    <div>
      {allData.map((item) => {
        return (
          <Collapsible
            transitionTime={50}
            trigger={item.context}
            className={"collapsible-close"}
            openedClassName={"collapsible-open"}
            triggerStyle={{ fontSize: "2rem", cursor: "pointer" }}
          >
            <pre key={item.data}>{JSON.stringify(item.data, null, 2)}</pre>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default AllData;
