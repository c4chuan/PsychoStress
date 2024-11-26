<script setup>
import * as echarts from 'echarts';
import { ref, nextTick } from 'vue';

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
];

const isChartVisible = ref(false);
// 当前显示的饼图索引
const currentChartIndex = ref(0);

// const option0 = {
//     title: {
//     text: '状态分析',
//     left: 'center',
//     textStyle: {
//             color: '#fff', // 设置标题文字为白色
//         },
//     },
//     tooltip: {
//     trigger: 'item',
//     textStyle: {
//             color: '#fff', // 设置标题文字为白色
//         },
//     },
//     legend: {
//     orient: 'horizontal',
//     top: 'bottom',
//     left: 'center',
//     textStyle: {
//             color: '#fff', // 设置标题文字为白色
//         },
//     },
//     series: [
//     {
//         name: '状态分析',
//         type: 'pie',
//         radius: '50%',
//         center: ['50%', '50%'],
//         data: [
//         { value: 60, name: '正常' },
//         { value: 40, name: '存在风险' },
//         ],
//         label: {
//         normal: {
//             show: true,
//             position: 'outside',
//             formatter: '{b}: {c} ({d}%)',
//         },
//         },
//         emphasis: {
//         itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)',
//         },
//         },
//     },
//     ],
// };

const option0 = {
  title: {
    text: '',
    left: 'center',
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  tooltip: {
    trigger: 'item',
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  legend: {
   orient: 'horizontal', // 设置图例为水平排列
   top: 'bottom',        // 设置图例在底部
   left: 'center',        // 设置图例在中间
   textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'], // 设置饼图的中心位置，使其与图例垂直对齐
      data: [
        { value: 65, name: '环境' },
        { value: 80, name: '生理' },
        { value: 73, name: '心理' },
        { value: 62, name: '社会' },
      ],
      label: {
        normal: {
          show: true,
          position: 'outside',
          formatter: '{b}: {c} ({d}%)'
        }
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

const option2 = {
  title: {
    text: '',
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  legend: {
    data: ['心理', '生理', '社会', '环境'],
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
  },
  grid: {
    left: '10%', // 增加左侧边距以确保横坐标名称显示完整
    right: '4%',
    bottom: '8%', // 增加底部边距以确保横坐标名称显示完整
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2022.6', '2022.12', '2023.6', '2023.12', '2024.6'],
    textStyle: {
            color: '#fff', // 设置标题文字为白色
        },
    name: '测量时间', // 横坐标名称
    nameLocation: 'middle', // 将名称位置设置在轴的末端
    nameGap: 30, // 控制名称与轴之间的距离
    nameTextStyle: {
      color: '#fff', // 更改名称颜色为黑色
      fontSize: 14,
      align: 'center' // 水平居中显示名称
    },
    axisLabel: {
      rotate: 0, // 将标签设置为水平
      textStyle: {
            color: '#fff', // 设置横坐标标签文字为白色
            fontSize: 12,  // 设置横坐标标签字体大小
        }
    }
  },
  yAxis: {
    type: 'value',
    min: 0, // 最小值
    max: 100, // 最大值
    interval: 20, // 间隔
    name: '创伤风险分数', // 纵坐标名称
    nameLocation: 'end', // 名称位置在轴的末端
    nameTextStyle: {
      color: '#fff', // 名称颜色
      fontSize: 14 // 名称字体大小
    },
    axisLabel: {
      rotate: 0, // 将标签设置为水平
      textStyle: {
            color: '#fff', // 设置横坐标标签文字为白色
            fontSize: 12,  // 设置横坐标标签字体大小
        }
    }
  },
  series: [
    {
      name: '心理',
      type: 'line',
      data: [51, 53, 50, 60, 63]
    },
    {
      name: '生理',
      type: 'line',
      data: [80, 83, 78, 80, 85]
    },
    {
      name: '社会',
      type: 'line',
      data: [75, 80, 82, 74, 85]
    },
    {
      name: '环境',
      type: 'line',
      data: [53, 65, 78, 69, 70]
    }
  ]
};
// 热力图数据
const graph = {
  "nodes": [
    {
      "id": "0",
      "name": "社会压力",
      "symbolSize": 30,
      "x": 0,
      "y": 400,
      "value": 28.685715,
      "category": "社会原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#5470C6"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
     {
      "id": "00",
      "name": "社会支持",
      "symbolSize": 15,
      "x": 0,
      "y": 299.6904,
      "value": 28.685715,
      "category": "社会原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#5470C6"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
     {
      "id": "000",
      "name": "社交媒体使用",
      "symbolSize": 55,
      "x": -50,
      "y": 350.06424,
      "value": 4,
      "category": "社会原因",
      "subCategory": "社会支持",
      "symbol": "circle",
      "itemStyle": {
        "color": "#5470C6"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
    {
      "id": "1",
      "name": "学校环境",
      "symbolSize": 60,
      "x": -100.08344,
      "y": 446.8853,
      "value": 4,
      "category": "环境原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#91CC75"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
     {
      "id": "11",
      "name": "家庭环境",
      "symbolSize": 45,
      "x": -150.08344,
      "y": 360.8853,
      "value": 4,
      "category": "环境原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#91CC75"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    }, 
    {
      "id": "111",
      "name": "医疗资源环境",
      "symbolSize": 30,
      "x": -170.08344,
      "y": 390.8853,
      "value": 4,
      "category": "环境原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#91CC75"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
    {
      "id": "1111",
      "name": "灾后重建情况",
      "symbolSize": 15,
      "x": -200.26337,
      "y": 460.03506,
      "value": 4,
      "category": "环境原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#91CC75"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
    {
      "id": "2",
      "name": "睡眠障碍",
      "symbolSize": 55,
      "x": -100.76357,
      "y": 245.29176,
      "value": 9.485714,
      "category": "生理原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#FAC858"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
        {
      "id": "22",
      "name": "创伤暴露情况",
      "symbolSize": 40,
      "x": -150.76357,
      "y": 298.29176,
      "value": 9.485714,
      "category": "生理原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#FAC858"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
     {
      "id": "222",
      "name": "个人生理情况",
      "symbolSize": 10,
      "x": -195.6012,
      "y": 267.16974,
      "value": 4,
      "category": "生理原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#FAC858"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
    {
      "id": "3",
      "name": "心理症状",
      "symbolSize": 10,
      "x": -242.82404,
      "y": 325.26283,
      "value": 9.485714,
      "category": "心理原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#EE6666"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
    {
      "id": "33",
      "name": "个人经历",
      "symbolSize": 10,
      "x": -275.82404,
      "y": 400.26283,
      "value": 9.485714,
      "category": "心理原因",
      "symbol": "circle",
      "itemStyle": {
        "color": "#EE6666"
      },
      "label": {
        "show": false,
        "fontSize": 25
      }
    },
  
    {
      "id": "333",
      "name": "心理认知",
      "symbolSize": 50,
      "x": -300.69568,
      "y": 375.09113,
      "value": 4,
      "category": "心理原因",
      "subCategory": "个人经历",
      "symbol": "circle",
      "itemStyle": {
        "color": "#EE6666"
      },
      
      "label": {
        "show": false,
        "fontSize": 25
      }
    }
  ],
  "links": [
    {
      "source": "0",
      "target": "00"
    },
    {
      "source": "0",
      "target": "000"
    },
     {
      "source": "00",
      "target": "000"
    },
    {
      "source": "1",
      "target": "11"
    },
     {
      "source": "1",
      "target": "111"
    },
     {
      "source": "1",
      "target": "1111"
    },
     {
      "source": "11",
      "target": "111"
    },
     {
      "source": "11",
      "target": "1111"
    },
     {
      "source": "111",
      "target": "1111"
    },
      {
      "source": "2",
      "target": "22"
    },
     {
      "source": "2",
      "target": "222"
    },
     {
      "source": "22",
      "target": "222"
    },
    {
      "source": "3",
      "target": "33"
    },
     {
      "source": "3",
      "target": "333"
    },
     {
      "source": "33",
      "target": "333"
    }
  ],
  "categories": [
     {
      "name": "社会原因",
    },
    {
      "name": "环境原因"
    },
    {
      "name": "生理原因"
    },
    {
      "name": "心理原因"
    }
  ]
};

let myChart = null;
// 初始化图表
const initChart = () => {
  nextTick(() => {
    const chartDom = document.getElementById('chart');
    // const myChart = echarts.init(chartDom);
    if (!myChart) {
      myChart = echarts.init(chartDom);  // 仅在第一次初始化时创建 myChart 实例
    } else {
        myChart.clear();
    }

    if (currentChartIndex.value===0) {
        myChart.setOption(option0);
    }
    else if (currentChartIndex.value===2) {
        myChart.setOption(option2);
    }
    else if (currentChartIndex.value===1) {
        myChart.showLoading();
        setTimeout(() => {
            myChart.hideLoading();
            let option1 = {
                title: {
                text: '',
                subtext: 'Default layout',
                top: 'bottom',
                left: 'right',
                textStyle: {
                    color: '#fff', // 设置标题文字为白色
                },
                },
                tooltip: {},
                legend: [
                {
                    data: graph.categories.map((a) => a.name),
                    textStyle: {
                        color: '#fff', // 设置标题文字为白色
                    },
                },
                ],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                {
                    name: 'Les Miserables',
                    type: 'graph',
                    legendHoverLink: false,
                    layout: 'none',
                    data: graph.nodes,
                    links: graph.links,
                    categories: graph.categories,
                    roam: true,
                    label: {
                    position: 'right',
                    formatter: '{b}',
                    },
                    lineStyle: {
                    color: 'source',
                    curveness: 0.3,
                    },
                    emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 20,
                    },
                    },
                },
                ],
            };

            myChart.setOption(option1);
        }, 1000);
    }
  });
};

// 处理点击行事件
const handleRowClick = () => {
  isChartVisible.value = true; // 显示饼图
  currentChartIndex.value = 0;
  initChart(); // 初始化图表--均显示图1
};

// 显示下一个饼图
const nextChart = () => {
  currentChartIndex.value = (currentChartIndex.value + 1) % 3;
  initChart();
};

// 显示上一个饼图
const prevChart = () => {
  currentChartIndex.value = (currentChartIndex.value - 1 + 3) % 3;
  initChart();
};

const closeChart = () => {
    isChartVisible.value = false;
}

</script>

<template>
  <div class="table-container" @click="handleCancelClick">
    <div class="search-box">
      <el-input v-model="input" style="width: 240px" placeholder="请输入学生姓名" />
      <el-button type="primary" style="margin-left: 30px;">查询</el-button>
      <el-button type="primary" style="margin-left: 30px;">重置</el-button>
    </div>

    <!-- 学生表格 -->
    <el-table :data="tableData" align="center" header-align="center" :header-cell-style="{ 'text-align': 'center' }" @row-click="handleRowClick">
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
          <el-button size="small">修改</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 遮罩层和饼图容器 -->
    <div id="chart-container" v-show="isChartVisible" class="chart-overlay" >
      <!-- 关闭遮罩层按钮 -->
      <button @click="closeChart" class="close-btn">×</button>
      <!-- 切换饼图的按钮 -->
      <div class="chart-buttons">
        <button @click="prevChart" class="chart-btn">←</button>
        <button @click="nextChart" class="chart-btn">→</button>
      </div>

      <!-- 饼图容器 -->
      <div id="chart" style="width: 100%; height: 400px;"></div>
    </div>

    <!-- 分页组件 -->
    <div class="pagination-box">
      <el-pagination layout="prev, pager, next" :total="50" />
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

.chart-overlay {
  position: fixed;  
  top: 20%;
  left: 10%;
  right: 10%;
  bottom: 20%;
  background-color: rgba(0, 0, 0, 0.8);  
  z-index: 1000;  
  display: flex;
  justify-content: center;
  align-items: center;
}

#chart {
  width: 80%;
  height: 60%;  
}


.chart-buttons {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;  /* 可以调整按钮的位置 */
  left: 0;
  right: 0;
  padding: 0 20px;  /* 给按钮两侧留一些间距 */
  z-index: 9999; /* 确保按钮在图表上层 */
}

.chart-btn {
  font-size: 20px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chart-btn:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

/* 关闭按钮样式 */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-weight: bold;
}


</style>
