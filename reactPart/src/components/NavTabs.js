
// export default NavTabs;
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import '../../src/App.css'
import axios from 'axios'

class NavTabs extends Component {
  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }


  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);

    return (
      <div>

        <header className="App-1 " >
          <div className="nav-items" >
            {loggedIn ? (
              <section className="nav-items">
                <Link to="#" className="nav-items" onClick={this.logout}>
                  <span className="text-secondary">logout</span></Link>

              </section>
            ) : (
                <ul className="nav-items">

                  <li className="  nav-content  "
                  >
                    <Link to="/"  >
                      <span className="nav-items">Home</span>
                    </Link>
                  </li>
                  <li className="  nav-content  "
                  >
                    <Link to="/gallery" >
                      <span className="  nav-items">Gallery</span>
                    </Link>
                  </li>
                  <li className="  nav-content  "
                  >
                    <Link to="/learn" >
                      <span className="  nav-items">Contact us</span>
                    </Link>
                  </li>
                   
                    <li className="nav-content" >
                    <Link to="/login"  >
                      <span className="nav-items" id="rightside">Login</span>
                    </Link>
                  </li>

                  <li className="  nav-content">
                    <Link to="/sign"  >
                      <span className="  nav-items" id="rightside">Sign Up</span>
                    </Link>
                  </li>
                  
                  
                </ul>
              )}
          </div>

        </header>
      </div>

    );

  }
}

export default NavTabs
