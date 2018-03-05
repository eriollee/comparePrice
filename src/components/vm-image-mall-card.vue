<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']">
    <Card >
        <div class="card-img">
          <a :href="compareInfo.url" target="view_window"><img :src="compareInfo.imgUrl" alt=""></a>
        </div>
        <div class="vm-info-mall-img">
          <p v-if="priceType === 'UP'">价格：<span :style="{ 'color': 'red' }">{{compareInfo.price}}↑</span></p> 
          <p v-else-if="priceType === 'DOWN'">价格：<span :style="{ 'color': 'green' }">{{compareInfo.price}}↓</span></p>    
          <p v-else>价格：<span>{{compareInfo.price}}</span></p> 
            <p>销量：{{compareInfo.sales}}</p>
            <p>图片相似度：{{compareInfo.imgScore}}%</p>
        </div>
    </Card >
   
  </div>
</template>
<script>
  export default {
    name: 'VmImageMallCard',
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
