import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// semantic-ui
import { Container, Grid } from 'semantic-ui-react'
import LoginForm from './LoginForm'

class Learn extends Component {

  render() {

    return (
      <div>
         

        <Container className='home' style={{ textAlign: 'center' }}>

          <Grid style={{ marginTop: 60 }}>
            <Grid.Column textAlign='right' width={16}>
            {/* <Link to="/learn">Create an account</Link> */}
            </Grid.Column>
          </Grid>


          <LoginForm />

        </Container>

      </div >
    )
  }
}

function mapStateToProps({ user }) {
  return {
    user
  }
}


export default withRouter(connect(mapStateToProps)(Learn))
