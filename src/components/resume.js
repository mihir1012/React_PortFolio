import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';

class Resume extends Component {
    render(){
        return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign:'center'}}>
                        <img src="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png" alt='avatar'
                        style={{height:'200px'}}/>
                    </div>

                    <h2 style={{paddingTop:'2em'}}>Mihir Mehta</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>

                    <hr style={{borderTop:'3px solid #833fbf2', width:'50%'}}/>

                    <p>
                    Habba habba !! Hakuna Matata  || Yesterday is a history, Tomorrow is a mystery but Today is a gift that is why it is called the present || There is no special Ingredient || Whaterver it Takes || I can do this all day || Only I can stop me
                    </p>
                    
                    <hr style={{borderTop:'3px solid #833fbf2', width:'50%'}}/>

                    <h5> Address</h5>
                    <p>
                        1 hacker Way Menlo Park, 94025
                    </p>

                    <h5>Phone</h5>
                    <p>
                        9987654321
                    </p>

                    <h5> Email</h5>
                    <p>
                       mihirhm245@gmail.com
                    </p>

                    <h5>Website</h5>
                    <p>
                        mihir1012.github.io/React_PortFolio/
                    </p>

                    <hr style={{borderTop:'3px solid #833fbf2', width:'50%'}}/>
                </Cell>

                <Cell col={8} className="resume-right">
                    <h2>Education</h2>
                    <Education 
                        startYear="2017" 
                        endYear="2021" 
                        schoolName="SCET, Surat" 
                        schoolDesc="GTU Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta"/>

                    <Education 
                        startYear="2015" 
                        endYear="2017" 
                        schoolName="VDD, Surat" 
                        schoolDesc="GSEB Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta"/>

                        
                    <hr style={{borderTop:'3px solid #e22957'}}/>
                    <h2>Experience</h2>

                    <Education
                        startYear="2019" 
                        endYear="2020" 
                        schoolName="GHE, Surat" 
                        schoolDesc="GHE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta"/>
                    <hr style={{borderTop:'3px solid #e22957'}}/>
                    <h2>Skills</h2>
                    <Skills skill="JavaScript" progress="100"/>
                    <Skills skill="HTML" progress="50"/>
                    <Skills skill="React" progress="80"/>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default Resume;