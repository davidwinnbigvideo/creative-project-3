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

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

input {
  font-size: 1.2em;
  height: 30px;
  width: 200px;
}

textarea {
  font-size: 1.6em;
  width: 100%;
  max-width: 500px;
  height: 100px;
}

button {
  margin-top: 20px;
  font-size: 1.2em;
}
</style>