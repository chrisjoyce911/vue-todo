import Vuex from 'vuex'
import todos from './modules/todos.js';

// Create store
export default Vuex.createStore({
  modules: {
    todos
  }
});