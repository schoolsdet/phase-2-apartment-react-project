import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteUser ,getallUsers } from '../service/api';
import { Link } from 'react-router-dom';

const AllUsers = () => {

  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async (id) => {
    const response = await getallUsers();
    console.log(response);
    setUser(response.data);
  }

  const deleteData = async (id) => {
    await deleteUser(id);
    getUsers();
  }

  return (
    <div>AllUsers</div>
  )
}

export default AllUsers