import "./DropDown.scss";
import onClickOutside from "react-onclickoutside";

const DropDown = ({ setOpen, setState, options }) => {
  DropDown.handleClickOutside = () => setOpen(false);
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
        <DropdownItem key={item}>{item}</DropdownItem>
      ))}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig);
