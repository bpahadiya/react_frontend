import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Sign_in from './Sign_in';
import Sign_up from './Sign_up';


class App extends Component {
  render() {
    return (
      <Router>
      <div >
      <ul className="App">
        <a href="/sign_in" class="link">Sign In</a>
        <a href="/sign_up" class="link">Sign Up</a>
        </ul>

         <Switch>
          <Route path='/Sign_in' component={Sign_in} />
          <Route path='/Sign_up' component={Sign_up} />
         </Switch>
        </div>
      </Router>
    );
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
