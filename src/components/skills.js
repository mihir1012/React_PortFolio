import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    render(){
        return(
            <Grid>
                <Cell col={3}>
                    <p style={{textAlign:'center',width:'100%'}}>{this.props.skill}</p>
                </Cell>
                <Cell col={9}>
                    <ProgressBar style={{width:'75%',margin:'auto'}} progress={this.props.progress} />
                </Cell>
            </Grid>
        )
    }
};

export default Skills;