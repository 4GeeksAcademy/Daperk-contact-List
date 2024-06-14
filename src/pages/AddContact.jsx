import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



const AddContact = ({}) => {
const { store, dispatch } = useGlobalReducer();
const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [email, setEmail] = useState("")
const [address, setAddress] = useState("")
const navigate = useNavigate();

const handleSubmit = async(ev) => {
  ev.preventDefault()
  const newContact = { name, phone, email, address };
  console.log("Submitting new contact:", newContact);

  
  const response = await fetch("https://playground.4geeks.com/contact/agendas/daperk/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContact),
  });
  if (response.ok) {
    const addedContact = await response.json();
    dispatch ({type:"ADD_CONTACT", payload: {newContact: addedContact}})
    navigate("/");
  }else {
    console.error('"Failed to add contact"');
    const errorData = await response.json();
    console.error("Error details:", errorData);
  }
}

    return <div className="container">
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="name" className="form-label">Full Name</label>
        <input value={name} onChange={ev => setName(ev.target.value)} type="text" class="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone Number</label>
        <input value={phone} onChange={ev => setPhone(ev.target.value)} type="tel" class="form-control" id="phone" required />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">Email</label>
        <input value={email} onChange={ev => setEmail(ev.target.value)} type="email" class="form-control" id="Email" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input value={address} onChange={ev => setAddress(ev.target.value)} type="text" class="form-control" id="address"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      
      <Link to={"/"}><button type="" className="btn btn-secondary">Go back</button></Link>
    </form>
    </div>
}

export default AddContact;