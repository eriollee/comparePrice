<template>
    <div class="accept-container" id="browser_container">
        <Row type="flex" justify="left"  align="top" class="panel-body">
             <iframe @load="showIframe" style="width:100%;position：absolute;top:0;left:0;" v-show="iframeState" id="show-iframe"  frameborder=0 name="showHere" scrolling=auto :src="advSource"></iframe>
        </Row>
    </div>
</template>

<script>
export default {
  name: 'VMBrowser',
  props: {
      advSource: {
        type: String,
        default: 'about:blank'
      },
      iframeState: {
        type: Boolean,
        default: false
      }
  },
  data () {
    return {
      webAddress: 
        {
            name:'测试链接',
            link:'http://mall.icbc.com.cn/shop/showSpecial.jhtml?themeId=9000000000010528&page_code=00002&area_col_code=15681&area_cat_code=0000000021&area_mod_code=00176'
        }
    }
  },
  mounted(){

  },
  methods:{
    showIframe(){
      const oIframe = document.getElementById('show-iframe');
      const deviceWidth = document.getElementById('browser_container').clientWidth;
      const deviceHeight = document.documentElement.clientHeight;
      oIframe.style.width = (deviceWidth + 'px');
      oIframe.style.height = (deviceHeight + 'px');
    }
  }
}

</script>
<style scoped>


</style>