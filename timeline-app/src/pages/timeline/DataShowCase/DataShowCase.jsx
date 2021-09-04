import { useState } from "react";
import "./DataShowCase.scss";
import Modal from "../../../components/Modal/Modal";
import DataItem from "./DataItem";
import dayjs from "dayjs";

const DataShowCase = ({ showCase }) => {

  return (
    <div className="datashowcase-wrapper">
      <div className="title">SPOTLIGHT</div>
      {showCase.header}
      {showCase.data.map((item) => <DataItem name={item.title} date={dayjs(item.date).format("MM/DD/YYYY")}/> )}
    </div>
  );
};

export default DataShowCase;
