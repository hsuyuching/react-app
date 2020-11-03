import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'User name', password: 'Password', id: Math.random()},
      {name: 'User name', password: 'Password', id: Math.random()},
      {name: 'User name', password: 'Password', id: Math.random()},
    ]
  };

  setUserNameHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p => p.id === id)

    const newperson = {...this.state.persons[personIdx]}
    newperson.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIdx] = newperson
    this.setState({
      persons: persons
    })
  }
  setUserPasswordHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(p => p.id === id)

    const newperson = {...this.state.persons[personIdx]}
    newperson.password = event.target.value

    const persons = [...this.state.persons]
    persons[personIdx] = newperson
    this.setState({
      persons: persons
    })
  }
  submit = (idx) => {
    console.log(this.state.persons[idx].name, this.state.persons[idx].password)
  }

  render() {
    const persons = (
      <div>
        {this.state.persons.map((person, idx) => {
          return <Person 
            name={person.name}
            password={person.password}
            submit={() => this.submit(idx)}
            key={person.id}
            setUserName={(event) => this.setUserNameHandler(event, person.id)}
            setUserPassword={(event) => this.setUserPasswordHandler(event, person.id)}
          />
        })}
      </div>
    );
    return (
      <div className="App">
        <h1>Input your name and password:</h1>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
