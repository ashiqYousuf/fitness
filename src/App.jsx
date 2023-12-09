import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import useRegisterModal from "./hooks/useRegisterModal";
import { useContext, useEffect } from "react";
import ClientContext from "./context";
import Table from "./components/table/Table";
import Config from "./ClientConfig";
import AppointmentModal from "./components/modals/AppointmentModal"


const App = () => {
  const registerModal = useRegisterModal();
  const { getAllClients, clients } = useContext(ClientContext);

  useEffect(() => {
    getAllClients();
  }, [getAllClients]);

  return (
    <>
      <Toaster />
      <RegisterModal />
      <AppointmentModal />
      <Navbar/>
      <div className={`
        pt-32
        pb-20
        ${registerModal.isOpen ? 'overflow-hidden fixed invisible transition' : ''}
      `}>
        <Table config={Config} data={clients} />
      </div>
    </>
  );
}
 
export default App;
