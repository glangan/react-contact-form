import React, {Component} from 'react';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'email': '',
      'message': '',
      'nameEmpty': false,
      'emailEmpty': false,
      'messageEmpty': false
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
    let valid = true;
    let { name, email, message } = this.state;
    if (name.length ===  0) {
      this.setState({
        'nameEmpty': true
      });
      valid = false;
    } else {
      this.setState({
        'nameEmpty': false
      })
    }
    if (email.length === 0) {
      this.setState({
        'emailEmpty': true
      });
      valid = false;
    } else {
      this.setState({
        'emailEmpty': false
      })
    }
    if (message.length === 0) {
      this.setState({
        'messageEmpty': true
      });
      valid = false;
    } else {
      this.setState({
        'messageEmpty': false
      })
    }

    event.preventDefault();
    if (valid) {
      // handle form
      console.log(`Message from ${this.state.name} (${this.state.email}): ${this.state.message}`)
    } else {
      console.log('Please correct errors.')
    }

  }

  render() {
    let nameError, emailError, messageError = null;

    if (this.state.nameEmpty) {
      nameError = <p className="help is-danger">Name is required.</p>
    }
    if (this.state.emailEmpty) {
      emailError = <p className="help is-danger">Email is required.</p>
    }
    if (this.state.messageEmpty) {
      messageError = <p className="help is-danger">Message is required.</p>
    }

    return (
      <form action="">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className={"input " + (this.state.nameEmpty ? 'is-danger' : '')}
              type="text"
              placeholder="Name"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </div>
          {nameError}
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className={"input " + (this.state.emailEmpty ? 'is-danger' : '')}
              type="text"
              placeholder="Email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email}
            />
          </div>
          {emailError}
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className={"textarea " + (this.state.messageEmpty ? 'is-danger' : '')}
              placeholder="Message"
              name="message"
              onChange={this.handleInputChange}
              value={this.state.message}
            />
          </div>
          {messageError}
        </div>
        <div className="control">
          <button className="button is-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </form>
    )
  }
}

export default ContactForm;