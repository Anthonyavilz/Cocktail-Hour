import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import UserLanding from '../Components/User-Pages/UserLanding';
import Places from '../Components/User-Pages/Places/Places';
import Drinks from '../Components/User-Pages/Drinks/Drinks';
import ShoppingList from '../Components/User-Pages/Drinks//ShoppingList';
import Settings from '../Components/User-Pages/Settings/Settings';

export default (
    <Switch>
        {/* <Route exact path='/user-landing' component={UserLanding} /> */}
        <Route path='/drinks/shopping-list' component={ShoppingList} />
        <Route path='/drinks' component={Drinks} />
        <Route path='/places' component={Places} />
        <Route path='/settings' component={Settings} />
    </Switch>
)