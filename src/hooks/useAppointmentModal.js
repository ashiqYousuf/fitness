import { create } from "zustand";

const useAppointmentModal = create((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}));

export default useAppointmentModal;
