import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    console.log("new_user_route:", new_user_route)
    console.log("sign_in_route:", sign_in_route)
    console.log("sign_out_route:", sign_out_route)
    return (
      <>
        <div>Header for React in Rails application with Devise</div>
        <Nav>
          { logged_in &&
              <NavItem>
              <a href={sign_out_route}>Sign Out</a>
              </NavItem>
          }
          {!logged_in &&
          <>
            <NavItem>
              <a href={sign_in_route}>Sign In</a>
            </NavItem>
            <NavItem>
              <a href={new_user_route}>Sign Up</a>
            </NavItem>
          </>
          }
        </Nav>
      </>
    )
  }
}
