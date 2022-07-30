import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

// const useStyles = makeStyles({
//     header: {
//         backgroundColor: '#212121',
//     },
//     spacing :{
//         paddingLeft: 20,
//         color: '#fff',
//         fontSize: '18px',
//         textDecoration: 'none',
//     }
//   });

const Navbar = () => {
  // const classes = useStyles();
  return (
    <AppBar position="static" >
      <Toolbar>
        <NavLink to="/" >
          {" "}
          Apartment Management System
        </NavLink>
        <NavLink to="all">
          {" "}
          All Users
        </NavLink>
        <NavLink to="add">
          {" "}
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
