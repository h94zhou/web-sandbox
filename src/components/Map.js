import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    useRouteMatch
} from 'react-router-dom';

import nanjingMap from '../images/baidu-Nanjingv2.PNG';


class Map extends React.Component {

    render() {
        return (
            <div>
                <img src={nanjingMap} alt="Map of Nanjing, Jiangsu China"/>
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/substation/station1">Substation 1</Link>
                            </li>
                            <li>
                                <Link to="/substation/station2">Substation 2</Link>
                            </li>
                        </ul>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Map;