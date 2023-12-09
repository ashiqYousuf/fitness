/* eslint-disable react/prop-types */
const Input = ({
    id,
    label,
    disabled,
    required,
    register,
    errors,
    type='text'
}) => {
    return (
        <div className="relative w-full">
            <input 
                id={id}
                type={type}
                disabled={disabled}
                placeholder=" "
                {...register(id, { required })}
                required={required}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    border-2
                    rounded-md
                    outline-none
                    focus:outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
                `}
            />
            <label className={`
                absolute
                text-md
                duration-150
                transform
                transition
                top-5
                right-5
                z-10
                text-sm
                origin-[0]
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-90
                peer-focus:-translate-y-4
                ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
            `}>
                {label}
            </label>
        </div>
    );
}
 
export default Input;
