<template>
     <div class="vm-info-horizantal vm-panel"  >
         <Row>
          <Col v-for="(item,index) in compareList.detailList.otherList.length" :key="item.id"  >
            <Row type="flex" justify="center" align="middle" class="panel-body " >
                  <Card  class="vm-info-mall-img">
                    <h4>{{compareList.detailList.otherList[index].brand}}</h4>
                      <Col :xs="{ span: 3 }" class="vm-margin col-xs-3" v-for="(item) in compareList.detailList.otherList[index].goodList" :key="item.id" >
                        <VmImageMallCard :comparePrice="comparePrice" :compareInfo="item"></VmImageMallCard>
                      </Col>
                  </Card>
            </Row>
          </Col>
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
    props:{
      compareList: {
              type: Object
      },
      comparePrice: {
              type: String,
              default:""
      },
    },
    methods: {
    },
    data: function () {
      return {
      }
    }
  }
</script>
