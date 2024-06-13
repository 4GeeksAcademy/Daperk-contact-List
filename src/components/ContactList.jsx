import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import ContactItem from "./ContactItem";

const ContactList = ({}) => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    const loadData = async () => {
      const resp = await fetch(
        "https://playground.4geeks.com/contact/agendas/daperk"
      );
      if (resp.ok) {
        const body = await resp.json();
        dispatch({
          type: "load_contacts",
          payload: { contactList: data.contacts },
        });
      }else {
        console.error("Failed to load conacts", resp.statusText)
      }
    };
    loadData();
  }, []);

  return (
    <div className="container mt-3">
      <ContactList contacts={store.contactList} />
    </div>
  );
};

export default ContactList;
