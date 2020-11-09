<template>
  <div class="left-wraper">
    <ul>
        <li v-for="name in names" :key="name"><router-link :to="{path: '/ttype', query: {name: name}}">{{name}}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { findAllChinaTeaTypes } from '../../service/service'
export default {
  data () {
    return {
      names: []
    }
  },
  methods: {
    async loadItems () {
      this.names = await findAllChinaTeaTypes()
    }
  },

  mounted () {
    this.loadItems()
  }
}
</script>

<style scoped lang="scss">
.left-wraper{
    margin: 5px;
}
.left-wraper ul li{
    list-style: none;
    margin: 0px 0px;
    line-height: 56px;
    text-align: center;
    background: bisque;
}
.left-wraper ul li:hover{
    background: #b8e2ef;
    /* cursor: pointer; */
}
.left-wraper ul li + li{
    border-top: 1px solid #345;
}
</style>
