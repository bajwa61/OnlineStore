import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const horizontalmenu = () =>{
    return(
        <ol className="nav">
            <Link to="/mens">   <li>MENS</li> </Link>
            <Link to="/women">   <li>WOMEN</li> </Link>
            <Link to="/kids">  <li>KIDS</li> </Link>
        </ol>
    )
}

export default horizontalmenu;