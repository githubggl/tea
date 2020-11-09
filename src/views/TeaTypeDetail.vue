<template>
  <div class="main">
    <div class="introduce">
        <div class="introduce-title">
            <span>{{itemObj.name}}</span>
        </div>
        <div class="introduce-container">
            <p v-for="(introduce,i) in itemObj.introduces" :key="'i_'+i">{{introduce}}</p>
        </div>
    </div>
    <div class="classify">
        <div class="classify-title">
            <span>{{itemObj.name}}分类</span>
        </div>
        <div class="pics-wraper">
            <div v-for="(subItems, i) in rowsItems" :key="'row_'+i" class="pic-row-wraper">
                <div v-for="item in subItems" :key="item.name" class="pic-wraper">
                    <a href="#">
                        <img :src="item.src" :alt="item.name" @click.stop.prevent="onImgClick(item)">
                    </a>
                    <p>
                        <router-link :to="{name: 'detail', query: {name: item.name}}">{{item.name}}</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { findTeaTypeByName } from '../service/service'

import { splitArr } from '../util'

export default {
  props: {
    name: String,
    id: String
  },
  data () {
    return {
      itemObj: {}
    }
  },
  computed: {
    rowsItems () {
      return splitArr(this.itemObj.pics, 4)
    }
  },
  methods: {
    async loadItem () {
      this.itemObj = await findTeaTypeByName(this.name) || {}
    },

    onImgClick (item) {
      this.$router.push({ name: 'detail', query: { name: item.name } })
    }
  },
  watch: {
    name: {
      immediate: true,
      handler: 'loadItem'
    }
  }
}
</script>

<style scoped>
.introduce-title, .classify-title{
    font-size: 25px;
    line-height: 50px;
    padding-left: 5px;
}
.introduce-container{
    text-indent: 2em;
    font-size: 14px;
    line-height: 22px;
}
.classify{
    margin-top: 20px;
}
.pics-wraper{
    margin-top: 20px;
}
.pic-row-wraper{
    display: flex;
}
.pic-row-wraper + .pic-row-wraper{
    margin-top: 20px;
}
.pic-wraper a{
    display: block;
}
.pic-wraper p{
    text-align: center;
}
.pic-wraper img{
    width: 150px;
    height: 120px;
}
</style>
