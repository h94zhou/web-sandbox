import React from 'react';
import {
  useParams,
  Link
    } from 'react-router-dom';

import { StationGraph } from './../components/StationGraph';

function Substation() {
    let { substation } = useParams();
    const url = "/" + substation + "/asset1";
    return (
        <div style={{margin:"10px 10px 10px 10px"}}>
            <div style={{margin:"0 0 30px 0"}}>
                <h2>Welcome to { substation }</h2>
                <Link to={ url } >Asset 1 </Link>
    
            </div>
            <div>
                <h4>Graph</h4>
                <StationGraph />
            </div>
        </div>
    );
}

export default Substation;
