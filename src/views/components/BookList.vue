<template>
    <div class="book-box">
        <div class="book-item flex flex-direction pointer" v-for="item in list" :key="item.id">
           
            <el-image :src="baseUrl + item.image" fit="cover" lazy> </el-image>
            <div class="name text-cut text-cut2" title="Course Name Course nCourse Name Course">
                       {{ item.name }}
                    </div>
        </div>
    </div>
</template>

<script>
import { listApi} from "@/api/book"
export default {
    components: {

    },
    data() {
        return {
            baseUrl:process.env.VUE_APP_BASE_API,
            list:[]
        };
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            listApi().then(res=>{
                this.list=res.data.records
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.book-box {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
    .book-item {
    width: 191px;
    // height: 270px;
    border-radius: 6px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    padding: 13px 20px;
    text-align: center;

    &:hover{
            border-color: #dc0025;
        }
        ::v-deep .el-image {
            width: 100%;
            height: 203px;
        }

   
}
}


</style>
