<template>
  <div class="vm-info-horizantal vm-panel">
      <!-- <div class="card-img">

           <img :src="img" alt="">
      </div> -->
        <Row type="flex" justify="center" align="top" class="panel-body">
            <Card >
                <Col span="8"  class="vm-info-img" >
                            <img  :src="img"  alt="" >
                        <!-- <Card  class="vm-info-img">
                        <p>标题：工e行-与爱同行 宝家丽 床宝星舰VH-01 高端杀菌除螨仪 一机两用 有效除螨吸尘</p>
                        </Card> -->
                </Col>
                 <Col span="16"  class="vm-info-img" >
                        <div>
                            <p>标题：{{dataInfo.detailList.mall.title}}</p>
                            <p>商品品牌：{{dataInfo.detailList.mall.brand}} </p>
                            <p>商品名称：{{dataInfo.detailList.mall.name}}</p>
                            <p>销量：{{dataInfo.detailList.mall.sales}}笔</p>
                            <p>价格：￥{{dataInfo.detailList.mall.price}}</p>
                        </div>
                        <div>
                            <div style="margin-top:5px" v-for="(item,index) in dataInfo.detailList.mall.SKU.typeList" :key=item.id>
                                <p>{{dataInfo.detailList.mall.SKU.typeList[index].type}} :
                                <RadioGroup v-model="dataInfo.detailList.mall.SKU.typeList[index].defaultValue" type="button"  @on-change='change_status(item,index,dataInfo.detailList.mall.SKU.typeList.length)'>
                                    <Radio v-for="(item) in dataInfo.detailList.mall.SKU.typeList[index].typeValue" :label="item.value" :key=item.id  >
                                    </Radio> 
                                </RadioGroup>
                                </p>
                            </div>
                        </div>
                        <!-- <div>dataInfo.detailList.mall.SKU.typeList[index].typeValue
                            <p>大小：
                             <RadioGroup v-model="button1" type="button"  @on-change='change_status(item)'>
                                <Radio label="大号"></Radio>
                                <Radio label="中号"></Radio>
                                <Radio label="小号"></Radio>
                            </RadioGroup>
                            </p>
                        </div>
                        <div style="margin-top:5px">
                            <p>颜色：
                                <RadioGroup v-model="button2" type="button"  @on-change='change_status(item)'>
                                    <Radio label="红色"></Radio>
                                    <Radio label="黄色"></Radio>
                                    <Radio label="蓝色"></Radio>
                                </RadioGroup>
                            </p>
                        </div> -->
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
    on:{
        'on-change':()=>{
            console.log("111111")
        }
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
        dataInfo: {
            type: Object
        },
    },
    methods: {
        change: function (page) {
            console.log(page)
            console.log(imageInfo)
        },
        change_status: function(item,index,length){  // 筛选状态
            console.log(length)
            // 找到选项所在索引 
            let itemIndex = item.typeValue.findIndex((value, index, arr) => {
                return value.value ==  item.defaultValue
            });

            //找到选项所在索引的json中的index
            console.log(item.typeValue[itemIndex].index);
   
        },

    },
    created () {
        console.log(this.dataInfo.detailList.mall.SKU.typeList)
    },
    mounted () {
    },
    data: function () {
      return {
          button1: '大号',
          button2: '红色'
      }
    }
  }
</script>