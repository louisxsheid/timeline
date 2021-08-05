import "./MonthlyDatesRow.scss";
import dayjs from "dayjs";

const MonthlyDatesRow = ({ date }) => {
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
      className="date-range-wrapper-m"
      style={
        dayjs().format("MM/DD/YYYY") == date
          ? today
          : dayjs(date).isBefore(dayjs())
          ? past
          : future
      }
    >
      <div style={{ color: "white" }}>{weekdays[dayjs(date).day()][0]}</div>
      <div>{dayjs(date).format("D")}</div>
    </div>
  );
};

export default MonthlyDatesRow;
