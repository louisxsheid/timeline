import "./DatesPicker.scss";
import dayjs from "dayjs";
import Modal from "react-modal";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/DateRangePicker";
import { useEffect, useState } from "react";

const DatesPicker = ({ dateRange, setDateRange, setShowCase, dates }) => {
  const [value, onChange] = useState([dateRange.start, dateRange.end]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(dayjs(value[0]).day(), dayjs(value[1]).day());
    setDateRange({
      start: dayjs(value[0]).format("MM/DD/YYYY"),
      end: dayjs(value[1]).format("MM/DD/YYYY"),
    });
  }, [value]);

  return (
    <div>
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
    </div>
  );
};

export default DatesPicker;
