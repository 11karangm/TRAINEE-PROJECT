import React from "react";
import {Link} from "react-router-dom";
import "./css/Home.css"
function Home() {
    return(
        <>
        <div className="complete">
        <main>
          <h2>HomePage</h2>
        </main>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        </div>
        
      </>
    );
    
}
export default Home;