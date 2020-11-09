<template>
  <div class="detail">
    <h1 class="title baikeBox">{{itemObj.name}}</h1>
    <div class="daodu">
      <img v-if="itemObj.img" :src="itemObj.img" :alt="itemObj.name">
      <template v-if="itemObj.desc">
        <p v-for="(d, i) in itemObj.desc" :key="'dp_'+i">{{d}}</p>
      </template>
    </div>
    <template v-if="hasNamedMenus">
      <div class="menu">
        <i>目录</i>
        <ul v-for="(subMenus, i) in menuTreeData" :key="'m_ul_'+i">
          <li v-for="(menu, j) in subMenus" :key="'m_ul_'+i+'_li_'+j">
            {{menu._index}}
            <span>
              <a :href="'#menu_'+menu._index">{{menu.name}}</a>
            </span>
          </li>
        </ul>
      </div>
    </template>

    <template v-if="hasVideo">
      <div class="video-boxes">
        <div class="video-box" v-for="(videoItem,i) in itemObj.videos" :key="'v_b_'+i">
          <video controls width="320" height="240">
            <source :src="videoItem.src" type="video/mp4">
          </video>
        </div>
      </div>
    </template>

    <div class="menu" v-for="(menu, i) in menus" :key="'menu_'+i">
      <div class="baikeBox baike-list">
        <a v-if="!!menu._index" :name="'menu_'+menu._index" href="#"></a>
        <h2 v-if="!!menu.name" class="baike-title">{{menu.name}}</h2>
        <div class="content">
          <template v-for="(c, j) in menu.content" :key="'p_'+i+'_'+j">
            <p v-if="!!c.src" class="center"><img :src="c.src"/></p>
            <p v-else-if="!!c.text">{{c.text}}</p>
            <p v-else-if="!!c.html" v-html="c.html"></p>
          </template>
        </div>
      </div>
    </div>
</div>
</template>

<script>

import { findDetailByName } from '../service/service'

import { splitArr } from '../util'

export default {
  props: {
    id: String,
    name: String
  },

  data () {
    return {
      itemObj: {},
      hash: '',
    }
  },

  computed: {
    menus () {
      return this.itemObj.menus || []
    },
    namedMenus () {
      var namedMenus = this.menus.filter(menu => menu.name)
      namedMenus.forEach((item, i) => {
        item._index = i + 1
      })

      return namedMenus
    },
    hasNamedMenus () {
      return this.namedMenus.length > 0
    },
    menuTreeData () {
      return splitArr(this.namedMenus, 4)
    },
    hasVideo () {
      return this.itemObj.videos && this.itemObj.videos.length && true || false
    }
  },

  methods: {
    async loadItem () {
      this.itemObj = await findDetailByName(this.name) || {}
    }
  },

  watch: {
    name: {
      immediate: true,
      handler: 'loadItem'
    }
  },

  mounted(){
    var hash = this.$route.hash
    if(hash){
      this.hash = hash
    }
  },

  updated(){
    var hash = this.hash
    if(hash){
      window.location.hash = ''
      this.hash = ''
      setTimeout(function() {
        window.location.hash = hash
      },0)
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  em, i {
    font-style: normal;
  }
  a {
    hide-focus: expression(this.hideFocus=true);
    outline: none;
    text-decoration: none;
    color: #333;
  }
  img {
    border: 0px;
  }
  .detail{
    margin: 20px 20% 20px 20px;
    min-width: 750px;
  }
  .video-boxes{
    display: flex;
    justify-content: space-around;
  }
  .title {
    font-size: 32px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .daodu {
    color: #444;
    line-height: 26px;
    font-size: 16px;
    max-height: 190px;
    overflow-y: auto;
  }
  .daodu img {
    float: left;
    margin-right: 20px;
    width: 190px;
    height: 150px;
  }
  .daodu p{
    text-indent: 2em;
  }
  .menu {
    margin-top: 10px;
    clear: both;
    border: 1px solid #EEE;
    overflow: hidden;
    padding-left: 80px;
    position: relative;
    z-index: 1;
  }
  .menu i {
    float: left;
    background: #FBFBFB;
    width: 80px;
    font-size: 22px;
    line-height: 60px;
    border-right: 1px solid #EEE;
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    z-index: 2;
    text-align: center;
  }
  .menu ul {
    padding: 10px 0px 15px 15px;
    overflow: hidden;
    width: 237px;
    float: left;
  }
  .menu ul li {
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    color: #666;
    font-size: 15px;
  }
  .menu ul li span {
    display: inline-block;
    color: #82b228;
    margin-left: 8px;
  }
  .menu ul li span a{
    color: inherit;
  }
  .baike-list {
    clear: both;
    padding: 15px 0px;
  }
  .baike-title {
    border-left: 8px solid #82b228;
    color: #82b228;
    padding-left: 18px;
    /* margin-left: -20px; */
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .content {
    line-height: 26px;
    font-size: 16px;
    padding-top: 15px;
    color: #666;
  }
  .content p {
    padding: 6px 0px;
  }
  .content a {
    color: blue;
  }
  .content img {
    margin: 0px 15px;
    max-width: 790px;
  }
  .center{
    text-align: center;
  }
</style>
