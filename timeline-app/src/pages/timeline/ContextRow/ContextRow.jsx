import { useEffect, useState } from "react";
import "./ContextRow.scss";
import dayjs from "dayjs";

const ContextRow = ({ contextData, contextName, dates, setShowCase }) => {
  const [dataRows, setDataRows] = useState([]);

  useEffect(() => {
    const temp = [];
    let dateFound;
    let dataIsFilled = false;
    for (let i in dates) {
      dateFound = false;
      dataIsFilled = false;
      for (let j in contextData) {
        if (dates[i] == contextData[j].date) {
          dataIsFilled = true;
          temp.push(
            <div
              onClick={() =>
                setShowCase({ type: 2, data: contextData[j].name })
              }
              className="item-context-wrapper"
              key={contextData[j].name}
            >
              <div className="item-name" key={contextData[j].name}>
                {contextData[j].name}
              </div>
              <div key={j}>{contextData[j].date}</div>
            </div>
          );
          dateFound = true;
        }
      }
      if (!dataIsFilled) {
        if (
          dayjs(contextData[0].date).isBefore(dates[i]) &&
          dayjs(contextData[contextData.length - 1].date).isAfter(dates[i])
        ) {
          temp.push(
            <div className="nodata" key={i}>
              <hr />
            </div>
          );
        } else if (!dateFound) {
          temp.push(<div className="nodata" key={i}></div>);
        }
      }
    }
    setDataRows(temp);
  }, [dates]);
  return (
    <div className="context-bar-wrapper">
      <div
        className="context-name"
        onClick={() => setShowCase({ type: 1, data: contextName })}
      >
        <div>{contextName}</div>
        <div style={{ fontSize: "1rem" }}>
          first entry: {contextData[0].date}
        </div>
      </div>
      <div style={{ display: "flex" }}>{dataRows}</div>
    </div>
  );
};

export default ContextRow;
