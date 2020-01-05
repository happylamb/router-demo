<template>
    <div id="cont">
        <div class="aaa" id="aa1"></div>
        <div class="aaa" id="aa3"></div>
        <div class="aaa" id="aa2"></div>
    </div>
</template>

<script>
    export default {
        name: "TestCom"
    }
</script>

<style scoped>
    #cont{
        height: 100px;
    }
    #aa1{
        float: left;
        width: 300px;
        background: #42b983;
    }
    #aa3{
        float: right;
        width: 300px;
        background: #2c3e50;
    }
    #aa2{
        background: red;
    }
    .aaa{
        height: 100px;
    }


</style>