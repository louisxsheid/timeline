import { useEffect, useState } from "react";
import useContextMenu from "../../../hooks/useContextMenu";
import Modal from "../../../components/Modal/Modal";

const BlockWithData = (props) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState("");
  const {
    contextName,
    showCaseDispatch,
    selectedInterval,
    itemWidth,
    contextData,
  } = props;
  const [style, setStyle] = useState({ display: "none" });

  const handleMouseOver = () => {
    setStyle({ display: "block" });
    console.log("Here");
  };

  const handleMouseOut = () => {
    setStyle({ display: "none" });
  };
  return (
    <div
      onClick={() => {
        showCaseDispatch({
          type: "with-data",
          payload: contextName,
        });
      }}
      className="item-context-wrapper"
      key={contextName}
      style={{ width: itemWidth }}
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
      {open && (
        <Modal setOpen={setOpen} setStyle={setStyle}>
          <div className="modal-info">
            <div>Name: {contextData.name}</div>
            <div>Context: {contextData.context}</div>
            <div>Date: {contextData.date}</div>
          </div>
        </Modal>
      )}
      <div className="item-name" key={contextName}>
        {selectedInterval == "week" && contextName}
      </div>
    </div>
  );
};

export default BlockWithData;
