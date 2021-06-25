import "./TimelinePage.scss";
// eslint-disable-next-line no-unused-vars
import ContextRow from "../ContextRow/ContextRow";
// eslint-disable-next-line no-unused-vars
import DateRangeColumn from "../DateRange/DateRangeColumn";
// eslint-disable-next-line no-unused-vars
import DataShowCase from "../DataShowCase/DataShowCase";
import { useState, useEffect } from "react";

const TimelinePage = ({ allData }) => {
  const [showCase, setShowCase ] = useState("temp");
  const [dateData, setDateData ] = useState("");
  const dates = [
    "6/22/2021",
    "6/23/2021",
    "6/24/2021",
    "6/25/2021",
    "6/26/2021",
    "6/27/2021",
    "6/28/2021",
    "6/29/2021"
  ];

  useEffect(() => {
    let temp = [];
    for(let context of allData) {
      for(let data of context.data) {
        if(data.date == showCase) {
          temp.push(data);
        }
      }
    }
    setDateData(temp)
  }, [showCase])

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
          <div onClick={() => setShowCase(item)}>
            <DateRangeColumn date={item} />
          </div>
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
      <DataShowCase showCase={showCase} dateData={dateData}/>
    </div>
  );
};

export default TimelinePage;
