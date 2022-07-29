import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="/" className={classes.spacing}>
          {" "}
          Apartment Management System
        </NavLink>
        <NavLink to="all" className={classes.spacing}>
          {" "}
          All Users
        </NavLink>
        <NavLink to="add" className={classes.spacing}>
          {" "}
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
