import React from 'react'
import {
    Route, BrowserRouter as Router, Link
} from "react-router-dom";
import SideNav from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './sidenav.css'

import Dash, { UserDetail } from './Pages/Dashboard';
import ReceiptDetails from './Pages/ReceiptDetail';
import ReceiptAdd from './Pages/receiptAdd';
import Headbar from './Pages/Headerbar'
import Input from './input';
import { SidebarItem } from './components/NavItem';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';

function Side() {

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
                            <SidebarItem
                                eventKey="dashboard"
                                title="Dashboard"
                                icon=" fa-home"
                                color="white"
                            />

                            <SidebarItem
                                eventKey="input"
                                title="Add User"
                                icon=" fa-home"
                                color="black"
                            />

                            <SidebarItem
                                eventKey="signout"
                                title={<Link to='/' style={{ color: 'black' }}> Signout  </Link>}
                                icon=" fa-home"
                                color="black"
                            />

                        </SideNav.Nav>

                    </SideNav>

                    <main>

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