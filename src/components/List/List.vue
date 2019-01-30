<!-- Manage -->
<template>
  <div>
      <h2>列表</h2> 
      <Table id="table" :loading="loading" :columns="column" :data="data" ref="table" stripe></Table>
      <div id="table-bottom">
      <Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline"></Icon>导出原始数据</Button>
        <Page :total="total" :current="pageNum" @on-change="changePage"></Page>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Manage',
    data() {
      return {
        msg: 'msg',
        loading: false,
        column: [{
            title: '商铺名称',
            key: 'shopName',
            width: 300
          },
          {
            title: '商铺评分',
            key: 'shopPower',
            width: 150
          },
          {
            title: '地段',
            key: 'mainRegionName',
            width: 140
          },
          {
            title: '类别',
            key: 'mainCategoryName',
            width: 140
          },
          {
            title: '口味评分',
            key: 'tasteScore',
            width: 150
          },
          {
            title: '环境评分',
            key: 'environmentScore',
            width: 150
          },
          {
            title: '服务评分',
            key: 'serviceScore',
            width: 150
          },
          {
            title: '人均消费',
            key: 'avgPrice',
            width: 150
          },
          {
            title: '商铺地址',
            key: 'shopAddress'
          },
          {
            title: '城市',
            key: 'city',
            width: 150
          }
        ],
        data: [],
        pageNum: 1,
        pageSize: 10,
        total: 0
        };
      },

  components: {},

  computed: {},

  created() {
    this.changePage();
  },

  methods: {
    exportData() {
        this.$refs.table.exportCsv({
            filename: 'data'
        })
    },
    changePage(current) {
        if(current) {
            this.pageNum = current;
        }
        this.loading = true;
        this.axios.get('http://localhost:3000/api/food/listFoods', {params: {
            pageSize: this.pageSize,
            pageNum: this.pageNum
        }}).then(res => {
            res.data.rows.map(item => {
                item.mainRegionName = item.mainRegionName ? item.mainRegionName : '暂无'
            })
            this.total = res.data.count;
            this.data = res.data.rows;
            this.loading = false;
        })
    }
  }
}

</script>
<style scoped>
  h2 {
    margin-bottom: 20px;
  }

  #table {
      margin-bottom: 20px;
  }

  #table-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
  }
</style>