<template>
<div class="layout">
  <Layout :style="{minHeight: '100vh'}">
    <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
        <MenuItem name="1-1">
          <Icon type="ios-bug-outline" />
          <span>管理</span>
        </MenuItem>
        <MenuItem name="1-2">
          <Icon type="ios-folder-open-outline" />
          <span>列表</span>
        </MenuItem>
        <MenuItem name="1-3">
        <Icon type="ios-build-outline" />
        <span>配置</span>
        </MenuItem>
      </Menu>
    </Sider>
    <Layout>
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <h2>管理后台</h2>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>{{location}}</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <router-view></router-view>
        </Card>
      </Content>
    </Layout>
  </Layout>
</div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: false
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      location: function() {
        return this.$route.name;
      }
    }
  }

</script>

<style>
  .layout {
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }

  .menu-item i {
    vertical-align: middle;
    font-size: 18px;
  }

  .collapsed-menu span {
    width: 0px;
  }

</style>
