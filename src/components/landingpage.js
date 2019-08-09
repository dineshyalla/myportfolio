import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
class Landing extends Component {
    render(){
        return (
            <div style={{ widith: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://st2.depositphotos.com/1007566/12301/v/950/depositphotos_123013242-stock-illustration-avatar-man-cartoon.jpg" 
                        alt="avatar"
                        className="avatar-img"
                        />
                    </Cell>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p> HTML/CSS | Bootstrap | Javascript | React | Redux | NodeJS | Hapi</p>
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
                <h1>Landing Page</h1>
            </div>
        )
    }
}

export default Landing;