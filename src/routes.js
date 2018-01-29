import {Route } from 'react-router-dom';

import Inbox from './components/inbox';
import About from './components/about';
//路由列表
const Routes = App => {
  return (
    <div>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/inbox' component={Inbox} />
    </div>
  );
};
