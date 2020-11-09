import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import styled from "styled-components";

import io from "socket.io-client";
const ENDPOINT = "localhost:4000/";
const socket = io(ENDPOINT);

// const Button = styled.button`
//   background-color: black;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-radius: 5px;
//   margin: 10px 0px;
//   cursor: pointer;
// `;

const funct = () => {
	socket.emit("storyChange", 1);
	window.location.reload();
	console.log("hello");
}
const Button0 = ({}) => {
    
	return (
		// Usage

		<div>
			<Button onClick={funct}>Default story</Button>
		</div>
	);
};

export { Button0 };
