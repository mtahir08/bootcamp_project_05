import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { styles } from './style'
import TodoActions from './store/Actions/index';




function mapStateToProps(state) {
    return {
        editingItem: state.editingItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Add: (obj) => dispatch(TodoActions.Add(obj)),
        Update: (obj) => dispatch(TodoActions.Update(obj))
    }
}

const Input = (props) => {
    // console.log(props);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [Office, setOffice] = useState("")
    const [Time, settime] = useState(new Date())

    useEffect(() => {
        console.log(props.editingItem);
        if (props.editingItem) {
            setName(props.editingItem.text)
        }
    }, [props.editingItem])

    const show_input = ( ) => {
        console.log('show' ,document.getElementById('add'))
        document.getElementById('add').classList = "hide" 
        document.getElementById('input').classList.remove("hide")
        

    } 

    return  <div className="container"> <div id="input" className="styl hide">
        <label>Name: </label>
        <input
            type="text"
            onChange={(event) => { setName(event.target.value) }}
            value={name}
            className="input"
            
        />
        <br></br>
        <label>Email: </label>
        <input
            type="email"
            onChange={(event) => { setEmail(event.target.value) }}
            value={email}
            className="input"
            
        />
        <br></br>
        <label>Phone: </label>
        <input
            type="text"
            onChange={(event) => { setPhone(event.target.value) }}
            value={Phone}
            className="input"
           
        />
        <br></br>
        <label>Office: </label>
        <input
            type="text"
            onChange={(event) => { setOffice(event.target.value) }}
            value={Office}
            className="input"
        
        />
        <br></br>

        <button className="btn btn-danger boton" onClick={() => {
            if (name.length ) {
           
                    props.Add({ name , email , Phone , Office })
                
            }
            document.getElementById('input').classList.add("hide")
            document.getElementById('add').classList = "hide btn btn-danger" 
        }}> Add  </button>

        
    </div >
    <button className="btn btn-danger  " id = "add" onClick={ show_input  } >  Add  </button>
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)