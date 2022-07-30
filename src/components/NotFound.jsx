import React from 'react';
import notfound from './../assets/images/404page-website.png';

const NotFound = () => {
  // const error = { textAlign: 'center',
  //     marginTop: '20px', marginBottom: '20px',}
  return (
    <div>
      <img src={notfound} style={{width:'800px',height:'550px'}} alt="not found"/>
    </div>
  )
}

export default NotFound