<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/home">Home</router-link>

      <router-link to="/about">About</router-link>

      <router-link to="/test">Test</router-link>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  float: bottom;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.active {
  color: #ff0000;
}
</style>
