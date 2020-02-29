/**
 * Old way
 */

var UserStore = (function(){
    var _data = [];
  
    function add(item){
      _data.push(item);
    }
  
    function get(id){
      return _data.find((d) => {
          return d.id === id;
      });
    }
  
    return {
      add: add,
      get: get
    };
  }());

  /**
   * ES6 way
   */

  const _data = [];

  const UserStore = {
    add: item => _data.push(item),
    get: id => _data.find(d => d.id === id)
  }
  
  Object.freeze(UserStore);
  export default UserStore;


  /** 
   * ES6 Class way
   */

  class UserStore {
    constructor(){
      this._data = [];
    }
  
    add(item){
      this._data.push(item);
    }
  
    get(id){
      return this._data.find(d => d.id === id);
    }
  }
  
  const instance = new UserStore();
  Object.freeze(instance);
  
  export default instance;