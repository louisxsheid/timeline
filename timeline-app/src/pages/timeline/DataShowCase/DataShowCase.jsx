const DataShowCase = ({ showCase, dateData }) => {
    return (
        <div>
            {showCase}
            <pre>{JSON.stringify(dateData, null, 2)}</pre>
        </div>
    )
}

export default DataShowCase;