import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="space-bottom" style={{ fontSize: '43px' }}>B.planet</p>
        <p className="space-bottom1" style={{ fontSize: '33px' }}>Contact Us</p>
        <div className="product-grid">
          <div className="product-item">
            <p className="space-bottom3" style={{ fontSize: '25px' }}>Stay updated</p>
            <p className="space-bottom2" style={{ fontSize: '15px' }}>Need to get in touch with us?</p>
            <p className="underline" style={{ fontSize: '15px' }}>Facebook</p>
            <p className="underline" style={{ fontSize: '15px' }}>Instagram</p>
          </div>
          <div className="product-item">
            <div className="input-group">
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" className="wide-input" required />
            </div>
            <div className="input-group">
              <label htmlFor="address"></label>
              <input type="text" id="address" name="address" className="wide-input1" required />
            </div>
            <button type="submit" className="button">Submit</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Contact;
