
import Vue from 'vue';
import { Input } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ZtqDcInput from './src/input.vue'
Vue.config.productionTip = false;

Vue.component(Input.name, Input);

Vue.use(Input);

ZtqDcInput.install = Vue => {
  Vue.component(ZtqDcInput.name, ZtqDcInput)
}

export default ZtqDcInput
