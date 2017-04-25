import React from 'react'

const Sidebar = (props) => (
  <div style={{
      alignItems: 'center',
      background: '#eee',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      overflow: 'auto',
      width: '20vw'
      
  }} {...props} />
);

export default Sidebar;