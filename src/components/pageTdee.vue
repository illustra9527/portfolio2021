<template>
    <div class="tdee-wrap">
        <div class="data-form">
            <h2>BMR, TDEE 計算</h2>
            <span class="formula" @click="openDetail('BMR')"> BMR 公式</span>
            <span class="formula" @click="openDetail('TDEE')"> TDEE 公式</span>
            <div class="input-item">
                <div class="item-label">體重</div>
                <el-input
                    v-model="weight"
                    placeholder="公斤 (kg)"
                    class="input"
                />
            </div>
            <div class="input-item">
                <div class="item-label">身高</div>
                <el-input
                    v-model="height"
                    placeholder="公分 (cm)"
                    class="input"
                />
            </div>
            <div class="input-item">
                <div class="item-label">年齡</div>
                <el-input
                    v-model="age"
                    placeholder="年齡 (age)"
                    class="input"
                />
            </div>
            <div class="input-item">
                <div class="item-label">性別</div>
                <div>
                    <el-radio v-model="gender" label="female">女</el-radio>
                    <el-radio v-model="gender" label="male">男</el-radio>
                </div>
            </div>
            <div class="input-item">
                <div class="item-label">活動程度</div>
                <el-select v-model="moveValue" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
            <div class="content">
                <template v-if="calBMR && calTdee">
                    <div>基礎代謝率 BMR：{{ calBMR }}</div>
                    <div>每日總消耗熱量 TDEE: {{ calTdee }} </div>
                    <div>維持體重：每天吃到 <span class="calories">{{ calTdee }} </span>卡路里的熱量 </div>
                    <div>增加肌肉：每天吃到 <span class="calories">{{ calTdee + 300 }} </span>卡路里的熱量 </div>
                    <div>減少脂肪：每天吃到 <span class="calories">{{ calTdee - 300 }} </span>卡路里的熱量 </div>
                </template>
                <template v-else>你的結果會在這 .... 請輸入以上資料</template>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            weight: null,
            height: null,
            age: null,
            gender: null,
            options: [
                {
                    value: '1.2',
                    label: '一週無運動'
                },
                {
                    value: '1.4',
                    label: '每週輕量運動 1-3 天'
                },
                {
                    value: '1.6',
                    label: '每週中量運動 3-5 天'
                },
                {
                    value: '1.8',
                    label: '每週高強運動 6-7 天'
                },
                {
                    value: '2',
                    label: '每天運動訓練兩次'
                }

            ],
            moveValue: ''
        };
    },
    computed: {
        calBMR() {
            if (!this.gender) {
                return '';
            }
            if (this.gender === 'female') {
                return Math.round(10 * +this.weight + (6.25 * +this.height) - (5 * +this.age) - 161) || '';
            }
            return Math.round(10 * +this.weight + (6.25 * +this.height) - (5 * +this.age) + 5) || '';
        },
        calTdee() {
            return Math.round(this.calBMR * +this.moveValue) || '';
        }
    },
    methods: {
        openDetail(type) {
            const content = type === 'BMR'
                ? `<div>男<br />(10 × 公斤體重) + (6.25 × 公分身高) - (5 × 年齡歲數) + 5</div><hr>
            <div>女<br />(10 × 公斤體重) + (6.25 × 公分身高) - (5 × 年齡歲數) – 161</div>`
                : '<div>BMR * 每日活動程度係數</div><div>一週無運動：1.2 <br/ >每週輕量運動 1-3 天：1.4 <br/ >每週中量運動 3-5 天：1.6 <br/ >每週高強運動 6-7 天：1.8 <br/ > 每天運動訓練兩次：2</div>';
            const title = type === 'BMR' ? '基礎代謝率' : '每日總消耗熱量';

            this.$alert(content, title,
                {
                    confirmButtonText: '確定',
                    dangerouslyUseHTMLString: true
                });
        }
    }
};
</script>

<style lang="scss" scoped>
    .tdee-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 20px;
        min-height: calc(100vh - 62px);
        color: #EEE;
        text-align: center;
        line-height: 20px;
        background: url('../assets/img/tdee-bg.jpg') no-repeat center center / cover;

        .data-form {
            min-width: 400px;
            width: 25%;
            padding: 20px;
            border: 1px solid #CCC;
            border-radius: 5px;
        }

        .input-item {
            display: flex;
            align-items: center;
            margin: 10px 0;
        }

        .item-label {
            margin-right: 10px;
            width: 100px;
            text-align: right;
        }

        .input {
            width: 200px;
        }

        .formula {
            margin-right: 10px;
        }

        /deep/ .el-radio__label {
            color: #EEE;
        }

        .content {
            margin-top: 20px;
            padding: 20px 30px 0;
            text-align: left;
            border-top: 1px solid #CCC;

            > div {
                line-height: 26px;
            }
        }

        .calories {
            color: #F00;
        }
    }
</style>
