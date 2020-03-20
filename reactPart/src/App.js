import React, { Component } from 'react';
import axios from 'axios'
 
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Learn from "./components/pages/Learn";
import sign from "./components/pages/sign-up";
import login from "./components/pages/login-form";

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/Learn" component={Learn} />
        <Route path="/sign" component={sign} />
        <Route path="/login" component={login} />
         
      </div>
    </Router>
  );
}
}

export default App;
