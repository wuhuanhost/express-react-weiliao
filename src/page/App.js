import React, { Component } from 'react';
// import _ from 'lodash';
// import { observer, inject } from 'mobx-react';
// import DevTools from 'mobx-react-devtools';
// import { useStrict } from 'mobx';
import { Link } from 'react-router-dom';

// useStrict(true);
// @inject('store')
// @observer
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/inbox'>inbox</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
