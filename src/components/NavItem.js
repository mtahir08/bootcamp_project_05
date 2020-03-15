import React from 'react'
import { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
const SidebarItem = ({ title, eventKey, icon, color }) => (
    <NavItem eventKey={eventKey} className="Navitems"  >
        <NavIcon>
            <i className={"fa fa-fw " + icon} />
        </NavIcon>
        <NavText style={{ color }} >
            {title}
        </NavText >
    </NavItem>
)

export { SidebarItem }