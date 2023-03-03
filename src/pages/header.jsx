import React from "react";
function Header() {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: '#fff',
          justifyContent: "center",
          fontFamily:"sans-serif"
        }}
      >
        <h1 style={{ margin: "0" }}>Bharath G</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ margin: "0", marginLeft: "10%",color:"#fff",fontFamily:"sans-serif" }}>Frontend Developer</p>
      </div>
    </React.Fragment>
  );
}

export default Header;
