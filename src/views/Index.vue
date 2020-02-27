<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main>
            <el-button type="success" @click="successClick">成功按钮</el-button>
            <my-carousel></my-carousel>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>

</template>

<script>
    import {request} from "../request/http";
    import Carousel from '../components/Carousel'

    export default {
        components:{
            'my-carousel':Carousel
    },
        data(){
            return {
                name: "Index",
                successClick(){
                    console.log("点击")
                    request({
                        method:'get',
                        url:'/s'
                    }).then(res=>{
                        console.log(res);
                    }).catch(err=>{
                        console.log(err);
                    })
                }

            }

        }
    }
</script>

<style scoped>
    .el-main{
        margin: 0 20px;
        background-color: #2c3e50;
        height: 600px;
    }
    .el-header, .el-footer {
        padding-top: 0px;
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

</style>