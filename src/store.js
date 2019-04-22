import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentComponent: '',
    componentList: ['Checkbox', 'Accordion', 'Modal'],
    components: {
      Checkbox: {
        name: 'Checkbox',
        checked: false,
        label: 'This is a checkbox',
        disabled: false,
        defaultChecked: false,
      },
      Accordion: {
        name: 'Accordion',
        openMultiple: true,
        label: 'This is an accordion',
        isDefaultOpen: false,
        currentStateOpen: false,
      },
      Modal: {
        name: 'Modal',
        modalHeader: 'Modal',
        size: 'small',
        isScrollable: 'true',
      },
    },
  },
  getters: {
    CURRENT_COMPONENT: state => state.currentComponent,
    CHECKBOX: state => state.components.Checkbox,
    ACCORDION: state => state.components.Accordion,
    MODAL: state => state.components.Modal,
  },
  mutations: {
    SET_CURRENT_COMPONENT: (state, payload) => {
      state.currentComponent = payload;
    },
    SET_CHECKBOX: (state, payload) => {
      state.components.Checkbox = { ...payload };
    },
    SET_ACCORDION: (state, payload) => {
      state.components.Accordion = { ...payload };
    },
    SET_MODAL: (state, payload) => {
      state.components.Modal = { ...payload };
    },
  },
});
