/* eslint-disable react/prop-types */
const Heading = ({
    title,
    subtitle,
    center
}) => {
    return (
        <div className={`
        flex
        flex-col
        gap-1
        ${center ? 'text-center' : 'text-start'}
    `}>
        <div className="font-2xl font-semibold">{title}</div>
        <div className="font-light text-neutral-500">{subtitle}</div>
    </div>
    );
}
 
export default Heading;
