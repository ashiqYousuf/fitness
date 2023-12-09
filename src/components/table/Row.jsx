/* eslint-disable react/prop-types */
// import toast from "react-hot-toast";
import { useContext, useState } from "react";
import {
    useForm
} from "react-hook-form";
import ClientContext from "./../../context/index";
import toast from "react-hot-toast";
import useAppointmentModal from "../../hooks/useAppointmentModal";

const Row = ({
    row,
    config
}) => {
    const [isEditable, setIsEditable] = useState(false);
    const { editClient, setGlobalClient } = useContext(ClientContext);
    const appointModal = useAppointmentModal();

    const required = true;
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        defaultValues: {
            firstName: row.firstName,
            lastName: row.lastName,
            address: row.address
        }
    });


    const toggle = () => {
        setIsEditable((isEditable) => !isEditable);
    }

    const onSubmit = (data) => {
        try {
            editClient(row.id, data);
            toast.success("Client updated");
            setIsEditable(false);
        } catch (err) {
            toast.error(err?.message || "Something went wrong")
        }
    }

    const renderedCells = config.map((column) => {
        if (column.isEditIcon) {
            return (
                <td onClick={isEditable ? handleSubmit(onSubmit) : toggle} className='font-light py-4 text-center h-full w-1/3' key={column.label}>
                    {column.render(isEditable)}
                </td>
            )
        }
        else if (column.isViewIcon) {
            return (
                <td onClick={() => {
                    setGlobalClient(row)
                    appointModal.onOpen();
                }} className='font-light py-4 text-center h-full w-1/3' key={column.label}>
                    {column.render(row)}
                </td>
            )
        }
        if (isEditable) {
            return (
                <td key={column.label} className="px-0 h-full w-full">
                <input
                    {...register(column.hookId, { required })}
                    className={`
                        border-[1px]
                        bg-white
                        hover:border-2
                        w-full
                        h-full
                        outline-none
                        focus:outline-none
                        transition
                        py-3
                        text-center
                        font-light
                        mx-1
                        rounded-md
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        ${errors[column.hookId] ? 'border-rose-500' : 'border-neutral-500'}
                        ${errors[column.hookId] ? 'focus:border-rose-500' : 'focus:border-sky-500'}
                    `}
                />
            </td>
            )
        }
        return (
            <td className='font-light py-4 text-center h-full w-full' key={column.label}>
                {column.render(row)}
            </td>
        )
    });

    return (
        <tr key={row.id} className={`flex flex-row items-center justify-around border-b border-neutral-500/40 hover:bg-neutral-400/30 w-full ${isEditable && 'flex gap-1'}`}>
            {renderedCells}
        </tr>
    );
}
 
export default Row;
