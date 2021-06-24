import "./TimelinePage.scss";
// eslint-disable-next-line no-unused-vars
import ContextRow from "../ContextRow/ContextRow";
import allData from '../mock-data';

const TimelinePage = () => {

  return (
    <div className="timeline-wrapper">
        {/* TimelinePage */}
        <div className="context-rows-wrapper">
          {allData.map(item => (
            <div key={item.context}>
              <ContextRow contextData={item.data} contextName={item.context} />  
            </div>
          ))}
          {/* <div className="all-data-wrapper">
          {allData.map(item => (
            <div key={item.context} className="row-item">{item.data[0].name}</div>
          ))}
          </div> */}
        </div>
    </div>
  );
};

export default TimelinePage;
