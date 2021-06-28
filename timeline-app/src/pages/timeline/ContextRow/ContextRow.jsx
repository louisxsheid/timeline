import { useEffect, useState } from "react";
import "./ContextRow.scss";

const ContextRow = ({ contextData, contextName, dates }) => {
  const [dataRows, setDataRows] = useState([]);
  useEffect(() => {
    const temp = [];
    let dataCounter = 0;
    for (let i in dates) {
      if (dataCounter >= contextData.length) break;
      if (dates[i] == contextData[dataCounter].date) {
        temp.push(
          <div
            className="item-context-wrapper"
            key={contextData[dataCounter].name}
          >
            <div className="item-name" key={contextData[dataCounter].name}>
              {contextData[dataCounter].name}
            </div>
            {/* <div key={dataCounter}>{contextData[dataCounter].date}</div> */}
          </div>
        );
        dataCounter++;
      } else {
        temp.push(
            <div className="nodata" key={i}>
                <hr />
            </div>
        );
      }
    }
    setDataRows(temp);
    // return () => {
    //     cleanup
    // }
  }, [dates]);
  return (
    <div className="context-bar-wrapper">
      <div className="context-name">{contextName}</div>
      {dataRows}
    </div>
  );
};

export default ContextRow;
