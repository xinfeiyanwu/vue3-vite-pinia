import Mock from 'mockjs'
const data = {
    userInfo: {
        userName: '管理员',
        account: 'admin',
        sex: 1,
        role: '常胜将军',
        psw: '123456',
        roleMenus: ['蜀国高级官员', '常胜将军', '员工']
    },
    'token': 123456789,
    menus: [{
        menuId: '1',
        menuName: '奥特曼',
        menuIcon: 'AlarmClock',
        mate: ['奥特曼'],
        parentId: 0,
        path: 'aoteman',
        name: 'aoteman',
        childrenMenuList: [{
            menuId: '1-1',
            menuName: '迪迦奥特曼',
            menuIcon: 'Bicycle',
            mate: ['奥特曼', '迪迦奥特曼'],
            childrenMenuList: [{
                menuId: '1-1-1',
                menuName: '1号怪兽',
                menuIcon: 'Setting',
                mate: ['奥特曼', '迪迦奥特曼', '1号怪兽'],
                childrenMenuList: [{
                    menuId: '1-1-1-1',
                    menuName: '1号子怪兽',
                    menuIcon: 'Setting',
                    mate: ['奥特曼', '迪迦奥特曼', '1号怪兽', '1号子怪兽'],
                    path: '1haoziguaishou',
                    parentId: '1-1-1'
                }],
                parentId: '1-1'
            }, {
                menuId: '1-1-2',
                menuName: '2号怪兽',
                menuIcon: 'Setting',
                mate: ['奥特曼', '迪迦奥特曼', '2号怪兽'],
                path: '2haoguaishou',
                parentId: '1-1'
            }, {
                menuId: '1-1-3',
                menuName: '3号怪兽',
                menuIcon: 'AlarmClock',
                mate: ['奥特曼', '迪迦奥特曼', '3号怪兽'],
                path: 'about',
                parentId: '1-1'
            }, {
                menuId: '1-1-4',
                menuName: '4号怪兽',
                menuIcon: 'AlarmClock',
                mate: ['奥特曼', '迪迦奥特曼', '4号怪兽'],
                path: '4haoziguaishou',
                parentId: '1-1'
            }],
            parentId: '1',
            name: 'dijiaaoteman',
            path: 'dijiaaoteman'
        }, {
            menuId: '1-2',
            menuName: '赛文奥特曼',
            menuIcon: 'Bicycle',
            mate: ['奥特曼', '赛文奥特曼'],
            name: 'saiwenaoteman',
            path: 'saiwenaoteman',
            parentId: '1',
        }]
    }, {
        menuId: '2',
        menuName: '天庭神仙',
        menuIcon: 'Bicycle',
        mate: ['天庭神仙'],
        childrenMenuList: [{
            menuId: '2-1',
            menuName: '孙悟空',
            menuIcon: 'Moon',
            mate: ['天庭神仙', '孙悟空'],
            name: 'home',
            path: 'home',
            parentId: '2'
        }, {
            menuId: '2-2',
            menuName: '猪八戒',
            menuIcon: 'Setting',
            mate: ['天庭神仙', '猪八戒'],
            name: 'zhubajie',
            path: 'zhubajie',
            parentId: '2'
        }, {
            menuId: '2-3',
            menuName: '沙僧',
            menuIcon: 'Moon',
            mate: ['天庭神仙', '沙僧'],
            name: 'shaseng',
            path: 'shaseng',
            parentId: '2'
        }],
        parentId: 0,
        name: 'tiantingshenxian',
        path: 'tiantingshenxian'
    }, {
        menuId: '3',
        menuName: '凡间',
        menuIcon: 'Bicycle',
        mate: ['凡间'],
        parentId: 0,
        name: '',
        path: ''
    }, {
        menuId: '4',
        menuName: '系统设置',
        menuIcon: 'Setting',
        mate: ['系统设置'],
        parentId: 0,
        name: 'sysSetting',
        path: 'sysSetting'
    }, {
        menuId: '5',
        menuName: 'echarts图标',
        menuIcon: 'AlarmClock',
        mate: ['echarts图标'],
        parentId: 0,
        name: 'echarts',
        path: 'echarts'
    }]
}
Mock.mock('/login', 'post', function (options: any) {
    // console.log('options',options);
    const body = JSON.parse(options.body)
    const {account, psw} = data.userInfo
    if (body.account === account && body.psw === psw) {
        return {
            code: 200,
            msg: '登录成功',
            data
        }
    } else {
        return {
            code: 0,
            msg: '账号或密码错误'
        }
    }
})

Mock.mock('/logout', 'post', function (options: any) {
    // console.log('options',options);
    const body = JSON.parse(options.body)
    if (body.account === body.account) {
        return {
            code: 200,
            msg: '退出成功'
        }
    }
    else {
        return {
            code: 0,
            msg: '未知错误'
        }
    }
})

Mock.mock('/resetPsw', 'post', function (options: any) {
    const body = JSON.parse(options.body)
    const {account, psw} = data.userInfo
    console.log('body',body);
    if (body.account === account && body.OriginPassword === psw) {
        data.userInfo.psw = body.newPassword
        console.log('newPassword', data.userInfo);
        
        return {
            code: 200,
            msg: '修改成功！请重新登登录！'
        }
    }
    else {
        return {
            code: 0,
            msg: '未知错误'
        }
    }
})