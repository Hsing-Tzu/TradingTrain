import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import HighchartsVue from 'highcharts-vue';

import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(HighchartsVue);
app.mount('#app')

