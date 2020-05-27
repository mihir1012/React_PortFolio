import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import Projects from './projects';
import Resume from './resume';
import About from './aboutme';
import Contact from './contact';

const Main = () =>(
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/resume" component={Resume}/>
        <Route path="/aboutme" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Main;