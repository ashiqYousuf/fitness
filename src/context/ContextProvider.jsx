/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import ClientContext from ".";
import axios from "axios";

const URL = "http://localhost:8000/clients";

const Provider = ({
    children
}) => {
    const [clients, setClients] = useState([]);
    const [globalClient, setGlobalClient] = useState(null);

    const getAllClients = useCallback(async () => {
        const response = await axios.get(URL)
        setClients(response.data);
    }, []);

    const editClient = useCallback(async (clientId, data) => {
        const response = await axios.patch(`${URL}/${clientId}`, data);
        const updatedClients = clients.map((client) => {
            if (client.id === clientId) {
                return {
                    ...client,
                    ...response.data
                }
            }
            return client;
        });

        setClients(updatedClients);
    }, [clients]);

    const createClient = useCallback(async (data) => {
        const response = await axios.post(URL, data);
        setClients([
            ...clients,
            response.data
        ]);
    }, [clients]);

    const store = {
        clients,
        getAllClients,
        editClient,
        createClient,
        globalClient,
        setGlobalClient
    };

    return (
        <ClientContext.Provider value={store}>
            {children}
        </ClientContext.Provider>
    );
}
 
export default Provider;
