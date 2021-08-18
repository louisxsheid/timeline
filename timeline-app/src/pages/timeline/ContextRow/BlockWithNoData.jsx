import { useState, useEffect } from "react";
import Modal from "../../../components/Modal/Modal";

const BlockWithNoData = (props) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const { contextName, date, showCaseDispatch, itemWidth } = props;
  const [style, setStyle] = useState({ display: "none" });

  const handleMouseOver = () => {
    setStyle({ display: "block" });
  };

  const handleMouseOut = () => {
    setStyle({ display: "none" });
  };

  return (
    <div
      onClick={() => {
        showCaseDispatch({
          type: "no-data",
          payload: `${contextName} ${date}`,
        });
      }}
      className="nodata"
      style={{ width: itemWidth }}
      key={date}
      onMouseOver={!open ? handleMouseOver : null}
      onMouseOut={handleMouseOut}
    >
      <div
        className="edit-block"
        onClick={() => {
          setOpen(true);
        }}
        style={style}
      >
        ✎
      </div>
      {props.children}
      {open && (
        <Modal setOpen={setOpen} setStyle={setStyle}>
          <div className="modal-info">
            <div>Context: {contextName}</div>
            <div>Date: {date}</div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BlockWithNoData;

{
  /* <DropDown
  setState={setOption}
  options={["edit", "delete"]}
  setOpen={setOpen}
/> */
}
