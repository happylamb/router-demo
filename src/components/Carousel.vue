<template>
        <el-carousel :interval="2000" type="card" height="600px">
            <el-carousel-item v-for="item in images" :key="item.index">
                <img :src="item.url">
            </el-carousel-item>
        </el-carousel>
</template>

<script>
    export default {
        name:'Carousel',
        data(){
            return{
                images:[
                    {
                        index:1,
                        url:'http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853'
                    },
                    {
                        index:2,
                        url:'http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&f=JPEG?w=4610&h=2968'
                    },
                    {
                        index:3,
                        url:'http://t9.baidu.com/it/u=583874135,70653437&fm=79&app=86&f=JPEG?w=3607&h=2408'
                    },
                    {
                        index:4,
                        url:'http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&f=JPEG?w=1280&h=853'
                    },
                    {
                        index:5,
                        url:'http://t9.baidu.com/it/u=2266751744,4253267866&fm=79&app=86&f=JPEG?w=1280&h=854'
                    },
                    {
                        index:6,
                        url:'http://t9.baidu.com/it/u=3949188917,63856583&fm=79&app=86&f=JPEG?w=1280&h=875'
                    }
                    ]
            }
        }

    }
</script>

<style scoped>

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>