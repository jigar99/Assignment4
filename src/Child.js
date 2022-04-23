import React from 'react';
import { useLocation} from "react-router-dom";
import image from "./img/image.jpg"; 
import Nav from './Nav';


function Child() {

  let location = useLocation(); 
  let data = location.state.data;

    return (
      <React.Fragment>
        <div className='flex-horizontal' style={{marginTop: "10px"}}>
          <div style={{marginRight:  "20px", padding: "10px", marginBottom: "10px", color: "#000"}}>
              <h1>{data.title}</h1>
              <b>{data.author} | {data.date}</b>
              <p style={{backgroundImage: `url(${data.image})`,color: "#fff"}}>{data.summary}</p>
              <p>{data.body}</p>
          </div>
          <Nav/>
        </div>
        
      </React.Fragment>
    );
  
  
}

export default Child;