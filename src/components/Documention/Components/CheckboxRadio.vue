<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Checkbox & Radio Fields</strong></dt>
                <dd>
                  How to use Checkbox & Radio Fields with VueJX
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
          <v-tabs-item :href="'#tab-basic-1'">
            <v-icon>apps</v-icon> Basic input Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="formInputRadio1_template">
                  
                  <div class="layout row wrap">
                    <div class="flex xs6" jx-bind="inputRadio1"> </div>
                    <div class="flex xs6" jx-bind="inputRadio2"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs6" jx-bind="fullCheckbox1"> </div>
                    <div class="flex xs6" jx-bind="fullCheckbox2"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs6" jx-bind="fullSwitches1"> </div>
                    <div class="flex xs6" jx-bind="fullSwitches2"> </div>
                  </div>
                  
                </div>
                <div id="formInputRadio1"></div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
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
  
      <v-tabs class="my-5">
        <v-tabs-bar class="green darken-2" dark>
          <v-tabs-item :href="'#tab-basic-updateapi-1'">
            <v-icon>apps</v-icon> Events UpdateAPI input Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-updateapi-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-updateapi-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="formInputRadio2_template">
                  
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputRadioEditable1"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputCheckBoxEditable1"> </div>
                  </div>
                  <div class="layout row wrap">
                    <div class="flex xs12" jx-bind="inputSwitchEditable1"> </div>
                  </div>
                  
                </div>
                <div id="formInputRadio2"></div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-updateapi-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
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
      var formInputRadio1 = new VueJX({
        el: 'formInputRadio1',
        jxtemplate: 'formInputRadio1_template',
        pk: 1,
        groupid: 20143,
        data: [
          
        ],
        schema: {
          "inputRadio1": {
            "id": "inputRadio1",
            "name": "inputRadio1",
            "type": "radio",
            "label": "inputRadio1: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_inline": true,
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
            "onLoad": "_initRadiobox1",
            "onChange": "changeRadiobox",
            "events": {
              _initRadiobox1: function(){
                
                  this.inputRadio1 = "red";
                  var result = this.inputRadio1Items.filter(x => x.value === 'indigo');
                  console.log(result);
              },
              changeRadiobox: function(){
                this.inputRadio1 = "warning";
                console.log(this.inputRadio1);
              }
            }
          },
          "inputRadio2": {
            "id": "inputRadio2",
            "name": "inputRadio2",
            "type": "radio",
            "label": "inputRadio2: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_inline": false,
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
            "onLoad": "_initRadiobox2",
            "onChange": "changeRadiobox2",
            "events": {
              _initRadiobox2: function(){
                
                  this.inputRadio2 = "red";

              },
              changeRadiobox2: function(){
                console.log(this.inputRadio2);
              }
            }
          },
          "fullCheckbox1": {
            "id": "fullCheckbox1",
            "name": "fullCheckbox1",
            "type": "checkbox",
            "label": "fullCheckbox1: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_inline": true,
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
            "onLoad": "_initCheckbox1",
            "onChange": "changeCheckbox1",
            "events": {
              _initCheckbox1: function(){
                
                
                this.fullCheckbox1 = [ "red", "indigo"];


              },
              changeCheckbox1: function(){
                console.log(this.fullCheckbox1);
              }
            }
          },
          "fullCheckbox2": {
            "id": "fullCheckbox2",
            "name": "fullCheckbox2",
            "type": "checkbox",
            "label": "fullCheckbox2: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_inline": false,
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
            "onLoad": "_initCheckbox2",
            "onChange": "changeCheckbox2",
            "events": {
              _initCheckbox2: function(){
                
                
                  this.fullCheckbox2 = [ "red", "indigo"];


              },
              changeCheckbox2: function(){
                console.log(this.fullCheckbox2);
              }
            }
          },
          "fullSwitches1": {
            "id": "fullSwitches1",
            "name": "fullSwitches1",
            "type": "switch",
            "label": "feel good !: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_right": true,
            "switch_inline": true,
            "prepend_icon":"map",
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
            "onLoad": "_initSwitch1",
            "onChange": "changeSwitch1",
            "events": {
              _initSwitch1: function(){
                
                  this.fullSwitches1 = [ "red", "indigo"];

              },
              changeSwitch1: function(){
                console.log(this.fullSwitches1);
              }
            }
          },
          "fullSwitches2": {
            "id": "fullSwitches2",
            "name": "fullSwitches2",
            "type": "switch",
            "label": "feel good !: ",
            "labelClass": "xs2",
            "controlClass": "xs10",
            "switch_right": true,
            "switch_inline": false,
            "prepend_icon":"map",
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
            "onLoad": "_initSwitch2",
            "onChange": "changeSwitch2",
            "events": {
              _initSwitch2: function(){
                
                  this.fullSwitches2 = [ "red", "indigo"];

              },
              changeSwitch2: function(){
                console.log(this.fullSwitches2);
              }
            }
          }
        }
      })
      var formInputRadio1Vue = new Vue({
        el: '#' + formInputRadio1.options.el,
        data: formInputRadio1.options.data,
        computed: formInputRadio1.options.computed,
        watch: formInputRadio1.options.watch,
        methods: formInputRadio1.options.methods,
        mounted: formInputRadio1.options.mountedG
      })
     var formInputRadioEditable1 = new VueJX({
        el: 'formInputRadio2',
        jxtemplate: 'formInputRadio2_template',
        pk: 1,
        groupid: 20143,
        data: {
          'inputTextEditable': 'test input exeditable'
        },
        schema: {
          "inputRadioEditable1": {
            "id": "inputRadioEditable1",
            "name": "inputRadioEditable1",
            "type": "radio",
            "label": "inputRadioEditable1: ",
            "labelClass": "xs3",
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
            "onLoad": "_initRadioboxEditable1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdate',
            'call_back_error': 'mySuccesssnackbarCallUpdate',
            "events": {
              mySuccesssnackbarCallUpdate: function (value) {
                console.log(this.inputRadioEditable1);
                console.log(value);
              },
              _initRadioboxEditable1: function(){
                
                  this.inputRadioEditable1 = "red";

              }
            }
          },
          "inputCheckBoxEditable1": {
            "id": "inputCheckBoxEditable1",
            "name": "inputCheckBoxEditable1",
            "type": "checkbox",
            "label": "inputCheckBoxEditable1: ",
            "labelClass": "xs3",
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
            "onLoad": "_initCheckBoxEditable1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdateCheckBox',
            'call_back_error': 'mySuccesssnackbarCallUpdateCheckBox',
            "events": {
              mySuccesssnackbarCallUpdateCheckBox: function (value) {
                console.log(this.inputCheckBoxEditable1);
                console.log(value);
              },
              _initCheckBoxEditable1: function(){
                
                  this.inputCheckBoxEditable1 = [];

              }
            }
          },
          "inputSwitchEditable1": {
            "id": "inputSwitchEditable1",
            "name": "inputSwitchEditable1",
            "type": "switch",
            "label": "inputSwitchEditable1: ",
            "labelClass": "xs3",
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
            "onLoad": "_initSwitchEditable1",
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCallUpdateSwitch',
            'call_back_error': 'mySuccesssnackbarCallUpdateSwitch',
            "events": {
              mySuccesssnackbarCallUpdateSwitch: function (value) {
                console.log(this.inputSwitchEditable1);
                console.log(value);
              },
              _initSwitchEditable1: function(){
                
                  this.inputSwitchEditable1 = [];

              }
            }
          }
        }
      })
      var formInputRadioEditable1Vue = new Vue({
        el: '#' + formInputRadioEditable1.options.el,
        data: formInputRadioEditable1.options.data,
        computed: formInputRadioEditable1.options.computed,
        watch: formInputRadioEditable1.options.watch,
        methods: formInputRadioEditable1.options.methods,
        mounted: formInputRadioEditable1.options.mountedG
      })
    }
  };

</script>