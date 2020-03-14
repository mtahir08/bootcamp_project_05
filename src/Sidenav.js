import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import Input from './input'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Dash, { UserDetail } from './Pages/Dashboard';
import  ReceiptDetails  from './Pages/ReceiptDetail';
import ReceiptAdd from './Pages/receiptAdd';
import Input from './input';
import { CloudinaryImagePage } from './Pages/CloudinaryImagePage';

import './sidenav.css'
import { Route,

    BrowserRouter as Router  , Link } from "react-router-dom";
    // import Todo from './Todo';

function Side () {

return(
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
              
                <SideNav.Toggle  style={ {background: 'black' }}   />
                <SideNav.Nav defaultSelected="dashboard" className='bg ' style={ {background: '#312121' }}  >
                    <NavItem eventKey="dashboard"  >
                        <NavIcon>
                            <i className="fa fa-fw fa-home " style={{ fontSize: '1.75em'  }} />
                        </NavIcon>
                        <NavText>
                        Dashboard
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="input">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                
                         Add User
                        </NavText>

                    </NavItem> 

                    <NavItem eventKey="cloudinary">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        cloudinary
                         </NavText>

                    </NavItem> 
                    
{/*                     
                    <NavItem eventKey="todo">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Add Items                
                        </NavText>
                    </NavItem> */}
{/* 
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            DashBoard                 
                        </NavText>
                    </NavItem> */}


                    <NavItem eventKey="update">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                        update                 
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="signout">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           <a href = '/'> Signout  </a>               
                        </NavText>
                    </NavItem>


                    {/* <NavItem eventKey="signup">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            SING UP
                        </NavText>
                    </NavItem> */}
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
)
}

export default Side ;