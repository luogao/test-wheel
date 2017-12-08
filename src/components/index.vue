
<template>
  <v-app id="inspire">
    <v-navigation-drawer persistent clipped app v-model="drawer">
      <v-list dense>
        <template v-for="(item, i) in items">
          <v-layout row v-if="item.heading" align-center :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model">
            <v-list-tile slot="item">
              <v-list-tile-action>
                <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
              <div class="list-children-counter elevation-2">
                {{item.children.length}}
              </div>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" ripple :to="child.link?child.link:''">
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else ripple :to="'/'">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-3" dark app clipped-left fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        Wheel
      </v-toolbar-title>
      <v-text-field solo prepend-icon="search" placeholder="搜索"></v-text-field>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <router-view></router-view>
          </v-layout>
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: 'home', text: '主页', link: '/' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: '方法',
        model: false,
        children: [
          { icon: 'list', text: '逐个加载的列表',link:'/dynamicList'},
          { icon: 'ac_unit', text: '雪花',link:'/snow'},
          { icon: 'settings_overscan', text: '检测鼠标滑入滑出方向' },
          { icon: 'view_module', text: 'Grid' ,link:'/grid'}
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: '组件',
        model: true,
        children: [
          { icon: 'alarm', text: '计时器', link: '/countUp' },
          { icon: 'center_focus_weak', text: '条形码/二维码', link: '/qrBarcode' },
          { icon: 'camera_alt', text: '拍照上传组件', link: '/photoFileUploader' },
          { icon: 'compare_arrows', text: '侧边滑块', link: '/sideBlock' }
        ]
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: '样式',
        model: false,
        children: [
          { icon: 'loop', text: '样式', link: '/css' },
        ]
      }
    ]
  })
}
</script>
<style lang="scss">
.list-children-counter {
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #fff;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
  /* .slide-fade-leave-active for <2.1.8 */
  transform: translateX(10px);
  opacity: 0;
}
</style>