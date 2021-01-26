import React, { Fragment, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>If you have what it takes to be a thunderStriker, add yourself as a member.  
          Regards, Team ThunderStrike :)
            </Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}
