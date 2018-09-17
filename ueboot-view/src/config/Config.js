import deepExtend from 'deep-extend';
import Log from '../utils/Log';
import AxiosConfig from './AxiosConfig';

let ueboot_config = {
    sysTitle: 'ueboot权限管理',
    logoImage: '/static/img/logo.png',
    page_login: {
        // 登录界面风格，可取值 ['theme1','theme2']
        theme: 'theme2',
        //登录成功后的跳转路径
        successRouter:{path:'/'},
        //logo图片行内样式
        logoStyle:'width:100px;height:100px;',
        bgImage:'@/asserts/graphic3.svg',
        formTitle:'系统登录'
    },
    page_main: {
        menuWidth:'200px',
        logoStyle: {
            minWidth: '250px'
        },
        //右侧风格，下拉模式或者横向模式
        rightTheme:'dropdown',
        rightStyle: {
            minWidth: '100px'
        },
        dropdown:{
            //item内容，默认两个item，并且会添加对应的事件，如果需要自定义item或者替换默认的item
            //可以重载当前对象即可，要求name唯一且系统默认的两个菜单如果需要使用，请保持名字不变
            items:[
                {name:'修改密码',disabled:false,divided:false,icon:'md-create'},
                {name:'退出系统',disabled:false,divided:false,icon:'md-exit'}
            ],
            //头像图标，icon和src二选一
            avatar:{
                icon:'ios-person',
                src:'',
                style:null
            }
           
        },
        //退出登录成功后跳转的路由配置
        logoutSuccessRouter:{name:'Login'}
    },
    axios: {
        baseURL:'',
        unauthorizedUrl:'/#/login'
    },
    //日志级别，使用this.$log.d()这种方式记录日志时的级别
    log:{
        level:3,
    }
};

/**
 * 对外提供配置入口，针对Main页面上的一些参数可以进行配置化
 */
export default {
    setConfig(conf) {
        ueboot_config = deepExtend({},ueboot_config, conf );
        //设置log级别
        Log.config(ueboot_config.log);
        //设置axios配置
        AxiosConfig.init(ueboot_config.axios);

    },
    getConfig() {
        return ueboot_config;
    }

};
