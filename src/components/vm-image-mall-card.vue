<template>
  <div :class="[type === 'horizantal' ? 'vm-card-horizantal' : 'vm-card-vertical' , 'vm-panel']">
    <Card >
        <div class="card-img">
        <img :src="img" alt="">
        </div>
        <div class="vm-info-mall-img">
            <p>价格：200↑</p>
            <p>销量：1000</p>
            <p>图片相似度：100%</p>
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
      desc: {
        type: String,
        default: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry,Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
      },
    },
    data: function () {
      return {
      }
    },
    methods: {
    }
  }
</script>
