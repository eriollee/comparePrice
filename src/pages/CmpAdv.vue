<template>
    <div class="">
      <Row class="image-list-heading vm-panel">
            <VmSearch ruleInline="advRule" placeholder="请输入活动页网址链接.." @transfer="getSearchValue"></VmSearch>
      </Row>
      <Row class="image-list-heading vm-panel" v-show="iframeState">
        <Tabs value="name1" type="card">
          <TabPane  label="浏览网页" name="name1" icon="social-windows"> 
            <VMBrowser :advSource="advUrl" :iframeState="iframeState">  </VMBrowser>
          </TabPane>
          <TabPane label="详情比价" name="name2">
                  <Col :xs="{ span: 3 }" class="vm-margin col-xs-3"  v-for="(item,index) in compareList.detailList.advList"  :key="item.id" >
                        <VmImageMallCard :compareInfo="item" ></VmImageMallCard>
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
      getSearchValue:function(msg){
            this.advUrl = msg;
            this.iframeState= true;
            console.log(this.compareList);
      },
    },
    data: function () {
      return {
       advUrl:"",
       iframeState:false,
       compareList:{
	      code: 0, 
	      msg: "返回成功", 
	      detailList: {
          total:2,
          advList:
          [
              {				
                advID:"1312312",
                advTitle:"Python学习手册",
                price:"120.00",
                detailPrice:"120.00",
                isSame:true,		
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              },
              {				
                advID:"1334342",
                advTitle:"Python源码剖析",
                price:"120.00",
                detailPrice:"130.00",
                isSame:false,
                imgUrl:"https://img14.360buyimg.com/n0/jfs/t10111/323/1631828106/201312/4bcc468c/59e43425N06086806.jpg",
                url:"https://item.jd.com/5396295.html"
              }
            ]
      }
  }
      }
    }
  }
</script>
