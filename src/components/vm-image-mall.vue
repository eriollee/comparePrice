<template>
     <div class="vm-info-horizantal vm-panel">
         
        <Row type="flex" justify="center" align="middle" class="panel-body ">
            
              <Card  class="vm-info-mall-img">
                <h4>天猫比价</h4>
                  <Col :xs="{ span: 3 }" class="vm-margin col-xs-3" v-for="item in 5" :key="item.id" >
                        <VmImageMallCard ></VmImageMallCard>
                  </Col>
              </Card>
        </Row>
     </div>
</template>

<script>
  import VmImageMallCard from "@/components/vm-image-mall-card"
  export default {
    name: 'vmImageMall',
    components: {
      VmImageMallCard
    },
    methods: {
    },
    data: function () {
      return {
      }
    }
  }
</script>
