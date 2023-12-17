import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
//svg插件
import 'virtual:svg-icons-register'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import SvgIcon from "@/components/SvgIcon/index.vue";
//引入自定义插件对象：注册整个项目全局组件
import gloalComponent from '@/components';
import '@/styles/index.scss';
import router from './router'
import pinia from './store'



const app = createApp(App)

app.use(ElementPlus,{
    locale:zhCn //国际化配置
})

app.component('SvgIcon',SvgIcon)

//安装自定义组件
app.use(gloalComponent)

//安装自定义插件
app.use(pinia);
//注册模板路由
app.use(router)

app.mount('#app')
