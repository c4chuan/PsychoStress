<script setup>
const tableData = [
    { name: '1', province: '一年一班', city: '2022090265', address: '黄棕见', zip: '正念放松训练' },
    { name: '2', province: '一年一班', city: '20229952323', address: '李想', zip: '转介心理老师' },
    { name: '3', province: '一年一班', city: '20165549231', address: '杜伊星', zip: '转介专业医院' },
    { name: '4', province: '一年一班', city: '20165549156', address: '王子豪', zip: '参加志愿活动' },
    { name: '5', province: '一年一班', city: '20165541532', address: '合资恒', zip: '减少媒体使用' },
    { name: '6', province: '一年一班', city: '20165549284', address: '反义徐', zip: '寻求社会支持' },
    { name: '7', province: '一年一班', city: '20165491562', address: '十天刚', zip: '建立规律作息' },
    { name: '8', province: '一年一班', city: '20165915462', address: '王晓胃', zip: '加强身体锻炼' },
    { name: '9', province: '一年一班', city: '20147491562', address: '工序家', zip: '排解负向情感' },
    { name: '10', province: '一年一班', city: '20147491562', address: '合苟鑫', zip: '增强心理韧性' },
    // Add more data as needed
]
</script>

<template>

    <div class="table-container">
        <div class="search-box">
            <el-input v-model="input" style="width: 240px" placeholder="请输入" />
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <el-table :data="tableData" align="center" header-align="center" :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column prop="name" label="序号" width="120" align="center"></el-table-column>
            <el-table-column prop="province" label="班级" width="120" align="center"></el-table-column>
            <el-table-column prop="city" label="学号" width="200" align="center"></el-table-column>
            <el-table-column prop="address" label="姓名" width="200" align="center"></el-table-column>
            <el-table-column prop="zip" label="心理转介建议" width="200" align="center"></el-table-column>
            <el-table-column fixed="right" label="心理档案" width="150" align="center">
                <div class="button-group">
                    <el-button type="primary">存档</el-button>
                    <el-button type="primary">发送</el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<style scoped>
.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.title {
    font-size: 28px;
    font-weight: bold;
    margin-right: 10px;
}

.nav {
    display: flex;
    align-items: center;
    margin-left: 120px;
}

.nav a {
    margin: 0 5px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    padding: 5px 10px;
}

.nav a:hover {
    background-color: #b3e0ff;
    border-radius: 5px;
}

.nav .selected {
    background-color: #add8e6;
    border-radius: 5px;
}

.user-icon {
    position: absolute;
    right: 18px;
    top: 8px;
}

.el-table .cell {
    text-align: center;
    vertical-align: middle;
}

.el-table th {
    text-align: center;
}

.user-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.flex-container {
    display: flex;
    align-items: center;
    width: 100%;
}

.table-container {
    width: 80%;
    margin: 20px auto;
}

.button-group {
    display: flex;
    justify-content: space-between;
}

.block {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: white;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
</style>