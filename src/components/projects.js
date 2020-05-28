import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import ProjectsCard from './projectsCard';


class Projects extends Component {
    
    constructor(props){
        super(props);
        this.state = { activeTab : 0,
                       projectDetails: [
                        [['React Project Title #1', 'React Project Detail #1','React Project Link #1','https://cdn.worldvectorlogo.com/logos/react.svg'],
                       ['React Project Title #2', 'React Project Detail #2','React Project Link #2','https://cdn.worldvectorlogo.com/logos/react.svg'],
                       ['React Project Title #3', 'React Project Detail #3','React Project Link #3','https://cdn.worldvectorlogo.com/logos/react.svg'],
                       ['React Project Title #4', 'React Project Detail #4','React Project Link #4','https://cdn.worldvectorlogo.com/logos/react.svg']],
                       [['Angular Project Title #1', 'Angular Project Detail #1','Angular Project Link #1','https://cdn.worldvectorlogo.com/logos/angular-icon.svg'],
                       ['Angular Project Title #2', 'Angular Project Detail #2','Angular Project Link #2','https://cdn.worldvectorlogo.com/logos/angular-icon.svg']],
                       [['VueJS Project Title #1', 'VueJS Project Detail #1','VueJS Project Link #1','https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/vue-js.png'],
                       ['VueJS Project Title #2', 'VueJS Project Detail #2','VueJS Project Link #2','https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/vue-js.png'],
                       ['VueJS Project Title #3', 'VueJS Project Detail #3','VueJS Project Link #3','https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/vue-js.png'],
                       ['VueJS Project Title #4', 'VueJS Project Detail #4','VueJS Project Link #4','https://uxwing.com/wp-content/themes/uxwing/download/07-design-and-development/vue-js.png']],
                       [['MongoDB Project Title #1', 'MongoDB Project Detail #1','MongoDB Project Link #1','https://i.pcmag.com/imagery/reviews/02Q6yxveinggAu3PomearaV-7.fit_scale.size_1028x578.v_1569481734.jpg'],
                       ['MongoDB Project Title #2', 'MongoDB Project Detail #2','MongoDB Project Link #2','https://i.pcmag.com/imagery/reviews/02Q6yxveinggAu3PomearaV-7.fit_scale.size_1028x578.v_1569481734.jpg'],
                       ['MongoDB Project Title #3', 'MongoDB Project Detail #3','MongoDB Project Link #3','https://i.pcmag.com/imagery/reviews/02Q6yxveinggAu3PomearaV-7.fit_scale.size_1028x578.v_1569481734.jpg']]] };
    }
    
    

    
    
    render(){
        return(
        <div className="category-tabs">
            <Tabs activeTab = {this.state.activeTab}
                  onChange={(tabId)=> this.setState({activeTab : tabId})}ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Vuejs</Tab>
                <Tab>MongoDb</Tab>
            </Tabs>
            <Grid>
    
               { this.state.projectDetails[this.state.activeTab].map((projectDetail)=>
                <Cell col={4}>
                    <ProjectsCard title={projectDetail[0]} details={projectDetail[1]} link={projectDetail[2]} bcg={projectDetail[3]}/>
                </Cell>)}
                
            </Grid>
            
        </div>
        )
    }
}

export default Projects;