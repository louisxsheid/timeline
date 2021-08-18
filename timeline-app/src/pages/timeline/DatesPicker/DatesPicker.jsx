import "./DatesPicker.scss";
import dayjs from "dayjs";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import InputStartingDate from "../InputStartingDate/InputStartingDate";
import DropDown from "../../../components/Dropdown/DropDown";

const DatesPicker = ({
  setSelectedInterval,
  selectedInterval,
  dateRange,
  setDateRange,
}) => {
  const [value, onChange] = useState([dateRange.start, dateRange.end]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    console.log("here");
    setDateRange({
      start: dayjs(value[0]).format("MM/DD/YYYY"),
      end: dayjs(value[1]).format("MM/DD/YYYY"),
    });
  }, [value]);

  return (
    <div>
      <div className="date-range">
        <div style={{ textAlign: "center" }}>
          {selectedInterval == "week" ? (
            `${dateRange.start} - ${dateRange.end}`
          ) : (
            <div>{`${monthNames[dayjs(dateRange.start).month()]} ${dayjs(
              dateRange.start
            ).year()}`}</div>
          )}
        </div>
        <div className="arrows">
          <div
            className="arrow"
            onClick={() => {
              setDateRange({
                start: dayjs(dateRange.start)
                  .subtract(1, selectedInterval)
                  .format("MM/DD/YYYY"),
                end: dayjs(dateRange.end)
                  .subtract(1, selectedInterval)
                  .format("MM/DD/YYYY"),
              });
            }}
          >
            ←
          </div>
          {/* {modalIsOpen && (
            <DropDown
              state={selectedInterval}
              setState={setSelectedInterval}
              options={["test"]}
              setOpen={setIsOpen}
            />
         )} */}
          <div onClick={() => setOpen(!open)} style={{ fontSize: "2rem" }}>
            {selectedInterval}
          </div>
          {open && (
            <DropDown
              state={selectedInterval}
              setState={setSelectedInterval}
              options={["week", "month"]}
              setOpen={setOpen}
            />
          )}
          <div
            className="arrow"
            onClick={() => {
              setDateRange({
                start: dayjs(dateRange.start)
                  .add(1, selectedInterval)
                  .format("MM/DD/YYYY"),
                end: dayjs(dateRange.end)
                  .add(1, selectedInterval)
                  .format("MM/DD/YYYY"),
              });
            }}
          >
            →
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatesPicker;

// <Modal
//   isOpen={modalIsOpen}
//   // onAfterOpen={afterOpenModal}
//   // onRequestClose={closeModal}
//   className="date-modal"
//   contentLabel="Example Modal"
//   ariaHideApp={false}
// >
//   <>
//     {/* <InputStartingDate value={value} onChange={onChange} /> */}
//     {/* <button onClick={() => setIsOpen(false)}>exit</button> */}
//   </>
// </Modal>
