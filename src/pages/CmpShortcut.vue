<template>
  <div class="basic-table vm-margin">

      <div>
        <VmShortcutTable title="请选择比价数据" type="edit"  :columns="dataInitColumns" :data="dataInitTable"></VmShortcutTable>
      </div>
      <div class="basic-table vm-margin">
        <VmShortcutTable title="比价结果" :columns="dataColumns" :data="dataTable"></VmShortcutTable>
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
            age: 25,
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
            age: 30,
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
            age: 26,
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
            age: 25,
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
            age: 30,
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
            age: 26,
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
            age: 30,
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
            key: 'sku',
            sortable: true
          },
          {
            id: '2.140714',
            title: '历史价格',
            key: 'hisprice',
            sortable: true
          }
        ],
        dataInitTable: [
           {
            id: '65416843154',
            name: '王小明',
            age: '屈臣氏',
            sku:'红色',
            hisprice:'121.0'
          }
        ]
      }
    }
  }
</script>
