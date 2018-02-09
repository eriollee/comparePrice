<template>
  <div class="vm-info-horizantal vm-panel">
      <!-- <div class="card-img">

           <img :src="img" alt="">
      </div> -->
        <Row type="flex" justify="center" align="top" class="panel-body">
            <Card >
                <Col span="8"  class="vm-info-img" >
                            <img :src="img" alt="" >
                        <!-- <Card  class="vm-info-img">
                        <p>标题：工e行-与爱同行 宝家丽 床宝星舰VH-01 高端杀菌除螨仪 一机两用 有效除螨吸尘</p>
                        </Card> -->
                </Col>
                 <Col span="16"  class="vm-info-img" >
                        <div>
                            <p>标题：工e行-与爱同行 宝家丽 床宝星舰VH-01 高端杀菌除螨仪 一机两用 有效除螨吸尘</p>
                            <p>商品品牌：宝家丽 </p>
                            <p>商品名称：床宝星舰</p>
                            <p>销量：88笔</p>
                            <p>价格：￥352</p>
                        </div>
                        <div>
                            <p>大小：
                             <RadioGroup v-model="button1" type="button" >
                                <Radio label="大号"></Radio>
                                <Radio label="中号"></Radio>
                                <Radio label="小号"></Radio>
                            </RadioGroup>
                            </p>
                        </div>
                        <div style="margin-top:5px">
                        <p>颜色：
                             <RadioGroup v-model="button2" type="button" >
                                <Radio label="红色"></Radio>
                                <Radio label="黄色"></Radio>
                                <Radio label="蓝色"></Radio>
                            </RadioGroup>
                            </p>
                        </div>
                        <div>
                            <VmSearch></VmSearch>
                        </div>
                </Col>
            </Card>
        </Row>
        
        
    </div>
</template>
<script>
    export default {
        
    }
</script>

  </div>
</template>

<script>
  import VmSearch from '@/components/vm-search'
  export default {
    name: 'imageInfo',
    components: {
      VmSearch
    },
    props:{
        type: {
            type: String,
            default: 'vertical'
        },
        img: {
            type: String,
            default: require('@/assets/img/img-1.jpg')
        },
    },
    methods: {
    },
    data: function () {
      return {
          button1: '大号',
          button2: '红色'
      }
    }
  }
</script>