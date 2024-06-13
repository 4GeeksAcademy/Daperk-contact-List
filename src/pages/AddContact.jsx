import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const AddContact = ({}) => {

// const {store, actions}=useContext(Context)
const {fullname, setFullName} = useState("")
const {phone, setPhone} = useState("")
const {email, setEmail} = useState("")
const {address, setAddress} = useState("")

    return <div className="container">
        <form>
        <div className="mb-3">
        <label for="name" class="form-label">Full Name</label>
        <input value={fullname} type="text" class="form-control" id="name"/>
      </div>
      <div className="mb-3">
        <label for="phone" class="form-label">Phone Number</label>
        <input value={phone} type="tel" class="form-control" id="phone"/>
      </div>
      <div className="mb-3">
        <label for="Email" class="form-label">Email</label>
        <input value={email} type="email" class="form-control" id="Email" aria-describedby="emailHelp"/>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="address" class="form-label">Address</label>
        <input value={address} type="text" class="form-control" id="address"/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to={"/"}><button type="" className="btn btn-secondary">Go back</button></Link>
    </form>
    </div>
}

export default AddContact;