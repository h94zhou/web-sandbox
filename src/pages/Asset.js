import React from 'react';
import { 
    useEffect, 
    useState 
} from "react";

import {
  useParams
} from 'react-router-dom';

import io from "socket.io-client";
const ENDPOINT = "localhost:4000/";
const socket = io(ENDPOINT);
const id = "H-score_Asset";

function Asset() {
    let { asset } = useParams();

    const [healthScore, setData] = useState(0);
	useEffect(() => {
		socket.emit("updateRequest", id);
		socket.on(id, (newVal) => {
			console.log("First response");
			console.log(newVal);
			// newVal.forEach(element => {
			// 	setData((currentData) => [...currentData, element]);
            // });
            setData(newVal[0].value);
		});
		socket.on("update", (newVal) => {
			console.log("...Updated");
        });
        
        return() => {
            // close socket conn
        }
	}, []);
    return (
        <div>
            <h2>This is an { asset }</h2>

            {/* Updating asset value */}
            <div>
                <p>Asset Health: { healthScore }</p>
            </div>
        </div>
    );
}

export default Asset;
