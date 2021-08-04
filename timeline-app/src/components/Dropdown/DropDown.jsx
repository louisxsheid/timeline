import { useState, useEffect } from "react";

import "./DropDown.scss";

const DropDown = ({ setOpen, state, setState, options }) => {
  useEffect(() => {
    console.log("here", state);
  }, [state]);

  const DropdownItem = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => {
          setState(props.children);
          setOpen((prev) => !prev);
        }}
      >
        {props.children}
      </a>
    );
  };

  return (
    <div className="dropdown">
      {options.map((item) => (
        <DropdownItem
          key={item}
          // onClick={() => setState(item)}
        >
          {item}
        </DropdownItem>
      ))}
    </div>
  );
};

export default DropDown;
