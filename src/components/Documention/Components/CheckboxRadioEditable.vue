<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Checkbox & Radio Editable Fields</strong></dt>
                <dd>
                  How to use Checkbox & Radio Fields Editable with VueJX
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
          <v-tabs-item :href="'#tab-basic-updateapi-mode-1'">
            <v-icon>apps</v-icon> Events UpdateAPI input Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-updateapi-mode-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-updateapi-mode-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="formInputRadioEditable2_template">
                  
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputRadioEditableMode1"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputCheckBoxEditableMode1"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputSwitchEditableMode1"> </div>
                  </div>
                  
                </div>
                <div id="formInputRadioEditable2"></div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-updateapi-mode-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
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
      
     var forminputRadioEditableMode1 = new VueJX({
        el: 'formInputRadioEditable2',
        jxtemplate: 'formInputRadioEditable2_template',
        pk: 1,
        groupid: 20143,
        data: {
          'inputTextEditable': 'test input exeditable'
        },
        schema: {
          "inputRadioEditableMode1": {
            "id": "inputRadioEditableMode1",
            "name": "inputRadioEditableMode1",
            "type": "radio",
            "label": "inputRadioEditableMode1: ",
            "labelClass": "xs3 text-bold",
            "controlClass": "xs9",
            "switch_inline": true,
            "hide_details": true,
            "tabindex": 0,
            "items": [
              {
                "label": "yes",
                "color": "red",
                "value": "red",
              },
              {
                "label": "no",
                "color": "indigo",
                "value": "indigo",
              },
              {
                "label": "no2",
                "color": "warning",
                "value": "warning",
              }
            ],
            'mode': 'editable',
            "onLoad": "_initRadioboxEditableMode1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdate',
            'call_back_error': 'mySuccesssnackbarCallUpdate',
            "events": {
              mySuccesssnackbarCallUpdate: function (value) {
                console.log(this.inputRadioEditableMode1);
                console.log(value);
              },
              _initRadioboxEditableMode1: function(){
                
                  this.inputRadioEditableMode1 = "red";

              }
            }
          },
          "inputCheckBoxEditableMode1": {
            "id": "inputCheckBoxEditableMode1",
            "name": "inputCheckBoxEditableMode1",
            "type": "checkbox",
            "label": "inputCheckBoxEditableMode1: ",
            "labelClass": "xs3 text-bold",
            "controlClass": "xs9",
            "switch_inline": true,
            "hide_details": true,
            "tabindex": 0,
            "items": [
              {
                "label": "yes",
                "color": "red",
                "value": "red",
              },
              {
                "label": "no",
                "color": "indigo",
                "value": "indigo",
              },
              {
                "label": "no2",
                "color": "warning",
                "value": "warning",
              }
            ],
            'mode': 'editable',
            "onLoad": "_initinputCheckBoxEditableMode1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdateCheckBoxMode1',
            'call_back_error': 'mySuccesssnackbarCallUpdateCheckBoxMode1',
            "events": {
              mySuccesssnackbarCallUpdateCheckBoxMode1: function (value) {
                console.log(this.inputCheckBoxEditableMode1);
                console.log(value);
              },
              _initinputCheckBoxEditableMode1: function(){
                
                  this.inputCheckBoxEditableMode1 = [];

              }
            }
          },
          "inputSwitchEditableMode1": {
            "id": "inputSwitchEditableMode1",
            "name": "inputSwitchEditableMode1",
            "type": "switch",
            "label": "inputSwitchEditableMode1: ",
            "labelClass": "xs3 text-bold",
            "controlClass": "xs9",
            "switch_inline": false,
            "hide_details": true,
            "tabindex": 0,
            "items": [
              {
                "label": "yes",
                "color": "red",
                "value": "red",
              },
              {
                "label": "no",
                "color": "indigo",
                "value": "indigo",
              },
              {
                "label": "no2",
                "color": "warning",
                "value": "warning",
              }
            ],
            'mode': 'editable',
            "onLoad": "_initinputSwitchEditableMode1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdateSwitchMode1',
            'call_back_error': 'mySuccesssnackbarCallUpdateSwitchMode1',
            "events": {
              mySuccesssnackbarCallUpdateSwitchMode1: function (value) {
                console.log(this.inputSwitchEditableMode1);
                console.log(value);
              },
              _initinputSwitchEditableMode1: function(){
                
                  this.inputSwitchEditableMode1 = [];

              }
            }
          }
        }
      })
      var forminputRadioEditableMode1Vue = new Vue({
        el: '#' + forminputRadioEditableMode1.options.el,
        data: forminputRadioEditableMode1.options.data,
        computed: forminputRadioEditableMode1.options.computed,
        watch: forminputRadioEditableMode1.options.watch,
        methods: forminputRadioEditableMode1.options.methods,
        mounted: forminputRadioEditableMode1.options.mountedG
      })
    }
  };

</script>