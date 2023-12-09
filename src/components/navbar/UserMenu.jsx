import Button from "../Button";
import useRegisterModal from "../../hooks/useRegisterModal";

const UserMenu = () => {
    const registerModal = useRegisterModal();

    return (
        <div className="flex flex-row items-center justify-between rounded-full border-[1px] shadow-sm hover:shadow-md cursor-pointer px-4 py-4 gap-2">
            <Button small onClick={registerModal.onOpen} label="Add client"/>
            <Button small onClick={() => alert("Sorry this functionality is not added")} label="Appointments"/>
        </div>
    );
}
 
export default UserMenu;
