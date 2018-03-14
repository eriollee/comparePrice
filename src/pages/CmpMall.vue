<template>
    <div class="vm-image-list">
        <Row class="image-list-heading vm-panel">
            <VmSearch ruleInline="mallRule" placeholder="请输入融e购产品编号.." @transfer="getSearchValue"></VmSearch>
        </Row>
        <Row class="image-list"  >
            <transition name="fade">
                <VmImageInfo :dataInfo="dataInfoTable" v-if="imageInfoShow" @transfer="getCompareValue" ></VmImageInfo>
            </transition>
        </Row>
            <transition name="slide-fade">
                <VmImageMall :comparePrice="comparePrice" :compareList="compareList" v-show="imageMallShow"></VmImageMall>
                </transition>
            </Col>
      
      
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
            console.log(this.compareList);
        },
        getSearchValue:function(msg){
            console.log(msg);
            this.imageInfoShow = true;
        },
        getCompareValue:function(msg,price){
            console.log(msg);
            this.imageMallShow = true;
            this.comparePrice = price;
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
          comparePrice:'',
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
            },
            compareList:
              {
                code: 0, 
                msg: "返回成功", 
                detailList: {
                        otherList:
                        [
                        {
                        
                                brand:"天猫",
                                total:5,
                                goodList:
                                [
                                    {
                                        id:"4866934",
                                        sales:1000,
                                        price:"1.00",
                                        imgScore:"95",
                                        imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                                        url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                                    },
                                    {
                                        id:"4866935",
                                        sales:1000,
                                        price:"100.00",
                                        imgScore:"95",
                                        imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                                        url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                                    },
                                    {
                                        id:"4866936",
                                        sales:1000,
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                                        url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                                    },
                                    {
                                        id:"4866937",
                                        sales:1000,
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                                        url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                                    },
                                    {
                                        id:"4866938",
                                        sales:1000,
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                                        url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                                    }
                                ]
                        },
                        {
                                brand:"京东",
                                total:5,
                                goodList:
                                [
                                    {
                                        id:"48669341",
                                        sales:"1000",
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                                        url:"https://item.jd.com/5396295.html"
                                    },
                                    {
                                        id:"48669342",
                                        sales:"1000",
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                                        url:"https://item.jd.com/5396295.html"
                                    },
                                    {
                                        id:"48669343",
                                        sales:"1000",
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                                        url:"https://item.jd.com/5396295.html"
                                    },
                                    {
                                        id:"48669344",
                                        sales:"1000",
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                                        url:"https://item.jd.com/5396295.html"
                                    },
                                    {
                                        id:"48669345",
                                        sales:"1000",
                                        price:"12.00",
                                        imgScore:"95",
                                        imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                                        url:"https://item.jd.com/5396295.html"
                                    }
                                ]
                        },
                        ]
                        
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

        /* 可以设置不同的进入和离开动画 */
    /* 设置持续时间和动画函数 */
    .slide-fade-enter-active {
    transition: all .3s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>