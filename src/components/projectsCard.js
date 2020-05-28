import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class ProjectsCard extends Component {
    render(){
        return(
            <div>

                <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px',background:'url('+ this.props.bcg+') center/cover'}}> {this.props.title} </CardTitle>
                    <CardText>
                        {this.props.details}
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

            </div>
        )
    }
}

export default ProjectsCard;