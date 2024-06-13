const ContactItem = ({contact}) =>{
    return <div className="list-group-item list-group-item-action">
    <div class="d-flex flex-row align-items-center">
      <div class="col-2">{contact.name}</div>
      <div class="col-2">{contact.phone}</div>
      <div class="col-3">{contact.email}</div>
      <div class="col-2">{contact.address}</div>
      <div className="d-flex col-2">
        <a href="#" className="btn btn-md btn-primary ms-auto">Edit</a>
        <a href="#" className="btn btn-md btn-danger ms-2">Delete</a>
      </div>
    </div>
    </div>
}

export default ContactItem;