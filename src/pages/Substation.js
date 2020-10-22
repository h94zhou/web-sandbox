import React from 'react';
import { useParams } from 'react-router-dom';

// class Substation extends React.Component {
//     componentDidMount() {
//         let { substation } = useParams();
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Welcome to { substation }</h2>
//             </div>
//         )
//     }
// }

function Substation() {
    let { substation } = useParams();

    return (
        <div>
            <h2>Welcome to { substation }</h2>
        </div>
    );
}

export default Substation;