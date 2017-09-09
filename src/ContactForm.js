import React, {Component} from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'email': '',
      'message': ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Message from ${this.state.name} (${this.state.email}): ${this.state.message}`)
  }

  render() {
    return (
      <form action="">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Message"
              name="message"
              onChange={this.handleInputChange}
              value={this.state.message}
            />
          </div>
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default ContactForm;