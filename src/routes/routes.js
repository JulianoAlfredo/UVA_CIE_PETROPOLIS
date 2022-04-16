import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import login from '../pages/login/login'
import signUp from '../pages/signUp/signUp'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={login} />
                <Route path='/cadastrar' exact component={signUp} />
            </Switch>
        </BrowserRouter>
    )
}