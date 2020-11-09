import React from 'react';
import {
  useParams,
  Link
    } from 'react-router-dom';
import { button1 } from '../components/SwitchButtons';

import { StationGraph } from './../components/StationGraph';
import { Button0 } from './../components/SwitchButtons';
import { Button1 } from './../components/SwitchButtons1';
import { StationGraph2 } from './../components/StationGraph2';

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
                <h4>Buttons</h4>
                <Button0 />
                <Button1 />
            </div>
            <div>
                <h4>Graph</h4>
                <StationGraph />
            </div>
            {/* <div>
                <h4>Graph</h4>
                <StationGraph2 />
            </div> */}
          
            
            
            
        </div>
    );
}

export default Substation;
