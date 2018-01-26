import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class MyComponent extends Component {
  render() {
    return <div>123</div>;
  }
}



export default MyComponent;