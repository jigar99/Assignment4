import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Nav from "./Nav";

function Main() {
    return(
        <React.Fragment>
            <Header/>
            <div className="flex-horizontal" style={{marginLeft: "10px", marginRight: "10px"}}>
            <Home/>
                <Nav/>
            </div>
            <Footer/>
       </React.Fragment>
   )
}

export default Main;