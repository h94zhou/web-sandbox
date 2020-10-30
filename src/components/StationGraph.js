import { blue, red } from '@material-ui/core/colors';
import React from 'react';
import { 
    AreaChart, 
    CartesianGrid, 
    XAxis, 
    YAxis, 
    Tooltip, 
    ResponsiveContainer,
    Area
} from 'recharts';


const data = new Array(20).fill({ score: Math.random() * 100 });

const StationGraph = () => (
    <ResponsiveContainer width='100%' aspect={6.0/2.0}>
        <AreaChart data={data}
            margin={{top: 10, right: 30, left: 10, bottom: 0}}>
            <XAxis interval={0}/>
            <YAxis/>
            <CartesianGrid strokeDashArray="3 3" />
            <Tooltip/>
            <Area dataKey='score' stroke="#3469bf" fill="#568ce3" />
      </AreaChart>
    </ResponsiveContainer>

)

export { StationGraph };
