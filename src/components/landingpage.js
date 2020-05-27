import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://image.shutterstock.com/image-vector/businessman-silhouette-avatar-profile-picture-260nw-199246385.jpg" alt="The Man" className="avatar-img"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>

                            <p>
                                HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | REACT NATIVE | NODE JS 
                            </p>

                            <div className="social-links">
                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-linkedin-square" 
                                    rel="noopener noreferrer"
                                    aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-github-square" 
                                    rel="noopener noreferrer"
                                    aria-hidden="true"/>
                                </a>

                                <a href="http://google.com" target="_blank">
                                    <i className="fa fa-instagram" 
                                    rel="noopener noreferrer"
                                    aria-hidden="true"/>
                                </a>

                            </div>

                        </div>
                        
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing;