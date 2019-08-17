import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import Typed from 'react-typed';
class Landing extends Component {
    render(){
        return (
            <div className="page" style={{height:"50%"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <div class="img-circular-container">
                            <div class="img-circular"></div>
                        </div>

                    </Cell>
                    <div className="banner-text">
                        <h1><Typed strings={['I Am Dinesh Yalla','I Am A Full Stack Web Developer']} typeSpeed={70} backSpeed={80}
                    loop/></h1>
                        <hr/>
                        <p> HTML/CSS3 | Bootstrap | Javascript | React | Redux | NodeJS | JAVA | Hapi</p>
                        <div className="social-links">
                            {/* LinkedIn*/}
                            <a href="https://www.linkedin.com/in/dinesh-yalla/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>

                            {/* GitHub*/}
                            <a href="https://github.com/dineshyalla" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>

                            {/* Twitter*/}
                            <a href="https://twitter.com/YallaDinesh" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-twitter-square"  aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing;