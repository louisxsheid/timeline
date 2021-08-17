import "./DataShowCase.scss";

const DataShowCase = ({ showCase }) => {
  console.log(showCase);
  return (
    <div className="datashowcase-wrapper">
      <div className="title">SPOTLIGHT</div>
      {/* <pre>{JSON.stringify(showCase.data, null, 2)}</pre> */}
      {showCase.header}
      {showCase.data.map((item) => (
        <div className="showcase-item">
          <div>{item.name}</div>
          <div>{item.date}</div>
        </div>
      ))}
    </div>
  );
};

export default DataShowCase;
