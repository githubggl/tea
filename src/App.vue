<template>
  <top-component class="top"/>
  <bottom-component class="bottom"/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
</template>

<script type="text/javascript">
import TopComponent from './views/layout/TopComponent'
import BottomComponent from './views/layout/BottomComponent'
export default {
  components: {
    TopComponent,
    BottomComponent
  }
}
</script>

<style lang="scss">
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*/

*{
    margin: 0;
    padding: 0;
}
html, body, .app{
    height: 100%;
}
.app{
    display: flex;
    flex-direction: column;
    min-width: 1100px;
    overflow: auto;
}
.top{
    height: 100px;
}
.bottom{
    flex:1;
}
</style>
