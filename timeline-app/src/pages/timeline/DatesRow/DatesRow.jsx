import "./DatesRow.scss";
import dayjs from "dayjs";

const DatesRow = ({ date }) => {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = {
    backgroundColor: "red",
  };

  const future = {};

  const past = {
    backgroundColor: "black",
  };
  return (
    <div
      className="date-range-wrapper"
      style={
        dayjs().format("MM/DD/YYYY") == date
          ? today
          : dayjs(date).isBefore(dayjs())
          ? past
          : future
      }
    >
      <div style={{ color: "white" }}>{weekdays[dayjs(date).day()]}</div>
      <div>{date}</div>
    </div>
  );
};

export default DatesRow;
