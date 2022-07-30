import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <AppBar position="static" style={{backgroundColor: "purple"}}>
      <Toolbar sx={{p:1.5, mx: 2, display: 'flex', justifyContent: 'center'}}>
        <NavLink to="/" style={{color: "white", fontWeight: "bold", fontSize: "20px", 
        paddingRight: "15px", textDecoration: 'none'}}>
          System Home
        </NavLink>
        <NavLink to="all" style={{color: "white", fontWeight: "bold", fontSize: "20px", 
        paddingRight: "15px", textDecoration: 'none'}}>
          All Users
        </NavLink>
        <NavLink to="add" style={{color: "white", fontWeight: "bold", fontSize: "20px", 
        paddingRight: "15px", textDecoration: 'none'}}>
          Add Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
