<script setup>
const tableData = [
    { id: 1, class: '一年一班', studentId: '2022141050001', name: '李明', status: '正常' },
    { id: 2, class: '一年一班', studentId: '2022141050002', name: '王刚', status: '正常' },
    { id: 3, class: '一年一班', studentId: '2022141050003', name: '叶雅婷', status: '存在风险' },
    { id: 4, class: '一年一班', studentId: '2022141050004', name: '王彤心', status: '存在风险' },
    { id: 5, class: '一年一班', studentId: '2022141050005', name: '蒋健', status: '正常' },
    { id: 6, class: '一年一班', studentId: '2022141050006', name: '李志毅', status: '存在风险' },
    { id: 7, class: '一年一班', studentId: '2022141050007', name: '何梦舒', status: '正常' },
    { id: 8, class: '一年一班', studentId: '2022141050008', name: '王帅', status: '存在风险' },
    { id: 9, class: '一年一班', studentId: '2022141050009', name: '张子豪', status: '正常' },
    // Add more data as needed
]
</script>

<template>

    <div class="table-container">
        <div class="search-box">
            <el-input v-model="input" style="width: 240px" placeholder="请输入学生姓名" />
            <el-button type="primary" style="margin-left: 30px;">查询</el-button>
            <el-button type="primary" style="margin-left: 30px;">重置</el-button>
        </div>
        <el-table :data="tableData" align="center" header-align="center"
            :header-cell-style="{ 'text-align': 'center' }">
            <el-table-column prop="id" label="序号" width="120" align="center"></el-table-column>
            <el-table-column prop="class" label="班级" width="120" align="center">
                  <template v-slot:header="scope">
        <el-select v-model="selectedClass" placeholder="班级">
          <el-option label="一年一班" value="一年一班" />
          <el-option label="一年二班" value="一年二班" />
          <el-option label="一年三班" value="一年三班" />
          <el-option label="一年四班" value="一年四班" />
          <el-option label="一年五班" value="一年五班" />
        </el-select>
      </template>

            </el-table-column>
            <el-table-column prop="studentId" label="学号" width="200" align="center"></el-table-column>
            <el-table-column prop="name" label="姓名" width="200" align="center"></el-table-column>
            <el-table-column prop="status" label="状态" width="200" align="center">
                <template v-slot:header="scope">
        <el-select v-model="selectedStatus" placeholder="状态">
          <el-option label="正常" value="正常" />
          <el-option label="存在风险" value="存在风险" />
        </el-select>
      </template>
      <template v-slot="scope">
        <el-tag :type="scope.row.status === '正常' ? 'success' : 'danger'">
          {{ scope.row.status }}
        </el-tag>
        </template>
       </el-table-column>
            <el-table-column fixed="right" label="操作" width="150" align="center">
        <template v-slot="scope">
        <el-button size="small">Edit</el-button>
        <el-button size="small" type="danger">Delete</el-button>
      </template>

            </el-table-column>
        </el-table>
        <div class="pagination-box">
            <el-pagination layout="prev, pager, next" :total="50"/>
        </div>
    </div>
</template>

<style scoped>
.logo {
    width: 50px;
    height: 50px;
    margin-right: 10px;
}

.search-box {
    width: 990px;
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
.pagination-box{
    width: 990px;
    display: flex;
    justify-content: flex-end;
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
    display: flex;
    flex-direction: column;
    align-items: center;
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
