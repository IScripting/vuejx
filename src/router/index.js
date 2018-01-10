import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Documention from '@/components/Documention/Documention'
import GettingStart from '@/components/Documention/GettingStart/GettingStart'
import Input from '@/components/Documention/Components/Input'
import InputEditable from '@/components/Documention/Components/InputEditable'
import DateTime from '@/components/Documention/Components/DateTime'
import DateTimeEditable from '@/components/Documention/Components/DateTimeEditable'
import SliderRating from '@/components/Documention/Components/SliderRating'
import CheckboxRadio from '@/components/Documention/Components/CheckboxRadio'
import CheckboxRadioEditable from '@/components/Documention/Components/CheckboxRadioEditable'
import Select from '@/components/Documention/Components/Select'
import SelectEditable from '@/components/Documention/Components/SelectEditable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/documention',
      component: Documention,
      children: [
      	{
        	path: 'getting_start',
          component: GettingStart
        },
        {
        	path: 'input',
          component: Input
        },
        {
          path: 'input_editable',
          component: InputEditable
        },
        {
          path: 'date_time',
          component: DateTime
        },
        {
          path: 'date_time_edit',
          component: DateTimeEditable
        },
        {
          path: 'slider_rating',
          component: SliderRating
        },
        {
          path: 'checkbox_radio',
          component: CheckboxRadio
        },
        {
          path: 'checkbox_radio_editable',
          component: CheckboxRadioEditable
        },
        {
          path: 'select',
          component: Select
        },
        {
          path: 'select_editable',
          component: SelectEditable
        }
      ]
    }
  ],
  mode: 'history'
})
