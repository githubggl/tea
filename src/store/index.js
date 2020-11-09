import { createStore } from 'vuex'

export default createStore({
  state: {
    abroadChaiItems: [
      {
        name: '加拿大',
        desc: '加拿大人泡茶方法较特别，先将陶壶烫热，放一茶匙茶叶，然后以沸水注于其上，浸七、八分钟，再将茶叶倾入另一热壶供饮。通常加入乳酪与糖。',
        src: './abroad/canada/xwc.jpg',
        list: [
          { name: '加拿大下午茶', src: './abroad/canada/xiwucha.html' },
          { name: '高逼格的北美茶文化', src: './abroad/canada/gbgbmcwh.html' }
        ]
      },
      {
        name: '泰国',
        desc: '泰国地处南亚，纬度较低，气候炎热，因此冰茶成为他们饮茶文化中重要内容。泰国人喜爱在茶水里加冰，让茶冷却甚至冰冻，品尝起来沁人心脾。烈日之下，喝一杯冰茶，既能去热散湿，也能颐养心神。',
        src: './abroad/thailand/tgc.jpg',
        list: [
          { name: '泰国茶', src: './abroad/thailand/tgc.html' }
        ]
      },
      {
        name: '日本',
        desc: '日本茶文化同中国有异曲同工之妙，其方式多以喝清茶为主。日本茶文化中的茶道最为著名，其表现方式之严谨、内涵之丰富令人叫绝。外国人在游玩日本时，观赏茶道几乎是必备项目。',
        src: './abroad/japan/rbc1.jpg',
        list: [
          { name: '日本茶分类', src: './abroad/japan/fenlei.html' },
          { name: '日本茶道', src: './abroad/japan/chadao.html' }
        ]
      },
      {
        name: '印度',
        desc: '印度人好喝奶茶，也爱喝一种参加姜或小豆蔻的“萨马拉茶”。印度人传统饮茶方法较独特，把茶倒在盘子里用舌头舔饮，别的，绝不必左手递送茶具，因为，左手是用来洗澡和上厕所的。',
        src: './abroad/india/idc.jpg',
        list: [
          { name: '印度茶叶与中国茶叶的区别', src: './abroad/india/qubie.html' },
          { name: '印度茶文化', src: './abroad/india/chawenhua.html' },
          { name: '印度茶的“黑历史”', src: './abroad/india/heilishi.html' }
        ]
      },
      {
        name: '英国',
        desc: '英国有着浓厚的下午茶传统，茶几乎可称为英国的民族饮料。与中国的清茶文化不同，英国人喜爱现煮的浓茶，并放一二块糖，再加少许冷牛奶。著名英国画家詹姆士曾绘过一系列的英国下午茶图画，展现英国中产阶级品赏红茶、奶茶的情形。',
        src: './abroad/britain/igc.jpg',
        list: [
          { name: '英国茶', src: './abroad/britain/ygc.html' }
        ]
      },
      {
        name: '埃及',
        desc: '埃及的甜茶。埃及人待客，常端上一杯热茶，里面放许多白糖，只喝二三杯这种甜茶，嘴里就会感到粘糊糊的，连饭也不想吃了。',
        src: './abroad/egypt/ajc.jpg',
        list: [
          { name: '埃及茶叶简介', src: './abroad/egypt/jj.html' },
          { name: '埃及的茶道', src: './abroad/egypt/ajcd.html' }
        ]
      },
      {
        name: '俄罗斯',
        desc: '早在十九世纪下半叶，俄罗斯便成了中国茶叶的最大买主。俄罗斯人喜爱喝红茶，茶味浓厚。喝茶时，他们会先倒半杯浓茶，然后加热开水，再加两片方糖与柠檬片，喝茶程序和步骤也非常讲究。',
        src: './abroad/russia/els.jpg',
        list: [
          { name: '俄罗斯的茶来源', src: './abroad/russia/elscly.html' },
          { name: '俄罗斯独特的茶文化', src: './abroad/russia/dtcwh.html' },
          { name: '俄罗斯：饮茶爱茶三百年', src: './abroad/russia/acsbn.html' }
        ]
      },
      {
        name: '南美',
        desc: '南美的马黛茶。南美许多国家，人们用当地的马黛树的叶子制成茶，既提神又助化。他们是用吸管从茶杯中慢慢着品味着。',
        src: './abroad/south_america/mdc.jpg',
        list: [
          { name: '马黛茶', src: './abroad/south_america/mdc.html' },
          { name: '一个中国人对马黛茶的真实认识', src: './abroad/south_america/zsrs.html' }
        ]
      },
      {
        name: '斯里兰卡',
        desc: '斯里兰卡的居民酷爱喝浓茶，茶叶又苦又涩，他们却觉得津津有味。该国红茶畅销世界各地，在首都科伦坡有经销茶叶的大商行，设有试茶部，由专家凭舌试味，再核等级和价格。',
        src: './abroad/sri_lanka/sllk.jpg',
        list: [
          { name: '锡兰红茶', src: './abroad/sri_lanka/xlhc.html' },
          { name: '斯里兰卡八大经典红茶', src: './abroad/sri_lanka/jdhc.html' }
        ]
      },
      {
        name: '新西兰',
        desc: '新西兰人把喝茶作为人生最大的享受之一。许多机关、学校、厂矿等还特别订出饮茶时间。各乡镇茶叶店和茶馆比比皆是。',
        src: './abroad/new_zealand/xxl.jpg',
        list: [
          { name: '新西兰茶文化简介', src: './abroad/new_zealand/cwhjj.html' },
          { name: '新西兰杰境茶', src: './abroad/new_zealand/xxljjc.html' }
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
