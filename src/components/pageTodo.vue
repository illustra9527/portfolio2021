<template>
    <div class="todo-wrap">
        <h1>TO DO LIST</h1>
        <div class="todo-list">
            <div class="top">
                <el-input
                    v-model="input"
                    placeholder="請輸入內容"
                    class="input"
                    @change="onInput"
                />
            </div>
            <div class="filter-btns">
                <el-button
                    type="primary"
                    :size="isMobile ? 'mini' : ''"
                    @click="changeType('')"
                >
                    全部
                </el-button>
                <el-button
                    type="success"
                    :size="isMobile ? 'mini' : ''"
                    @click="changeType('done')"
                >
                    已完成
                </el-button>
                <el-button
                    type="danger"
                    :size="isMobile ? 'mini' : ''"
                    @click="changeType('todo')"
                >
                    未完成
                </el-button>
            </div>
            <div class="content">
                <div
                    v-for="item in todoData"
                    :key="`item-id-${item.id}`"
                    class="list-item"
                >
                    <div class="content-text">
                        <el-input
                            v-if="isEditing === item.id"
                            v-model="editText"
                            :placeholder="item.content"
                            @keyup.enter.native="editTodo(item.id)"
                        >
                            <el-button
                                slot="append"
                                icon="el-icon-check"
                                @click.native="editTodo(item.id)"
                            />
                        </el-input>
                        <div v-else>{{ item.content }}</div>
                    </div>
                    <el-dropdown
                        v-if="isMobile"
                        trigger="click"
                        placement="bottom-start"
                    >
                        <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right" />
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item
                                icon="el-icon-edit"
                                :disabled="item.done"
                                @click.native="edit(item.id, item.content)"
                            >
                                編輯
                            </el-dropdown-item>
                            <el-dropdown-item
                                :icon="item.done ? 'el-icon-success' : 'el-icon-circle-check'"
                                @click.native="checkTodo(item.id)"
                            >
                                完成
                            </el-dropdown-item>
                            <el-dropdown-item
                                icon="el-icon-delete"
                                :disabled="item.done"
                                @click.native="deleteTodo(item.id)"
                            >
                                刪除
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <div v-else class="content-btns">
                        <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-edit"
                            :disabled="item.done"
                            circle
                            @click.native="edit(item.id, item.content)"
                        />
                        <el-button
                            size="mini"
                            :type="item.done ? 'success' : ''"
                            icon="el-icon-check"
                            circle
                            @click.native="checkTodo(item.id)"
                        />
                        <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-delete"
                            :disabled="item.done"
                            circle
                            @click.native="deleteTodo(item.id)"
                        />
                    </div>
                </div>
                <div v-if="!todoData.length" class="tips">查無資料喔</div>
                <div class="total">{{ totalText }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { isMobile } from '@/lib/isMobile';

export default {
    data() {
        return {
            input: '',
            isMobile: isMobile(),
            isEditing: null,
            editText: '',
            currentType: ''
        };
    },
    computed: {
        ...mapGetters({
            todoList: 'getTodoList'
        }),
        todoData() {
            if (this.currentType) {
                return this.currentType === 'done'
                    ? this.todoList.filter((item) => item.done)
                    : this.todoList.filter((item) => !item.done);
            }
            return this.todoList;
        },
        totalText() {
            const doneTodo = this.todoList.filter((item) => item.done).length;
            const todo = this.todoList.length - doneTodo;
            return `代辦事項共有 ${this.todoList.length} 筆 | 已完成 ${doneTodo} 筆 | 未完成 ${todo} 筆`;
        }
    },
    methods: {
        ...mapActions([
            'actionSetTodo', 'actionSetTodoDone', 'actionEditTodo', 'actionDeleteTodo'
        ]),
        onInput() {
            if (this.isEditing) {
                this.errMsg();
                return;
            }
            const data = {
                content: this.input,
                id: this.todoList.length ? this.todoList[this.todoList.length - 1].id + 1 : 1,
                done: false
            };
            this.actionSetTodo([data]);
            this.input = '';
            this.currentType = '';
        },
        checkTodo(id) {
            this.actionSetTodoDone(id);
        },
        edit(id, text) {
            if (this.isEditing === id) {
                this.isEditing = null;
                this.$message.warning('您的變更未被儲存。若要儲存請編輯後 enter 或是點選打勾。');
                return;
            }
            this.isEditing = id;
            this.editText = text;
        },
        editTodo(id) {
            this.actionEditTodo({ id, content: this.editText });
            this.editText = '';
            this.isEditing = null;
        },
        deleteTodo(id) {
            if (this.isEditing) {
                this.errMsg();
                return;
            }
            this.actionDeleteTodo(id);
            this.$message.success('刪除成功');
        },
        changeType(type) {
            if (this.isEditing) {
                this.errMsg();
                return;
            }
            this.currentType = type;
        },
        errMsg() {
            this.$message.error('若有代辦事項處於編輯狀態的話，無法處理其他事項。');
        }
    }
};
</script>

<style lang="scss" scoped>
    .todo-wrap {
        padding: 50px 20px;

        h1 {
            text-align: center;
        }

        .todo-list {
            position: relative;
            margin: 0 auto;
            width: 90%;
            padding: 20px 20px 40px;
            max-width: 650px;
            min-width: 280px;
            min-height: 500px;
            border: 1px solid #CCC;
            border-radius: 5px;
        }

        .top {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
            padding: 0 20px 20px;
            border-bottom: 1px solid #CCC;
        }

        .input {
            min-width: 240px;
            width: 60%;
        }

        .filter-btns {
            text-align: center;
        }

        .list-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 20px;
            padding: 10px 20px;
            border-radius: 5px;
            border: 1px solid #DDD;
        }

        .content-text {
            width: 70%;
            max-width: calc(100% - 20px);
            word-wrap: break-word;
        }

        .content-btns {
            min-width: 105px;
        }

        .tips {
            margin-top: 30px;
            text-align: center;
        }

        .total {
            position: absolute;
            bottom: 10px;
            right: 10px;
            padding: 0 20px;
            font-size: 14px;
            line-height: 20px;
        }
    }
</style>
