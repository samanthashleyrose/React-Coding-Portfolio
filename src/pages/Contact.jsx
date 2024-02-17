import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formIsValid = Object.values(formData).every(value => value.trim() !== '');
    if (formIsValid) {
      console.log('Form submitted:', formData);
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    if (!formData[fieldName]) {
      setErrors({
        ...errors,
        [fieldName]: true
      });
    }
  };

  return (
    <div>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className='
    contact-form'>
        <div id='name-div'>
          <label htmlFor="name" id="name-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          * {errors.name && <p className="error"> required</p>}
        </div>
        <div id='email-div'>
          <label htmlFor="email" id="email-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          * {errors.email && <p className="error"> required</p>}
        </div>
        <div id='message-div'>
          <label htmlFor="message" id="message-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          * {errors.message && <p className="error"> required</p>}
        </div>
        <button type="submit" id='submit-btn'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
