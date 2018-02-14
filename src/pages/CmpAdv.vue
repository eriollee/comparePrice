<template>
    <div class="">
      <Row class="image-list-heading vm-panel">
            <VmSearch></VmSearch>
      </Row>
      <Row class="image-list-heading vm-panel">
        <Tabs value="name1" type="card">
          <TabPane label="浏览网页" name="name1" icon="social-windows"> 
            <VMBrowser :placeholder="请输入">  </VMBrowser>
          </TabPane>
          <TabPane label="详情比价" name="name2">
                  <Col :xs="{ span: 3 }" class="vm-margin col-xs-3" v-for="item in 20" :key="item.id" >
                        <VmImageMallCard ></VmImageMallCard>
                  </Col>
          </TabPane>
        </Tabs>
      </Row>
    </div>
</template>

<script>
  import VmSearch from '@/components/vm-search'
  import VMBrowser from '@/components/vm-browser'
  import VmImageMallCard from '@/components/vm-image-mall-card'

  export default {
    name: 'cmpAdv',
    components: {
      VmSearch,
      VMBrowser,
      VmImageMallCard
    },
    methods: {
    },
    data: function () {
      return {
        dataTable: [{
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
      ]
      }
    }
  }
</script>
