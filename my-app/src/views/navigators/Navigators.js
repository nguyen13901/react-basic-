import React from "react";
import "../../styles/navigator.scss";
import "../../styles/todo.scss";
import { NavLink } from "react-router-dom";
class Navigators extends React.Component {
  render() {
    return (
      <>
        <div class="topnav">
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/todos">
            Todos
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </div>
      </>
    );
  }
}

export default Navigators;
