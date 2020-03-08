import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { styles } from './style'
import { Link } from 'react-router-dom';
import TodoActions from './store/Actions/index';

function mapStateToProps(state) {
    return {
        editingItem: state.editingItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Add: (obj) => dispatch(TodoActions.Add(obj)),
        // Update: (obj) => dispatch(TodoActions.Update(obj))
    }
}

const Input = (props) => {
    // console.log(props);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [Office, setOffice] = useState("")
    // const [Time, settime] = useState(new Date())

    useEffect(() => {
        console.log(props.editingItem);
        if (props.editingItem) {
            setName(props.editingItem.text)
        }
    }, [props.editingItem])

    const show_input = ( ) => {
        console.log('show' ,document.getElementById('add'))
       
        

    } 

    return    <div className=""> 
    
    <Link to="/">
				<button className="btn btn-danger ">Back </button>
			</Link>

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
            onChange={(event) => { setEmail(event.target.value) }}
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
        {/* <label>Office: </label>
        <input
            type="text"
            onChange={(event) => { setOffice(event.target.value) }}
            value={Office}
            className="input"
        
        />
        <br></br> */}

        <button className="btn btn-danger boton" onClick={() => {
            if (name.length ) {
           
                    props.Add({ name , email , password })
                
            }
            // document.getElementById('input').classList.add("hide")
            // document.getElementById('add').classList = "hide btn btn-danger" 
        }}> Add  </button>

        
    </div >
    </div>
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)