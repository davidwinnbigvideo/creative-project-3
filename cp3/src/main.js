import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import TicTacToe from './TicTacToe';
import Cell from './Cell';

Vue.config.productionTip = false

Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);

let data = {
  products: mock,
  cart: [],
  currentID: 2,
  tickets: [{
    id: 1,
    tictactoeresult: '',
    name: ''
  }],
  getTickets() {
    return this.tickets;
  },
  addTicket(name, tictactoeresult) {
    this.tickets.push({
      id: this.currentID,
      name: name,
      tictactoeresult: tictactoeresult
    });
    this.currentID += 1;
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
