<!-- Manage -->
<template>
  <div>
      <h2>管理</h2> 
      <Table :columns="column" :data="data"></Table>
  </div>
</template>

<script>
export default {
  name: 'Manage',
    data() {
      return {
        msg: 'msg',
        column: [{
            title: '商铺名称',
            key: 'shopName'
          },
          {
            title: '商铺评分',
            key: 'shopPower'
          },
          {
            title: '地段',
            key: 'mainRegionName'
          },
          {
            title: '类别',
            key: 'mainCategoryName'
          },
          {
            title: '口味评分',
            key: 'tasteScore'
          },
          {
            title: '环境评分',
            key: 'environmentScore'
          },
          {
            title: '服务评分',
            key: 'serviceScore'
          },
          {
            title: '人均消费',
            key: 'avgPrice'
          },
          {
            title: '商铺地址',
            key: 'shopAddress'
          },
          {
            title: '城市',
            key: 'city'
          }
        ],
        data: [{
            Id: 6300,
            shopUrl: "http://www.dianping.com/shop/98947958",
            shopName: "北京羲和雅苑烤鸭坊",
            shopId: "98947958",
            shopPower: "50",
            mainRegionName: "碑林区",
            mainCategoryName: "烤鸭",
            tasteScore: "91",
            environmentScore: "93",
            serviceScore: "91",
            avgPrice: "157",
            shopAddress: "长安北路261号SKP百货12层A1203",
            defaultPic: "https://img.meituan.net/msmerchant/1ca63a561c8400a2aa9d681368c8d7cf1343083.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D0",
            city: "西安",
            updatedAt: "2019-01-26T08:20:50.000Z",
            createdAt: "2019-01-26T08:20:50.000Z"
          },
          {
            Id: 6299,
            shopUrl: "http://www.dianping.com/shop/107282531",
            shopName: "Ice Monster·CNN评选全球十大甜品",
            shopId: "107282531",
            shopPower: "45",
            mainRegionName: "红庙坡",
            mainCategoryName: "冰淇淋",
            tasteScore: "87",
            environmentScore: "91",
            serviceScore: "91",
            avgPrice: "54",
            shopAddress: "星火路老城根Gpark负一层东北角篮球场旁",
            defaultPic: "https://img.meituan.net/msmerchant/b3296412bbc45afab963c55b87b75dc644231.jpg%40249w_249h_1e_1c_1l%7Cwatermark%3D0",
            city: "西安",
            updatedAt: "2019-01-26T08:20:50.000Z",
            createdAt: "2019-01-26T08:20:50.000Z"
          }]
        };
      },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
  h2 {
    margin-bottom: 20px;
  }
</style>