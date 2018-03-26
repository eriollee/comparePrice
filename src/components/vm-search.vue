<template>
    <div class="">
            <Row type="flex" align="middle" justify="space-between" class="panel-body">
                <div class="search-bar">
                    <Form ref="formInline" :model="formInline" :rules="searchType" inline>
                        <FormItem prop="search">
                            <Input type="text"  number   v-model="formInline.search" :placeholder="placeholder" style="width: 300px"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="ghost" @click="search('formInline')" ><i class="fa fa-search"></i></Button>
                        </FormItem>
                    </Form>
                 </div>
            </Row>
    </div>
</template>

<script>
  export default {
    name: 'search',
    props: {
        placeholder: {
            type: String,
            default: '请输入...'
        },
        ruleInline:{
            type: String,
            default: ''
        },
        comparePrice:{
            type: String,
            default: ''
        },
        compareModel:{
            type: String,
            default: ''
        },
    },
    computed: {
        searchType: function () {
            if("mallRule"==this.ruleInline){
                return this.mallRule;
            }
            if("compareRule"==this.ruleInline){
                return this.compareRule;
            }
            if("advRule"==this.ruleInline){
                return this.advRule;
            }
            return '';
        }
    },
    methods: {
        search:function(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(this.comparePrice !=""){
                            this.$emit('transfer',this.formInline.search,this.comparePrice);
                        }else{
                            this.$emit('transfer',this.formInline.search);
                        }
                        
                    } else {
                        if("mallRule"==this.ruleInline){
                            this.$Message.error('编号不正确!');
                        }
                        if("compareRule"==this.ruleInline){
                            this.$Message.error('比价关键字输入不能为空!');
                        }
                        if("advRule"==this.ruleInline){
                            this.$Message.error('网址链接输入不能为空!');
                        }
                        
                    }
            })
        },


    },
    mounted () {
        this.formInline.search = this.compareModel;
        this.search('formInline');
    },
    data: function () {
      return {
        value:"",
        formInline: {
                search: ''
            },
        mallRule: {
                search: [
                     {required: true, message: '融e行编号不能为空!'},  
                     
                     {type: 'number', message: '融e行编号必须为数字!'}  
                ]
        },
        compareRule: {
                search: [
                     {required: true, message: '比价关键字不能为空!'},  
                ]
        },
        advRule: {
                search: [
                     {required: true, message: '网址链接输入不能为空!'},  
                ]
        }
      }
    }
  }
</script>
