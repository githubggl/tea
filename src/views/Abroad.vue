<template>
  <div class="country-wraper">
    <div class="country-title-wraper">
      <span>{{item.name}}</span>
    </div>
    <div class="country-desc-wraper">
      <span>{{item.desc}}</span>
    </div>
    <div class="country-img-wraper">
      <img :src="item.src" :alt="item.name">
    </div>
    <div class="country-label-wraper">
      <span>文章列表</span>
    </div>
    <div class="country-list-wraper">
      <div v-for="(articleItem, i) in item.list" class="country-list-item-wraper">
        <span>
          <router-link :to="{name: 'detail', query: {name: articleItem.name}}">{{articleItem.name}}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { findAbroadByName } from '../service/service'

export default {
  props: {
    name: String,
  },
  data(){
    return {
      item: {}
    }
  },
  methods: {
    async loadItem () {
      this.item = await findAbroadByName(this.name) || {}
    }
  },
  watch: {
    name: {
      immediate: true,
      handler: 'loadItem'
    }
  },
}
</script>

<style lang="css" scoped>
.country-title-wraper{
    font-size: 25px;
    line-height: 50px;
    padding-left: 5px;
}
.country-desc-wraper{
    text-indent: 2em;
    margin: 1em 0;
}
.country-img-wraper{
    text-align: center;
}
.country-img-wraper img{
    width: 400px;
    max-height: 300px;
}
.country-label-wraper{
    font-size: 20px;
    line-height: 40px;
    padding-left: 5px;
}
.country-list-wraper{
    padding-left: 5px;
    margin-top: 10px;
}
</style>
