import { observable, action, useStrict } from 'mobx';
useStrict(true);
class Store {
  @observable number = 0;
  @action
  add = () => {
    this.number++;
  };
}
export default Store;
