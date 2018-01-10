<template>
  <v-layout wrap>
  
    <v-navigation-drawer hide-overlay dark v-model="drawerLeftMenu">
      <v-list>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title">
          <v-list-tile slot="item">
            <v-list-tile-action>
              <v-icon>{{ item.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>keyboard_arrow_down</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" router :to="subItem.link" :value="subItem.id == selected" v-bind:key="subItem.title"
            @click="navSelected(subItem.id)">
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ subItem.title }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon color="yellow darken-2" v-if="subItem.id == selected">star</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
  
    </v-navigation-drawer>
  
    <v-layout class="view jx-content">
      <v-fab-transition>
        <v-btn @click.stop="drawerLeftMenu = !drawerLeftMenu" v-show="!drawerLeftMenu" color="green darken-2" fixed top right fab
          ripple style="margin-top: 60px;">
          <v-icon style="color: #ffffff;">menu</v-icon>
        </v-btn>
      </v-fab-transition>
      <transition name="slide-x-transition">
        <router-view class="jx-content-wrap"></router-view>
      </transition>
  
    </v-layout>
  
  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
        drawerLeftMenu: true,
        selected: 1,
        items: [
          {
            action: 'local_activity',
            title: 'Getting started',
            active: true,
            items: [
              {
                id: 1,
                title: 'How do I use VueJX',
                action: 'settings_ethemet',
                link: '/documention/getting_start'
              }
            ]
          },
          {
            action: 'devices',
            title: 'Layout Template',
            items: [
              {
                id: 2,
                title: 'Login Example',
                action: 'looks_one',
                link: '/documention/login_template'
              },
              {
                id: 3,
                title: 'Register Example',
                action: 'looks_two',
                link: '/documention/register_template'
              },
              {
                id: 4,
                title: 'Rich Form Example',
                action: 'looks_3',
                link: '/documention/rich_template'
              }
            ]
          },
          {
            action: 'widgets',
            title: 'Components',
            items: [
              {
                id: 5,
                title: 'Input',
                action: 'navigate_next',
                link: '/documention/input'
              },
              {
                id: 6,
                title: 'Input Editable',
                action: 'navigate_next',
                link: '/documention/input_editable'
              },
              {
                id: 7,
                title: 'Date Time',
                action: 'navigate_next',
                link: '/documention/date_time'
              },
              {
                id: 8,
                title: 'DateTime Editable',
                action: 'navigate_next',
                link: '/documention/date_time_edit'
              },
              {
                id: 9,
                title: 'Slider & Rating',
                action: 'navigate_next',
                link: '/documention/slider_rating'
              },
              {
                id: 10,
                title: 'Checkbox & Radio',
                action: 'navigate_next',
                link: '/documention/checkbox_radio'
              },
              {
                id: 11,
                title: 'Chk & Radio Editable',
                action: 'navigate_next',
                link: '/documention/checkbox_radio_editable'
              },
              {
                id: 12,
                title: 'Select',
                action: 'navigate_next',
                link: '/documention/select'
              },
              {
                id: 13,
                title: 'Select Editable',
                action: 'navigate_next',
                link: '/documention/select_editable'
              }
            ]
          },
          {
            action: 'developer_board',
            title: 'Rich Components',
            items: [
              {
                id: 14,
                title: 'Dialog',
                action: 'navigate_next',
                link: '/documention/dialog'
              },
              {
                id: 15,
                title: 'FileUpload',
                action: 'navigate_next',
                link: '/documention/file_upload'
              },
              {
                id: 16,
                title: 'TreeView',
                action: 'navigate_next',
                link: '/documention/tree_view'
              },
              {
                id: 17,
                title: 'ListView',
                action: 'navigate_next',
                link: '/documention/list_view'
              }
            ]
          }
        ]
      }
    },
  
    methods: {
      navSelected(index) {
        this.selected = index
      }
    }
  }
</script>