import { useState, useEffect } from "react";
import "./TimelinePage.scss";

import ContextRow from "../ContextRow/ContextRow";
import WeeklyDatesRow from "../DatesRow/WeeklyDatesRow";
import MonthlyDatesRow from "../DatesRow/MonthlyDatesRow";
import DataShowCase from "../DataShowCase/DataShowCase";
import DatesPicker from "../DatesPicker/DatesPicker";

import dayjs from "dayjs";
const weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

const TimelinePage = ({ allData }) => {
  const [showCase, setShowCase] = useState({ type: null, data: "" });
  const [dateData, setDateData] = useState("");
  const [selectedInterval, setSelectedInterval] = useState("week");
  const [dateRange, setDateRange] = useState({
    start: dayjs().weekday(0).format("MM/DD/YYYY"),
    end: dayjs().weekday(6).format("MM/DD/YYYY"),
  });
  const [dates, setDates] = useState([]);

  useEffect(() => {
    switch(selectedInterval) {
      case "week":
        setDateRange({
          start: dayjs().weekday(0).format("MM/DD/YYYY"),
          end: dayjs().weekday(6).format("MM/DD/YYYY"),
        });
        break;
      case "month": 
        setDateRange({
          start: dayjs().startOf("month").format("MM/DD/YYYY"),
          end: dayjs().endOf("month").format("MM/DD/YYYY"),
        });
        break;
      }
  }, [selectedInterval]);

  useEffect(() => {
    let tempDates = [];
    const daysBetweenDates = selectedInterval == "week" ? 6 : 30;
;
    for (let i = 0; i < daysBetweenDates + 1; i++) {
      tempDates.push(dayjs(dateRange.start).add(i, "day").format("MM/DD/YYYY"));
    }
    setDates(tempDates);
  }, [dateRange]);

  useEffect(() => {
    let temp = [];
    switch (showCase.type) {
      case "date":
        for (let context of allData) {
          for (let data of context.data) {
            if (data.date == showCase.data) {
              temp.push(data);
            }
          }
        }
        break;
      case "context":
        for (let context of allData) {
          if (context.context == showCase.data) {
            temp.push(context);
          }
        }
        break;
      case "with-data":
        for (let context of allData) {
          for (let data of context.data) {
            if (data.name == showCase.data) {
              temp.push(data);
            }
          }
        }
        break;
      case "no-data":
        setDateData("no data");
        break;
    }
    temp.length ? setDateData(temp) : setDateData("no data");
  }, [showCase]);

  return (
    <div style={{ display: "flex" }}>
      <DataShowCase showCase={showCase} dateData={dateData} />
      <div className="timeline-wrapper">
        <div style={{ display: "flex" }}>
          <DatesPicker
            selectedInterval={selectedInterval}
            setSelectedInterval={setSelectedInterval}
            dateRange={dateRange}
            setDateRange={setDateRange}
            setShowCase={setShowCase}
            dates={dates}
          />
          {dates.map((item) => (
            <div
              onClick={() => setShowCase({ type: "date", data: item })}
              key={item}
            >
              {dates.length < 28 ? (
                <WeeklyDatesRow date={item} />
              ) : (
                <MonthlyDatesRow date={item} />
              )}
            </div>
          ))}
        </div>
        <div className="context-rows-wrapper">
          {allData.map((item) => (
            <div key={item.context}>
              <ContextRow
                selectedInterval={selectedInterval}
                dates={dates}
                contextData={item.data}
                contextName={item.context}
                setShowCase={setShowCase}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
