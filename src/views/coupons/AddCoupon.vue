<template>
  <div class="add-box">
    <el-form :rules="rules" ref="form" :model="form" label-width="220px">
      <el-form-item label="Coupon Name：" prop="userNameMock">
        <el-input
          v-model="form.userNameMock"
          placeholder="Please Enter"
        ></el-input>
      </el-form-item>
      <el-form-item label="Coupon Ink：：" prop="inkMock">
        <el-input v-model="form.inkMock" placeholder="Please Enter"></el-input>
      </el-form-item>
      <el-form-item label="Coupon validity period：" required>
        <div class="flex flex-nowrap justify-between">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              :picker-options="pickerOptionsStart"
              placeholder="Validity Period / Start date"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>

          <div class="form-line">--</div>

          <el-form-item prop="date2">
            <el-date-picker
              type="date"
              :picker-options="pickerOptionsEnd"
              placeholder="Validity Period / End date"
              v-model="form.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </div>
      </el-form-item>

      <el-form-item label="Distributed Users：" prop="mockUser">
        <el-radio-group v-model="form.mockUser">
          <el-radio label="All Users"></el-radio>
          <el-radio label="Followers"></el-radio>
          <el-radio label="Specified User"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Specified User：" required>
        <el-button class="common-btn-deepfix" type="primary" @click="addUser"
          >Add User</el-button
        >
      </el-form-item>

      <el-table v-loading="loading" border :data="mockList" row-key="menuId">
        <el-table-column
          prop="nameMock"
          align="center"
          label="User account"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="icon"
          label="User nickname"
          align="center"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          label="Opreate"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              class="del"
              @click="handleDelete(scope.row, scope.$index)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-form-item label="Applied to：" prop="appUser">
        <el-radio-group v-model="form.appUser">
          <el-radio label="All Videos"></el-radio>
          <el-radio label="Specified Course"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Specified Course：" required>
        <el-button class="common-btn-deepfix" type="primary" @click="onSubmit"
          >Add Course</el-button
        >
      </el-form-item>

      <el-table v-loading="loading" border :data="mockList" row-key="menuId">
        <el-table-column
          prop="nameMock"
          align="center"
          label="User account"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          prop="icon"
          label="User nickname"
          align="center"
          :show-overflow-tooltip="true"
        >
        </el-table-column>
        <el-table-column
          label="Opreate"
          align="center"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              class="del"
              @click="handleDelete(scope.row, scope.$index)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-form-item>
        <div class="common-btn">
          <el-button
            class="common-btn-deepfix"
            type="primary"
            @click="onSubmit('form')"
            >Back</el-button
          >
          <el-button
            class="common-btn-deepfix"
            type="primary"
            @click="onSubmit('form')"
            >Newly Added</el-button
          >
          <el-button class="common-btn-borderfix">Cancel</el-button>
        </div>
      </el-form-item>
    </el-form>

    <AddUserDialog
      ref="adduser"
      @addUserSelection="addUserSelection"
    ></AddUserDialog>
  </div>
</template>
  <script>
import AddUserDialog from "./add-user-dialog.vue";
export default {
  components: {
    AddUserDialog,
  },
  data() {
    return {
      form: {
        userNameMock: "",
        inkMock: "",
        date1: "",
        date2: "",
        mockUser: "",
        appUser: "",
      },
      mockList: [
        {
          nameMock: "name",
          icon: "abc",
          orderNum: "1",
          perms: "perms",
          component: "1",
        },
      ],
      rules: {
        userNameMock: [
          {
            required: true,
            message: "Please Enter",
            trigger: "blur",
          },
        ],
        inkMock: [
          {
            required: true,
            message: "Please Enter",
            trigger: "blur",
          },
        ],
        date1: [
          {
            required: true,
            message: "Please Enter",
            trigger: "change",
          },
        ],
        date2: [
          {
            required: true,
            message: "Please Enter",
            trigger: "change",
          },
        ],
        mockUser: [
          {
            required: true,
            message: "Please Enter",
            trigger: "change",
          },
        ],
        appUser: [
          {
            required: true,
            message: "Please Enter",
            trigger: "change",
          },
        ],
      },
      pickerOptionsStart: {
        disabledDate: (time) => {
          let endDateVal = this.form.date2;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        },
      },
      pickerOptionsEnd: {
        disabledDate: (time) => {
          let beginDateVal = this.form.date1;
          if (beginDateVal) {
            return (
              time.getTime() <
              new Date(beginDateVal).getTime() - 1 * 24 * 60 * 60 * 1000 + 1
            );
          }
        },
      },
    };
  },
  methods: {
    addUser() {
      this.$refs.adduser.open();
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          //   this.editFlag = false;
          this.$message.success("save successfully");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    addUserSelection(list) {
      this.mockList = [...this.mockList, ...list];
    },
    handleDelete(row, index) {
      this.mockList.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
.add-box {
  .el-table {
    margin-bottom: 30px;
    th {
      height: 53px;
      background-color: rgba(241, 241, 241, 0.54) !important;
    }
  }
  tr {
    .cell {
      font-size: 14px;

      color: rgba(0, 0, 0, 0.65);
    }
  }
  th:nth-child(3) {
    border-right: none !important;
  }

  .el-table {
    overflow: inherit !important;

    td:nth-child(3) {
      border-right: none !important;
    }
  }
  // ::v-deep .el-table__empty-block{
  //   border-right: 1px solid #dfe6ec;
  // }
  //   .el-table::before{
  //     height: 0;
  //   }
}
</style>
  <style lang="scss" scoped>
.add-box {
  padding-top: 65px;
  padding-left: 220px;
  padding-right: 220px;
  .form-line {
    width: 22px;
    color: rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  .common-btn {
    margin-top: 30px;
  }
  .del {
    color: #ff8f00;
  }
}
</style>