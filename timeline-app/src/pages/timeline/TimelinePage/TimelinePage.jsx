import { useState, useEffect } from "react";
import "./TimelinePage.scss";

import ContextRow from "../ContextRow/ContextRow";
import DatesRow from "../DatesRow/DatesRow";
import DataShowCase from "../DataShowCase/DataShowCase";
import DatesPicker from "../DatesPicker/DatesPicker";

import dayjs from "dayjs";
const weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

const TimelinePage = ({ allData }) => {
  const [showCase, setShowCase] = useState({ type: null, data: "" });
  const [dateData, setDateData] = useState("");
  const [dateRange, setDateRange] = useState({
    start: dayjs().weekday(0).format(),
    end: dayjs().weekday(6).format(),
  });
  const [dates, setDates] = useState([]);

  useEffect(() => {
    let tempDates = [];
    const daysBetweenDates = dayjs(dateRange.end).diff(
      dayjs(dateRange.start),
      "day"
    );
    for (let i = 0; i < daysBetweenDates + 1; i++) {
      tempDates.push(dayjs(dateRange.start).add(i, "day").format("MM/DD/YYYY"));
    }
    setDates(tempDates);
  }, [dateRange]);

  useEffect(() => {
    let temp = [];
    switch (showCase.type) {
      case 0:
        for (let context of allData) {
          for (let data of context.data) {
            if (data.date == showCase.data) {
              temp.push(data);
            }
          }
        }
        break;
      case 1:
        for (let context of allData) {
          if (context.context == showCase.data) {
            temp.push(context);
          }
        }
        break;
      case 2:
        for (let context of allData) {
          for (let data of context.data) {
            if (data.name == showCase.data) {
              temp.push(data);
            }
          }
        }
    }
    temp.length ? setDateData(temp) : setDateData("no data");
  }, [showCase]);

  return (
    <div className="timeline-wrapper">
      <div style={{ display: "flex" }}>
        <DatesPicker
          dateRange={dateRange}
          setDateRange={setDateRange}
          setShowCase={setShowCase}
          dates={dates}
        />
        {dates.map((item) => (
          <div onClick={() => setShowCase({ type: 0, data: item })} key={item}>
            <DatesRow date={item} />
          </div>
        ))}
      </div>
      <div className="context-rows-wrapper">
        {allData.map((item) => (
          <div
            // onClick={() => setShowCase({ type: 1, data: item.context })}
            key={item.context}
          >
            <ContextRow
              dates={dates}
              contextData={item.data}
              contextName={item.context}
              setShowCase={setShowCase}
            />
          </div>
        ))}
      </div>
      {/* <DataShowCase showCase={showCase} dateData={dateData} /> */}
    </div>
  );
};

export default TimelinePage;
