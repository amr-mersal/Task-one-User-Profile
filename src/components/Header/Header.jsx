import React from "react";
import P3 from "../../assets/p3.jpg";

const Header = () => {
  return (
    <>
      <div className="profile-header">
        <img src={P3} alt="User Profile" className="profile-pic" />
      </div>
    </>
  );
};

export default Header;
