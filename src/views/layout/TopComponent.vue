<template>
  <div class="top">
      <div class="log-wraper">
          <div class="log">
              <img src="../../assets/logo.jpg" alt="茶叶">
          </div>
      </div>
      <div class="title-wraper">
          <div class="title">
              <span>世界茶叶</span>
          </div>
      </div>
      <div class="top-nav-wraper">
          <div class="top-nav">
              <ul id="topCountryNav">
                  <li>
                    <router-link :to="{name: 'root'}">中国</router-link>
                  </li>
                  <li v-for="(item, i) in abroads" :key="'abroad_'+i">
                    <router-link :to="{name: 'abroad', query: {name: item}}">{{item}}</router-link>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import { findAllAbroads } from '../../service/service'

export default {
  data(){
    return {
      abroads: []
    }
  },
  methods: {
    async loadAbroads(){
      this.abroads = await findAllAbroads() || []
    }
  },
  mounted(){
    this.loadAbroads()
  },
}
</script>

<style scoped>
.top{
  background: #b8e2ef;
  display: flex;
}
.log-wraper{
    width: 98px;
}
.log{
    width: 100%;
    overflow: hidden;
}
.log, .log img{
    height: 100%;
}
.log img{
    width: 98px;
}
.title-wraper{
    width: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}
.top-nav-wraper{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
.top-nav ul{
    padding: 0px;
    margin: 0px;
    height: 38px;
    overflow: hidden;
}
.top-nav ul li{
    list-style: none;
    float: left;
    margin: 0px 20px;
    line-height: 56px;
    text-align: center;
}
</style>
