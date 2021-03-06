import React, {Component} from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Experience extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                        <p>{this.props.designation}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop: '0px'}}>{this.props.companyName}</h4>
                        <p>{this.props.jobDescription}</p>
                    </Cell>
                </Grid>
    
            </div>
        )
    }
}

export default Experience;