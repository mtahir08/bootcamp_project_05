import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { Link , useHistory} from 'react-router-dom';
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    useEffect(() => {
      
        if (props.editingItem) {
            setName(props.editingItem.text)
        }
    }, [props.editingItem])

    const show_input = ( ) => {
       
       
        

    } 

    let history = useHistory();

    return    <div className=""> 
    


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
  

        <button className="btn btn-danger boton" onClick={() => {
            if (name.length ) {
           
                    props.Add({ name , email , password })
                    
                    history.push('/dashboard');
                
            }
        
        }}> Add  </button>

        
    </div >
    </div>
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)