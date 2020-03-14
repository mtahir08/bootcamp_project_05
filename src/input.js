import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { Link, useHistory } from 'react-router-dom';
import TodoActions from './store/Actions/index';



function mapStateToProps(state) {

    return {
        editingItem: state.editingItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Add: (obj) => dispatch(TodoActions.Add(obj)),

    }
}

const Input = (props) => {
    console.log(props)
    const [name, setName] = useState("")
    var emailEdit = props.history.location.state ? props.history.location.state.email : ""
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

    const show_input = () => {
        console.log('show', document.getElementById('add'))
    }

    let history = useHistory();

    return <div className="">



        <div id="input" className="container">
            <label>Name: </label>
            <br></br>
            <input
                type="text"
                onChange={(event) => { setName(event.target.value) }}
                value={name}
                className="input"

            />
            <br></br>
            <label>Email: </label>
            <br></br>
            <input
                type="email"
                onChange={(event) => { return (setEmail(event.target.value), console.log(event.target.value)) }}
                value={email}
                className="input"

            />
            <br></br>
            <label>Password:</label>
            <br></br>
            <input
                type="text"
                onChange={(event) => { setPassword(event.target.value) }}
                value={password}
                className="input"

            />
            <br></br>


            <button className="btn btn-danger boton" onClick={() => {
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
    </div>

}

export default connect(mapStateToProps, mapDispatchToProps)(Input)