import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'a', age: 1},
      {id: '2', name: 'b', age: 2},
      {id: '3', name: 'c', age: 3}
    ],
    otherstate: 'some other values',
    showPersons: false,
    buttonname: 'show'
  }

  // switchName = (test) => {
  //   // console.log('clicked');
  //   // this.state.persons[0].name = 'guta' -- We cant use this to change the name so dont do this
  //   this.setState({
  //     persons: [
  //       {id: '1', name: test, age: 4},
  //       {id: '2', name: 'e', age: 5},
  //       {id: '3', name: 'f', age: 6}
  //     ] 
  //   }) // setState is a method defined in component library. it is responsible for update the DOM.
  // }


  changevalue = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    if(event.target.name == "age")
    {
      person.age = event.target.value;
    }
    else
    {
      person.name = event.target.value;
    }
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  togglepersons = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons: !show
    })
    if (this.state.showPersons){
      this.setState({
        buttonname: 'show'
      })
    }
    else{
      this.setState({
        buttonname: 'hide'
      })
    }

  }

  addtoggleperson = () => {
    const persons = this.state.persons;
    const person = {id: persons.length + 1, name: '', age: ''}
    persons.push(person);
    this.setState({persons: persons});
  }

  deleteperson = (personIndex) => {
    const persons = this.state.persons; //it is good practice to create a copy of your array which you want to manipulate.
    // const persons = [...this.state.persons]; // you can also do this. 
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                name={person.name} 
                age={person.age}
                // click = {this.deleteperson.bind(index)} /> this will also work
                click = {() => this.deleteperson(index)}
                key = {person.id}
                changed = {(event) => this.changevalue(event, person.id)}
              />
            })}
            
            <p><button 
            style ={style}
            onClick={this.addtoggleperson}> new Toggel</button></p>
          </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>this is react application</p>
        <button
        style ={style}
        onClick={this.togglepersons}>{this.state.buttonname}</button>
        {persons}
      </div>
    );
    // return React.createElement('div', null, 'h1', 'hii this is react app') -> this is also wrong bacos it is not treating 'h1' as heading
    // return React.createElement('div', null, React.createElement('h1', null, 'this is react app')) //-> here h1 tag will work properly but we cant define class name here
    //return React.createElement('div', null, React.createElement('h1', {className: "App"}, 'this is react app')) //-> here we have defind class also.
  }
}

export default App;


// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Sign_in from './Sign_in';
// import Sign_up from './Sign_up';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//       <div className="App">
//       <ul>
//         <a href="/sign_in" class="link">Sign In</a>
//         <a href="/sign_up" class="link">Sign Up</a>
//         </ul>

//         <Switch>
//           <Route path='/Sign_in' component={Sign_in} />
//           <Route path='/Sign_up' component={Sign_up} />
//         </Switch>
//       </div>
//       </Router>
//     );
//   }
// }

// export default App;
