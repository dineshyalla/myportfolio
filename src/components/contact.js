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
                        In object literal notation, an object is described as a set of comma-separated 
                        name/value pairs enclosed in curly braces ({}). Names inside the object may be
                         either strings or identifiers that are followed by a colon. There should be no comma used after the final name/value pair in the object as this may result in errors.
                        </p>
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
                                     dineshyalla@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                     <i className="fa fa-linkedin" aria-hidden="true"/>
                                    linkedin.com/in/dinesh-yalla
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