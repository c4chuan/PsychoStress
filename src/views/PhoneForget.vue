<script setup>
import router from '@/router';
const toLogin = () => {
    router.push('/login');
}
const toPhoneFind = () => {
    router.push('/phonefind');
}
const toMailForget = () => {
    router.push('/mailforget');
}
const toPhoneForget = () => {
    router.push('/phoneforget');
}
</script>

<template>

<header style="width: 100%;height: 80px;"> 
        <div style="display: flex;">
          <img src="@/assets/logo.png" alt="" style="width: 80px;margin: 0 10px;">
          <h1 style="color: #C7655E;line-height: 80px;">四川大学青少年灾后心理创伤危机管理系统</h1>
        </div>
        </header>

    <div class="container">
        <div class="right-section">
            <div class="forgot-password-box">
                <h2>忘记密码</h2>
                <div class="options">
                    <label><input type="radio" name="method" checked @click.prevent="toPhoneForget">手机号找回</label>
                    <label><input type="radio" name="method" @click.prevent="toMailForget">邮箱找回</label>
                </div>
                <form>
                    <input type="text" placeholder="请输入手机号">
                    <div class="verification-box">
                        <input type="text" placeholder="请输入短信验证码">
                        <button style="margin-bottom: 15px;">获取验证码</button>
                    </div>
                    <button type="submit" @click.prevent="toPhoneFind">找回密码</button>
                </form>
                <a href="#" class="back-to-login" @click.prevent="toLogin">记起密码？立即登录</a>
            </div>
        </div>
    </div>
    <div style="width: 100%;height: 80px;background-color: black;"></div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body,
html {
    height: 100%;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 160px);
    padding: 0 10%;
    background-color: #EEEEEE;
}

.right-section {
    background-color: #ffffff;
    padding: 30px 80px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 430px;
}

.forgot-password-box h2 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
}

.forgot-password-box form {
    display: flex;
    flex-direction: column;
}

.forgot-password-box input[type="text"],
.forgot-password-box input[type="password"] {
    height: 40px;
    padding: 0 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
}

.forgot-password-box .options {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.forgot-password-box .options label {
    display: flex;
    align-items: center;
}

.forgot-password-box .options input[type="radio"] {
    margin-right: 5px;
}

.forgot-password-box button {
    height: 40px;
    background-color: #03BB7B;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

.forgot-password-box .back-to-login {
    color: #03BB7B;
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    text-decoration: none;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

.verification-box {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    width: 100%;
}

.verification-box input[type="text"] {
    flex: 1;
    border-radius: 4px 0 0 4px;
}

.verification-box button {
    background-color: #e0e0e0;
    color: #333;
    border: none;
    border-radius: 0 4px 4px 0;
    padding: 0 15px;
    cursor: pointer;
    font-size: 14px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
}

header {
    display: flex;
    align-items: center;
    height: 80px;
    background-color: #ffffff;
    border-bottom: 1px solid #ccc;
    width: 100%;
}

header img {
    width: 80px;
    margin: 0 10px;
}

header h1 {
    color: #C7655E;
    line-height: 80px;
}
</style>