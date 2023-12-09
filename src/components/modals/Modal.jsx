import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

/* eslint-disable react/prop-types */
const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        // If Modal is disabled break
        if (disabled) return;

        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;

        onSubmit();
    }, [disabled, onSubmit]);

    // If Modal is not open return Null
    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
            <div className="relative w-full h-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto lg:h-auto md:h-auto">
                <div className={`
                    translate
                    duration-300
                    h-full
                    ${showModal ? 'translate-y-0' : 'translate-y-full'}
                    ${showModal ? 'opacity-100' : 'opacity-0'}
                `}>

                    <div className="flex flex-col translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative w-full bg-white outline-none focus:outline-none">
                        {/* START HEADER */}
                        <div className="flex flex-row items-center justify-center relative border-b-[1px] p-6 rounded-t">
                            <button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                <IoMdClose size={24} />
                            </button>
                            <div className="text-lg font-semibold">
                                {title}
                            </div>
                        </div>
                        {/* END HEADER */}

                        {/* START BODY */}
                        <div className="relative p-6 flex-auto">
                            {body}
                        </div>
                        {/* END BODY */}

                        {/* FOOTER START */}
                        <div className="flex flex-col gap-2 p-6">
                            {
                                actionLabel && (
                                    <Button label={actionLabel} onClick={handleSubmit} disabled={disabled} />
                                )
                            }
                            {footer}
                        </div>
                        {/* FOOTER END */}
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Modal;
