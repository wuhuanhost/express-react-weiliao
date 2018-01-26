import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import TodosView from '../components/test';
// import _ from 'lodash';
import { observer } from 'mobx-react';

const Input = styled.input`
  font-size: 1.25em;
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;
const H1 = styled.h1`
  background-color: #a1a;
`;

@observer
class App extends Component {
  componentDidMount() {
    console.log('Hello SunnyChuan');
    axios
      .get('/api/data')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const { appStore, viewStore } = this.props;
    console.log('+++++++++++++++++++++++++++++++=');
    console.log(appStore);
    console.log(viewStore);
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Input placeholder='@mxstbr' type='text' />
          <H1 onClick={this.testClick}>{appStore.number}</H1>
          <TodosView />
        </div>
      </div>
    );
  }
  testClick = event => {
    console.log(event);
    this.props.appStore.add();
  };
}

export default App;
