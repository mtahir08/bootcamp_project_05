import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';

import UserTable from '../components/Dashboard/UserTable';
import UserTableDetail from '../components/Dashboard/UserTableDetail';

function Users(props) {
    const users = useSelector(state => state.dashboardReducer.user)

    useEffect(() => {
    }, [])
    return (
        <div className="container">
            <Table striped bordered hover>
                <UserTable />
                <UserTableDetail userData={users} />
            </Table>
        </div>
    )
}
export { Users };
