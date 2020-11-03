import React from 'react';
import './Person.css';
import Styled from 'styled-components'

const Stylediv = Styled.div`
        "@media (min-width: 500px)": {
            width: '450px'
        };
        width: 40%;
        margin: 10px auto;
        display: block;
        border: 1px solid #eee;
        box-shadow: 0 2px 2px #ccc;
        text-align: center;
        padding: 10px;
    `;
const Stylebutton = Styled.button`
        background-color: ${props => props.alt <= 3 ? 'red':'green'};
        margin: 10px;
        padding: 10px;
        font-size: large;
        cursor: pointer;
        &:hover {
            background-color: salmon;
            color: black;
        }
        &:focus {
            background-color: chocolate;
        }
        `;

const person = (props) => {
    return (
        <Stylediv>
            <p>Name: {props.name}</p>
            <input type="text" onChange={props.setUserName}/>
            <p>Password: {props.password}</p>
            <input type="password" onChange={props.setUserPassword}/>
            <Stylebutton alt={props.name.length} onClick={props.submit}>Submit!</Stylebutton>
        </Stylediv>
    )
}

export default person