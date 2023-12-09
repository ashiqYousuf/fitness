import Heading from "../Heading";
import Row from "./Row";
import Thead from "./Thead";

/* eslint-disable react/prop-types */
const Table = ({
    config,
    data
}) => {
    const tableRows = data.map((row) => {
        return (
            <Row key={row.id} row={row} config={config}/>
        )
    });

    return (
    <div className="flex flex-col gap-8">
        <Heading 
            title="My Trustworthy Clients"
            subtitle="View all your clients"
            center
        />
        <div className="flex flex-row items-center justify-center">
            <table className="table-auto rounded-t-2xl shadow-sm border-black bg-neutral-500/20 w-full md:w-4/5 px-4 mx-2">
                <Thead config={config} />
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    </div>
    );
}
 
export default Table;
