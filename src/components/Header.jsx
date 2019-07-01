import React from 'react';

function Header(){

  var styling = {
    borderBottom: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '2fr 0fr',
    padding: '1%'
  }
  return <div style = {styling}>
    <div>
      <button>Home</button>
      <button>Notifications</button>
      <button>Messages</button>
    </div>
    <div>
      <input type="text" placeholder="Search"></input>
    </div>
  </div>
}

export default Header;
