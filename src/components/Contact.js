// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className="row" key={props.data.name}>
          <div className="box-contact">
            <img className="img" src={props.data.photo} />
            <div className="box-description">
              <h3 className="name">{props.data.name}</h3>
              <h3 className="phone">{props.data.phone}</h3>
              <h3 className="email">{props.data.email}</h3>
          </div>
        </div>
        </div>
    )
}

export default Contact;