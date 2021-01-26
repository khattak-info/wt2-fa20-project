import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './Index.css'
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { Edit } from './pages/Edit';
import { Add } from './pages/Add';
import { Delete } from './pages/Delete';

export default function Routes(){
    return(
        <Switch>
            <Route exact path={"/"} component= {Home}></Route>
            <Route path={"/details/:id"} component= {Details}></Route>
            <Route path={"/edit/:id"} component= {Edit}></Route>
            <Route path={"/add"} component= {Add}></Route>
            <Route path={"/delete/:id"} component= {Delete}></Route> 

                    
        </Switch>
    );
}