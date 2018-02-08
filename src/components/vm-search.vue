<template>
    <div class="">
            <Row type="flex" align="middle" justify="space-between" class="panel-body">
                <div class="search-bar">
                    <Input placeholder="请输入融e行商品编号 ..."  style="width: 300px"></Input>
                    <Button type="ghost" @click="search"><i class="fa fa-search"></i></Button>
                 </div>
            </Row>
    </div>
</template>

<script>
  export default {
    name: 'search',
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
