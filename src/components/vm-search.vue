<template>
    <div class="">
            <Row type="flex" align="middle" justify="space-between" class="panel-body">
                <div class="search-bar">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                        <FormItem prop="search">
                            <Input type="text"  number v-model="formInline.search" :placeholder="placeholder" style="width: 300px"></Input>
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
        }
    },
    methods: {
        search:function(name){
            this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$emit('transfer',this.formInline.search)
                    } else {
                        this.$Message.error('编号不正确');
                    }
            })
        }
    },
    data: function () {
      return {
        value:"",
        formInline: {
                search: ''
            },
        ruleInline: {
                search: [
                     {required: true, message: '融e行编号不能为空'},  
                     {type: 'number', message: '融e行编号必须为数字'}  
                ]
            }
      }
    }
  }
</script>
