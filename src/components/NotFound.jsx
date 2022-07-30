import React from 'react';
// import { makeStyles } from '@mui/material';
import notfound from './../Assets/Images/404page-website.png';

// const useStyles = makeStyles({
//     error: {
//         textAlign: 'center',
//         marginTop: '20px',
//         marginBottom: '20px',
//     },
//   });

const NotFound = () => {
  // const classes = useStyles();
  return (
    <div>
      <img src={notfound} style={{width:'800px',height:'550px'}} alt="not found"/>
    </div>
  )
}

export default NotFound