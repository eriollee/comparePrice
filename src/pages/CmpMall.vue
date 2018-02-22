<template>
    <div class="vm-image-list">
        <Row class="image-list-heading vm-panel">
            <VmSearch placeholder="请输入融e购产品编号.." @transfer="getSearchValue"></VmSearch>
        </Row>
        <Row class="image-list fade-enter-active"  >
             <VmImageInfo v-show="imageInfoShow" ></VmImageInfo>
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
            console.log("1111111");
        },
        getSearchValue:function(msg){
            console.log(msg);
            this.imageInfoShow = true;
        },
    },
    data: function () {
      return {
          imageInfoShow:false,
          imageMallShow:false
      }
    }
  }
</script>
