import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Page from './common/page/Page'
import Home from './pages/home/Home'
import Maquetas from './pages/maquetas/Maquetas'

export default (
    <Route component={Page}>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}/>
        </Route>
        <Route path="/maquetas" component={Maquetas}/>
    </Route>
)