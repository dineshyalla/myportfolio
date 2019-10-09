import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

import LandingPage from './components/landingpage';
import {ThemeContext, themes} from './context/theme-context';
import {gridContext} from './context/landing-grid-theme';



function App() {
    let map = new Map();
    
    const [header_class, setHeaderClass] = React.useState('header-color-day');
    const [landing_grid, setLandingGrid] = React.useState('landing-grid');

    const themeChange = () => {
        let headerClass = header_class === 'header-color-night' ? 'header-color-day' : 'header-color-night';
        let landingGrid = landing_grid === 'landing-grid' ? 'landing-grid-night' : 'landing-grid';
        setHeaderClass(headerClass);
        setLandingGrid(landingGrid);
    }
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className={header_class} title={<Link style={{textDecoration: 'none', color: 'white'}} 
        to='/'>MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/projects">Projects</Link> */}
                <Link to="/contact">Contact</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link onClick={()=>{
                    themeChange();
                }}>ChangeTheme</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} 
        to='/'>MyPortfolio</Link>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                {/* <Link to="/projects">Projects</Link> */}
                <Link to="/contact">Contact</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <gridContext.Provider value={landing_grid}>
                <div className="page-content" />
                <Main  map={map}/>
            </gridContext.Provider>
        </Content>
    </Layout>
    </div>
  );
}

export default App;
