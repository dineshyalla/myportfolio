import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}><h2>Dinesh Yalla</h2>
                    <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
                        style={{height: '250px'}}
                        />
                        <p style={{paddingTop: "1em", margin: 'auto', width: '75%'}}>
                        Actively Seeking Full-Stack opportunities. Avid programmer in front-end development with a focus on writing efficient,
                         scalable and reusable code with 2+ years of hands-on experience in building interactive web applications</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                        </h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                     <i className="fa fa-phone-square" aria-hidden="true"/>
                                     +1669-377-5624
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                     <i className="fa fa-envelope" aria-hidden="true"/>
                                     <a href="mailto:dineshyalla@gmail.com" 
                                    style={{color: 'black', textDecoration: 'none'}}
                                    >dineshyalla@gmail.com</a>
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                     <i className="fa fa-linkedin" aria-hidden="true"/>
                                    <a href="https://linkedin.com/in/dinesh-yalla" 
                                    style={{color: 'black', textDecoration: 'none'}}
                                    target="_blank">linkedin.com/in/dinesh-yalla</a>
                                    </ListItemContent>
                                </ListItem>
        
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;