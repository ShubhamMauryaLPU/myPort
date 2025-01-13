import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
  let [fdata, setFdata] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    description: "",
  });
  let handleChange = (e) => {
    setFdata((currData) => {
      return { ...currData, [e.target.name]: e.target.value };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(fdata);
    setFdata({
      name: "",
      email: "",
      number: "",
      subject: "",
      description: "",
    });
  };
  return (
    <div className="contact-mainDiv">
      <form
        action="#"
        method="post"
        className="contact-form"
        onSubmit={handleSubmit}
      >
        <h2 className="contact-form-main-heading">Contact me</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
          onChange={handleChange}
          value={fdata.name}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          required
          onChange={handleChange}
          value={fdata.email}
        />
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Enter your number"
          required
          onChange={handleChange}
          value={fdata.number}
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter subject"
          onChange={handleChange}
          value={fdata.subject}
        />
        <textarea
          name="description"
          id="description"
          placeholder="description"
          onChange={handleChange}
          value={fdata.description}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
