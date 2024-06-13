export const initialStore = () => {
  return {
    contacts: [
      {
        name: "string",
        phone: "651",
        email: "j@mail.com",
        address: "14 ami pl",
        id: 63,
      },
      {
        name: "Felipe",
        phone: "78",
        email: "s@mail.com",
        address: "5 nw 8th st",
        id: 64,
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
        contacts: contactList
      };
    default:
      throw Error("Unknown action.");
  }
}
