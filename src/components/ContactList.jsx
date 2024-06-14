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
          payload: { contactList: body.contacts },
        });
      }else {
        console.error("Failed to load conacts")
        const resp = await fetch(
          "https://playground.4geeks.com/contact/agendas/daperk",
          {method: 'post'}
        );
        dispatch({
          type: "load_contacts",
          payload: { contactList: [] },
        });
      }
    };
    loadData();
  }, []);

  const handleDelete = async (contactId) => {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/daperk/contacts/${contactId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


  if (response.ok) {
    dispatch({ type: "DELETE_CONTACT", payload: {id: contactId}});
    console.log ("contact deleted successfully");
  } else if (response.status === 404){
    console.log("Conatct not found");
  }else if (response.status === 500){
    console.log("Server error");
  }else {
    console.error("Failed to delete contact");
    const errorData = await response.json();
    console.error("Error details:", errorData);
  }
};

const handleEdit = (updatedContact) => {
  dispatch({ type: "EDIT_CONTACT", payload: { updatedContact } });
};
  return (
    <div className="container mt-3">
      {store.contacts.map(contact => <ContactItem contact={contact} onDelete={() => handleDelete(contact.id)} onEdit={handleEdit} />)}
    </div>
  );
};

export default ContactList;
