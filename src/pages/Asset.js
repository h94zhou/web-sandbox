import React from 'react';
import {
  useParams,
  Link
    } from 'react-router-dom';


function Asset() {
    let { asset } = useParams();

    return (
        <div>
            <h2>This is an { asset }</h2>
        </div>
    );
}

export default Asset;
