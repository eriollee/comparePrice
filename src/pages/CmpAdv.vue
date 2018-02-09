<template>
    <div class="">
      <Row class="image-list-heading vm-panel">
            <VmSearch></VmSearch>
      </Row>
      <Row class="image-list-heading vm-panel">
        <Tabs value="name1" type="card">
          <TabPane label="浏览网页" name="name1" icon="social-windows"> <VMBrowser></VMBrowser></TabPane>
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
      }
    }
  }
</script>
