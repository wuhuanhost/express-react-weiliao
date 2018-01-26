import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page/App';
import Store from './store/store';
import registerServiceWorker from './registerServiceWorker';

const appStore = new Store();

ReactDOM.render(
  <App appStore={appStore} viewStore={123} />,
  document.getElementById('root')
);
registerServiceWorker();
