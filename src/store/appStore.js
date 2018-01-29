import { observable, action } from 'mobx';

class appStore {
  constructor(rootsStore){
    this.rootsStore=rootsStore;
  }
  @observable number = 0;
  @action
  add = () => {
    this.number++;
  };
}
export default appStore;
