import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component {
    render(){
        return (
            <div>
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
                        <p>A 1994 issue of "Before & After" magazine traces "Lorem ipsum ..." to a jumbled Latin version of a passage from de Finibus Bonorum et Malorum, a treatise on the theory of ethics written by Cicero in 45 B.C. The passage "Lorem ipsum ..." is taken from text that reads, "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit ...," which translates as, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <h5>Address</h5>
                        <p>754 The Alameda, 95126</p>
                        <h5>Phone</h5>
                        <p>(669) 377-5624</p>
                        <h5>Email</h5>
                        <p>dineshyalla@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                    </Cell>

                    <Cell className="resume-right" col={8}>
                        <h2>Education</h2>
                            <Education startYear={2011}
                            endYear= {2015}
                            schoolName="San Jose State University"
                            schoolDescription="During the 1500s, a printer adapted Cicero's text to develop a page of type samples. Since then, the Latin-like text has been the printing industry's standard for fake, or dummy, text." 
                            />
                            <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Experience</h2>
                        <Experience 
                        startYear={2018}
                        endYear= {2019}
                        joblName="Brillio LLC"
                        jobDescription="During the 1500s, a printer adapted Cicero's text to develop a page of type samples. Since then, the Latin-like text has been the printing industry's standard for fake, or dummy, text." 
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills skill="HTML/CSS"
                    progress={70}/>
                    <Skills skill="JAVASCRIPT"
                    progress={80}/>
                    <Skills skill="ReactJS"
                    progress={60}/>
                    <Skills skill="ReactJS"
                    progress={70}/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;