import { useEffect, useState } from "react";
import "./ContextRow.scss";
import dayjs from "dayjs";

const ContextRow = ({
  contextData,
  contextName,
  dates,
  setShowCase,
  selectedInterval,
}) => {
  const [dataRows, setDataRows] = useState([]);
  const [itemWidth, setItemWidth] = useState("");

  useEffect(() => {
    switch (selectedInterval) {
      case "week":
        setItemWidth("10.18rem");
        break;
      case "month":
        setItemWidth("2.3rem");
        break;
    }
  }, [selectedInterval]);

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
                setShowCase({ type: "with-data", data: contextData[j].name })
              }
              className="item-context-wrapper"
              key={contextData[j].name}
              style={{ width: itemWidth }}
            >
              <div className="item-name" key={contextData[j].name}>
                {selectedInterval == "week" && contextData[j].name}
              </div>
              {/* <div key={j}>{contextData[j].date}</div> */}
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
            <div
              className="nodata"
              style={{ width: itemWidth }}
              key={i}
              onClick={() =>
                setShowCase({ type: "no-data", data: `${contextName} ${dates[i]}` })
              }
            >
              <hr style={{ width: itemWidth }} />
            </div>
          );
        } else if (!dateFound) {
          temp.push(
            <div
              onClick={() =>
                setShowCase({ type: "no-data", data: `${contextName} ${dates[i]}` })
              }
              className="nodata"
              style={{ width: itemWidth }}
              key={i}
            ></div>
          );
        }
      }
    }
    setDataRows(temp);
  }, [dates]);
  return (
    <div className="context-bar-wrapper">
      <div
        className="context-name"
        onClick={() => setShowCase({ type: "context", data: contextName })}
      >
        {contextName}
      </div>
      <div style={{ display: "flex" }}>{dataRows}</div>
    </div>
  );
};

export default ContextRow;
{
  /* <div style={{ fontSize: "1rem" }}>
    first entry: {contextData[0].date}
  </div> */
}
