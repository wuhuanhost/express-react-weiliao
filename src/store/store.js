// import { observable, action, useStrict } from 'mobx';
import appStore from './appStore';
class Store {
  constructor() {
    this.appStore = new appStore(this);
  }
}
export default Store;


