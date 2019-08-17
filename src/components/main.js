import React, {Component} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import LandindPage from './landingpage';
import AboutMe from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../pageTransitions/slideTransition.scss";
import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutPage';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          prevDepth: this.getPathDepth(this.props.location)
        };
      }
      
      componentWillReceiveProps() {
        this.setState({ prevDepth: this.getPathDepth(this.props.location) });
      }
      
      getPathDepth(location) {
        let pathArr = location.pathname.split("/");
        pathArr = pathArr.filter(n => n !== "");
        return pathArr.length;
      }
    render(){

        const { location } = this.props;

        const currentKey = location.pathname.split("/")[1] || "/";
        const timeout = { enter: 800, exit: 400 };
        return (
        <TransitionGroup component="div" className="App">
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames="pageSlider"
          mountOnEnter={false}
          unmountOnExit={true}
        >
        <div
          className={
            this.getPathDepth(location) - this.state.prevDepth >= 0
              ? "left"
              : "right"
          }
        >
            <Switch location={location}>
                <Route path="/" exact component={LandindPage} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/resume" exact component={Resume} />
            </Switch>
            </div>
        </CSSTransition>
        </TransitionGroup>
        );
    }
   
}

export default withRouter(Main);