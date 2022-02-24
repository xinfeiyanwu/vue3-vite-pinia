<template>
    <div class="login">
        <div class="loginWrap">
            <div class="loginSwitch">
                <img
                    @click="loginSwitchHandler"
                    :style="{opacity: isQrLogin ? 0.5 : 1}"
                    src="@/assets/images/loginQR.png" alt="loginQr" class="loginQr"
                />
            </div>
            <div class="loginMain" v-show="!isQrLogin">
                <div class="loginHeader">
                    <img src="@/assets/logo.png" alt="">
                    <h3>无敌登录</h3>
                </div>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="60px"
                    class="demo-ruleForm">
                    <el-form-item label="账号" prop="account">
                        <el-input v-model="ruleForm.account" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="psw">
                        <el-input type="password" v-model="ruleForm.psw" autocomplete="off"></el-input>
                    </el-form-item>
                    <div class="footer">
                        <div class="userOper">
                            <el-checkbox v-model="remember" label="记住" size="small"></el-checkbox>
                            <el-link @click="resetPswHanlder" class="resetPsw" type="primary">修改密码</el-link>
                        </div>
                        <div>
                            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                        </div>
                    </div>
                </el-form>
            </div>
            <div id="loginQrMain"></div>
        </div>

        <!-- start 修改密码 -->
        <el-dialog
            v-model="dialogVisible"
            title="修改密码"
            width="50%"
        >
            <ResetPsw @resetSuccess="resetSuccessHandler" />
        </el-dialog>
        <!-- end 修改密码 -->
    </div>
</template>

<script lang="ts" setup>
    import ResetPsw from './resetPsw.vue'
    import QRCode from 'qrcode'
    import {useUserStore} from '@/store/user'
    import { ElMessage } from 'element-plus'
    import {
        ref,
        reactive,
        onMounted,
        getCurrentInstance,
        isProxy,
        isRef,
        isReactive
    } from 'vue'
    import type {
        ElForm
    } from 'element-plus'
    const {proxy}: any =  getCurrentInstance()
    console.log(proxy.$apis);
    const userStore =  useUserStore()
    
    const remember = ref(false)

    const isQrLogin = ref(false)

    type FormInstance = InstanceType < typeof ElForm >

    const ruleFormRef = ref < FormInstance > ()

    const dialogVisible = ref(false)

    onMounted(()=>{
        // console.log('ruleFormRef',isProxy(ruleFormRef), isReactive(ruleFormRef), isRef(ruleFormRef));
        console.log(ruleFormRef.value);
    })

    const resetSuccessHandler = () => {
        dialogVisible.value = false
    }
 
    const loginSwitchHandler = function () {
        var loginQrMain: any = document.getElementById('loginQrMain')
        if(isQrLogin.value) {
            loginQrMain.removeChild(loginQrMain.childNodes[0])
        }
        else {
            QRCode.toCanvas('扫描直接登录！'+Math.random(), { errorCorrectionLevel: 'H' }, function (err: any, canvas: any) {
                if (err) throw err
                if(loginQrMain) loginQrMain.appendChild(canvas)
            })
        }
        isQrLogin.value = !isQrLogin.value
    }

    const validateaccount = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入账号'))
        } else {
            if (ruleForm.psw !== '') {
                if (!ruleFormRef.value) return

                ruleFormRef.value.validateField('psw', () => null)
            }
            callback()
        }
    }
    const validateaccount2 = (rule: any, value: any, callback: any) => {
        if (value === '') {
            callback(new Error('请输入密码'))
        } else {
            callback()
        }
    }

    const ruleForm = reactive({
        account: '',
        psw: '',
    })

    const rules = reactive({
        account: [{
            validator: validateaccount,
            trigger: 'blur'
        }],
        psw: [{
            validator: validateaccount2,
            trigger: 'blur'
        }]
    })

    const resetPswHanlder = () => {
        dialogVisible.value = true
    }

    const submitForm = (formEl: FormInstance | undefined) => {
        console.log(formEl, ruleFormRef, ruleFormRef.value);
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                proxy.$apis.userApi.login(ruleForm)
                    .then((res: any) =>{
                        if(res.code===200) {
                            userStore.SET_USER_INFO(res.data)
                            ElMessage({
                                message: res.msg,
                                type: 'success',
                                offset: 200
                            })
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
.login {
    height: 100vh;
    width: 100vw;
    background-image: url('@/assets/images/login.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .loginWrap {
        position: absolute;
        right: 10%;
        top: 30%;
        padding: 20px;
        width: 300px;
        height: 270px;
        border-radius: 20px;
        background-color: #fff;
        .loginSwitch {
            width: 100%;
            height: 0;
            position: relative;
            .loginQr {
                position: absolute;
                right: 0;
                width: 50px;
                cursor: pointer;
                z-index: 99;
            }
        }
        .loginMain {
            .loginHeader {
                position: relative;
                img {
                    width: 50px;
                }
            }
            .footer {
                .userOper {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 12px;
                    .el-checkbox {
                        margin-left: 20px;
                    }
                    .resetPsw {
                        font-size: 12px;
                        height: 12px;
                    }
                }
            }
        }
        #loginQrMain {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>