import React from 'react';
import {
  useParams,
  Link
    } from 'react-router-dom';

function Substation() {
    let { substation } = useParams();
    const url = "/" + substation + "/asset1";
    return (
        <div>
            <h2>Welcome to { substation }</h2>
            <Link to={ url } >Asset 1 </Link>


        </div>
    );
}

export default Substation;
