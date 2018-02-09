<template>
  <div class="basic-table vm-margin">
    <VmTable title="Basic Table" :columns="dataColumns" :data="dataTable"></VmTable>
  </div>
</template>

<script>
  import VmTable from '@/components/vm-table'
  export default {
    name: 'BasicTable',
    components: {
      VmTable
    },
    data () {
      return {
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
            key: 'age',
            sortable: true
          },
          {
            id: '2.140713',
            title: 'SKU',
            key: 'address',
            sortable: true
          },
          {
            id: '2.140715',
            title: '价格',
            key: 'address2',
            sortable: true
          },
          {
            id: '2.140716',
            title: '当前价格',
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
        dataTable: [
          {
            id: '65416843154',
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843654',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843194',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843150',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843150',
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843114',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '65416843114',
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          },
          {
            id: '25416843154',
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道',
            address2: '北京市朝阳区芍药居',
            address3: '北京市朝阳区芍药居',
            address4: '北京市朝阳区芍药居',
            address5: '北京市朝阳区芍药居',
            address6: '北京市朝阳区芍药居',
            address7: '北京市朝阳区芍药居',
            address8: '北京市朝阳区芍药居',
            address9: '北京市朝阳区芍药居',
            address10: '北京市朝阳区芍药居',
            address11: '北京市朝阳区芍药居',
            address12: '北京市朝阳区芍药居',
            address13: '北京市朝阳区芍药居'
          }
        ]
      }
    }
  }
</script>
