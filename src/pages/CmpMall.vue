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
          imageMallShow:true,
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
                        imgUrl:'https://img.alicdn.com/imgextra/i4/2064590055/TB2U4H9hRfH8KJjy1XbXXbLdXXa_!!2064590055.jpg_430x430q90.jpg',
                        url:'http://mall.icbc.com.cn/products/pd_0000912336.jhtml',
                        isSKU:true,
                        SKU:
                        {
                            priceList:[
                            {
                                price:'12.00',
                                index:'aa|cc',
                                imgUrl:'https://img.alicdn.com/imgextra/i2/3032144892/TB2UoyOgAfb_uJjSsrbXXb6bVXa_!!3032144892.jpg_430x430q90.jpg'
                            },
                            {
                                price:'15.00',
                                index:'aa|dd',
                                imgUrl:'https://img.alicdn.com/imgextra/i2/3032144892/TB1Uq6lnP3z9KJjy0FmXXXiwXXa_!!0-item_pic.jpg_430x430q90.jpg'
                            },
                            {
                                price:'20.00',
                                index:'bb|cc',
                                imgUrl:'https://img.alicdn.com/imgextra/i2/3032144892/TB1Uq6lnP3z9KJjy0FmXXXiwXXa_!!0-item_pic.jpg_430x430q90.jpg'
                            },
                            {
                                price:'24.00',
                                index:'bb|dd',
                                imgUrl:'https://img.alicdn.com/imgextra/i2/3032144892/TB1Uq6lnP3z9KJjy0FmXXXiwXXa_!!0-item_pic.jpg_430x430q90.jpg'
                            }
                            ],
                            typeList:[
                                {
                                    type:'尺寸',
                                    typeValue:
                                    [
                                    {
                                        value:'大号',
                                        index:'aa',
                                    },
                                    {
                                        value:'小号',
                                        index:'bb',
                                    }
                                    
                                    ]
                                },
                                {
                                    type:'颜色',
                                    typeValue:
                                    [
                                    {
                                        value:'红色',
                                        index:'cc',
                                    },
                                    {
                                        value:'蓝色',
                                        index:'dd',
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