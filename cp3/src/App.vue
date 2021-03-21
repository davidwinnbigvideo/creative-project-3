<template>
<div id="app">
  <div id="menu">
    <div id="side">
      <router-link to="/">
        <div class="menu-item home">
          <img src="https://live.staticflickr.com/4114/4817067053_ac45153546_b.jpg">
          <p>Home</p>
        </div>
      </router-link>
      <router-link to="/play">
        <div class="menu-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ic_person_48px.svg">
          <p>Play</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.home {
  margin-right: 50px;
}
</style>
