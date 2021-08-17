import "./DataShowCase.scss";

const DataShowCase = ({ showCase }) => {
  console.log(showCase);
  return (
    <div className="datashowcase-wrapper">
      <div className="title">SPOTLIGHT</div>
      {showCase.header}
      <pre>{JSON.stringify(showCase.data, null, 2)}</pre>
    </div>
  );
};

export default DataShowCase;
