import React from "react";

function Home() {
    return (
      <React.Fragment>
        <img src={require("./43300-1.jpg")} style={{width:"200px",height:"200px"}}></img>
     <h2>carrer Object</h2>
     <p>An organized and motivated employee capable of time management and working under
       pressure in all environments. Seeking to join Acme Corp as an 
      Administrative Assistant to assist in ensuring good internal communications and budget management.</p>
      <br/>
      <h2>Skills</h2>
      <ul>
      <li>HTML5</li>
      <li>CSS</li>
      <li>Java Script</li>
      <li>React JS</li>
      </ul>
      <h3>web interfaces:</h3><p>Github</p>
      <h2>Personal Details</h2>
      <p><b>D O B:</b>28/03/1999</p>
      <p><b>Language:</b> English,Tamil</p>
      <p><b>marital status: </b>unmarried</p>
      <p><b>Gender:</b>Male</p>
    
     </React.Fragment>
    );
  }

  export default Home