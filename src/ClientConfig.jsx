import { GoPencil } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";


const Config = [
    {
      label: "Firstname",
      hookId: "firstName",
      render: (row) => row.firstName
    },
    {
      label: "Lastname",
      hookId: "lastName",
      render: (row) => row.lastName
    },
    {
      label: "Address",
      hookId: "address",
      render: (row) => row.address
    },
    {
      label: "Edit",
      render: (isEditable) => !isEditable ? (
        <GoPencil size={22} className="cursor-pointer mx-auto text-rose-600 hover:scale-125 hover:text-rose-800 transition"/>
        ) : (
          <FaCheck size={22} className="cursor-pointer mx-auto text-emerald-700 hover:scale-125 hover:text-emerald-900 transition"/>
        ),
      isEditIcon: true
    },
    {
      label: "View",
      render: () => <FaRegEye size={22} className="cursor-pointer mx-auto text-sky-600 hover:scale-125 hover:text-sky-800 transition"/>,
      isViewIcon: true
    }
];

  export default Config;
