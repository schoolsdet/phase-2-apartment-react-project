import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@mui/material';
import { editUser, getallUsers } from '../service/api';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = { name: "", username : "", email: "", phone: ""}

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const {name, username, email, phone } = user;

  const { id } - useParams();

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const response = await getallUsers(id);
    setUser(response.data);
  }

  const history = useHistory();

  return (
    <div>EditUser</div>
  )
}

export default EditUser