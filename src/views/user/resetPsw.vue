<!--
 * @Author: Lxx
 * @Date: 2022-02-23 16:15:10
 * @LastEditTime: 2022-02-23 17:34:11
 * @LastEditors: Lxx
 * @Description: 
 * @FilePath: \vite\src\views\user\resetPsw.vue
 * 
-->
<template>
    <div class="resetPsw">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="100px"
            class="demo-ruleForm">
            <el-form-item label="账号" prop="account">
                <el-input v-model="ruleForm.account" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="原密码" prop="OriginPassword">
                <el-input type="OriginPassword" v-model="ruleForm.OriginPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newPassword">
                <el-input type="newPassword" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="重复密码" prop="repeatPassword">
                <el-input type="repeatPassword" v-model="ruleForm.repeatPassword" autocomplete="off"></el-input>
            </el-form-item>
            <div class="footer">
                <el-button type="primary" @click="submitForm(ruleFormRef)">修改</el-button>
                <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </div>
        </el-form>
    </div>
</template>
<script setup lang="ts">
    import {
        ref,
        reactive,
        getCurrentInstance
    } from 'vue'
    import { ElMessage } from 'element-plus'
    import type {
        ElForm
    } from 'element-plus'
    const em = defineEmits(['resetSuccess'])
    const {proxy}: any =  getCurrentInstance()

    type FormInstance = InstanceType < typeof ElForm >

    const ruleFormRef = ref < FormInstance > ()

    const ruleForm = reactive({
        account: '',
        OriginPassword: '',
        newPassword: '',
        repeatPassword: ''
    })
    const validateaccount = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入重复密码'))
        } else {
            value !== ruleForm.newPassword 
                ? callback(new Error('新密码和重复密码不一致!')) 
                : callback()
        }
    }

    const rules = reactive({
        account: [{
            required: true,
            message: '请输入账号',
            trigger: 'blur'
        }],
        OriginPassword: [{
            required: true,
            message: '请输入原密码',
            trigger: 'blur'
        }],
        newPassword: [{
            required: true,
            message: '请输入新密码',
            trigger: 'blur'
        }],
        repeatPassword: [{
            validator: validateaccount,
            trigger: 'blur',
            required: true
        }]
    })
    const submitForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                proxy.$apis.userApi.resetPsw(ruleForm)
                    .then((res: any) =>{
                        if(res.code===200) {
                            ElMessage({
                                message: res.msg,
                                type: 'success',
                                offset: 200
                            })
                            em('resetSuccess')
                        }
                        else {
                            ElMessage({
                                message: res.msg,
                                type: 'warning',
                                offset: 200
                            })
                        }
                    })
            } else {
                console.log('error submit!')
                return false
            }
        })
    }

    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return
        formEl.resetFields()
    }
</script>
<style lang="scss" scoped>
    
</style>
