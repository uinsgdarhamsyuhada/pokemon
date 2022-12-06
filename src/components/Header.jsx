import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img className="img-logo" src="https://www.freeiconspng.com/uploads/pokeball-transparent-png-2.png" alt="Pokeball transparent png" />
        </div>
        <div className="header-right">
          <a>Login</a>
        </div>
      </div>
    )
  }
}

export default Header;