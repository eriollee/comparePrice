<template>
    <div class="vm-panel">
        <Row type="flex" justify="center"   class="panel-body">
            <Col span="24">
                <Card >
                   <Upload
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                            :on-success="handleSuccess" 
                            :on-error="handleError"  >
                            <div style="padding: 20px 0">
                                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                <p>请点击或拖拽此处上传文件</p>
                            </div>                           
                        </Upload>
                        <Spin size="large" fix v-if="spinShow"></Spin>  
                </Card>
            </Col>
        </Row>
         <Row type="flex" justify="center"  class="panel-body"  v-if="buttonShow">
            <Col span="24">
                <Card >
                    <Button type="primary" size="large" @click="setFreshShow" :loading="loading">
                        <span v-if="!loading" >点击刷新</span>
                        <span v-else>刷新中...</span>
                    </Button>
                    <Button type="success" size="large"  @click="downLoad">下载</Button>
                </Card>
                <transition name="slide-fade">
                    <Card v-if="freshShow">
                                <i-circle :percent="percent">
                                    <span style="font-size:24px">{{ percent }}%</span>
                                </i-circle>
                    </Card>
                 </transition>      
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSuccess:function(){
                    this.$Message.success('文件上传成功!数据处理中');
                    this.spinShow = true;
                    this.buttonShow = true;
            },
            handleError:function(){
                    this.$Message.error('文件上传失败!');
            },
            setFreshShow: function() {
                this.freshShow = true;
                this.loading = true;
                setTimeout(() => { 
                    this.freshShow = false;
                    this.loading = false;
                }, 2000)
            },
            downLoad:function(){
                window.open('http://zfxxgk.beijing.gov.cn/110000/gksqxz/2017-05/31/8b7973948585427a8b717759d1b41929/files/d0682439e52041e2b2890853bf19b856.doc');
            }
            
        },

        data () {
            return {
                spinShow: false,
                buttonShow:false,
                percent:75,
                freshShow:false,
                loading:false
            }
        }
    }
</script>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
