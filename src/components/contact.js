import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
render(){
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Mihir Mehta</h2>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="man Image"
                        style={{height:'250px'}}/>

                    <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        Habba habba !! Hakuna Matata || Whaterver it Takes || I can do this all day || Only I can stop me || Yesterday is a history, Tomorrow is a mystery but Today is a gift that is why it is called the present || There is no special Ingredient 
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>CONTACT ME</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'35px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>9987654321                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'35px', fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"></i>9987654321                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'35px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>mihirhm245@gmail.com                                </ListItemContent>
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