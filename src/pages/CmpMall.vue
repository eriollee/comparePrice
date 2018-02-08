<template>
    <div class="vm-image-list">
        <Row class="image-list-heading vm-panel">
            <!-- <Row type="flex" align="middle" justify="space-between" class="panel-body">
                <div class="search-bar">
                    <Input placeholder="请输入融e行商品编号 ..."  style="width: 300px"></Input>
                    <Button type="ghost" @click="search"><i class="fa fa-search"></i></Button>
                 </div>
            </Row> -->
            <VmSearch></VmSearch>
        </Row>
        <Row class="image-list"  >
            <VmImageInfo></VmImageInfo>
       </Row>
    </div>
</template>

<script>
  import VmImageInfo from '@/components/vm-image-info'
  import VmSearch from '@/components/vm-search'
  export default {
    name: 'cmpMall',
    components: {
      VmImageInfo,
      VmSearch
    },
    methods: {
        search:function(){
            console.log("1111111");
        }
    },
    data: function () {
      return {
      }
    }
  }
</script>
