<!--
 * @Author: Lxx
 * @Date: 2022-02-25 13:49:25
 * @LastEditTime: 2022-02-25 14:53:33
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\echarts\components\tree\index.vue
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
    <div id="myChart_tree" style="width: 600px;height:600px;"></div>
</template>
<script setup lang="ts">
    import * as echarts from 'echarts';
    import {
        onMounted,
        reactive
    } from 'vue';
    let myChart: any = reactive(null)
    const data = { // 注意，最外层是一个对象，代表树的根节点
        name: "flare", // 节点的名称，当前节点 label 对应的文本
        label: { // 此节点特殊的 label 配置（如果需要的话）。
            // label的格式参见 series-tree.label。
        },
        itemStyle: { // 此节点特殊的 itemStyle 配置（如果需要的话）。
            // label的格式参见 series-tree.itemStyle。
        },
        lineStyle: {},
        children: [{
            name: "flex",
            value: 4116, // value 值，只在 tooltip 中显示
            label: {},
            itemStyle: {},
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: [{
                name: "flex_1",
                value: 11, // value 值，只在 tooltip 中显示
                label: {},
                itemStyle: {},
                collapsed: null, // 如果为 true，表示此节点默认折叠。
                children: [] // 叶子节点没有 children, 可以不写
            }, {
                name: "flex_2",
                value: 22, // value 值，只在 tooltip 中显示
                label: {},
                itemStyle: {},
                collapsed: true, // 如果为 true，表示此节点默认折叠。
                children: [] // 叶子节点没有 children, 可以不写
            }, ] // 叶子节点没有 children, 可以不写
        }, {
            name: "flex1",
            value: 4116, // value 值，只在 tooltip 中显示
            label: {},
            itemStyle: {},
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: [] // 叶子节点没有 children, 可以不写
        }]
    }
    const option = reactive({
        title: {
            text: 'Basic tree'
        },
        legend: {
            type: 'plain',
            show: true
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [{
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],
            top: '10%',
            left: '8%',
            bottom: '22%',
            right: '20%',
            symbolSize: 7,
            edgeShape: 'polyline',
            edgeForkPosition: '63%',
            roam: 'move',
            initialTreeDepth: 3,
            lineStyle: {
                width: 2
            },
            label: {
                backgroundColor: '#fff',
                position: 'left',
                verticalAlign: 'middle',
                align: 'right'
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
            emphasis: {
                focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    })
    onMounted(() => {
        const chartDom = document.getElementById('myChart_tree')
        myChart = echarts.init(chartDom);
        myChart.setOption(option)
    })
</script>
<style lang="scss" scoped>

</style>