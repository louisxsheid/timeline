import { useState, useEffect, useReducer } from "react";
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
  const showCaseReducer = (state, action) => {
    let temp = [];
    switch (action.type) {
      case "date":
        for (let context of allData) {
          for (let data of context.data) {
            if (data.date == action.payload) {
              temp.push(data);
            }
          }
        }
        return { header: action.payload, data: temp };
      case "context":
        for (let context of allData) {
          if (context.context == action.payload) {
            temp.push(context);
          }
        }
        return { header: action.payload, data: temp };
      case "with-data":
        for (let context of allData) {
          for (let data of context.data) {
            if (data.name == action.payload) {
              temp.push(data);
            }
          }
        }
        return { header: action.payload, data: temp };
      case "no-data":
        return { header: action.payload, data: "no data" };
      default:
        return state;
    }
  };

  const [showCase, dispatch] = useReducer(showCaseReducer, {
    header: "no data",
    data: "no data",
  });

  const [selectedInterval, setSelectedInterval] = useState("week");
  const [dateRange, setDateRange] = useState({
    start: dayjs().weekday(0).format("MM/DD/YYYY"),
    end: dayjs().weekday(6).format("MM/DD/YYYY"),
  });
  const [dates, setDates] = useState([]);

  useEffect(() => {
    switch (selectedInterval) {
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
    for (let i = 0; i < daysBetweenDates + 1; i++) {
      tempDates.push(dayjs(dateRange.start).add(i, "day").format("MM/DD/YYYY"));
    }
    setDates(tempDates);
  }, [dateRange]);

  return (
    <div style={{ display: "flex" }}>
      <DataShowCase showCase={showCase} />
      <div className="timeline-wrapper">
        <div style={{ display: "flex" }}>
          <DatesPicker
            selectedInterval={selectedInterval}
            setSelectedInterval={setSelectedInterval}
            dateRange={dateRange}
            setDateRange={setDateRange}
            setShowCase={dispatch}
            dates={dates}
          />
          {dates.map((date) => (
            <div
              onClick={() => dispatch({ type: "date", payload: date })}
              key={date}
            >
              {dates.length < 28 ? (
                <WeeklyDatesRow date={date} />
              ) : (
                <MonthlyDatesRow date={date} />
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
                showCaseDispatch={dispatch}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
