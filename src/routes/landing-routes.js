import React from "react";
import {Switch, Route} from 'react-router-dom';
import MainHome from '../CComponents/Landing-Pages/MainHome/MainHome'
import Landing from '../CComponents/Landing-Pages/Landing/Landing';
import UserLanding from '../CComponents/User-Pages/UserLanding'
import About from '../CComponents/Landing-Pages/About/About';
import AboutChristina from '../CComponents/Landing-Pages/About/AboutChristina/AboutChristina';
import AboutMe from '../CComponents/Landing-Pages/About/AboutMe/AboutMe';
import ContactForm from '../CComponents/Landing-Pages/About/ContactForm/ContactForm';
import Register from '../CComponents/Landing-Pages/Register/Register';
import SDRegister from '../CComponents/Landing-Pages/Register/SDRegister';
import Login from '../CComponents/Landing-Pages/Login/Login';
import SDLogin from '../CComponents/Landing-Pages/Login/SDLogin';
import Places from '../CComponents/User-Pages/Places/Places';
import SDPlaces from '../CComponents/User-Pages/Places/SDPlaces';
import Drinks from '../CComponents/User-Pages/Drinks/Drinks';
import SDDrinks from '../CComponents/User-Pages/Drinks/SDDrinks';
import ShoppingList from '../CComponents/User-Pages/Drinks/ShoppingList';
import Settings from '../CComponents/User-Pages/Settings/Settings';

export default (
    <Switch>
        <Route exact path='/' component={MainHome}/>
        <Route path='/guest-landing' component={Landing}/>
        <Route path='/user-landing' component={UserLanding} />
        <Route path='/about/about-christina' component={AboutChristina} />
        <Route path='/about/about-me' component={AboutMe} />
        <Route path='/about/contact-form' component={ContactForm} />
        <Route path='/about/' component={About} />
        <Route path='/register/SDRegister' component={SDRegister} />
        <Route path='/register' component={Register} />
        <Route path='/login/SDLogin' component={SDLogin} />
        <Route path='/login' component={Login} />
        <Route path='/drinks/shopping-list' component={ShoppingList} />
        <Route path='/drinks/SDDrinks' component={SDDrinks} />
        <Route path='/drinks' component={Drinks} />
        <Route path='/places/SDPlaces' component={SDPlaces} />
        <Route path='/places' component={Places} />
        <Route path='/settings' component={Settings} />
    </Switch>
)