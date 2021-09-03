import { useCallback, useEffect, useState } from "react";
import "./ContextRow.scss";
import dayjs from "dayjs";
import BlockWithData from "./BlockWithData";
import BlockWithNoData from "./BlockWithNoData";

const ContextRow = ({
  contextData,
  contextName,
  dates,
  showCaseDispatch,
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
            <BlockWithData
              contextData={contextData[j]}
              contextName={contextData[j].name}
              showCaseDispatch={showCaseDispatch}
              selectedInterval={selectedInterval}
              itemWidth={itemWidth}
              // isHovering={isHovering}
            />
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
            <BlockWithNoData
              contextName={contextName}
              date={dates[i]}
              showCaseDispatch={showCaseDispatch}
              itemWidth={itemWidth}
            >
              <hr style={{ width: itemWidth }} />
            </BlockWithNoData>
          );
        } else if (!dateFound) {
          temp.push(
            <BlockWithNoData
              contextName={contextName}
              date={dates[i]}
              showCaseDispatch={showCaseDispatch}
              itemWidth={itemWidth}
            />
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
        onClick={() =>
          showCaseDispatch({ type: "context", payload: contextName })
        }
      >
        {contextName}
      </div>
      <div style={{ display: "flex" }}>{dataRows}</div>
    </div>
  );
};

export default ContextRow;
