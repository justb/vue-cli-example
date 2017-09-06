<template>
    <div>
        <carrousel v-bind:data-father="dataFather"></carrousel>
        <el-button @click="show = !show">Click Me</el-button>

        <div style="display: flex; margin-top: 20px; height: 100px;">
            <transition name="el-fade-in-linear">
                <div v-show="show" class="transition-box">.el-fade-in-linear</div>
            </transition>
            <transition name="el-fade-in">
                <div v-show="show" class="transition-box">.el-fade-in</div>
            </transition>
        </div>
        <el-button type="primary" icon="edit"></el-button>
        <el-button type="primary" icon="share"></el-button>
        <el-button type="primary" icon="delete"></el-button>
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary">上传
            <i class="el-icon-upload el-icon--right"></i>
        </el-button>
        
    </div>
</template>

<script>
export default {
    name: 'hello2',

    data() {
        return {
            dataFather: [
                'http://ovui67ajj.bkt.clouddn.com/u=714158082,691074620&fm=26&gp=0.jpg',
                'http://ovui67ajj.bkt.clouddn.com/u=714158082,691074620&fm=26&gp=0.jpg',
                'http://ovui67ajj.bkt.clouddn.com/u=714158082,691074620&fm=26&gp=0.jpg',

            ],
            show: true
        }
    }
}
</script>

<style>
.transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
}
</style>