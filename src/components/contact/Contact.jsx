import { useState } from "react";
import axios from "axios";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    
    try {
      await axios.post('http://localhost:5000/send', formData);
      setMessage(true);
      console.log(formData);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input 
          className="border-black border-2 rounded-lg p-2"
          type="text"
           placeholder="Email"
           name="email"
           value={formData.email}
            onChange={handleChange}
            required
            />
          <textarea 
          className="border-black border-2 rounded-lg p-2"
           name="message"
           value={formData.message}
            onChange={handleChange}
          placeholder="Message"
          required></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :</span>}
        </form>
      </div>
    </div>
  );
}
