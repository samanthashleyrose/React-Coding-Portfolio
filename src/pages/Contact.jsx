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

  const [success, setSuccess] = useState(false);

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
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value.trim();
    setErrors({
      ...errors,
      [fieldName]: fieldValue === ''
    });
  };

  return (
    <div id='contact-page'>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
            required
          />
          * {errors.message && <p className="error"> required</p>}
        </div>
        <button type="submit" id='submit-btn'>Submit</button>
        {success && <p className="success"> contact form submitted successfully!</p>}
      </form>
      <div className='contact-info'>
        <h3>My Personal Contact Information:</h3>
        <p><a id="a-1">Email: samantha.rose327@gmail.com</a></p>
        <p><a href="https://github.com/samanthashleyrose" id="a-2">GitHub: samanthashleyrose</a></p>
        <p><a href="https://www.linkedin.com/in/samantha-rose-21a01a2a2/" id="a-3">LinkedIn: click here!</a></p>
      </div>
    </div>
  );
}

export default ContactForm;
