import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        backgroundColor: 'red',
        color: 'white',
        ":hover": {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }
    return (
        <div className="Person">
            <p>Name: {props.name}</p>
            <input type="text" onChange={props.setUserName}/>
            <p>Password: {props.password}</p>
            <input type="password" onChange={props.setUserPassword}/>
            <button style={style} onClick={props.submit}>Submit!</button>
        </div>
    )
}

export default Radium(person)