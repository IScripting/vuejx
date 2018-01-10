<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>select-editable Editable Fields</strong></dt>
                <dd>
                  How to use select-editable Editable Fields Editable with VueJX
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
          <v-tabs-item :href="'#tab-basic-select-editable-1'">
            <v-icon>apps</v-icon> Events UpdateAPI input Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-select-editable-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-select-editable-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="formselecteditable1_template">
                  
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputselecteditable1"> </div>
                  </div>
                  
                </div>
                <div id="formselect_editable1"></div>

              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-select-editable-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
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
    data() {
      return {
        show: false,
        sac: ''
      }
    },
  
    methods: {

    },

    mounted () {
      
     var formselect_editable1 = new VueJX({
        el: 'formselect_editable1',
        jxtemplate: 'formselecteditable1_template',
        pk: 1,
        groupid: 20143,
        data: {
          'inputTextEditable': 'test input exeditable'
        },
        schema: {
          "inputselecteditable1": {
            "id": "inputselecteditable1",
            "name": "inputselecteditable1",
            "type": "select",
            "label": "label inputselecteditable1",
            "append_icon":"map",
            "item_text": "state",
            "item_value": "abbr",
            "multiple": true,
            "tags": false, //custom input not avaliable in select-editable
            "chips": true,
            "deletable_chips": true,
            "hide_selected": true,
            "loading": false,
            "no-data-text": "Lua chon selec_editableed",
            "items": [],
            "onLoad": "_initselect_editable1",
            "onKeyup": "filterRemote1($event)",
            "mode": "editable",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallEditableSelect',
            'call_back_error': 'mySuccesssnackbarCallEditableSelect',
            "events": {
              mySuccesssnackbarCallEditableSelect: function (value) {
                console.log(value);
              },
              _initselect_editable1: function(){
                
                  var url ="https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json?q=${event.target.value}";
                  axios.get(url).then((response) => {
                    var newDatas = [];
                    var index = 0;
                    for(var key in response.data){
                      newDatas.push({
                        "state": response.data[key].name,
                        "abbr": response.data[key].abbreviation,
                      });
                      
                      index = index+1;
                    }
                    this.inputselecteditable1Items = newDatas;
                    console.log(this.inputselecteditable1Items);
                  }).catch( error => { console.log(error); });

              }, 
              filterRemote1: function (event) {
                
                if (event.target.value.length > 2) {
                  
                  var url ="https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json?q=${event.target.value}";
                  axios.get(url).then((response) => {
                    var newDatas = [];
                    var index = 0;
                    for(var key in response.data){
                      newDatas.push({
                        "state": response.data[key].name,
                        "abbr": response.data[key].abbreviation,
                      });
                      
                      index = index+1;
                    }
                    this.inputselecteditable1Items = newDatas;
                    console.log(this.inputselecteditable1Items);
                  }).catch( error => { console.log(error); });
                }
              }
            }
          }
        }
      })
      var formselect_editable1Vue = new Vue({
        el: '#' + formselect_editable1.options.el,
        data: formselect_editable1.options.data,
        computed: formselect_editable1.options.computed,
        watch: formselect_editable1.options.watch,
        methods: formselect_editable1.options.methods,
        mounted: formselect_editable1.options.mountedG
      })
    }
  };

</script>