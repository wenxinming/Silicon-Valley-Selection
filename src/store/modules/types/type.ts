import type { RouteRecordRaw } from "vue-router";

//定义小仓库数据state类型
interface UserState {
    token:string|null;
    menuRoutes:RouteRecordRaw[]
}

export default UserState;