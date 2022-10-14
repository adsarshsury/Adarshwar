import React from 'react'
import {Link} from 'react-router-dom'


const Header=()=>{
  return (

      <header>
  <div className="container">
        <div className="inner-content">
            <div className="brand">
                <Link to="/">Star War APP</Link>
            </div>
            <ul className="nav-List">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/watchList">WatchList</Link>
                </li>
                <li>
                    <Link to="/Details"> Details</Link>
                </li>
               
            </ul>
        </div>
    </div>
  </header>
  
  )
}

export default Header
