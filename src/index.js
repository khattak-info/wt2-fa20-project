import React,{ Component} from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import Routes from './routes';

import './Index.css'
import history from './component/Service';

 class App extends Component {
    render() { 
        return (
            <Router history = {history}>
                <Routes />
            </Router>
        )
    }
}
ReactDOM.render(<App/> , document.getElementById('app'));
