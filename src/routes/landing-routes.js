import React from "react";
import {Switch, Route} from 'react-router-dom';
import MainHome from '../Components/Landing-Pages/MainHome/MainHome'
import Landing from '../Components/Landing-Pages/Landing/Landing';
import UserLanding from '../Components/User-Pages/UserLanding'
import About from '../Components/Landing-Pages/About/About';
import AboutChristina from '../Components/Landing-Pages/About/AboutChristina/AboutChristina';
import AboutMe from '../Components/Landing-Pages/About/AboutMe/AboutMe';
import ContactForm from '../Components/Landing-Pages/About/ContactForm/ContactForm';
import Register from '../Components/Landing-Pages/Register/Register';
import Login from '../Components/Landing-Pages/Login/Login';
import Places from '../Components/User-Pages/Places/Places';
import Drinks from '../Components/User-Pages/Drinks/Drinks';
import ShoppingList from '../Components/User-Pages/Drinks/ShoppingList';
// import Settings from '../Components/User-Pages/Settings/Settings';

export default (
    <Switch>
        <Route exact path='/' component={MainHome}/>
        <Route path='/guest-landing' component={Landing}/>
        <Route path='/user-landing' component={UserLanding} />
        <Route path='/about/about-christina' component={AboutChristina} />
        <Route path='/about/about-me' component={AboutMe} />
        <Route path='/about/contact-form' component={ContactForm} />
        <Route path='/about/' component={About} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/drinks/shopping-list' component={ShoppingList} />
        <Route path='/drinks' component={Drinks} />
        <Route path='/places' component={Places} />
        {/* <Route path='/settings' component={Settings} /> */}
    </Switch>
)