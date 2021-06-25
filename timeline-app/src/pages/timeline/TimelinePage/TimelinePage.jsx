import "./TimelinePage.scss";
// eslint-disable-next-line no-unused-vars
import ContextRow from "../ContextRow/ContextRow";
import allData from "../mock-data";
// eslint-disable-next-line no-unused-vars
import DateRangeColumn from "../DateRange/DateRangeColumn";

const TimelinePage = () => {
  const dates = [
    "6/22/2021",
    "6/23/2021",
    "6/24/2021",
    "6/25/2021",
    "6/26/2021",
    "6/27/2021",
  ];
  return (
    <div className="timeline-wrapper">
      {/* TimelinePage */}
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "15vw", border: "2px solid black", height: "5vh", backgroundColor: "yellow" }}
        >
          {dates[0]} - {dates[dates.length - 1]}
        </div>

        {dates.map((item) => (
          <DateRangeColumn date={item} />
        ))}
      </div>
      <div className="context-rows-wrapper">
        {allData.map((item) => (
          <div key={item.context}>
            <ContextRow
              dates={dates}
              contextData={item.data}
              contextName={item.context}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
