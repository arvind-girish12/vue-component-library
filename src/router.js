import Vue from 'vue';
import Router from 'vue-router';
import AccordionView from './views/AccordionView.vue';
import CheckboxView from './views/CheckboxView.vue';
import InputView from './views/InputView.vue';
import ModalView from './views/ModalView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AccordionView,
    },
    {
      path: '/accordion',
      name: 'AccordionView',
      component: AccordionView,
    },
    {
      path: '/input',
      name: 'InputView',
      component: InputView,
    },
    {
      path: '/checkbox',
      name: 'CheckboxView',
      component: CheckboxView,
    },
    {
      path: '/modal',
      name: 'ModalView',
      component: ModalView,
    },
  ],
});
