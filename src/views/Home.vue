<script setup>
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
const main = ref();
const main2 = ref();

onMounted(() => {
    console.log(main);
    const myChart = echarts.init(main.value);
    const option = {
        title: {
            text: '可能存在心理创伤问题学生数量变化趋势',
            textStyle: {
                fontSize: 20,    // Increase font size of the title
                fontWeight: 'bold' // Make the title bold if desired
            },
            x: 'center',  // Title horizontally centered
            y: 'top',
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['趋势']
        },


        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1个月后', '6个月后', '12个月后', '18个月后']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '可能存在心理创伤的学生数量',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134],
                label: {
                    show: true,
                    position: 'top',
                    fontSize: 20,    // Increase font size
                    fontWeight: 'bold'
                }

            }
        ]
    };
    const myChart2 = echarts.init(main2.value);
    const graph = {
        "nodes": [
            {
                "id": "0",
                "name": "社会压力",
                "symbolSize": 90,
                "x": 0,
                "y": 400,

                "category": "社会原因",
                "symbol": "circle",
                "itemStyle": {
                    "color": "#5470C6"
                },
                "label": {
                    "show": false,
                    "fontSize": 25,
                    "position": "right"
                }
            },
            {
                "id": "00",
                "name": "社会支持",
                "symbolSize": 15,
                "x": 0,
                "y": 299.6904,

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
                "symbolSize": 25,
                "x": -50,
                "y": 350.06424,

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
                "symbolSize": 20,
                "x": -100.08344,
                "y": 446.8853,

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
                "symbolSize": 65,
                "x": -150.08344,
                "y": 360.8853,

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
                "symbolSize": 30,
                "x": -100.76357,
                "y": 245.29176,

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
                "symbolSize": 50,
                "x": -150.76357,
                "y": 298.29176,

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
                "symbolSize": 15,
                "x": -195.6012,
                "y": 267.16974,

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
                "symbolSize": 20,
                "x": -242.82404,
                "y": 325.26283,

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
                "symbolSize": 70,
                "x": -300.69568,
                "y": 375.09113,

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
    }
    const option2 = {
        title: {
            text: '学生心理创伤原因网络图', // 这里是你想要显示的标题文字
            textStyle: {
                fontSize: 20, // 标题字体大小
                fontWeight: 'bold' // 标题字体加粗
            },
            x: 'center',  // Title horizontally centered
            y: 'top',
        },
        tooltip: {},
        legend: [
            {
                data: graph.categories.map(function (a) {
                    return a.name;
                }),
                left: 'center',  // Center the legend horizontally
                bottom: 0,      // Place the legend at the bottom with some margin
                itemWidth: 10,   // Optional: customize legend item width
                itemHeight: 10,
            }
        ],
        series: [
            {
                name: '学生心理问题分布',
                type: 'graph',
                layout: 'none',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                },
                labelLayout: {
                    hideOverlap: true
                },
                scaleLimit: {
                    min: 0.4,
                    max: 2
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        ]
    };
    myChart.setOption(option);
    myChart2.setOption(option2);
})

</script>

<template>
    <!-- Boxes section -->
    <div class="box-container">
        <div class="box green">
            <div class="text">
                可能暂无心理创伤危机 <br> 20人
            </div>
            <img src="@/assets/image11.png" alt="Icon 1">
        </div>
        <div class="box blue">
            <div class="text">
                可能存在心理创伤危机 <br> 10人
            </div>
            <img src="@/assets/image12.png" alt="Icon 2">
        </div>
        <div class="box red">
            <div class="text">
                需要重点关注 <br> 5人
            </div>
            <img src="@/assets/image13.png" alt="Icon 3">
        </div>
    </div>
    <!-- 图表盒子 -->
    <div class="charts-box">
        <div class="chart-container" ref="main"></div>
        <div class="chart-container" ref="main2"></div>
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
    border-bottom: 20px;
    ;
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

.user-icon img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.flex-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
}

.chart-container {
    width: 50%;
    /* Set appropriate size for the chart */
    height: 50%;
    margin-left: 20px;
    /* Add margin to place it left */
}

/* New CSS for the boxes */
.box-container {
    display: flex;
    justify-content: space-around;
    margin: 20px auto;
    padding: 10px;
    width: 80%;
    /* Adjust this width if needed */
    height: 20%;
}
.charts-box {
    width: 100%;
    height: 70%;
    display: flex;
    flex: 1;
}
.box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #ddd;
    border-radius: 15px;
    padding: 10px;
    width: 250px;
    height: 100px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    /* Ensure the background color is visible */
}

.box img {
    width: 40px;
    height: 40px;
}

.box .text {
    font-size: 18px;
    font-weight: bold;
}

.box.green .text {
    color: green;
}

.box.blue .text {
    color: blue;
}

.box.red .text {
    color: red;
}
</style>
