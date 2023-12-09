import {
    useForm
} from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "./Modal";
import useRegisterModal from "../../hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { useCallback, useContext, useState } from "react";
import ClientContext from "./../../context/index";

const RegisterModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { createClient } = useContext(ClientContext);

    const registerModal = useRegisterModal();
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
        setValue
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            address: ''
        }
    });


    const resetState = useCallback((id, value=' ') => {
        setValue(id, value);
    }, [setValue]);

    const onSubmit = (data) => {
        // data contains firstName, lastName and address
        setIsLoading(true);
        const {
            firstName,
            lastName,
            address
        } = data;
        if (!firstName.trim() || !lastName.trim() || !address.trim()) {
            setIsLoading(false);
            return toast.error('All fields are required');
        }
        try{
            createClient({...data, "appointments": []});
            toast.success("Client Added!");
            resetState("firstName");
            resetState("lastName");
            resetState("address");
        } catch(err) {
            toast.error(err?.message || "Something went wrong");
        }
        setIsLoading(false);
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to clients form"
                subtitle="Add your trustworthy clients"
                center
            />
            <Input
                id="firstName"
                label="First Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="lastName"
                label="Last Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="address"
                label="Address"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );


    return (
        <Modal
            isOpen={registerModal.isOpen}
            title="Add your client"
            actionLabel="Submit"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            disabled={isLoading}
        />
    );
}
 
export default RegisterModal;
