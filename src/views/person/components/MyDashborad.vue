<template>
    <div>
        <RightTo label="My courses" pathName="/managementcourse"></RightTo>
        <!-- <div class="my-empty-box">
            <EmptyBox emptyLabel="Add new!"></EmptyBox>
            <el-button type="primary">Submit</el-button>
        </div> -->
        <div class="my-box">
             <div class="my-empty-box" :class="{'mt120':roles == 1}">
            <EmptyBox emptyLabel="Add new!"></EmptyBox>
            <el-button type="primary" class="common-btn-submit">Submit</el-button>
        </div>
            <!-- <course-list></course-list> -->
        </div>
        <RightTo label="My Threads"></RightTo>
        <div class="my-box" pathName="/forums">
            <threads-list></threads-list>
        </div>
        <RightTo label="My Books" pathName="/books"></RightTo>
        <div class="my-box">
            <book-list></book-list>
        </div>
    </div>
</template>
  
<script>
import CourseList from '../../components/CourseList.vue'
import ThreadsList from '../../components/ThreadsList.vue'
import BookList from '../../components/BookList.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'MyDashborad',
    components: {
        CourseList,
        ThreadsList,
        BookList,
    },
    data() {
        return {

        };
    },
    computed: {
    ...mapGetters(["roles"]),
    }
};
</script>
  
<style lang="scss" scoped>
.my-empty-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .el-button {
    
        margin-top: 16px;
        margin-bottom: 20px;


    }
}
.mt120{
    margin-top: 120px;
}
.my-box{
    margin-top: 20px;
}
</style>
  