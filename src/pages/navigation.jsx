import { Link } from "react-router-dom";
function Navigation() {
    return (
    <div 
     style={{display:"flex",
     justifyContent:"space-around",
     alignItems:"center",
     height:"100%",
     
     
     }}>
      <Link to={"\home "} ><span className="button">Home</span></Link>
      <Link to={'/edcation'}><span className="button">Project</span></Link>
      <Link to={'/education'}><span className="button">Education</span></Link>
      <Link to={'/contact'}><span className="button">Contact</span></Link>
      
      </div>
    );
  }

  export default Navigation