/* eslint-disable react/prop-types */
const Thead = ({
    config
}) => {
    const tableHeading = config.map((column) => {
        return (
            <th className={`cursor-pointer font-medium text-slate-800 py-4 h-full ${(column.isEditIcon || column.isViewIcon) ? 'w-1/3' : 'w-full'}`} key={column.label}>
                {column.label}
            </th>
        )
    });

    return (
        <thead>
            <tr className="flex flex-row items-center justify-around rounded-t-xl border-b-[1px] border-neutral-800 w-full bg-neutral-400/90">
                {tableHeading}
            </tr>
        </thead>
    );
}
 
export default Thead;
