<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Editable Input Fields</strong></dt>
                <dd>
                  How to use Editable Input Fields with VueJX
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
                <div id="defaultEditable_template"></div>
                <div id="formInputEditable1"></div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                &lt;div id=&quot;formInputEditable1&quot;&gt;&lt;/div&gt; <br/>
                var formInputEditable1 = new VueJX({ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  el: 'formInputEditable1', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  pk: 1, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  groupid: 20143, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  schema: { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputTextBasic' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputTextBasic', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputTextBasic', <br/>
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputNumberBasic' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputNumberBasic', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputNumberBasic', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': "number", <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'inputNumberBasic: ' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Giá trị bắt buộc phải là kiểu số!' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'mode': 'editable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'labelClass': 'text-bold', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'updateapi': 'https://jsonplaceholder.typicode.com/posts', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'success_msg': 'Cập nhật trường text này thành công', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Cập nhật trường text này thất bại', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputTextEmail' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputTextEmail', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputTextEmail', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': 'email', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'password validator: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Địa chỉ email sai định dạng!', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'mode': 'editable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'labelClass': 'text-bold', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'updateapi': 'https://jsonplaceholder.typicode.com/posts', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'success_msg': 'Cập nhật trường text này thành công', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Cập nhật trường text này thất bại', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputTextArea' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputTextArea', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputTextArea', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': 'text', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'inputTextArea: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'multi_line': true, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'required': true <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'mode': 'editable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'labelClass': 'text-bold', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'updateapi': 'https://jsonplaceholder.typicode.com/posts', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'success_msg': 'Cập nhật trường text này thành công', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'error_msg': 'Cập nhật trường text này thất bại', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    } <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  } <br/>
                }); <br/>
                formInputEditable1._builder("formInputEditable1");
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
      var formInputEditable1 = new VueJX({
        el: 'formInputEditable1',
        jxtemplate: 'defaultEditable_template',
        pk: 1,
        groupid: 20143,
        data: {
          'inputTextEditable': 'test input exeditable'
        },
        schema: {
          'inputTextBasic' : {
            'id': 'inputTextBasic',
            'name': 'inputTextBasic',
            'type': 'text',
            'label': 'Text Basic: ',
            'placeholder': 'Nhập dữ liệu',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCall',
            'call_back_error': 'mySuccesssnackbarCall',
            'events': {
              mySuccesssnackbarCall: function (value) {
                console.log(value);
              }
            }
          },
          'inputNumberBasic' : {
            'id': 'inputNumberBasic',
            'name': 'inputNumberBasic',
            'type': 'number',
            'label': 'inputNumberBasic: ',
            'error_msg': 'Giá trị bắt buộc phải là kiểu số!',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại'
          },
          'inputTextEmail' : {
            'id': 'inputTextEmail',
            'name': 'inputTextEmail',
            'type': 'email',
            'label': 'Email: ',
            'error_msg': 'Địa chỉ email sai định dạng!',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại'
          },
          'inputTextArea' : {
            'id': 'inputTextArea',
            'name': 'inputTextArea',
            'type': 'text',
            'label': 'Text inputTextArea: ',
            'multi_line': true,
            'required': true,
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại'
          }
        }
      })
      var formInputEditable1Vue = new Vue({
        el: '#' + formInputEditable1.options.el,
        data: formInputEditable1.options.data,
        computed: formInputEditable1.options.computed,
        watch: formInputEditable1.options.watch,
        methods: formInputEditable1.options.methods,
        mounted: formInputEditable1.options.mountedG
      })
     
    }
  };

</script>