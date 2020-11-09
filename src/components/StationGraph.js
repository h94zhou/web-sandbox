import { blue, red } from "@material-ui/core/colors";
import React from "react";
import { useEffect, useState } from "react";
import {
	AreaChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
    Area,
    LineChart,
    Line
} from "recharts";

import io from "socket.io-client";
const ENDPOINT = "localhost:4000/";
const socket = io(ENDPOINT);
const id = "H-score_Asset";

const arr = new Array(20).fill({ score: Math.random() * 100 });

const StationGraph = ({}) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		socket.emit("request", "H-score_Asset");
		socket.emit("updateRequest", "H-score_Asset");
		socket.on("H-score_Asset", (newVal) => {
			console.log("First response");
			console.log(newVal);
			newVal.forEach(element => {
				setData((currentData) => [...currentData, element]);
			});
			
		});
		socket.on("update", (newVal) => {
			console.log("...Updated");
		});
	}, []);
	return (
		<ResponsiveContainer  aspect={6.0 / 2.0}>
			<AreaChart
				height={50}
				width = {20}
				data={data}
				margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
			>
				<XAxis dataKey="time"/>
				<YAxis />
				<CartesianGrid strokeDashArray="3 3" />
				<Tooltip />
				<Area type="monotone" dataKey="value" stroke="#3469bf" fill="#568ce3" />
			</AreaChart>
			{/* <LineChart width={600} height={300} data={data}>
				<Line type="monotone" dataKey="value" stroke="#8884d8" />
				<CartesianGrid stroke="#ccc" />
				<XAxis dataKey="name" />
				<YAxis />
			</LineChart> */}
		</ResponsiveContainer>
	);
};

export { StationGraph };
