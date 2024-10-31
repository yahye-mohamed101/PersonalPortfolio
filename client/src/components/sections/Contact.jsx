import React, { useState } from 'react'; // Import React and useState hook from React
import '../../assets/contact.css'

function Contact() {
  // State to hold form input values
  const [name, setName] = useState(''); // State for the name input
  const [email, setEmail] = useState(''); // State for the email input
  const [message, setMessage] = useState(''); // State for the message input
  const [errors, setErrors] = useState({}); // State for error messages

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Basic validation
    const newErrors = {}; // Object to store any new errors
    if (!name) newErrors.name = 'Name is required'; // Check if name is empty
    if (!email) newErrors.email = 'Email is required'; // Check if email is empty
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Please enter a valid email'; // Validate email format
    if (!message) newErrors.message = 'Message is required'; // Check if message is empty

    // Update state with errors if any
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set the error state with new errors
    } else {
      // Clear form fields if validation passes
      setName(''); // Reset name input
      setEmail(''); // Reset email input
      setMessage(''); // Reset message input
      setErrors({}); // Clear errors
      alert('Form submitted successfully!'); // Alert user upon successful submission
    }
  };

  return (
    <section>
      <h2>Contact Me</h2> {/* Section title */}
      <form onSubmit={handleSubmit}> {/* Form element with submit handler */}
        {/* Name Field */}
        <label>
          Name:
          <input
            type="text"
            value={name} // Bind the input value to state
            onChange={(e) => setName(e.target.value)} // Update state on change
            onBlur={() => {
              if (!name) setErrors((prev) => ({ ...prev, name: 'Name is required' })); // Set error if name is empty on blur
            }}
          />
          {errors.name && <span className="error">{errors.name}</span>} {/* Display error message if exists */}
        </label>

        {/* Email Field */}
        <label>
          Email:
          <input
            type="email"
            value={email} // Bind the input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            onBlur={() => {
              if (!email) setErrors((prev) => ({ ...prev, email: 'Email is required' })); // Set error if email is empty on blur
              else if (!/\S+@\S+\.\S+/.test(email)) setErrors((prev) => ({ ...prev, email: 'Please enter a valid email' })); // Set error if email is invalid
            }}
          />
          {errors.email && <span className="error">{errors.email}</span>} {/* Display error message if exists */}
        </label>

        {/* Message Field */}
        <label>
          Message:
          <textarea
            value={message} // Bind the textarea value to state
            onChange={(e) => setMessage(e.target.value)} // Update state on change
            onBlur={() => {
              if (!message) setErrors((prev) => ({ ...prev, message: 'Message is required' })); // Set error if message is empty on blur
            }}
          />
          {errors.message && <span className="error">{errors.message}</span>} {/* Display error message if exists */}
        </label>

        {/* Submit Button */}
        <button type="submit">Submit</button> {/* Button to submit the form */}
      </form>
    </section>
  );
}

export default Contact; // Export Contact component for use in other files
