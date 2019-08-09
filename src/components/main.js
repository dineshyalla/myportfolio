import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandindPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Main = () => (
    <switch>
        <Route exact path="/" component={LandindPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
    </switch>
)

export default Main;