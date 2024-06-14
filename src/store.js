export const initialStore = () => {
  return {
    contacts: [
      {
        name: "",
        phone: "",
        email: "",
        address: "",
        id: 63,
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "load_contacts":
      const { contactList } = action.payload;
      return {
        ...store,
        contacts: contactList,
      };
    case "ADD_CONTACT":
      const { newContact } = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact],
      };
      case "DELETE_CONTACT":
        const {id} = action.payload;
        return {
          ...store,
          contacts: store.contacts.filter(contact => contact.id !==id),
        };
        case "EDIT_CONTACT":
      const updatedContact = action.payload.updatedContact;
      return {
        ...store,
        contacts: store.contacts.map((contact) =>
          contact.id === updatedContact.id ? updatedContact : contact
        ),
      };
    default:
      throw Error("Unknown action.");
  }
}
