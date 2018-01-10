<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Select Fields</strong></dt>
                <dd>
                  How to use Select Fields Editable with VueJX
                </dd>
              </dl>
            </v-card-text>
            <hr class="divider" />
            <v-card-actions>
              <v-btn color="green darken-2" style="color: #ffffff;" href="https://github.com/binhthgc/vuejx">
                <v-icon>cloud_download</v-icon>
                <i class="icon--left"></i> Download example
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-card-text>
  
      </v-card>
  
      <v-tabs class="my-5">
        <v-tabs-bar class="green darken-2" dark>
          <v-tabs-item :href="'#tab-basic-select-1'">
            <v-icon>apps</v-icon> Events UpdateAPI input Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-select-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-select-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="treeViewJX">
                  <button class="button is-primary is-small" @click="addNode">
                      <span class="icon is-small" style="margin-right: 2px;">
                          <i class="fa fa-plus-circle"></i>
                      </span>
                      New Treenode
                  </button>
                <vue-tree-list :model="data" @treeaaaaaaaaaaaaaaaaaaa="treeViewAddPopup"  default-tree-node-name="new node" default-leaf-node-name="new leaf"></vue-tree-list>
                
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-select-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                &lt;div id=&quot;formInputRadio1&quot;&gt;&lt;/div&gt; <br/>
                var formInputRadio1 = new VueJX({ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  el: 'formInputRadio1', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  pk: 1, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  groupid: 20143, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  schema: { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputSLider1' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputSLider1', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputSLider1', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': "text", <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'text basic: ' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'placeholder': 'Nhập dữ liệu' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'mode': 'editable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'labelClass': 'text-bold', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'updateapi': 'https://jsonplaceholder.typicode.com/posts', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'success_msg': 'Cập nhật trường text này thành công', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Cập nhật trường text này thất bại', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'call_back_success': 'mySuccesssnackbarCall', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'call_back_error': 'mySuccesssnackbarCall', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'events': { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      mySuccesssnackbarCall: function (value) { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      console.log(value); <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      } <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  } <br/>
                }); <br/>
                formInputRadio1._builder("formInputRadio1");
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>

    </v-flex>
  </v-layout>
</template>


<script>
  import Vue from 'vue';

  export default {
      components: {
        'VueTreeList': VueTreeList.VueTreeList
      },
      data () {
        return {
          record: null,
          newTree: {},
          image: "sdf13213",
          imageinit: "sdfsdfsdfs",
          imageName:'uploadAV',
          filename: "AVATACHANGE",
          groupid: 20143,
          pk: 8,
          uploadapi: "https://jsonplaceholder.typicode.com/posts",
          deleteapi: "https://jsonplaceholder.typicode.com/posts",
          data: new VueTreeList.Tree([
            {
              name: 'Node 1',
              id: 1,
              pid: 0,
              children: [
                {
                  name: 'Node 1-2',
                  id: 2,
                  isLeaf: true,
                  pid: 1
                }
              ]
            },
            {
              name: 'Node 2',
              id: 3,
              pid: 0
            },
            {
              name: 'Node 3',
              id: 4,
              pid: 0
            }
          ])
        }
      },
      mounted: function () { 
        
        this.$on('treeViewAddPopup', function(){
          alert(123);
        }) 
      },
      methods: {
        treeViewAddPopup: function () {
          alert(3);
        },
        getTreeChange: function () {
          this.record = Object.assign({}, VueTreeList.Record)
        },

        addNode: function () {
          var node = new VueTreeList.TreeNode('new node', false)
          if (!this.data.children) this.data.children = []
          this.data.addChildren(node)

          this.data = new VueTreeList.Tree([
            {
              name: 'Node 1',
              id: 1,
              pid: 0,
              children: [
                {
                  name: 'Node 1-2',
                  id: 2,
                  isLeaf: true,
                  pid: 1
                }
              ]
            },
            {
              name: 'Node 2',
              id: 3,
              pid: 0
            }
          ])
          
        },

        getNewTree: function () {
          const vm = this
          function _dfs (oldNode) {
            let newNode = {}

            newNode.name = oldNode.name
            newNode.pid = oldNode.pid
            newNode.isLeaf = oldNode.isLeaf
            newNode.id = oldNode.id

            if (oldNode.children && oldNode.children.length > 0) {
              newNode.children = []
              for (let i = 0, len = oldNode.children.length; i < len; i++) {
                newNode.children.push(_dfs(oldNode.children[i]))
              }
            }
            return newNode
          }

          vm.newTree = _dfs(vm.data)
        }
      }
  };

</script>