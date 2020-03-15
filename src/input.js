import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';

import './index.css'
import UserActions from './store/Actions/index';
import { TextInput } from './components';

function mapStateToProps(state) {

    return {
        editingItem: state.editingItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Add: (obj) => dispatch(UserActions.Add(obj)),

    }
}

const Input = (props) => {
    console.log(props)
    const [name, setName] = useState("")
    var emailEdit = "" //props.history.location.state ? props.history.location.state.email : 
    const params = useParams()
    const history = useHistory()
    const [email, setEmail] = useState(emailEdit)
    const [password, setPassword] = useState("")
    const [isEdit, setIsEdit] = useState(props.history.location.state ? true : false)
    // const [Office, setOffice] = useState("")
    // const [Time, settime] = useState(new Date())


    useEffect(() => {
        console.log(props.editingItem);
        if (props.editingItem) {
            setName(props.editingItem.text)
        }
    }, [props.editingItem])
    useEffect(() => {
        console.log(params, history)

    }, [])

    const show_input = () => {
        console.log('show', document.getElementById('add'))
    }


    return <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div id="input" className="abc">
            <TextInput
                name="Name"
                title="name"
                type="text"
                id="name"
                onChange={ev => { setName(ev.target.value) }}
            />
            <TextInput
                name="Email"
                title="Email"
                type="email"
                id="Email"
                onChange={ev => { setEmail(ev.target.value) }}
            />
            <TextInput
                name="Password"
                title="Password"
                type="password"
                id="Password"
                onChange={ev => { setPassword(ev.target.value) }}
            />

            <br></br>


            <button className="btn btn-block signup-btn" onClick={() => {
                if (!isEdit) {

                    props.Add({ name, email, password })
                    // let to = '/'+ 'dashboard' ;
                    history.push('/dashboard');

                } else {
                    props.Edit({ name, email, password })
                    history.push('/dashboard')
                }
                // document.getElementById('input').classList.add("hide")
                // document.getElementById('add').classList = "hide btn btn-danger" 
            }}> {isEdit ? <>Edit</> : <>Add</>} </button>


        </div >
    </div >

}

export default connect(mapStateToProps, mapDispatchToProps)(Input)