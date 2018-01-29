import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page/App';
import Store from './store/store';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inbox from './components/inbox';
import About from './components/about';

ReactDOM.render(
  <Provider store={new Store()}>
    <Router>
      <div>
        <Route path='/' component={App} />
        <Route path='/about' component={About} />
        <Route path='/inbox' component={Inbox} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
