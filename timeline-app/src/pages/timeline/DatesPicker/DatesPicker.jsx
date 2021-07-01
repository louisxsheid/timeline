import "./DatesPicker.scss";
import dayjs from "dayjs";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import InputStartingDate from "../InputStartingDate/InputStartingDate";

const DatesPicker = ({ dateRange, setDateRange }) => {
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
        ariaHideApp={false}
      >
        <>
          {/* <InputStartingDate value={value} onChange={onChange} /> */}
          <button onClick={() => setIsOpen(false)}>exit</button>
        </>
      </Modal>
    </div>
  );
};

export default DatesPicker;
