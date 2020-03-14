import React, { Component, Image } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dash, { UserDetail } from './Pages/Dashboard';
import  ReceiptDetails  from './Pages/ReceiptDetail';
import ReceiptAdd from './Pages/receiptAdd';
import Headbar from './Pages/Headerbar'
import Input from './input';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';
import './sidenav.css'
import {
    Route, BrowserRouter as Router, Link
} from "react-router-dom";

function Side() {

    const user = localStorage.getItem('user');
    return (<>
        <Headbar />

        <Router>
            <Route render={({ location, history }) => (
                <React.Fragment   >
                    <SideNav
                        className="divs"


                        onSelect={(selected) => {
                            const to = '/' + selected;
                            if (location.pathname !== to) {
                                history.push(to);
                            }
                        }}
                    >

                        <br></br>
                        <SideNav.Toggle />





                        <SideNav.Nav defaultSelected="dashboard" className="navitems" variant="light"  >
                            <NavItem eventKey="dashboard" className="Navitems"  >
                                <NavIcon>
                                    <i className="fa fa-fw fa-home " />
                                </NavIcon>
                                <NavText style={{ color: 'white' }} >
                                    Dashboard
                        </NavText >
                            </NavItem>

                            <NavItem eventKey="input" className="Navitems">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </NavIcon>
                                <NavText style={{ color: 'black' }}>

                                    Add User
                        </NavText>

                            </NavItem>

                            <NavItem eventKey="signout" className="Navitems">
                                <NavIcon>
                                    <i className="fa fa-fw fa-home" />
                                </NavIcon>
                                <NavText style={{ color: 'black' }}>
                                    <a href='/' style={{ color: 'black' }}> Signout  </a>
                                </NavText>
                            </NavItem>



                        </SideNav.Nav>

                    </SideNav>


                    <main  >


                        <Route path="/input" exact component={Input} />
                        <Route path="/update" component={Input} />
                        <Route path="/cloudinary" component={CloudinaryImagePage} />
                        <Route exact path="/dashboard" component={Dash} />
                        <Route path="/dashboard/:userId" component={UserDetail} />
                        <Route path="/receipt/:userId" component={ReceiptDetails} />
                        <Route exact path="/receipt/add" component={ReceiptAdd} />

                    </main>



                </React.Fragment>

            )}
            />
        </Router>
    </>
    )
}

export default Side;