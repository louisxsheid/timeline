import "./TimelinePage.scss";
// eslint-disable-next-line no-unused-vars
import ContextRow from "../ContextRow/ContextRow";
// eslint-disable-next-line no-unused-vars
import DateRangeColumn from "../DateRange/DateRangeColumn";
// eslint-disable-next-line no-unused-vars
import DataShowCase from "../DataShowCase/DataShowCase";
import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
// eslint-disable-next-line no-unused-vars
import Modal from "react-modal";
import dayjs from "dayjs";
const weekday = require("dayjs/plugin/weekday");
dayjs.extend(weekday);

const TimelinePage = ({ allData }) => {
  const [showCase, setShowCase] = useState({ type: null, data: "" });
  const [dateData, setDateData] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dateRange, setDateRange] = useState({
    start: dayjs().weekday(0).format(),
    end: dayjs().weekday(6).format(),
  });

  const [value, onChange] = useState([dateRange.start, dateRange.end]);
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
    }
    setDateData(temp);
  }, [showCase]);

  useEffect(() => {
    console.log(dayjs(value[0]).day(), dayjs(value[1]).day());
    setDateRange({
      start: dayjs(value[0]).format("MM/DD/YYYY"),
      end: dayjs(value[1]).format("MM/DD/YYYY"),
    });
  }, [value]);

  return (
    <div className="timeline-wrapper">
      {/* TimelinePage */}
      <div style={{ display: "flex" }}>
        <div className="date-range">
          <div onClick={() => setIsOpen(true)} style={{ textAlign: "center" }}>
            {dateRange.start} - {dateRange.end}
          </div>
          <div className="arrows">
            <div
              className="arrow"
              onClick={() => {
                setDateRange({
                  start: dayjs(dateRange.start)
                    .subtract(1, "week")
                    .format("MM/DD/YYYY"),
                  end: dayjs(dateRange.end)
                    .subtract(1, "week")
                    .format("MM/DD/YYYY"),
                });
              }}
            >
              ←
            </div>
            <div
              className="arrow"
              onClick={() => {
                setDateRange({
                  start: dayjs(dateRange.start)
                    .add(1, "week")
                    .format("MM/DD/YYYY"),
                  end: dayjs(dateRange.end).add(1, "week").format("MM/DD/YYYY"),
                });
              }}
            >
              →
            </div>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          // onRequestClose={closeModal}
          className="date-modal"
          contentLabel="Example Modal"
        >
          <DateRangePicker onChange={onChange} value={value} />
          <button onClick={() => setIsOpen(false)}>exit</button>
        </Modal>
        {dates.map((item) => (
          <div onClick={() => setShowCase({ type: 0, data: item})}>
            <DateRangeColumn date={item} />
          </div>
        ))}
      </div>
      <div className="context-rows-wrapper">
        {allData.map((item) => (
          <div 
            onClick={() => setShowCase({type: 1, data: item.context})}
          key={item.context}>
            <ContextRow
              dates={dates}
              contextData={item.data}
              contextName={item.context}
            />
          </div>
        ))}
      </div>
      <DataShowCase showCase={showCase} dateData={dateData} />
    </div>
  );
};

export default TimelinePage;
