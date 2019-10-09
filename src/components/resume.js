import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render(){
        return (
            <div className="page">
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                            alt="avatar"
                            style={{ height: '200px'}} />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Dinesh Yalla</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <p>Demonstrated 2 years of hands‐on experience in software engineering. Motivated to combine the art of design with programming, with a focus on writing scalable and reusable code.
                        Built interactive full-stack web/mobile applications using JavaScript (React, Node, ES6), Redux, Java, and Android
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>754 The Alameda, 95126</p>
                        <h5>Phone</h5>
                        <p>(669) 377-5624</p>
                        <h5>Email</h5>
                        <p>dineshyalla@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://damp-fjord-91065.herokuapp.com/</p>
                    </Cell>

                    <Cell className="resume-right" col={8}>
                        <h2>Education</h2>
                            <Education startYear={2016}
                            endYear= {2018}
                            degree="Masters in Software Engineering"
                            schoolName="San Jose State University"
                            schoolDescription="During my masters, I have worked on several enterprise level full-stack projects which enabled me to gain
                            hands-on experience in cloud-based web application development
                            "                         />
                            <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Experience</h2>
                        <Experience 
                        startYear={2018}
                        endYear= {`2019(present)`}
                        companyName="Brillio LLC"
                        designation="software engineer"
                        jobDescription="As a software engineer, I have been working on Realtor.com product. 
                        Implemented authenticated cross-account web services on AWS including front-end development in React.js.
                        Owned a complete back-end service layer and successfully migrated several web services.
                        Worked closely with POs/PMs and UX designers in writing user stories, designing data contracts and acceptance criteria.
                        Implemented Test-Driven Development thereby boosting the unit test coverage by 5%.
                    "                        />
                    <hr></hr>
                    <Experience 
                        startYear={`2018(July)`}
                        endYear= {`2018(Oct)`}
                        companyName="Lacework"
                        designation="Engineering Intern"
                        jobDescription="Developed several data-driven functionalities for the web application dashboards in React.js and SASS.
                        Developed a PDF generation feature using Apache Velocity template engine.
                        Worked on converting certain features from flux pattern to redux middleware."                        />
                    
                    <hr></hr>
                    <Experience 
                        startYear={`2017(June)`}
                        endYear= {`2017(Aug)`}
                        companyName="CANHR"
                        designation="Web Developer Intern"
                        jobDescription="Translated design team’s UX wireframes into interactive features using HTML, CSS and React.js.
                        Developed responsive UI components using CSS3 features such as Media Queries, Animations, Grids, Flexbox.
                        Created extensible and flexible UI using SASS Nested syntax, Mixins, Functions to gain additional leverage over CSS."                        />
                    
                    <hr></hr>
                    <Experience 
                        startYear={`2015(Aug)`}
                        endYear= {`2017(July)`}
                        companyName="TCS"
                        designation="Software Engineer"
                        jobDescription="Refactored Node.JS scripts - improved design of existing code base by 15%.
                        Contributed to System Design, Architecture, and Development of an internal project"                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills skill="HTML/CSS"
                    progress={70}/>
                    <Skills skill="JAVASCRIPT"
                    progress={80}/>
                    <Skills skill="ReactJS"
                    progress={60}/>
                    <Skills skill="NodeJS"
                    progress={70}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;