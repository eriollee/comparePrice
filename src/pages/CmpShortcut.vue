<template>
  <div class="basic-table vm-margin">

      <div>
        <VmShortcutTable title="请选择历史比价数据" type="edit"  :columns="dataInitColumns" :data="dataInitTable" @transfer="getCompareValue" ></VmShortcutTable>
      </div>
      <div class="basic-table vm-margin">
        <VmShortcutTable title="最新比价结果" v-show="dataTableShow" :columns="dataColumns" :data="dataTable"></VmShortcutTable>
      </div>

  </div>
  
</template>

<script>
  import VmShortcutTable from '@/components/vm-shortcut-table'
  export default {
    name: 'BasicTable',
    components: {
      VmShortcutTable
    },
    created () {
        console.log(this.dataInitList)
        
        for(let i = 0;i<this.dataInitList.detailList.advList.length;i++){
             let dataInit = {};//添加临时对象
             dataInit.cprID = this.dataInitList.detailList.advList[i].cprID;
             dataInit.id = this.dataInitList.detailList.advList[i].advID;
             dataInit.brand = this.dataInitList.detailList.advList[i].brand;
             dataInit.name = this.dataInitList.detailList.advList[i].title;
             dataInit.keyword = this.dataInitList.detailList.advList[i].keyword;
             dataInit.hisPrice = this.dataInitList.detailList.advList[i].hisPrice;
             dataInit.url = this.dataInitList.detailList.advList[i].url;
             this.dataInitTable[i] = dataInit;
              
        }
       console.log(this.dataInitTable);
       
    },
    methods: {
      getCompareValue:function(value){
            console.log(value);
            for(let i = 0;i<this.dataList.detailList.advList.length;i++){
             let dataInit = {};//添加临时对象
              console.log(this.dataList.detailList.advList[i]);          
            }
            this.dataTableShow = true;
      },
    },
    data () {
      return {
        dataTableShow:false,
        dataColumns: [
          {
            id: '2.140710',
            title: '产品编号',
            key: 'id',
            sortable: true
          },
          {
            id: '2.140711',
            title: '名称',
            key: 'name',
            sortable: true
          },
          {
            id: '2.140712',
            title: '品牌',
            key: 'brand',
            sortable: true
          },
          {
            id: '2.140713',
            title: '关键字',
            key: 'address',
            sortable: true
          },
          {
            id: '2.140715',
            title: '历史价格',
            key: 'address2',
            sortable: true 
          },
          {
            id: '2.140716',
            title: '最新价格',
            key: 'address3',
            sortable: true
          },
          {
            id: '2.1407174',
            title: '天猫销量 100',
            key: 'address4',
            sortable: true
          },
          {
            id: '2.140718',
            title: '天猫销量 200',
            key: 'address5',
            sortable: true
          },
          {
            id: '2.140719',
            title: '天猫销量 300',
            key: 'address6',
            sortable: true
          },
          {
            id: '2.140720',
            title: '天猫销量 400',
            key: 'address7',
            sortable: true
          },
          {
            id: '2.140721',
            title: '天猫销量 500',
            key: 'address8',
            sortable: true
          },
          {
            id: '2.140722',
            title: '京东销量 100',
            key: 'address9',
            sortable: true
          },
          {
            id: '2.140723',
            title: '京东销量 200',
            key: 'address10',
            sortable: true
          },
          {
            id: '2.140724',
            title: '京东销量 300',
            key: 'address11',
            sortable: true
          },
          {
            id: '2.140724',
            title: '京东销量 400',
            key: 'address12',
            sortable: true
          },
          {
            id: '2.140724',
            title: '京东销量 500',
            key: 'address13',
            sortable: true
          }
        ],
        dataList:{
            code: 0, 
            msg: "返回成功", 
            detailList: {
              advList:
              [
                {				
                  cprID:"0000123",
                  advID:"1312312",
                  brand:"人民教育出版社",
                  name:"塞翁福汇山珍菌菇礼盒",
                  sales:1000,
                  title:"Python源码剖析",
                  hisPrice:"120.00",
                  url:"https://item.jd.com/5396295.html",
              otherList:
              [
              {
              
                  brand:"天猫",
                  total:5,
                  goodList:
                  [
                    {
                      id:"4866934",
                      title:"Python基础教程",
                      sales:1000,
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3117898",
                      title:"Python源码剖析",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3948354",
                      title:"Python学习手册",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"4866934",
                      title:"Python基础教程",
                      sales:1000,
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3117898",
                      title:"Python源码剖析",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    }
                  ]
              },
              {
                  brand:"京东",
                  total:5,
                  goodList:
                  [
                    {
                      id:"4866934",
                      title:"Python基础教程",
                      sales:1000,
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3117898",
                      title:"Python源码剖析",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3948354",
                      title:"Python学习手册",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"4866934",
                      title:"Python基础教程",
                      sales:1000,
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    },
                    {
                      id:"3117898",
                      title:"Python源码剖析",
                      price:"12.00",
                      imgScore:"95",
                      imgUrl:"http://img.alicdn.com/imgextra/i1/725677994/TB2E1a2XaAoBKNjSZSyXXaHAVXa_!!725677994.jpg_430x430q90.jpg",
                      url:"http://chaoshi.detail.tmall.com/item.htm?spm=a3204.11139429.3183446685.1.40abaf00yKAsKL&id=40567573038"
                    }
                  ]
              },
              ]
                }
              ]
            }
          },
        dataTable:[],
        dataTableSample: [
          {
            id: '65416843154',
            name: '王小明',
            brand: 18,
            address: '17.34',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843654',
            name: '张小刚',
            brand: 25,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843194',
            name: '李小红',
            brand: 30,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843150',
            name: '周小伟',
            brand: 26,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843150',
            name: '张小刚',
            brand: 25,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843114',
            name: '李小红',
            brand: 30,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '65416843114',
            name: '周小伟',
            brand: 26,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          },
          {
            id: '25416843154',
            name: '李小红',
            brand: 30,
            address: '红色',
            address2: '17.34',
            address3: '17.34',
            address4: '17.34',
            address5: '17.34',
            address6: '17.34',
            address7: '17.34',
            address8: '17.34',
            address9: '17.34',
            address10: '17.34',
            address11: '17.34',
            address12: '17.34',
            address13: '17.34'
          }
        ],
        dataInitColumns:[
          {
            id: '2.140710',
            title: '产品编号',
            key: 'id',
            sortable: true,
            render: (h, params) => {
              console.log(params);
              console.log("1111");
              return  h('a',{
                    on:{
                        'click':()=>{
                              window.open(this.dataInitTable[params.index].url);
                        }
                    }
                },this.dataInitTable[params.index].cprID);
            }
          },
          {
            id: '2.140711',
            title: '名称',
            key: 'name',
            sortable: true
          },
          {
            id: '2.140712',
            title: '品牌',
            key: 'brand',
            sortable: true
          },
          {
            id: '2.140713',
            title: '关键字',
            key: 'keyword',
            sortable: true
          },
          {
            id: '2.140714',
            title: '历史价格',
            key: 'hisPrice',
            sortable: true
          }
        ],
        dataInitTable: [],
        dataInitTableSample: [
           {
            cprID:"0000123",
            id: '65416843154',
            name: '蒸馏水',
            brand: '屈臣氏',
            keyword:'红色',
            hisPrice:'121.0',
            url:"https://item.jd.com/5396295.html"
          },
          {
            cprID:"0000123",
            id: '65416843152',
            name: '蒸馏水',
            brand: '屈臣氏',
            keyword:'红色',
            hisPrice:'121.0',
            url:"https://item.jd.com/5396295.html"
          },
          {
            cprID:"0000123",
            id: '65416843153',
            name: '蒸馏水',
            brand: '屈臣氏',
            keyword:'红色',
            hisPrice:'121.0',
            url:"https://item.jd.com/5396295.html"
          }
        ],

      dataInitList:  {
          code: 0, 
          msg:"返回成功", 
          detailList: {
            total:2,
            advList:
            [
              {				
                cprID:"0000123",
                advID:"1312312",
                brand:"人民教育出版社",
                title:"Python源码剖析",
                sales:1000,
                keyword:"红色",
                hisPrice:"120.00",
                url:"https://item.jd.com/5396295.html"
              },
              {
                cprID:"0000124",
                advID:"1334342",
                brand:"人民教育出版社",
                title:"Python源码剖析111",
                sales:1000,
                keyword:"蓝色",
                hisPrice:"140.00",
                url:"https://item.jd.com/5396295.html"
              },
              {
                cprID:"0000126",
                advID:"1334342",
                brand:"人民教育出版社",
                title:"Python源码剖析111",
                sales:1000,
                keyword:"蓝色",
                hisPrice:"140.00",
                url:"https://item.jd.com/5396295.html"
              }
            ]
          }
        }
      }
    }
  }
</script>
