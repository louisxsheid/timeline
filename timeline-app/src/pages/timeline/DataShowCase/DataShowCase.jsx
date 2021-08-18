import { useState } from "react";
import "./DataShowCase.scss";
import Modal from "../../../components/Modal/Modal";
import DataItem from "./DataItem";

const DataShowCase = ({ showCase }) => {

  return (
    <div className="datashowcase-wrapper">
      <div className="title">SPOTLIGHT</div>
      {showCase.header}
      {showCase.data.map((item) => <DataItem name={item.name} context={item.context} date={item.date}/> )}
    </div>
  );
};

export default DataShowCase;
