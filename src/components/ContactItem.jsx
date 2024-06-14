import { useState } from "react";

const ContactItem = ({contact, onDelete, onEdit  }) =>{
  const[editing, setEditing] = useState(false);
  const[editedContact, setEditedContact] = useState({
    name: contact.name,
    phone: contact.phone,
    email: contact.email,
    address: contact.address,
  });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    // Reset editedContact to original values if needed
    setEditedContact({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address,
    });
  };

  const handleSaveEdit = async () => {
    const response = await fetch(
      `https://playground.4geeks.com/contact/agendas/daperk/contacts/${contact.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedContact),
      }
    );

    if (response.ok) {
      const updatedContact = await response.json();
      onEdit(updatedContact);
      setEditing(false);
      console.log('Contact Updated successfully');
    } else {
      console.error("Failed to Updated contact");
      const errorData = await response.json();
      console.error("Error details:", errorData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({
      ...editedContact,
      [name]: value,
    });
  };

    return <div className="list-group-item list-group-item-action">
    <div class="d-flex flex-row align-items-center gap-2">
    {editing ? (
      <div className="container">
            <div className="row">
              <div className="col-md-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="form-control"
                  name="name"
                  value={editedContact.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  placeholder="Phone"
                  className="form-control"
                  name="phone"
                  value={editedContact.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={editedContact.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-2">
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  name="address"
                  value={editedContact.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <button className="btn btn-success me-2" onClick={handleSaveEdit}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
        <div className="col-2">{contact.name}</div>
        <div className="col-2">{contact.phone}</div>
        <div className="col-3">{contact.email}</div>
        <div className="col-2">{contact.address}</div>
        <div className="d-flex col-3">
          <a href="#" className="btn btn-md btn-primary ms-auto mt-2" onClick={handleEditClick}>
            Edit
          </a>
          <a href="#" className="btn btn-md btn-danger ms-2 mt-2" onClick={onDelete}>
            Delete
          </a>
        </div>
      </>
    )}
  </div>
</div>
};

export default ContactItem;