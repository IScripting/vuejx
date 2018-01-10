<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Editable DateTime Fields</strong></dt>
                <dd>
                  How to use Editable DateTime Fields with VueJX
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
          <v-tabs-item :href="'#tab-basic-datetime-1'">
            <v-icon>apps</v-icon> Basic DateTime Field:
          </v-tabs-item>
          <v-tabs-item :href="'#tab-basic-datetime-2'">
            <v-icon>create</v-icon> JSON Configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content :id="'tab-basic-datetime-1'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                <div id="formDateTimeEditable1_template">

                </div>
                <div id="formDateTimeEditable1"></div>
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content :id="'tab-basic-datetime-2'" reverse-transition="slide-y-transition" transition="slide-y-transition">
            <v-card flat>
              <v-card-text>
                &lt;div id=&quot;formDateTimeEditable1&quot;&gt;&lt;/div&gt; <br/>
                var formDateTimeEditable1 = new VueJX({ <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  el: 'formDateTimeEditable1', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  pk: 1, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  groupid: 20143, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  schema: { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputDateBasicEditable' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputDateBasicEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputDateBasicEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': "date", <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'date basic: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': 'date', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'Date Basic: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'placeholder': 'ngày... tháng... năm...', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'append_icon':'event', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'date_format': '${day}/${month}/${year}', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'date_parser': '${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputMonthBasicEditable' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputMonthBasicEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputMonthBasicEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': 'month', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'inputMonthBasicEditable: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'placeholder': 'ngày... tháng... năm...', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'append_icon':'event', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'date_format': '${month}/${year}', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'date_parser': '${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    }, <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    'inputHourEmailEditable' : { <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'id': 'inputHourEmailEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'name': 'inputHourEmailEditable', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'type': 'time', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'label': 'Hour: ', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'append_icon':'access_time', <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      'format': '24hr' <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    } <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;  } <br/>
                }); <br/>
                formDateTimeEditable1._builder("formDateTimeEditable1");
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
      var formDateTimeEditable1 = new VueJX({
        el: 'formDateTimeEditable1',
        jxtemplate: 'formDateTimeEditable1_template',
        pk: 1,
        groupid: 20143,
        data: {
          
        },
        schema: {
          'inputDateBasicEditable' : {
            'id': 'inputDateBasicEditable',
            'name': 'inputDateBasicEditable',
            'type': 'date',
            'label': 'Date Basic: ',
            'placeholder': 'ngày... tháng... năm...',
            'append_icon':'event',
            'date_format': '${day}/${month}/${year}',
            'date_parser': '${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'call_back_success': 'mySuccesssnackbarCall',
            'call_back_error': 'mySuccesssnackbarCall',
            'onClick': 'dateChangeDate',
            'events': {
              mySuccesssnackbarCall: function (value) {
                console.log(value);
              },
              dateChangeDate: function () {
                console.log(' --> onChange: inputDateBasic: ' + this.inputDateBasicEditable);
              }
            }
          },
          'inputMonthBasicEditable' : {
            'id': 'inputMonthBasicEditable',
            'name': 'inputMonthBasicEditable',
            'type': 'month',
            'label': 'inputMonthBasicEditable: ',
            'placeholder': 'ngày... tháng... năm...',
            'append_icon':'event',
            'date_format': '${month}/${year}',
            'date_parser': '${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'onClick': 'dateChangeMonth',
            'events': {
              dateChangeMonth: function () {
                console.log(' --> onChange: inputDateBasic: ' + this.inputMonthBasicEditable);
              }
            }
          },
          'inputHourEmailEditable' : {
            'id': 'inputHourEmailEditable',
            'name': 'inputHourEmailEditable',
            'type': 'time',
            'label': 'Hour: ',
            'append_icon':'access_time',
            'mode': 'editable',
            'labelClass': 'text-bold xs12 sm2',
            'controlClass': 'xs12 sm10',
            'updateapi': 'https://jsonplaceholder.typicode.com/posts',
            'success_msg': 'Cập nhật trường text này thành công',
            'error_msg': 'Cập nhật trường text này thất bại',
            'onClick': 'dateChangeTime',
            'events': {
              dateChangeTime: function () {
                console.log(' --> onChange: inputDateBasic: ' + this.inputHourEmailEditable);
              }
            }
          }
        }
      })
      var formDateTimeEditable1Vue = new Vue({
        el: '#' + formDateTimeEditable1.options.el,
        data: formDateTimeEditable1.options.data,
        computed: formDateTimeEditable1.options.computed,
        watch: formDateTimeEditable1.options.watch,
        methods: formDateTimeEditable1.options.methods,
        mounted: formDateTimeEditable1.options.mountedG
      })

    }
  };

</script>