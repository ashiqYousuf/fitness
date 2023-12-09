import toast from "react-hot-toast";
import Modal from "./Modal";
import Heading from "../Heading";
import useAppointModal from "./../../hooks/useAppointmentModal";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useCallback, useContext, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import ClientContext from "./../../context/index";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import Listing from "../Listing";

const AppointmentModal = () => {
  const [showPicker, setShowDatePicker] = useState(false);

  const { globalClient, editClient } = useContext(ClientContext);
  const appointModal = useAppointModal();
  console.log({isOpen: appointModal.isOpen})
  const [dateTime, setDateTime] = useState(null);

  const toggle = useCallback(() => {
    setShowDatePicker(!showPicker);
  }, [setShowDatePicker, showPicker]);

  const addAppointment = () => {
    try {
      globalClient.appointments.push(dateTime?.toISOString());
      editClient(globalClient.id, { ...globalClient });
      toast.success("Appointment added");
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
    }
    toggle();
  };

  const Icon = (
    <CiCalendarDate
      size={24}
      className="hover:text-sky-700 hover:scale-105 m-2"
    />
  );

  const bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title={`${globalClient?.firstName} ${globalClient?.lastName} appointments`}
        subtitle={`Total appointments made: ${
          globalClient?.appointments.length || 0
        }`}
        center
      />
      {showPicker ? (
        <FaRegSquareCheck
          onClick={addAppointment}
          className={`mx-auto text-green-700 cursor-pointer`}
          size={40}
        />
      ) : (
        <MdAssignmentAdd
          onClick={toggle}
          className="mx-auto text-rose-700 cursor-pointer"
          size={40}
        />
      )}
      {showPicker && (
        <div className="w-2/3 mx-auto">
          <DateTimePicker
            value={dateTime}
            onChange={(val) => setDateTime(val)}
            calendarClassName="rounded-xl bg-zinc-100 mt-1 border border-neutral-500 shadow-sm transition ml-5"
            calendarIcon={Icon}
            className="border-2 py-3 mx-2 w-full text-center"
            minDate={new Date(Date.now())}
          />
        </div>
      )}
      <div className="grid grid-cols-2 gap-4 flex-wrap justify-around mx-auto">
        {globalClient?.appointments.map((appointment) => (
          <Listing key={appointment} globalClient={globalClient} appointment={appointment} />
        ))}
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={appointModal.isOpen}
      title="View Appointments"
      actionLabel=""
      onClose={appointModal.onClose}
      body={bodyContent}
    />
  );
};

export default AppointmentModal;
