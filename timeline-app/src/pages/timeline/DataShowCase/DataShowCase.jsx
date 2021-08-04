import "./DataShowCase.scss";

const DataShowCase = ({ showCase, dateData }) => {
  console.log(dateData);
  return (
    <div className="datashowcase-wrapper">
      <div className="title">SPOTLIGHT</div>
      {showCase.data}
      <pre>{JSON.stringify(dateData, null, 2)}</pre>
    </div>
  );
};

export default DataShowCase;
