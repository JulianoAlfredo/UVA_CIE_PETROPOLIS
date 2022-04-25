import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import login from '../pages/login/login'
import signUp from '../pages/signUp/signUp'
import MainPage from '../pages/mainPage/main'
import DesaparecidoPage from '../pages/desaparecidos/desaparecidoPage'
import NoticiasPage from '../pages/noticiasDiarias/noticias'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MainPage} />
                <Route path="/login" exact component={login} />
                <Route path='/cadastrar' exact component={signUp} />
                <Route path='/desaparecidos' exact component={DesaparecidoPage} />
                <Route path='/noticias' exact component={NoticiasPage} />
            </Switch>
        </BrowserRouter>
    )
}