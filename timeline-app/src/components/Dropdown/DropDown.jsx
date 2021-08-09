import "./DropDown.scss";

const DropDown = ({ setOpen, state, setState, options }) => {
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

export default DropDown;
