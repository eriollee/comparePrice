<template>
    <div class="vm-image-list">
        <Row class="image-list-heading vm-panel">
            <VmSearch placeholder="请输入融e购产品编号.." @transfer="getSearchValue"></VmSearch>
        </Row>
        <Row class="image-list"  >
            <transition name="fade">
                <VmImageInfo :dataInfo="dataInfoTable" v-if="imageInfoShow" ></VmImageInfo>
            </transition>
        </Row>

       <!-- <Row>
           <VmImageMall></VmImageMall>
       </Row> -->
       <Row>
            <Col  v-for="item in 2" :key="item.id" >
                <VmImageMall v-show="imageMallShow"></VmImageMall>
            </Col>
       </Row>
    </div>
</template>

<script>
  import VmImageInfo from '@/components/vm-image-info'
  import VmSearch from '@/components/vm-search'
  import VmImageMall from '@/components/vm-image-mall'
  export default {
    name: 'cmpMall',
    components: {
      VmImageInfo,
      VmSearch,
      VmImageMall
    },
    methods: {
        search:function(){
            console.log(this.dataInfoTable.detailList.mall.title);
        },
        getSearchValue:function(msg){
            console.log(msg);
            this.imageInfoShow = true;
        },
    },
    mounted () {
        let that = this;
        this.search()
    },
    data: function () {
      return {
          imageInfoShow:false,
          imageMallShow:false,
          dataInfoTable: {
            code: 0, 
            msg: '返回成功', 
                detailList: {
                    mall:
                    {
                        id:'9000158140',
                        title:'塞翁福汇山珍菌菇礼盒swfjg-5',
                        brand:'塞翁福',
                        name:'塞翁福汇山珍菌菇礼盒',
                        sales:'1000',
                        price:'12.00-24.00',
                        imgUrl:'http://image6.mall.icbc.com.cn/image/10018469/1501218781097_3.jpg',
                        url:'http://mall.icbc.com.cn/products/pd_0000912336.jhtml',
                        isSKU:true,
                        SKU:
                        {
                            priceList:[
                            {
                                price:'12.00',
                                index:'00',
                            },
                            {
                                price:'15.00',
                                index:'10',
                            },
                            {
                                price:'20.00',
                                index:'01',
                            },
                            {
                                price:'24.00',
                                index:'11',
                            }
                            ],
                            typeList:[
                                {
                                    type:'尺寸',
                                    typeValue:
                                    [
                                    {
                                        value:'大号',
                                        index:'0',
                                    },
                                    {
                                        value:'小号',
                                        index:'1',
                                    }
                                    
                                    ]
                                },
                                {
                                    type:'颜色',
                                    typeValue:
                                    [
                                    {
                                        value:'红色',
                                        index:'0',
                                    },
                                    {
                                        value:'蓝色',
                                        index:'1',
                                    }
                                    
                                    ]
                                }
                                
                            
                            ]
                        }
                    }
                }
            }
      }
    }
  }
</script>
 <style type="text/css" rel="stylesheet">
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>