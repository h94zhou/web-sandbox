import React from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';

import nanjingMap from '../images/baidu-Nanjingv2.PNG';


class Map extends React.Component {

    render() {
        return (
            <div>
                <img src={nanjingMap} alt="Map of Nanjing, Jiangsu China"/>
                    <div>
                        <ul>
                            <li>
                                <Link to="/station1">Substation 1</Link>
                            </li>
                            <li>
                                <Link to="/station2">Substation 2</Link>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}

export default Map;
