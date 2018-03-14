<template>
  <div class="vm-info-horizantal vm-panel">
        <Row type="flex" justify="center" align="top" class="panel-body">
            <Card >
                <Col span="8"  class="vm-info-img" >
                         <a v-if="priceImg != ''"  :href="dataInfo.detailList.mall.url" target="view_window">  
                            <img   :src="priceImg"    >
                        </a> 
                         <a  v-else   :href="dataInfo.detailList.mall.url" target="view_window">  
                             <img v-lazy="dataInfo.detailList.mall.imgUrl" >
                        </a> 
                        <!-- <Card  class="vm-info-img">
                        <p>标题：工e行-与爱同行 宝家丽 床宝星舰VH-01 高端杀菌除螨仪 一机两用 有效除螨吸尘</p>
                        </Card> -->
                </Col>
                 <Col span="16"  class="vm-info-img" >
                        <div>
                            <p>标题{{dataInfo.detailList.mall.SKU.priceList[0].price}}：{{dataInfo.detailList.mall.title}}</p>
                            <p>商品品牌：{{dataInfo.detailList.mall.brand}} </p>
                            <p>商品名称：{{dataInfo.detailList.mall.name}}</p>
                            <p>销量：{{dataInfo.detailList.mall.sales}}笔</p>
                            <p>价格：￥
                                <span v-if="price != ''">
                                {{price}}
                                </span>
                                <span v-else>
                                {{dataInfo.detailList.mall.price}}
                                </span>
                            </p>
                        </div>
                        <div>
                            <div style="margin-top:5px" v-for="(item,index) in dataInfo.detailList.mall.SKU.typeList" :key=item.id>
                                <p>{{dataInfo.detailList.mall.SKU.typeList[index].type}} :
                                <RadioGroup v-model="dataInfo.detailList.mall.SKU.typeList[index].defaultValue" type="button"  @on-change='change_status(item,index,dataInfo.detailList.mall.SKU.typeList.length,dataInfo.detailList.mall.SKU.priceList)'>
                                    <Radio v-for="(item) in dataInfo.detailList.mall.SKU.typeList[index].typeValue" :label="item.value" :key=item.id  >
                                    </Radio> 
                                </RadioGroup>
                                </p>
                            </div>
                        </div>
                        <div>
                            <VmSearch :comparePrice="price" ruleInline="compareRule" placeholder="请输入比价关键字.." @transfer="getSearchValue"></VmSearch>
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

 

<script>
  import Vue from 'vue'
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
        dataInfo: {
            type: Object
        },
    },
    methods: {
        getSearchValue:function(value,price){
            console.log(value+""+price);
            this.$emit('transfer',value,price);
        },
        change_status: function(item,index,length,priceList){  // 筛选状态
            console.log(priceList)
            // 找到SKU选项所在索引 
            let itemIndex = item.typeValue.findIndex((value, index, arr) => {
                return value.value ==  item.defaultValue
            });
            //console.log(priceList);
            //找到SKU选项所在索引的json中的index
            //console.log(item.typeValue[itemIndex].index);

            Vue.set(this.priceIndexArr, index, item.typeValue[itemIndex].index);
         //   console.log(this.priceIndexArr);
            let priceIndexTmp = "";

            //所有数组都填充后进行赋值
            if(this.priceIndexArr.length == length&&!this.priceIndexArr.includes(undefined)){
                for (let i = 0; i < length; i++) {
                    if(i==(length-1)){
                        priceIndexTmp += this.priceIndexArr[i]; 
                    }else{
                        priceIndexTmp += this.priceIndexArr[i]+"|"; 
                    }
                }
                this.priceIndexValue = priceIndexTmp;
        //        console.log(this.priceIndexValue); 
                let priceIndex = priceList.findIndex((value, index, arr) => {
                    return value.index ==  this.priceIndexValue
                });
                this.price = priceList[priceIndex].price;
            //    console.log(priceList); 
             //   console.log(typeof priceList[priceIndex].price); 
                if(priceList[priceIndex].imgUrl != undefined&& priceList[priceIndex].imgUrl != ""){
                    this.priceImg = priceList[priceIndex].imgUrl;
                }else{
                    this.priceImg = dataInfo.detailList.mall.imgUrl; 
                }
            }
        },

    },
    mounted () {
    },
    data: function () {
      return {
          priceIndexValue:"",//价格索引
          priceIndexArr:[],//价格的数组
          price:"",//价格
          priceImg:"",//价格图片
          
      }
    }
  }
</script>