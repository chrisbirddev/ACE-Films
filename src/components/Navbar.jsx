import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  return (
    <div className="nav">
      <div className="nav-bar-content">
        <a href="/" className="img-logo">
          <img src="/ace_transparent.png" alt="Logo" />
        </a>
        
        <a href="/" className="user-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9VhASGSfFj_77fZ748zUwZZ0HbLv35YYrd93apRFEjDlRDUcoBJlyiiLfzxymVaJMp0&usqp=CAU"
            alt="User"
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;