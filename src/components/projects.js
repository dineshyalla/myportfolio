import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #1</CardTitle>
                        <CardText>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #1</CardTitle>
                        <CardText>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover'}}>
                        React Project #1</CardTitle>
                        <CardText>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: "#fff"}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
            )
        } else if ( this.state.activeTab === 1){
            return (
                <div><h1>This is NODEJS</h1></div>
            )
        } else if ( this.state.activeTab === 2){
            return (
                <div><h1>This is MONGODB</h1></div>
            )
        } else if ( this.state.activeTab === 3){
            return (
                <div><h1>This is ANDROID</h1></div>
            )
        }
    }
    render(){
        return (
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>REACT</Tab>
                    <Tab>NODEJS</Tab>
                    <Tab>MONGODB</Tab>
                    <Tab>ANDROID</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;