<!--
 * @Author: Lxx
 * @Date: 2022-02-25 13:49:25
 * @LastEditTime: 2022-02-25 15:01:51
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\echarts\components\graph\index.vue
 * 
-->
<!--
 * @Author: Lxx
 * @Date: 2022-02-25 11:46:49
 * @LastEditTime: 2022-02-25 13:43:12
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\echarts\index.vue
 * 
-->
<template>
    <div id="myChart_graph" style="width: 600px;height:600px;"></div>
</template>
<script setup lang="ts">
    import * as echarts from 'echarts';
    import {
        onMounted,
        reactive
    } from 'vue';
    let myChart: any = reactive(null)
    const option = reactive({
        title: {
            text: 'Basic Graph'
        },
        legend: {
            type: 'plain',
            show: true
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            name: '无敌就是无敌',
            layout: 'none',
            symbol: 'roundRect',
            symbolSize: 60,
            roam: false,
            itemStyle: {
                color: '#fce'
            },
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                    name: 'Node 1',
                    x: 300,
                    y: 300
                },
                {
                    name: 'Node 2',
                    x: 800,
                    y: 300
                },
                {
                    name: 'Node 3',
                    x: 550,
                    y: 100
                },
                {
                    name: 'Node 4',
                    x: 550,
                    y: 500
                }
            ],
            // links: [],
            links: [{
                    source: 3,
                    target: 2,
                    symbolSize: [5, 20],
                    label: {
                        show: true
                    },
                    lineStyle: {
                        width: 5,
                        curveness: 0.1
                    }
                },
                {
                    source: 'Node 2',
                    target: 'Node 1',
                    label: {
                        show: true
                    },
                    lineStyle: {
                        curveness: 0.2
                    }
                },
                {
                    source: 'Node 1',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 3'
                },
                {
                    source: 'Node 2',
                    target: 'Node 4'
                },
                {
                    source: 'Node 1',
                    target: 'Node 4'
                }
            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
        }]
    })
    onMounted(() => {
        const chartDom = document.getElementById('myChart_graph')
        myChart = echarts.init(chartDom);
        myChart.setOption(option)
    })
</script>
<style lang="scss" scoped>

</style>