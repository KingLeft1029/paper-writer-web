<template>
    <div class="container flex-sub mt20">
        <div class="border-line">
            <GreyTopTitle title="Wallet Ink Details"></GreyTopTitle>
            <div class="padding20 ">
                <div class="wall-item-box flex align-center mb37">
                    <div class="wall-item mr20" :class="{ 'wall-active': wallKey == index }" @click="wallClick(index)"
                        v-for="(item, index) in btnList" :key="item.id">
                        {{ item }}
                    </div>
                </div>
                <el-table v-loading="loading"  :data="menuList" :header-cell-style="{ 'background-color': '#FAFAFA' }" >
                    <el-table-column v-for="item in tableTitleList" :key="item.id" :prop="item.prop" align="center"
                        :label="item.label" :show-overflow-tooltip="true">
                    </el-table-column>
                </el-table>
                <pagination v-show="total > 0" :total="total" :page.sync="queryParams.pageNum"
                    :limit.sync="queryParams.pageSize" @pagination="getList" layout=" prev, pager, next,sizes,jumper" />
            </div>
        </div>

    </div>
</template>
      
<script>
import GreyTopTitle from '../components/grey-top-title.vue'
import EmptyBox from '@/components/EmptyBox';
export default {
    components: {
        GreyTopTitle,
        EmptyBox
    },
    data() {
        return {
            btnList: ['Recharge history', 'Consume history', 'Income history', 'Withdraw history'],
            queryParams: {
                pageNum: 1,
                pageSize: 10,

            },
            total: 10,
            wallKey: 0,
            menuList: [{ a: '2102', b: '00000', c: 'xxxxxx' }, { a: '2102', b: '00000', c: 'xxxxxx' }],
            tableTitleList: [
                { label: 'Recharge time', prop: 'a' },
                { label: 'Amount（$）', prop: 'b' },
                { label: 'Ink', prop: 'c' }
            ],
            rechargeTitle: [
                { label: 'Recharge time', prop: 'a' },
                { label: 'Amount（$）', prop: 'b' },
                { label: 'Ink', prop: 'c' }
            ],
            consumeTitle: [
                { label: 'Consume time', prop: 'a' },
                { label: 'Ink', prop: 'b' },
                { label: 'Details', prop: 'c' }
            ],
            incomeTitle: [
                { label: 'Revenue time', prop: 'a' },
                { label: 'Ink', prop: 'b' },
                { label: 'Details', prop: 'c' }
            ],
            widthdrwaTitle: [
                { label: 'Withdrawal time', prop: 'a' },
                { label: 'Amount（$）', prop: 'b' },
                { label: 'Ink', prop: 'c' }
            ],
        };
    },
    methods: {
        wallClick(index) {
            this.wallKey = index
        }
    }
};
</script>
      
<style lang="scss" scoped>
.no-data {
    padding: 116px 0;
}

.border-line {
    border: 1px solid rgba(151, 151, 151, 0.17);
    border-radius: 6px;
    padding-bottom: 42px;
}

.wall-item-box {
    .wall-item {
        width: 140px;
        height: 22px;
        background: #fff;
        border-radius: 4px;
        border: 1px solid #979797;
        font-size: 14px;
        color: #61687C;
        line-height: 20px;
        text-align: center;
        cursor: pointer;

        &:hover {
            background-color: rgba(238, 77, 17, 0.2);
        }

    }

    .wall-active {
        background-color: rgba(238, 77, 17, 0.2);
    }

}
</style>
      