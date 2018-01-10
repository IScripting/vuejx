<template>
  <v-layout row>
    <v-flex xs12 sm12>
      <v-card class="card--flat green lighten-4">
        <v-card-text>
          <v-card class="section-def__card">
  
            <v-card-text>
              <dl>
                <dt><strong>Started</strong></dt>
                <dd>
                  How to use VueJX in HTML javascript
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
          <v-tabs-item v-for="i in 1" :key="i" :href="'#tab-' + i">
            <v-icon>link</v-icon> #1 Copy the following into the <code class="mx-2"> &lt;head/&gt; </code> block of your web page:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
            <v-card flat>
              <v-card-text>
  
                &lt;!-- vuejs --&gt;
                <br> &lt;script type=&quot;text/javascript&quot; src=&quot;js/axios.min.js&quot;&gt;&lt;/script&gt;
                <br> &lt;script type=&quot;text/javascript&quot; src=&quot;js/vue.min.js&quot;&gt;&lt;/script&gt;
                <br> &lt;script type=&quot;text/javascript&quot; src=&quot;js/vuejx.js&quot;&gt;&lt;/script&gt;
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>
  
      <v-tabs class="my-5">
        <v-tabs-bar class="green darken-2" dark>
          <v-tabs-item v-for="i in 1" :key="i" :href="'#tab-' + i">
            <v-icon>link</v-icon> #2 Call <code class="mx-2"> new VueJX({}) </code> with your form schema and any configuration:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content v-for="i in 2" :key="i" :id="'tab-' + i">
            <v-card flat>
              <v-card-text>
                &lt;div id=&quot;form1&quot;&gt;&lt;/div&gt;
                <br> &lt;script type=&quot;text/javascript&quot;&gt;
                <br> var form1 = new VueJX({
                <br>
                <br> });
                <br> &lt;/script&gt;
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>
  
      <v-tabs class="my-5">
        <v-tabs-bar class="green darken-2" dark>
          <v-tabs-item href="#tab-3-1">
            <v-icon>link</v-icon> #3 Enjoy your newly rendered VueJX form!:
          </v-tabs-item>
          <v-tabs-item href="#tab-3-2">
            <v-icon>link</v-icon> #4 View Source Code:
          </v-tabs-item>
          <v-tabs-slider color="yellow"></v-tabs-slider>
        </v-tabs-bar>
        <v-tabs-items>
          <v-tabs-content id="tab-3-1">
            <v-card flat>
              <v-card-text>
                
              </v-card-text>
            </v-card>
          </v-tabs-content>
          <v-tabs-content id="tab-3-2">
            <v-card flat>
              <v-card-text>
                sfdsdf123123
              </v-card-text>
            </v-card>
          </v-tabs-content>
        </v-tabs-items>
      </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {
    data() {
      return {
        
      }
    },
  
    methods: {}
  };

</script>