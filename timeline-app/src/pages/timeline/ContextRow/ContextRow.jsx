import { useEffect, useState } from "react";
import "./ContextRow.scss";

const ContextRow = ({ contextData, contextName, dates }) => {
  console.log(contextData);
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
            <div>{contextData[dataCounter].date}</div>
          </div>
        );
        dataCounter++;
      } else {
        temp.push(
            <div>
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
