<script setup>
import { ref } from 'vue';
import router from '@/router';

const handleSelect = (key) => {
  activeIndex.value = key
}
const handleCommand = (command) => {
  router.push(command)
}

const activeIndex = ref('/home')
</script>

<template>
    <el-container class="layout-container">
        <el-header>
            <div class="left">
                <img src="@/assets/image(1).png" alt="logo" class="logo">
                <span class="title">四川大学青少年灾后心理创伤危机管理系统</span>
            </div>
            <div class="menu-containre">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#F5F5F5"
                    router :ellipsis="false" @select="handleSelect">
                    <el-menu-item index="/home" style="font-size: 20px;">
                        首页
                    </el-menu-item>
                    <el-menu-item index="/status" style="font-size: 20px;">
                        心理状态
                    </el-menu-item>
                    <el-menu-item index="/details" style="font-size: 20px;">
                        学生详情
                    </el-menu-item>
                    <el-menu-item index="/suggestions" style="font-size: 20px;">
                        干预建议
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="zhanwei">
            </div>
            <div class="user-icon">
                <el-dropdown @command="handleCommand">
                    <img src="@/assets/image2.png" alt="User Icon">
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>姓名：张三</el-dropdown-item>
                            <el-dropdown-item>工号：20211414</el-dropdown-item>
                            <el-dropdown-item>班级：一年三班</el-dropdown-item>
                            <el-dropdown-item >邮箱：1527070@qq.com</el-dropdown-item>
                            <el-dropdown-item >手机号：152707011111</el-dropdown-item>
                            <el-dropdown-item divided command="/login">切换账号</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style lang="scss">
.layout-container {
    height: 100vh;
}

.left {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.el-header {
    height: 70px;
    padding: 10px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.el-menu-demo {
    font-size: 20px;
}

.submenu {
    font-size: 12px;
}

.el-menu-item.is-active {
    background-color: transparent !important; // 激活时背景颜色
}

.el-menu-item:hover {
    background-color: transparent !important; // 悬停时背景颜色
}
:focus-visible {
  outline: none;
}
.el-sub-menu-item.is-active {
    background-color: transparent !important; // 激活时背景颜色
}

.el-sub-menu-item:hover {
    background-color: transparent !important; // 悬停时背景颜色
}

.user-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.el-menu--horizontal {
    --el-menu-horizontal-height: 100%;
}

.menu-container {
    margin-left: 120px;
}

.zhanwei {
    width: 40px;
}

.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.title {
    font-size: 28px;
    font-weight: bold;
    margin-right: 10px;
    border-bottom: 20px;
}
</style>