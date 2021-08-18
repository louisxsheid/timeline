import "./Modal.scss";
import onClickOutside from "react-onclickoutside";
import { useEffect } from "react";

const Modal = (props) => {
  const { setOpen } = props;
  Modal.handleClickOutside = () => setOpen(false);
  return (
    <div className="modal">
      <div className="inner">
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          x
        </button>
        {props.children}
      </div>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Modal.handleClickOutside,
};

export default onClickOutside(Modal, clickOutsideConfig);
