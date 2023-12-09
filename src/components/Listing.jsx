/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import ClientContext from "../context";
import toast from "react-hot-toast";

const Listing = ({ appointment, globalClient }) => {
  const { editClient } = useContext(ClientContext);

  const handleDelete = () => {
    const newAppointments = globalClient.appointments.filter((app) => {
        return app != appointment;
    });
    globalClient.appointments = newAppointments;
    editClient(globalClient.id, globalClient);
    toast.success("Appointment deleted");
  }

  return (
    <div className="rounded-xl bg-neutral-300 py-6 hover:bg-black hover:text-white cursor-pointer transition px-3 font-light relative">
      <div className="font-semibold overflow-hidden px-4">
        {appointment?.toString()}
      </div>

      <ImCross
        onClick={handleDelete}
        className="absolute top-2 right-2 ml-2 text-rose-700 hover:text-rose-400 transition hover:scale-125"
        size={14}
      />
    </div>
  );
};

export default Listing;
