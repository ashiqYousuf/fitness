/* eslint-disable react/prop-types */

const Button = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon: Icon
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-lg
                hover:opacity-80
                transition
                w-full
                ${small ? 'py-1' : 'py-3'}
                ${small ? 'px-2' : 'px-10'}
                ${small ? 'text-sm' : 'text-md'}
                ${small ? 'font-light' : 'font-semibol'}
                ${small ? 'border-[1px]' : 'border-2'}
                ${outline ? 'bg-white' : 'bg-rose-500'}
                ${outline ? 'border-black' : 'border-rose-600'}
                ${outline ? 'text-black' : 'text-white'}
            `}
        >
            {label}
            {
                Icon && !small && (
                    <Icon size={24} className="absolute left-4 top-3 pr-2" />
                )
            }
        </button>
    );
}

export default Button;
