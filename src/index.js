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
//路由列表
const Routes = () => (
  <div>
    <Route path='/' component={App} />
    <Route path='/about' component={About} />
    <Route path='/inbox' component={Inbox} />
  </div>
);

ReactDOM.render(
  // 注入store对象
  <Provider store={new Store()}>
    {/* 路由 */}
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);
//pwa
registerServiceWorker();
