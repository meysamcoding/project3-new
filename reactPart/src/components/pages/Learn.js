import React, { Component } from 'react'
import axios from 'axios';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Thank you for contacting with us!!!")
        this.resetForm()
      } else if (response.data.status === 'fail') {
        console.log("not sent");
      }
    })
  }

  resetForm() {

    this.setState({ name: '', email: '', message: '' })
  }

  render() {
    return (
      
      <div className="App">
        <h1>Contact Form</h1>
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
        	<label htmlFor="name">Name</label>
        	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
        	<label htmlFor="exampleInputEmail1">Email address</label>
        	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
      </div>
      <div className="form-group">
        	<label htmlFor="message">Message</label>
        	<textarea className="form-group" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
       
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
}

export default App;