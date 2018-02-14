<template>
    <div class="vm-image-list">
        <Row class="image-list-heading vm-panel">
            <!-- <VmSearch placeholder="请输入融e购产品编号.." @transfer="getSearchValue"></VmSearch> -->
            <button v-on:click="show = !show">
                Toggle
            </button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </Row>

        <Row class="image-list"  >
            <transition name="fade">
                <VmImageInfo v-if="imageInfoShow" ></VmImageInfo>
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
            console.log("1111111");
        },
        getSearchValue:function(msg){
            console.log(msg);
            this.imageInfoShow = true;
        },
    },
    data: function () {
      return {
           show: true,
          imageInfoShow:false,
          imageMallShow:false
      }
    }
  }
</script>
 <style type="text/css" rel="stylesheet">
    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>