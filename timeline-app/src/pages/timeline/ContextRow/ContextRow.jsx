import './ContextRow.scss'

const ContextRow = ({ contextData, contextName }) => {
    return (
        <div className="context-bar-wrapper">
            <div className="context-name">
                {contextName}
            </div> 
            {contextData.map(item => (
                <div className="item-context-wrapper" key={item.name}>
                    <div className="item-name" key={item.name}>{item.name}</div>
                    <div>{item.date}</div>
                </div>
            ))}
        </div>
    );
};

export default ContextRow;