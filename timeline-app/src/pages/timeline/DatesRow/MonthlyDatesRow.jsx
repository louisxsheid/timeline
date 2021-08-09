import "./MonthlyDatesRow.scss";
import dayjs from "dayjs";

const MonthlyDatesRow = ({ date }) => {
  const weekdays = ["Su", "M", "T", "W", "Th", "F", "S"];
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
      <div style={{ color: "white" }}>{weekdays[dayjs(date).day()]}</div>
      <div>{dayjs(date).format("D")}</div>
    </div>
  );
};

export default MonthlyDatesRow;
