<template>
  <div class="bottom">
      <div class="left">
        <LeftComponent/>
      </div>
      <div class="right">
        <div class="right-wraper">
          <router-view/>
        </div>
      </div>
  </div>
</template>

<script>
import LeftComponent from './LeftComponent'
// import MainComponent from './MainComponent'
export default {
  components: {
    LeftComponent
    // MainComponent
  }
}
</script>

<style scoped lang="scss">
.bottom{
  background: #cad9e6;
  display: flex;
  overflow: auto;
}
.left{
    width: 300px;
}
.right{
    flex: 1;
    background: aliceblue;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
.right-wraper{
    flex: 1;
}
</style>
