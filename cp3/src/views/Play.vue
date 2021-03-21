<template>
<div class="wrapper">
  <tic-tac-toe />
  <div>
  <h1>Create a profile for this game</h1>
  <form v-if="creating" @submit.prevent="addTicket">
    <input v-model="name" placeholder="Name">
    <p></p>
    <select v-model="tictactoeresult">
      <option disabled value="">Please select one</option>
      <option>Win</option>
      <option>Tie</option>
      <option>Loss</option>
    </select>
    <span> Game Outcome {{ tictactoeresult }}</span>
    <br />
    <button type="submit">Submit</button>
  </form>
  <div v-else>
    <p>Thank you for submitting a game. See the home page for a list of our players!</p>
    <p><a @click="toggleForm" href="#">Submit another game</a></p>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: 'create',
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addTicket() {
      this.$root.$data.addTicket(this.name, this.tictactoeresult);
      this.name = "";
      this.creating = false;
    },
  },
  data() {
    return {
      creating: true,
      name: '',
      tictactoeresult: '',
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>