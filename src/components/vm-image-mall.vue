<template>
     <div class="vm-info-horizantal vm-panel">
        <Row type="flex" justify="center" align="middle" class="panel-body ">
              <Card >
                  <Col :xs="{ span: 3 }" class="vm-margin col-xs-3" v-for="item in 5" >
                        <VmCard ></VmCard>
                  </Col>
              </Card>
        </Row>
     </div>
</template>

<script>
  import VmCard from "@/components/vm-card"
  export default {
    name: 'vmImageMall',
    components: {
      VmCard
    },
    methods: {
    },
    data: function () {
      return {
      }
    }
  }
</script>
