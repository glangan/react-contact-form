import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import ContactForm from './ContactForm';

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="is-size-3 has-text-centered">Contact Us</h1>
          <ContactForm/>
        </div>
      </section>
    );
  }
}

export default App;
