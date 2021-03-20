<template>
  <div>
    <div>
        <p>Click play to take you to a game. Upload your results and they will be recored!</p>
        <div v-for="ticket in tickets" v-bind:key="ticket.id">
          <div class="container">
            <p> {{ticket.name}} {{ticket.tictactoeresult}} </p>
          </div>
        </div>
    </div>
    <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal">
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} 
        <a href="https://github.com/davidwinnbigvideo/creative-project-3">Github</a>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>

<style scoped>
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
</style>