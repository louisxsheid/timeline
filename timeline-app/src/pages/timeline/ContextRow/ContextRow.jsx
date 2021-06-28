import { useEffect, useState } from "react";
import "./ContextRow.scss";

const ContextRow = ({ contextData, contextName, dates }) => {
  const [dataRows, setDataRows] = useState([]);
  useEffect(() => {
    const temp = [];
    let dateFound;
    for (let i in dates) {
      dateFound = false;
      for (let j in contextData) {
        if (dates[i] == contextData[j].date) {
          temp.push(
            <div className="item-context-wrapper" key={contextData[j].name}>
              <div className="item-name" key={contextData[j].name}>
                {contextData[j].name}
              </div>
              <div key={j}>{contextData[j].date}</div>
            </div>
          );
          dateFound = true;
        }
      }
      if (!dateFound) {
        temp.push(
          <div className="nodata" key={i}>
            <hr />
          </div>
        );
      }
    }
    setDataRows(temp);
  }, [dates]);
  return (
    <div className="context-bar-wrapper">
      <div className="context-name">{contextName}</div>
      {dataRows}
    </div>
  );
};

export default ContextRow;
