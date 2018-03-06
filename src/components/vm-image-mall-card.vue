<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']">
    <Card >
        <div class="card-img">
          <a :href="compareInfo.url" target="view_window"><img :src="compareInfo.imgUrl" alt=""></a>
        </div>
        <div class="vm-info-mall-img" v-if="priceType != undefined">
          <p v-if="compareInfo.advTitle != undefined">名称:{{compareInfo.advTitle}}</p>
          <p v-if="priceType === 'UP'">
            <span :style="{ 'color': 'red' }">{{compareInfo.price}}↑</span>
          </p> 
          <p v-else-if="priceType === 'DOWN'">
            <span :style="{ 'color': 'green' }">{{compareInfo.price}}↓</span>
          </p>    
          <p v-else>
            <span v-if="compareInfo.advTitle != undefined">活动页价格：</span>
            <span v-else>价格：</span>
            <span>{{compareInfo.price}}</span>
          </p> 
            <p v-if="compareInfo.detailPrice != undefined">详情页价格：{{compareInfo.detailPrice}}</p>
            <p v-if="compareInfo.sales != undefined">销量：{{compareInfo.sales}}</p>
            <p v-if="compareInfo.imgScore != undefined">图片相似度：{{compareInfo.imgScore}}%</p>
            <p v-if="compareInfo.isSame != undefined">是否相同：
                <span v-if="compareInfo.isSame" :style="{ 'color': 'green' }">{{  sameMessage }}</span>
                <span v-else :style="{ 'color': 'red' }">{{  sameMessage }}</span>
            </p>
        </div>
    </Card >
   
  </div>
</template>
<script>
  export default {
    name: 'VmImageMallCard',
    computed: {
    // 计算是否相同
      sameMessage: function () {
        return  this.compareInfo.isSame?"是":"否";
      }
    },
    props: {
      type: {
        type: String,
        default: 'vertical'
      },
      img: {
        type: String,
        default: require('@/assets/img/img-1.jpg')
      },
      comparePrice: {
        type: String,
        default: ''
      },
      compareInfo: {
                type: Object
      },
    },
    watch: {
      comparePrice: function (val, oldVal) {
        if(parseFloat(val)>parseFloat(this.compareInfo.price)){
            this.priceType = "UP";
        }else if(parseFloat(val)<parseFloat(this.compareInfo.price)){
            this.priceType = "DOWN";
        }else{
             this.priceType = "";
        }
      },
    },
    updated () {
     

    },
    data: function () {
      return {
        priceType:""//价格类型
      }
    },
    methods: {
    }
  }
</script>
